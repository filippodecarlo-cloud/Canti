// Database dei canti - Convertiti dal PDF "Chi canta prega due volte"

const songsDatabase = [
    {
        id: 1,
        title: "Santo è il Signore",
        page: 4,
        intro: "La Re La Re",
        melody: null,
        sections: [
            {
                type: "intro",
                content: "[La] [Re] [La] [Re]"
            },
            {
                type: "verse",
                label: "Uomini",
                lines: [
                    "[La]Santo è il Sig[Re]nore Dio dell'univ[La]erso[Re]",
                    "[La]I cieli e la terra son pieni della Tua gl[Re]oria[La][Re]",
                    "[La]Osanna nell'alto dei ci[Re]eli e benedetto C[La]olui che vie[Re]ne",
                    "[La]Nel nome del Signore Osanna nell'alto dei ci[Re]eli."
                ]
            },
            {
                type: "verse",
                label: "Donne",
                lines: [
                    "[La]È santo santo santo il Signore della v[Re]ita",
                    "[La]È santo santo santo il Signore della stor[Re]ia",
                    "[La]Nel cielo e sulla terra risple[Re]nde la sua glor[La]ia.[Re]",
                    "[La]Osanna, Osanna, Osanna nel cielo sconfi[Re]nato",
                    "[La]Osanna, Osanna, Osanna nel canto del cre[Re]ato",
                    "[La]E sia benedetto Colui che viene in n[Re]ome di D[La]io.[Re]",
                    "[La]E sia benedetto Colui che viene in n[Re]ome di D[La]io.[Re]"
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Adoro Te",
        page: 5,
        intro: null,
        melody: null,
        sections: [
            {
                type: "verse",
                lines: [
                    "[Re]Sei qui davanti a [La]me, o mio Sign[Si-]ore, sei in questa brezza che ristora il cu[Fa#]ore.",
                    "[Sol]Roveto che mai si consum[Re]erà presenza che ri[Do]empie l'[Sol]anima.[La4][La]"
                ]
            },
            {
                type: "chorus",
                label: "RIT",
                lines: [
                    "[Re-]ADORO [Sib7+]TE, FONTE DELLA [Do]VI - [Fa4]TA,[Fa]",
                    "[Re-]ADORO [Sib7+]TE, [Do]TRINITÀ INF[Fa4]INI - T[Fa]A.",
                    "[La-]I MIEI CALZARI LEV[Re-]ERÒ SU QUESTO S[Re-7]ANTO SU[Sib7]OLO,[La-][Sol-]",
                    "[Re-]ALLA PRESENZA TUA [Mi]MI PRO[La]STRERÒ.[Sib]([Do][Re])"
                ]
            },
            {
                type: "verse",
                lines: [
                    "[Re]Sei qui davanti a [La]me, o mio Sign[Si-]ore, nella tua grazia trovo la mia gi[Fa#-]oia.",
                    "[Sol]Io lodo, ringrazio e pr[Re]ego perché Il m[Do]ondo ritorni a v[Sol]ivere in [La4]Te.[La]"
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Creati per Te",
        page: 5,
        intro: null,
        melody: null,
        sections: [
            {
                type: "verse",
                lines: [
                    "[Re]Tu ci hai fatti per [La]Te,[Si- Fa#-] nella Tua imme[Sol]nsità[Re][Mi-][La4/7]",
                    "[Sol]nel Tuo grande amore Tu Sign[La]ore[Re] ci hai creati per [Si-]Te[La]",
                    "[Sol]e il nostro cuore non trova p[Re]ace[Sol] se Sig[Re]nor, tu non sei qui con n[Si-]oi.[La][Re][La]"
                ]
            },
            {
                type: "chorus",
                lines: [
                    "[La4/7]NOI TI D[Re]IAMO GLO[Sol]RIA, DIAMO GL[La]ORIA A TE SIG[Fa#-]NORE[Si-]",
                    "[Fa#-7]RE DEL C[La4]IELO D[/7]IAMO GL[Re]ORIA,[Si-7] DIAMO GL[Sol]ORIA A TE SIG[La]NORE[Fa#-][Si-]",
                    "[Sol7+]RE DI OGNI COSA [La]SEI[Si- Fa#-] [Sol7+]RE DI OGNI COSA [La]SEI.[Re]"
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Magnificat anima mea",
        page: 8,
        intro: null,
        melody: null,
        sections: [
            {
                type: "verse",
                lines: [
                    "[Sol]Magnificat, magn[Do]ificat,[Re][Sol]",
                    "[Do]magnificat anima mea D[Re]ominum.[Sol]",
                    "[Do]Magnificat, magn[Re]ificat,[Sol]",
                    "[Do]magnificat anima m[Re]ea.[Sol]"
                ]
            }
        ]
    },
    {
        id: 5,
        title: "Sono qui a lodarti",
        page: 8,
        intro: null,
        melody: null,
        sections: [
            {
                type: "verse",
                lines: [
                    "[MI]Luce del mond[Si]o, nel buio del cu[Fa#-]ore, vieni ed illu[Mi]minami.[Si][La]",
                    "[MI]Tu mia sola sper[Si]anza di v[Fa#-]ita, resta per sempre con [Mi]me.[Si][La]"
                ]
            },
            {
                type: "chorus",
                label: "Rit",
                lines: [
                    "[Mi]Sono qui a lod[Si]arti, qui per adorarti.",
                    "[Do#-]qui per dirti che Tu sei il mio D[La]io.",
                    "[Mi]E solo Tu sei s[Si]anto, sei meraviglioso",
                    "[Do#-]Degno e glorioso sei per [La]me"
                ]
            },
            {
                type: "verse",
                lines: [
                    "[Mi]Re della storia e [Si]Re nella gl[Fa#-]oria, sei sceso in terra fra [Mi]noi[Si][La]",
                    "[Mi]Con umiltà il Tuo tr[Si]ono hai lasci[Fa#.]ato, per dimostrarci il Tuo am[Mi]or.[Si][La]"
                ]
            },
            {
                type: "bridge",
                lines: [
                    "[Mi]Invoca il nome del tuo Sig[Si]nor, e salvo s[Do#-]ei[La].... (x 4)"
                ]
            }
        ]
    },
    {
        id: 6,
        title: "Benedici il Signore",
        page: 16,
        subtitle: "Bless the Lord",
        intro: "Sol Re La/Do# Si- Sol Re La La",
        melody: null,
        sections: [
            {
                type: "verse",
                lines: [
                    "[Sol]Benedici il Sign[Re]or, anima m[La/Do#]ia, loda il suo Santo N[Si-]ome.[Sol][Re][La4][La]",
                    "[Sol]E con tutto il mio cu[Si-7]or canter[Sol]ò,[La][Si-7] per sempre Ti ad[Sol]orerò[La][Sol][Re](Sol Re)"
                ]
            },
            {
                type: "verse",
                lines: [
                    "[Sol]Il sole sorge su un nu[Re]ovo gi[La]orno:[Si-7]",
                    "[Sol]è tempo di cant[Re]are a [La]Te.[Si-7]",
                    "[Sol]Non so cosa accad[Re]rà,",
                    "[La]non so quello che mi asp[Si-7]etta,",
                    "[Sol]ma canterò finché la n[Re]otte arriv[La]erà[Re](Sol Re)"
                ]
            },
            {
                type: "verse",
                lines: [
                    "[Sol]Sei lento all'ira e sei r[Re]icco in gr[La]azia,[Si-7]",
                    "[Sol]Sei grande Dio, se[Re]mpre Ti am[La]erò.[Si-7]",
                    "[Sol]E per la Tua bo[Re]ntà, io rest[La]erò a cant[Si-7]are:",
                    "[Sol]mille ragioni ancora tr[Re]overò.[La][Re]"
                ]
            },
            {
                type: "verse",
                lines: [
                    "[Sol]Il giorno in cui non avrò più f[Re]orza[La][Si-7]",
                    "[Sol]e il tempo mio quaggiù fin[Re]irà,[La][Si-7]",
                    "[Sol]la mia anima continu[Re]erà a lod[La]arTi,[Si-7]",
                    "[Sol]per mille anni e per l'et[Re]ernità.[La][Re]"
                ]
            }
        ]
    },
    {
        id: 7,
        title: "Alleluia",
        page: 44,
        intro: null,
        melody: "{Melodia (Sol maggiore): si-la-sol--re}",
        sections: [
            {
                type: "verse",
                lines: [
                    "[Sol]Alleluia, all[Do]eluia, alle[Mi-]lu - [Re]ia, Dio è il [Sol]Re"
                ]
            }
        ]
    }
];

// Funzione per ottenere tutti i canti
function getAllSongs() {
    return songsDatabase;
}

// Funzione per ottenere un canto specifico per ID
function getSongById(id) {
    return songsDatabase.find(song => song.id === id);
}

// Funzione per cercare canti per titolo
function searchSongs(query) {
    const lowerQuery = query.toLowerCase();
    return songsDatabase.filter(song =>
        song.title.toLowerCase().includes(lowerQuery)
    );
}
