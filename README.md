# Chi canta prega due volte 🎸

Versione web del libretto dei canti di famiglia: 113 canti con accordi in notazione italiana.

**Apri il libretto:** https://filippodecarlo-cloud.github.io/Canti/

## Funzioni

- Accordi posizionati esattamente sopra la sillaba su cui vanno suonati (impaginazione fedele al libretto originale in Word)
- Trasposizione di tonalità con i tasti ♭/♯ — gli accordi restano ancorati alle sillabe, la scelta viene ricordata per ogni canto
- Melodia iniziale (le note verdi), trasposta insieme agli accordi
- Ricerca nel titolo e nel testo, filtri per tag (Adorazione, Spirito Santo, Maria, Natale...)
- Aggiunta di canti propri: accordi su una riga sopra il testo, oppure in linea con `[Mi]parola`
- Tema chiaro/scuro, zoom, indice rapido, stampa pulita

Tag, canti personali e trasposizioni si salvano nel browser (localStorage); usa *Esporta dati / Importa* per portarli su un altro dispositivo.

## Come è fatto

Tutta l'app è un unico file `index.html` senza dipendenze esterne. Viene generata automaticamente dal documento Word del libretto: un parser estrae canti, accordi (testo rosso), melodie (testo verde) e tab stop, e un motore di layout in JavaScript riproduce nel browser l'impaginazione di Word usando le metriche del font Arial.
