// ==========================================
// STATE MANAGEMENT
// ==========================================
let currentSongId = null;
let allSongs = [];

// ==========================================
// DOM ELEMENTS
// ==========================================
const indexView = document.getElementById('indexView');
const songView = document.getElementById('songView');
const addSongView = document.getElementById('addSongView');

const btnIndex = document.getElementById('btnIndex');
const btnAddSong = document.getElementById('btnAddSong');
const btnBackToIndex = document.getElementById('btnBackToIndex');
const btnCancelAdd = document.getElementById('btnCancelAdd');
const btnPrevSong = document.getElementById('btnPrevSong');
const btnNextSong = document.getElementById('btnNextSong');

const songList = document.getElementById('songList');
const songTitle = document.getElementById('songTitle');
const songContent = document.getElementById('songContent');
const searchInput = document.getElementById('searchInput');

const addSongForm = document.getElementById('addSongForm');
const newSongIntroCheckbox = document.getElementById('newSongIntro');
const introGroup = document.getElementById('introGroup');

// ==========================================
// INITIALIZATION
// ==========================================
function init() {
    allSongs = getAllSongs();
    renderSongList(allSongs);
    setupEventListeners();
    showIndexView();
}

// ==========================================
// EVENT LISTENERS
// ==========================================
function setupEventListeners() {
    // Navigation buttons
    btnIndex.addEventListener('click', showIndexView);
    btnAddSong.addEventListener('click', showAddSongView);
    btnBackToIndex.addEventListener('click', showIndexView);
    btnCancelAdd.addEventListener('click', showIndexView);

    // Song navigation
    btnPrevSong.addEventListener('click', showPreviousSong);
    btnNextSong.addEventListener('click', showNextSong);

    // Search
    searchInput.addEventListener('input', handleSearch);

    // Add song form
    addSongForm.addEventListener('submit', handleAddSong);
    newSongIntroCheckbox.addEventListener('change', toggleIntroGroup);
}

// ==========================================
// VIEW MANAGEMENT
// ==========================================
function showIndexView() {
    indexView.classList.remove('hidden');
    songView.classList.add('hidden');
    addSongView.classList.add('hidden');
    currentSongId = null;
}

function showSongView(songId) {
    const song = getSongById(songId);
    if (!song) return;

    currentSongId = songId;
    songTitle.textContent = song.title;
    songContent.innerHTML = renderSong(song);

    indexView.classList.add('hidden');
    songView.classList.remove('hidden');
    addSongView.classList.add('hidden');

    updateNavigationButtons();

    // Scroll to top
    window.scrollTo(0, 0);
}

function showAddSongView() {
    indexView.classList.add('hidden');
    songView.classList.add('hidden');
    addSongView.classList.remove('hidden');
}

// ==========================================
// SONG LIST RENDERING
// ==========================================
function renderSongList(songs) {
    songList.innerHTML = '';

    if (songs.length === 0) {
        songList.innerHTML = '<p style="text-align: center; color: #666;">Nessun canto trovato</p>';
        return;
    }

    songs.forEach(song => {
        const songItem = document.createElement('div');
        songItem.className = 'song-item';
        songItem.onclick = () => showSongView(song.id);

        const titleDiv = document.createElement('div');
        const titleSpan = document.createElement('div');
        titleSpan.className = 'song-item-title';
        titleSpan.textContent = song.title;
        titleDiv.appendChild(titleSpan);

        if (song.subtitle) {
            const subtitleSpan = document.createElement('div');
            subtitleSpan.className = 'song-item-author';
            subtitleSpan.textContent = song.subtitle;
            titleDiv.appendChild(subtitleSpan);
        }

        const pageSpan = document.createElement('div');
        pageSpan.className = 'song-item-page';
        pageSpan.textContent = `p. ${song.page}`;

        songItem.appendChild(titleDiv);
        songItem.appendChild(pageSpan);
        songList.appendChild(songItem);
    });
}

// ==========================================
// SONG RENDERING - THE HEART OF THE APP!
// ==========================================
function renderSong(song) {
    let html = '';

    // Render melody if present
    if (song.melody) {
        html += `<div class="melody">${escapeMelody(song.melody)}</div>`;
    }

    // Render intro if present
    if (song.intro) {
        html += `<div class="intro section-label">Intro:</div>`;
        html += `<div class="intro">${parseChords(song.intro)}</div>`;
    }

    // Render sections
    song.sections.forEach(section => {
        html += renderSection(section);
    });

    return html;
}

function renderSection(section) {
    let html = '<div class="song-section ';

    // Add section type class
    if (section.type === 'chorus') {
        html += 'chorus">';
    } else if (section.type === 'verse') {
        html += 'verse">';
    } else if (section.type === 'bridge') {
        html += 'bridge">';
    } else if (section.type === 'intro') {
        html += 'intro">';
    } else {
        html += '">';
    }

    // Add section label if present
    if (section.label) {
        html += `<div class="section-label">${escapeHtml(section.label)}</div>`;
    }

    // Render content or lines
    if (section.content) {
        html += `<div>${parseChords(section.content)}</div>`;
    } else if (section.lines) {
        section.lines.forEach(line => {
            html += `<div class="lyric-line">${parseChords(line)}</div>`;
        });
    }

    html += '</div>';
    return html;
}

