/*
  Dati dei progetti. Ogni progetto ha:
  - i campi della home (title, sub, cat, year, color, short)
  - i crediti (course, teachers, team)
  - intro: le tre colonne iniziali (Sito di progetto / Concept / Tema)
  - chapters: le tavole, ognuna con un titolo, un testo facoltativo e righe di immagini.

  Un'immagine si scrive "chiave|didascalia" e corrisponde al file img/<id>/<chiave>.webp
  Una riga è { g: "colonne CSS", items: [...] }; un item può essere:
    "chiave|didascalia"                        → immagine
    { img: "chiave|didascalia", pad: true }    → immagine con margine (disegni piccoli)
    { stack: ["a|..", "b|.."] }                → immagini una sopra l'altra
    { grid: ["a|..", "b|.."], c: 2 }           → piccola griglia di immagini su c colonne
    { h, sub, t, note, imgs: [...] }           → colonna di testo con immagini sotto
*/
const P = [
  {
    id: "oltretrusco", n: "01", title: "OltrEtrusco", sub: "Attraverso ogni confine", cat: "Exhibit", year: "2024/25", color: "#6b3b33",
    short: "Una mostra in sei sale a San Gimignano dove reperti etruschi e opere moderne dialogano oltre il confine del tempo.",
    course: "Politecnico di Milano, secondo anno, Laboratorio di design degli interni",
    teachers: "R. Trocchianesi, A. Mazzanti",
    team: ["Noè Bartolini", "Jacopo Dellanoce", "Luca Mastromatteo", "Anton Qerkini", "Filippo Antonio Visentin"],
    intro: [
      { h: "Sito di progetto", t: "La mostra, situata nel complesso museale di Santa Chiara a San Gimignano in Toscana, costruisce un percorso in sei sale in cui opere antiche e contemporanee dialogano direttamente, rivelando continuità formali e simboliche tra la civiltà etrusca e il mondo contemporaneo.", imgs: ["sito|L’allestimento nel complesso di Santa Chiara"] },
      { h: "Concept", t: "Sconfinare è la metafora utilizzata per la progettazione dell’allestimento. L’obiettivo è quello di far comprendere come la civiltà etrusca sia sconfinata nell’era moderna grazie agli innumerevoli spunti di riflessione da essa derivanti. Sono presenti artefatti antichi e moderni, messi in confronto in modo che sembrino gradualmente della stessa epoca. Nell’allestimento il confine è visto come un Oltre, che perde il valore di divisione nel tempo e nello spazio.", imgs: [{ img: "concept|Il confine visto come Oltre: progressiva rottura dei confini", pad: true, tight: true }] },
      { h: "Tema", t: "La mostra nasce dal desiderio di unire linguaggi e tempi diversi attraverso la metafora del confine. L’allestimento costruisce un percorso in cui opere antiche e contemporanee dialogano direttamente. Ogni sala diventa una soglia da attraversare, dove le forme si rispecchiano e le identità culturali si sovrappongono. La curatela invita a riconoscere che il passato non è distante, ma una presenza che nutre costantemente il nostro sguardo.", imgs: ["tema|Arte e Guerra, la Chimera"] },
    ],
    chapters: [
      { title: "Le sale", rows: [
        { g: "", items: [{ img: "esploso|Esploso assonometrico", pad: true }, { img: "piantagen|Pianta generale", pad: true }] },
        { g: "2fr 3fr", items: [
          { h: "Prima sala", sub: "Quotidianità I: il vasellame", t: "La sala esplora la quotidianità attraverso il vasellame, affiancando reperti etruschi alle opere di Picasso, Gio Ponti e Mario Schifano. Le corrispondenze formali e concettuali mostrano come l’eredità mediterranea attraversi la storia del design e dell’arte moderna.", note: "Confine netto e definito, percorso obbligato" },
          "sala1|Prima sala",
        ] },
        { g: "", items: [{ img: "pia1|Pianta, prima sala", pad: true }, { img: "sez1|Sezione, prima sala", pad: true }] },
        { g: "2fr 3fr", items: [
          { h: "Seconda sala", sub: "Quotidianità II: la moda e la cura del corpo", t: "La sala affronta moda, cura del corpo e profumi, temi centrali nella cultura etrusca e ancora attuali. Ai contenitori per unguenti e agli oggetti rituali si affiancano le illustrazioni di Maddalena Sisto e capi contemporanei ispirati ai drappeggi antichi.", note: "Confine rotto a metà, percorso semi-libero" },
          "sala2|Seconda sala",
        ] },
        { g: "", items: [{ img: "pia2|Pianta, seconda sala", pad: true }, { img: "sez2|Sezione, seconda sala", pad: true }] },
        { g: "2fr 3fr", items: [
          { h: "Terza sala", sub: "Arte e Guerra: opere d’arte e artefatti bellici", t: "Statue votive, armi e bronzi etruschi dialogano con le opere di Marino Marini, Giacometti e Giacomo Verde. Ne risulta un ambiente sospeso nel tempo, dove le figure antiche sembrano moderne e quelle moderne sembrano provenire da un’archeologia futura.", note: "Confini distribuiti in tutto lo spazio, percorso libero" },
          "sala3|Terza sala",
        ] },
        { g: "", items: [{ img: "pia3|Pianta, terza sala", pad: true }, { img: "sez3|Sezione, terza sala", pad: true }] },
        { g: "", items: ["sala3b|Arte e Guerra, vista d’insieme"] },
        { g: "2fr 3fr", items: [
          { h: "Quarta sala", sub: "La morte", t: "La sala ricostruisce la Tomba degli Auguri, riletta da Schifano. Antico e contemporaneo si fondono in un’unica immagine, invitando a riflettere sul ruolo del rito e sul linguaggio della memoria.", note: "Confine oltrepassato dal soggetto del quadro che torna ambiente" },
          "sala4|Quarta sala",
        ] },
        { g: "2fr 3fr", items: [
          { h: "Quinta e sesta sala", sub: "Etruschi nella modernità", t: "Le ultime sale propongono i cataloghi delle mostre moderne fondamentali sugli Etruschi, esposti in ordine cronologico.", note: "Confine rotto a metà, percorso semi-libero" },
          "sala5|Quinta e sesta sala",
        ] },
        { g: "", items: [{ img: "pia4|Pianta, quinta e sesta sala", pad: true }, { img: "sez4|Sezione, quinta e sesta sala", pad: true }] },
        { g: "", items: ["soglia|La soglia di fili"] },
        { g: "2fr 3fr", items: [
          { h: "Corridoio", sub: "Passaggio tra antico e moderno", t: "Il corridoio collega le sale e accompagna il visitatore da un’epoca all’altra." },
          "corridoio|Corridoio",
        ] },
      ] },
      { title: "Partitura allestitiva", t: "La partitura allestitiva è uno strumento di lettura sintetica del progetto, capace di restituire in un unico apparato grafico le logiche compositive che regolano l’intera mostra, sala per sala. Il sistema sovrappone cinque livelli di analisi: organizzazione dei contenuti, distribuzione spaziale, artefatti espositivi, interazione tra visitatore e allestimento, tempo di percorrenza. La partitura rende esplicito il criterio con cui ogni sala calibra densità dei contenuti, tempo di permanenza e grado di coinvolgimento del visitatore.", rows: [
        { g: "1fr", items: ["partitura|Partitura allestitiva"] },
      ] },
      { title: "Mostra", t: "Il progetto è stato esposto alla mostra “Anima etrusca”, tenuta nel complesso museale di Santa Chiara a San Gimignano.", rows: [
        { g: "1fr 1fr 1fr", items: ["catalogo|Catalogo delle opere, copertina", "sito|Le tavole esposte alla mostra “Anima etrusca”", "manifesto|Manifesto"] },
      ] },
    ],
  },

  {
    id: "unseen", n: "02", title: "Unseen", sub: "Una discesa nel pozzo", cat: "Exhibit", year: "2025/26", color: "#18181c", dark: true,
    short: "Mostra di design e media art alla Triennale di Milano: dodici portali pentagonali scandiscono una discesa dal bianco al nero.",
    course: "Politecnico di Milano, terzo anno, Laboratorio di sintesi finale",
    teachers: "Raffaella Trocchianesi, Ilaria Bollati, Ares Bolognesi, Paolo Maria Fumagalli",
    team: ["Jacopo Dellanoce", "Margherita Manto", "Luca Mastromatteo", "Valeria Paieri", "Anton Qerkini"],
    intro: [
      { h: "Sito di progetto", sub: "Triennale di Milano, Palazzo dell’Arte", t: "UNSEEN è una mostra di design e media art nel Palazzo dell’Arte, in occasione del centenario Biennale 1925 – Triennale 2025. Il tema dell’edizione è “Esporre e narrare mestieri e prodotti ad arte tra tecnologie digitali e nuova artigianalità”.", imgs: [{ img: "sito|Triennale di Milano, Palazzo dell’Arte", bare: true }] },
      { h: "Concept", sub: "Il pozzo", t: "Il prefisso “UN–” è inteso non come semplice negazione, ma come spazio di sospensione, di perdita di forma e di significato: una soglia linguistica che nega senza cancellare, che sottrae senza distruggere. Il pozzo ne è la metafora spaziale: un’apertura verso il basso, un luogo in cui si scende, dove la luce si perde ma il senso si concentra. Il percorso invita a guardare l’interno delle cose invece della loro superficie.", imgs: [{ img: "concept|Il pozzo, schema del concept", bare: true }] },
      { h: "Tema", sub: "Sezioni della mostra", t: ["<b>Unshaped</b> — La forma non è ancora definita. Materiali e artefatti si mostrano in divenire. È l’ingresso nel pozzo, dove tutto resta ancora possibile.", "<b>Unequal</b> — Le relazioni si fanno asimmetriche. La discesa si restringe, ciò che era fluido diventa conflitto.", "<b>Unstable</b> — Il punto di massima precarietà. Artefatti e significati sono sul punto di collassare o trasformarsi.", "<b>Unending</b> — Il fondo del pozzo, ma non una fine: una continuità senza risoluzione."], imgs: [{ img: "tema|Le sezioni della mostra e la discesa nel pozzo", bare: true }] },
    ],
    chapters: [
      { title: "Una discesa progressiva", t: "L’allestimento è strutturato come una discesa simbolica in un pozzo, articolata in quattro sezioni. Dodici portali pentagonali, in progressiva contrazione dimensionale, scandiscono lo spazio e generano un effetto di risucchio prospettico verso il fondo. La sequenza cromatica dei pannelli, dal bianco al nero, accompagna la discesa con un parallelo sistema tecnico-percettivo: luce e suono si riducono progressivamente, traducendo in termini sensoriali l’idea di sprofondamento.", rows: [
        { g: "2fr 1fr", items: [{ img: "discesa|Progressiva diminuzione di suono, luce e altezza dei portali", bare: true }, { img: "figure|La caduta nel pozzo", bare: true }] },
      ] },
      { title: "Le quattro sezioni", rows: [
        { g: "1fr 1fr", items: ["r1|Unshaped", "r2|Unequal"] },
        { g: "1fr 1fr", items: ["r3|Unstable", "r4|Unending"] },
        { g: "1fr 1fr", items: ["r5|Unequal, la sequenza dei portali", "r6|Unstable, installazioni sospese"] },
      ] },
      { title: "Impianto progettuale", t: "Ogni portale è formato da due strutture pentagonali, unite da un giunto di collegamento a tre vie in alluminio EN AC-46000.", rows: [
        { g: "1fr", items: ["impianto|Impianto progettuale: pianta, sezioni e i dodici portali"] },
        { g: "1fr", items: ["prospetto|Pianta con le quattro sezioni della mostra"] },
        { g: "1fr", items: ["sezione|Sezione longitudinale, scala 1:100"] },
      ] },
      { title: "Partitura allestitiva", t: "La partitura allestitiva sintetizza in un unico apparato grafico la struttura della mostra: organizzazione dei contenuti, collocazione delle sezioni, elementi allestitivi, fruizione, colore, suono e luce, tempo di percorrenza. Lo schema legge il percorso come un climax discendente, dal bianco di Unshaped al nero di Unending: ogni parametro si modifica coerentemente con l’avanzare della discesa.", rows: [
        { g: "1fr", items: ["partitura|Partitura allestitiva"] },
      ] },
      { title: "Modello e manifesto", rows: [
        { g: "2fr 1fr", items: ["mod1|Il modello: la sezione Unshaped", "mod2|Il modello esposto con tavola, manifesto e materiali", { stack: ["manifesto|Manifesto", "manifesto2|Il manifesto nel contesto urbano"] }] },
      ] },
    ],
  },

  {
    id: "unopiuuno", n: "03", title: "Uno + Uno", sub: "Cohousing a Cascina Linterno", cat: "Interior", year: "2024/25", color: "#1f4a33",
    short: "Cohousing in una cascina storica di Milano, costruito su una griglia di 60 × 60 cm: ordine, ripetizione e piastrelle quadrate.",
    course: "Politecnico di Milano, secondo anno, Laboratorio di metaprogetto",
    teachers: "L. Brenna, A. Colombo, A. Rebaglio",
    team: ["Jacopo Dellanoce", "Elisa Sofia Jansson", "Edoardo Perina"],
    intro: [
      { h: "Sito di progetto", sub: "Cascina Linterno", t: "Un luogo che raccoglie secoli di storia. Situata a Milano in via Fratelli Zoia, presso il Parco delle Cave, accoglie inizialmente una comunità di templari. Già nel 1154 viene citata in una pergamena con il nome di “Infernum”; nel XII secolo era un luogo di passaggio, crocevia di strade di pellegrinaggio.", grid: true, imgs: ["sito|Cascina Linterno oggi", "storia|Cascina Linterno in un’incisione storica"] },
      { h: "Concept", t: "UNO + UNO si basa sull’unità singola e sull’unione di quest’ultima ad altre unità uguali. Il quadrato è un sistema di linee rette che si intersecano per definire uno spazio ordinato e simmetrico, che esprime armonia ed equilibrio. La perfetta unione tra questi elementi è rappresentata da una griglia regolare di modulo 60 × 60 cm: una rappresentazione visiva della logica, basata su principi di ordine e coerenza.", grid: true, imgs: [{ img: "c1|Ripetizione", pad: true }, { img: "c2|Forma chiusa", pad: true }, { img: "c3|Enfasi", pad: true }, { img: "c4|Ortogonalità", pad: true }] },
      { h: "Tema", sub: "Cohousing", t: "Il cohousing nasce in Danimarca negli anni Sessanta: nel 1964 l’architetto Jan Gudmand-Høyer propone un nuovo tipo di abitazione in cui le famiglie condividono cucine, sale comuni e giardini, mantenendo la propria privacy. Abitazioni private con servizi e spazi condivisi, in equilibrio tra il rispetto della privacy e una vita sociale e comunitaria.", imgs: [{ img: "tema|Abitare insieme", natural: true }] },
    ],
    chapters: [
      { title: "Pianta e sezione", rows: [
        { g: "3fr 2fr", items: [{ img: "pianta|Pianta e sezione della cascina", pad: true }, { h: "Caso studio", sub: "Superstudio", t: "Superstudio è stato un gruppo di architetti italiani fondato a Firenze nel 1966 da Adolfo Natalini e Cristiano Toraldo di Francia. Inserito nel movimento dell’architettura radicale, il collettivo era profondamente critico nei confronti del modernismo funzionalista e della mercificazione dell’architettura. Simbolo di questo pensiero è il “Monumento Continuo”, una struttura immaginaria che si estende all’infinito sul pianeta.", grid: true, imgs: [{ img: "super1|Superstudio", natural: true }, { img: "super2|Superstudio, Monumento Continuo", natural: true }] }] },
      ] },
      { title: "Corte interna", t: "La corte interna è il luogo centrale di socialità, condivisione e relax, dove gli abitanti possono incontrarsi, organizzare eventi e stare all’aria aperta. Sulla corte si affacciano spazi aperti al pubblico, come una biblioteca e un bar, che rendono il complesso simile a un piccolo villaggio. Ispirata alla piazza italiana, la corte è pavimentata in sanpietrini su una griglia ortogonale di 240 × 240 cm. Il verde è racchiuso in grandi vasi che diventano sedute; gazebo leggeri accolgono tavoli e sedie, e al centro una vasca d’acqua ricorda le fontane delle piazze italiane.", rows: [
        { g: "1fr 1fr", items: [{ img: "corte|Assonometria della corte", pad: true }, { img: "cortepl|Pianta della corte, griglia 240 × 240 cm", pad: true }] },
        { g: "1fr 1fr", items: ["corte1|Il gazebo", "corte2|La corte, bianco e nero"] },
      ] },
      { title: "Bar", t: "Il bar rappresenta l’estremizzazione dell’idea progettuale di griglia e quadrato. Ispirato alla mostra “Between the lines” di Luigi Ghirri a Casa Mutina Milano, presenta arredi progettati appositamente, dai colori accesi e completamente ricoperti da piastrelle quadrate. Ogni superficie, dal bancone al pavimento, rispetta le proporzioni della griglia principale: le aree colorate segnano tavoli, sedute e bancone, e i quadrati della griglia diventano una vera e propria estrusione.", rows: [
        { g: "2fr 1fr 1fr", items: [{ img: "barpl|Pianta del bar", pad: true }, { img: "barsez|Sezione del bar", pad: true }, { img: "bartag|Il bar nella cascina", pad: true }] },
        { g: "1fr 1fr 1fr", items: [{ img: "barconc|La griglia diventa estrusione", pad: true }, { img: "sedia|Seduta in piastrelle", pad: true }, { img: "tavolo|Tavolo in piastrelle", pad: true }] },
        { g: "1fr 2fr 1fr", items: ["bar1|Dettaglio", "bar2|Le sedute", "bar3|Vista frontale"] },
        { g: "1fr", items: ["bar4|Il bar, vista d’insieme"] },
      ] },
      { title: "Alloggio", t: "Nella cascina sono presenti diverse tipologie di alloggio, dai piccoli spazi per soggiorni brevi fino a duplex in grado di ospitare tre persone. Tutti si basano sulla griglia di 60 × 60 cm, che divide gli spazi in zone funzionali e crea ordine geometrico e pulizia visiva. Gli arredi si avvicinano all’estetica razionalista: forme essenziali, materiali moderni, colori tenui e dettagli più vivaci nelle piastrelle.", rows: [
        { g: "1fr 1fr 1fr", items: [{ img: "allpl|Pianta di un alloggio", pad: true }, { img: "allconc|Piante concept", pad: true }, { img: "alltag|L’alloggio nella cascina", pad: true }] },
        { g: "2fr 1fr 1fr", items: [{ img: "allsez|Sezione dell’alloggio", pad: true }, "all1|La cucina", "all2|Dettaglio delle piastrelle"] },
      ] },
      { title: "Mostra e modello", rows: [
        { g: "2fr 1fr 1fr", items: ["mod1|Modello", "mostra1|Il progetto in mostra", "mostra2|Il progetto in mostra"] },
        { g: "1fr 1fr", items: ["mod2|Modello, alloggi", "mod3|Modello, la corte"] },
      ] },
    ],
  },

  {
    id: "lighthouse", n: "04", title: "Light House", sub: "Abitare il lago", cat: "Interior", year: "2023/24", color: "#1f3550",
    short: "Un’abitazione sul Lago Ghedina, ai piedi delle Tofane, ispirata a Frank Lloyd Wright e al rapporto tra architettura e natura.",
    course: "Politecnico di Milano, primo anno, Laboratorio di fondamenti del progetto",
    teachers: "Gabriella Zuco, Giulia Gerosa, Angela Mazzotti, Stefano Gigliotti, Andrea Derosa",
    team: ["Alessandra D’Avia", "Jacopo Dellanoce", "Tina Lavazza", "Martina Kyoko Ruju"],
    intro: [
      { h: "Sito di progetto", sub: "Lago Ghedina", t: "Il progetto si colloca presso il Lago Ghedina, nelle vicinanze di Cortina d’Ampezzo, in un contesto alpino caratterizzato dalla presenza di boschi e dal rapporto diretto con lo specchio d’acqua. Il sito, ai piedi delle Tofane, presenta un ambiente raccolto e definito, in cui gli elementi naturali costituiscono il principale riferimento per l’intervento progettuale.", grid: true, imgs: ["map1|Inquadramento territoriale", "map2|Il lago", "map3|L’area di progetto nel bosco"] },
      { h: "Tema", sub: "Frank Lloyd Wright", t: "Frank Lloyd Wright nacque nel 1867 a Richland Center, Wisconsin, e nel 1887 si trasferì a Chicago come allievo di Sullivan. Credeva che l’architetto dovesse avere un controllo completo del progetto, sugli interni come sugli esterni. Le sue opere sono caratterizzate dall’uso attento della luce naturale, da materiali grezzi come mattoni e legno, da spazi continui sviluppati in orizzontale con grandi aperture e da un’ottima organicità con l’esterno.", imgs: ["wright|Studi sulle architetture di Wright"] },
      { h: "Casi studio", t: ["<b>Layer House</b> — Progetto architettonico concepito da Snøhetta, studio norvegese di design e architettura rinomato per le sue opere all’avanguardia.", "<b>Marmomacc meets Design</b> — La mostra ha illustrato i risultati del progetto “Mutable Spirit”, una sfida alla capacità di adattamento di imprese e designer, con l’obiettivo di celebrare il marmo come materiale versatile e trasformabile."], imgs: ["m1|Modello, la luce attraverso il legno"] },
    ],
    chapters: [
      { title: "Pianta e sezioni", rows: [
        { g: "1fr 1fr", items: [{ img: "pt|Pianta piano terra", pad: true }, { img: "p1|Pianta primo piano", pad: true }] },
        { g: "1fr 1fr", items: ["sez1|Sezione longitudinale", "sez2|Sezione longitudinale, zona giorno"] },
        { g: "1fr 1fr 1fr", items: ["sez3|Sezione trasversale", "prosp2|Prospetto, lato corto", "prosp3|Prospetto frontale"] },
      ] },
      { title: "Terrazzamento esterno", rows: [
        { g: "1fr 1fr", items: ["alto|Pianta del terrazzamento", "prosp1|Prospetto, lato lungo"] },
        { g: "1fr 1fr", items: ["terr|Modello, il terrazzamento verso il lago", "terrbn|Modello, bianco e nero"] },
      ] },
      { title: "Interni", rows: [
        { g: "3fr 2fr", items: ["soggiorno|Soggiorno", { img: "sk1|Schizzo del soggiorno", pad: true }] },
        { g: "3fr 2fr 1fr 2fr", items: ["cucina|Cucina", "bagno|Bagno", { img: "sk2|Studio della scala", pad: true }, { img: "sk3|Schizzo, la seduta sospesa", pad: true }] },
      ] },
      { title: "Modello", rows: [
        { g: "1fr 1fr", items: ["m2|Modello, notturno", "m6|Modello, sezione"] },
        { g: "1fr 1fr 1fr", items: ["m3|Modello, dettaglio", "m4|Modello, le sedute", "m5|Modello, i terrazzi"] },
      ] },
    ],
  },

  {
    id: "workshop", n: "05", title: "Workshop", sub: "Comunque adesso ho un po’ paura", cat: "Interior", year: "2025/26", color: "#5e1717",
    short: "Una nuova colonia per bambini nel Villaggio Alpino TCI di Valganna: spazi sinceri per vivere l’avventura senza paura.",
    course: "Politecnico di Milano, terzo anno, Workshop “Progettare l’Avanzo”, Villaggio Alpino TCI di Valganna",
    teachers: "Luciano Crespi, Lucia Ratti, Marco Splendore",
    team: ["Jacopo Dellanoce", "Leonardo Goldstein Bolocan", "Giada Piccinno", "Giorgia Ricci"],
    intro: [
      { h: "Sito di progetto", sub: "Villaggio Alpino TCI, Valganna", t: "Il workshop “Progettare l’Avanzo” lavora sul Villaggio Alpino del Touring Club Italiano a Valganna: un complesso nel bosco da ripensare come nuova colonia per bambini.", grid: true, imgs: ["sito|Il villaggio nel bosco", "bosco|La chiesetta nel bosco"] },
      { h: "Concept", sub: "Comunque adesso ho un po’ paura", t: "La riflessione è nata da una scritta sul muro dell’Avanzo, notata durante il sopralluogo: “Comunque adesso ho un po’ paura”, un verso della canzone Il Nastro Rosa di Lucio Battisti. Da qui si è sviluppato il concept della nostra nuova versione di colonia per bambini.", imgs: ["concept|Comunque adesso ho un po’ paura"] },
      { h: "Tema", sub: "Spazi sinceri", t: "Abbiamo analizzato le avventure che i bambini desiderano compiere durante la colonia, dalle più fantasiose a quelle più relazionali. Ognuna è accompagnata da una paura che frena il bambino dal viverla in modo spontaneo. Il progetto crea spazi e soluzioni sincere che favoriscono le avventure minimizzandone le paure: spazi che invitano all’interazione per affrontare ciò che a volte paralizza.", grid: true, imgs: [{ img: "paura1|Vorrei scalare la montagna, ma ho paura", pad: true }, { img: "paura2|Spazi sinceri", pad: true }] },
    ],
    chapters: [
      { title: "Pianta del progetto", rows: [
        { g: "1fr 1fr", items: [{ img: "pianta|Piante dell’edificio", pad: true, dk: true }, "master|Masterplan"] },
        { g: "1fr 1fr 1fr", items: [{ img: "tab1|Avventure e paure", pad: true }, { img: "tab2|Avventure, paure e soluzioni", pad: true }, { img: "tema|Lo schema delle scritte", pad: true }] },
      ] },
      { title: "Gli spazi", rows: [
        { g: "1fr 1fr 1fr", items: [
          { h: "Spazio interno-esterno", imgs: [{ img: "sk1|Schizzo", pad: true }, "intest|Spazio interno-esterno"] },
          { h: "Spazio gioco", imgs: [{ img: "sk2|Schizzo", pad: true }, "gioco1|Spazio gioco"] },
          { h: "Chiesetta", imgs: [{ img: "sk3|Schizzo", pad: true }, "chiesetta|Chiesetta"] },
        ] },
        { g: "1fr 1fr 1fr", items: [
          { h: "Dormitorio bambini", imgs: [{ img: "sk4|Schizzo", pad: true }, "dormitorio|Dormitorio bambini"] },
          { h: "Spazio gioco", imgs: [{ img: "sk5|Schizzo", pad: true }, "gioco2|Spazio gioco"] },
          { h: "Capannina", imgs: [{ img: "sk6|Schizzo", pad: true }, "capannina|Capannina"] },
        ] },
      ] },
      { title: "Dettagli", rows: [
        { g: "1fr 1fr 1fr", items: ["nicchia|La nicchia", "cappella|La cappella", "infisso|L’infisso"] },
      ] },
    ],
  },

  {
    id: "kanpai", n: "06", title: "KanPai", sub: "Japanese hangout", cat: "Interior", year: "2024/25", color: "#5a2e26",
    short: "Un izakaya contemporaneo in una ex officina di Porta Venezia, a Milano, tra finiture grezze e tradizione giapponese.",
    course: "Politecnico di Milano, CdL Design degli Interni, Strumenti di modellazione dello spazio",
    teachers: "Prof. Giorgio Buratti; cultore della materia Massimo Barbieri",
    team: ["Jacopo Dellanoce", "Irene Acerboni", "Marco Braga"],
    intro: [
      { h: "Sito di progetto", sub: "Via Melzo 12, Porta Venezia", t: "Il KanPai è un locale nel cuore di Porta Venezia, a Milano. Un tempo officina meccanica, lo spazio ha mantenuto parte della sua anima originale grazie a dettagli estetici che riprendono le finiture grezze, creando un contrasto tra passato industriale e design moderno.", imgs: [{ img: "sito|Inquadramento urbano", pad: true }] },
      { h: "Concept", sub: "Izakaya", t: "L’idea alla base del KanPai è riproporre l’esperienza dell’izakaya giapponese, un locale tradizionale pensato come punto di ritrovo serale per rilassarsi dopo una lunga giornata di lavoro. Questa filosofia si riflette nell’atmosfera conviviale e nell’offerta: cocktail artigianali ispirati al Giappone e piatti fusion.", imgs: [{ img: "logo|Il logo", pad: true }] },
      { h: "Tema", sub: "Japanese hangout", t: "Un ambiente intimo e ricercato, che unisce l’eleganza contemporanea all’autentica tradizione giapponese: perfetto per una serata rilassata o un drink sofisticato, una meta per chi desidera immergersi nel design e nella cultura giapponese.", imgs: ["r1bn|Facciata, bianco e nero"] },
    ],
    chapters: [
      { title: "Pianta, sezioni ed esploso", rows: [
        { g: "1fr 1fr", items: [{ img: "pianta|Pianta, scala 1:100", pad: true }, { img: "esploso|Esploso assonometrico", pad: true }] },
        { g: "1fr 1fr 1fr", items: [{ img: "sez1|Sezione A-A", pad: true }, { img: "sez2|Sezione B-B", pad: true }, { img: "sez3|Sezione C-C", pad: true }] },
      ] },
      { title: "Gli ambienti", rows: [
        { g: "1fr", items: ["r1|Facciata su via Melzo"] },
        { g: "1fr 1fr", items: ["r2|La sala", "r3|Il bancone"] },
        { g: "1fr 1fr", items: ["r4|Il bancone, vista laterale", { img: "r5|La sala con il lampadario", pad: true }] },
      ] },
      { title: "Arredi e luci", t: "Il progetto comprende anche l’identità del locale e il disegno degli arredi su misura: bancone, tavoli, lampade e lampadario.", rows: [
        { g: "repeat(4,1fr)", items: [{ img: "bancone|Bancone", pad: true }, { img: "tavolo|Tavolo", pad: true }, { img: "luci|Lampade", pad: true }, { img: "lampadario|Lampadario", pad: true }] },
      ] },
    ],
  },
];