// ==========================================
// CHORD PARSING - CRITICAL FUNCTIONALITY!
// Parses [chord] notation and renders ABOVE text
// ==========================================
function parseChords(text) {
    // Parse melody notation {melody text} in GREEN - keep inline for melodies
    text = text.replace(/\{([^}]+)\}/g, '<span class="melody">$1</span>');

    // Check if there are any chords in this line
    if (!text.includes('[')) {
        return text;
    }

    // Extract chords and their positions
    const chords = [];
    let textOnly = '';
    let position = 0;
    let i = 0;

    while (i < text.length) {
        if (text[i] === '[') {
            // Found a chord
            const endBracket = text.indexOf(']', i);
            if (endBracket !== -1) {
                const chord = text.substring(i + 1, endBracket);
                chords.push({
                    chord: chord,
                    position: position
                });
                i = endBracket + 1;
            } else {
                // Malformed chord, just add the bracket
                textOnly += text[i];
                position++;
                i++;
            }
        } else {
            textOnly += text[i];
            position++;
            i++;
        }
    }

    // If no chords found, return text as is
    if (chords.length === 0) {
        return textOnly;
    }

    // Build the chord line
    let chordLine = '';
    let currentPos = 0;

    chords.forEach((chordObj, index) => {
        // Add spaces to reach the chord position
        while (currentPos < chordObj.position) {
            chordLine += ' ';
            currentPos++;
        }

        // Add the chord
        chordLine += chordObj.chord;
        currentPos += chordObj.chord.length;

        // Add a space after the chord if it's not the last one
        if (index < chords.length - 1) {
            chordLine += ' ';
            currentPos++;
        }
    });

    // Return both lines wrapped in a container
    return `<div class="chord-line-container">
                <div class="chord-line">${chordLine}</div>
                <div class="text-line">${textOnly}</div>
            </div>`;
}

function escapeMelody(text) {
    // Remove curly braces if present and return as melody
    return text.replace(/^\{/, '').replace(/\}$/, '');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ==========================================
// NAVIGATION
// ==========================================
function updateNavigationButtons() {
    const currentIndex = allSongs.findIndex(s => s.id === currentSongId);

    btnPrevSong.disabled = currentIndex <= 0;
    btnNextSong.disabled = currentIndex >= allSongs.length - 1;
}

function showPreviousSong() {
    const currentIndex = allSongs.findIndex(s => s.id === currentSongId);
    if (currentIndex > 0) {
        showSongView(allSongs[currentIndex - 1].id);
    }
}

function showNextSong() {
    const currentIndex = allSongs.findIndex(s => s.id === currentSongId);
    if (currentIndex < allSongs.length - 1) {
        showSongView(allSongs[currentIndex + 1].id);
    }
}

// ==========================================
// SEARCH
// ==========================================
function handleSearch(e) {
    const query = e.target.value.trim();

    if (query === '') {
        renderSongList(allSongs);
    } else {
        const results = searchSongs(query);
        renderSongList(results);
    }
}

// ==========================================
// ADD SONG FUNCTIONALITY
// ==========================================
function toggleIntroGroup() {
    if (newSongIntroCheckbox.checked) {
        introGroup.style.display = 'block';
    } else {
        introGroup.style.display = 'none';
    }
}

function handleAddSong(e) {
    e.preventDefault();

    const title = document.getElementById('newSongTitle').value.trim();
    const author = document.getElementById('newSongAuthor').value.trim();
    const melody = document.getElementById('newSongMelody').value.trim();
    const content = document.getElementById('newSongContent').value;
    const includeIntro = newSongIntroCheckbox.checked;
    const introContent = document.getElementById('newSongIntroContent').value.trim();

    // Create new song object
    const newSong = {
        id: allSongs.length > 0 ? Math.max(...allSongs.map(s => s.id)) + 1 : 1,
        title: title,
        page: null, // No page number for user-added songs
        intro: includeIntro ? introContent : null,
        melody: melody || null,
        sections: parseContentToSections(content)
    };

    // Add subtitle if author provided
    if (author) {
        newSong.subtitle = author;
    }

    // Add to database
    songsDatabase.push(newSong);
    allSongs = getAllSongs();

    // Reset form
    addSongForm.reset();
    introGroup.style.display = 'none';

    // Show the new song
    renderSongList(allSongs);
    showSongView(newSong.id);

    // Show success message
    alert(`Canto "${title}" aggiunto con successo!`);
}

function parseContentToSections(content) {
    // Simple parser: split by empty lines
    const lines = content.split('\n');
    const sections = [];
    let currentSection = {
        type: 'verse',
        lines: []
    };

    lines.forEach(line => {
        const trimmedLine = line.trim();

        if (trimmedLine === '') {
            // Empty line - end current section
            if (currentSection.lines.length > 0) {
                sections.push(currentSection);
                currentSection = {
                    type: 'verse',
                    lines: []
                };
            }
        } else if (trimmedLine.toUpperCase().startsWith('RIT') ||
                   trimmedLine.toUpperCase().includes('RITORNELLO')) {
            // Chorus marker
            if (currentSection.lines.length > 0) {
                sections.push(currentSection);
            }
            currentSection = {
                type: 'chorus',
                label: 'Rit',
                lines: []
            };
        } else if (trimmedLine.startsWith('{') && trimmedLine.endsWith('}')) {
            // Melody line - skip, it's handled separately
            return;
        } else {
            // Regular line
            currentSection.lines.push(line);
        }
    });

    // Add last section
    if (currentSection.lines.length > 0) {
        sections.push(currentSection);
    }

    // If no sections created, add all content as one verse
    if (sections.length === 0) {
        sections.push({
            type: 'verse',
            lines: lines.filter(l => l.trim() !== '')
        });
    }

    return sections;
}

// ==========================================
// START THE APP
// ==========================================
document.addEventListener('DOMContentLoaded', init);
