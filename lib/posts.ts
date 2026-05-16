import type { Post } from "./posts-types";
import { images } from "./images";

const posts: Post[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. Laser vs Plasma
  // ─────────────────────────────────────────────────────────────
  {
    slug: "debitare-laser-vs-plasma",
    title: "Debitare laser vs plasma: care este diferența și când alegi fiecare?",
    description:
      "Comparație directă debitare laser CNC vs plasma CNC: toleranțe, finisaj, materiale, costuri. Ghid tehnic pentru cumpărători B2B.",
    metaTitle: "Debitare laser vs plasma: ghid comparație 2026 | SOZO PROJECT",
    metaDescription:
      "Comparație completă debitare laser CNC vs plasma CNC: toleranțe, materiale, costuri, aplicații. Ghid tehnic pentru cumpărători B2B din industrie.",
    datePublished: "2026-05-09",
    dateModified: "2026-05-16",
    readMin: 6,
    hero: images.heroLaser,
    heroAlt: "Comparație debitare laser CNC vs plasma CNC — atelier industrial",
    category: "Tehnic",
    body: [
      { type: "p", text: "Pentru orice piesă tăiată din tablă există două tehnologii principale care concurează direct: debitarea laser CNC și debitarea plasma CNC. Alegerea greșită nu e o catastrofă, dar costă — fie în precizie, fie în bani, fie în timp. Acest ghid îți spune când alegi fiecare metodă, pe baza specificațiilor reale ale piesei tale, nu a vorbei vânzătorului." },
      { type: "h2", text: "Ce este debitarea laser CNC?" },
      { type: "p", text: "Debitarea laser folosește un fascicul de lumină concentrată — la fibră laser, generat de o sursă de circa 4–6 kW — pentru a topi și vaporiza local materialul, urmat de un jet de gaz (azot sau oxigen) care evacuează topitura. Rezultatul: o tăietură cu lățime sub 0.3 mm, marginile curate, fără bavuri pe majoritatea grosimilor uzuale, și toleranțe pozitionale tipic de ±0.05–0.1 mm." },
      { type: "p", text: "Mașinile moderne, cum e Mitsubishi ML3015EX cu care lucrăm noi, au repetabilitate ±0.02 mm — adică piesa numărul 100 din serie iese identică cu prima. Asta contează când livrezi în industria automotive sau medicală, unde două piese diferite înseamnă două lucrări de control respinse." },
      { type: "h2", text: "Ce este debitarea plasma?" },
      { type: "p", text: "Plasma folosește un arc electric ionizat printr-un jet de gaz pentru a tăia metalul — temperatura plasma-ului ajunge la ~30.000 °C și topește practic orice material conductiv, inclusiv tablă groasă. Mașinile moderne cu plasma de înaltă definiție (HD plasma) ajung la toleranțe de ±0.5–1 mm și o zonă afectată termic mai mică decât plasma clasică, dar tot mai mare decât laser." },
      { type: "p", text: "Avantajul plasma: cost mai mic per oră de funcționare, capacitate ușoară de a tăia tablă foarte groasă (peste 25 mm), și mașini mai ieftine ca investiție. Dezavantajul: tăieturile sunt mai late (kerf 1.5–4 mm), suprafețele au reziduuri (slag) care necesită rectificare, și piesele mici cu contururi fine devin imprecise." },
      { type: "h2", text: "Comparație directă pe puncte critice" },
      {
        type: "table",
        head: ["Criteriu", "Laser CNC", "Plasma CNC"],
        rows: [
          ["Toleranță pozițională", "±0.05–0.1 mm", "±0.5–1 mm"],
          ["Lățime tăietură (kerf)", "0.2–0.3 mm", "1.5–4 mm"],
          ["Finisaj margine", "Curat, fără bavuri", "Slag, necesită rectificare"],
          ["Grosime optimă", "1–20 mm", "5–50 mm"],
          ["Inox / aluminiu", "Excelent", "Acceptabil (HD plasma)"],
          ["Cost per piesă (subțire)", "Mic — viteză mare", "Mare — kerf risipește material"],
          ["Cost per piesă (gros >20mm)", "Mare — viteza scade", "Mic — viteza rămâne ridicată"],
          ["Detalii fine, găuri mici", "Imposibil de bătut", "Limitate (kerf mare)"],
        ],
      },
      { type: "h2", text: "Când alegi laserul?" },
      { type: "ul", items: [
        "Piese cu contururi fine, găuri mici (sub 5 mm diametru), text gravat sau decupat",
        "Toleranțe sub ±0.2 mm pe orice cotă critică",
        "Tablă subțire (1–10 mm) — laserul e mai rapid și mai ieftin pe această zonă",
        "Inox sau aluminiu unde finisajul margine contează (decorativ, alimentar, optic)",
        "Serii repetabile unde piesa 1 și piesa 1000 trebuie identice",
        "Componente care intră în asamblare automată (toleranțele determină dacă montajul „prinde”)",
      ]},
      { type: "h2", text: "Când alegi plasma?" },
      { type: "ul", items: [
        "Tablă groasă peste 20–25 mm de oțel structural",
        "Piese mari, cu toleranțe relaxate (±1 mm e OK pentru aplicația ta)",
        "Construcții metalice grele, structuri de susținere, grinzi",
        "Buget strict pentru o lucrare unică, nerecurentă, fără cerințe estetice",
      ]},
      { type: "callout", text: "Greșeala clasică: alegi plasma pentru că e mai ieftină per oră, dar piesa ta cere ±0.1 mm. Rezultatul: rectificări manuale, întârzieri, și un cost final mai mare decât laserul de la început." },
      { type: "h2", text: "Și frezarea? Și ștanțarea?" },
      { type: "p", text: "Frezarea CNC e o altă alternativă pentru piese 2D din tablă, dar e dramatic mai lentă decât laserul și costă mai mult per piesă pentru forme complexe. Avantajul ei rămâne pe piese 3D sau pe materiale care nu se pot tăia termic (anumite plastice tehnice, cupru gros). Pentru tablă plată — laserul aproape întotdeauna câștigă." },
      { type: "p", text: "Ștanțarea e excelentă în serie mare (peste 5.000 buc) când investești într-o matriță. Dar matrița costă 5.000–50.000 € și nu se amortizează pe serii mici. Pentru orice serie sub 1.000 piese, laserul e mai ieftin de la primul lot." },
      { type: "h2", text: "Concluzie — ce oferim noi" },
      { type: "p", text: "La SOZO PROJECT lucrăm exclusiv cu debitare laser CNC pentru că aici se află nișa unde precizia, viteza și flexibilitatea coincid. Echipamentul nostru — Mitsubishi ML3015EX, fibră 4.5 kW — taie oțel până la 20 mm, inox/aluminiu până la 10 mm, cu ±0.05 mm pozițional. Pentru tablă mai groasă sau aplicații unde toleranța nu contează, te trimitem onest către un atelier de plasma. Asta e parte din consultanța inclusă." },
      { type: "internal", href: "/servicii/debitare-laser", label: "Vezi serviciul de debitare laser", text: "Specificații complete, materiale acceptate, format fișiere — pe pagina serviciului." },
    ],
    faqs: [
      { q: "Care metodă e mai rapidă, laser sau plasma?", a: "Pentru tablă subțire (sub 10 mm) laserul cu fibră e dramatic mai rapid. Peste 20 mm, plasma poate fi mai rapidă, dar la cost de finisaj." },
      { q: "Pot să combin metodele pe aceeași piesă?", a: "Tehnic da — multe ateliere de plasma rectifică margini ulterior. Practic, pentru piese cu cerințe de precizie, e mai ieftin să alegi laser de la început decât să rectifici manual." },
      { q: "Care metodă e mai sustenabilă?", a: "Laserul cu fibră consumă ~5–10 kW; plasma consumă mai mult (gaz comprimat + arc electric). Pe tablă subțire, laserul e mai eficient energetic per piesă." },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 2. Tolerante
  // ─────────────────────────────────────────────────────────────
  {
    slug: "tolerante-debitare-laser",
    title: "Ce toleranțe oferă debitarea laser? Ghid tehnic complet 2026",
    description:
      "Toleranțe pozitionale, dimensionale și unghiulare pentru debitarea laser CNC pe oțel, inox, aluminiu. Date reale Mitsubishi ML3015EX.",
    metaTitle: "Toleranțe debitare laser CNC — ghid tehnic 2026 | SOZO PROJECT",
    metaDescription:
      "Toleranțe standard și de precizie pentru debitare laser CNC pe oțel, inox, aluminiu. Date reale de la Mitsubishi ML3015EX. Cum specifici corect în desen.",
    datePublished: "2026-05-09",
    dateModified: "2026-05-16",
    readMin: 7,
    hero: images.precisionEdge,
    heroAlt: "Detaliu margine debitată laser pe inox 304 — toleranță ±0.05mm",
    category: "Tehnic",
    body: [
      { type: "p", text: "„Ce toleranță aveți la laser?” — întrebarea pe care o primim cel mai des. Răspunsul scurt: ±0.05 mm pozițional, ±0.02 mm repetabilitate. Răspunsul lung explică de ce diferența contează, ce înseamnă pentru piesa ta concretă, și cum să specifici corect toleranțele în desen ca să nu plătești pentru precizie de care nu ai nevoie." },
      { type: "h2", text: "Toleranță pozițională vs dimensională vs repetabilitate" },
      { type: "p", text: "Trei concepte care se confundă des, dar înseamnă lucruri diferite în practică:" },
      { type: "ul", items: [
        "Toleranță pozițională — cât de exact poate mașina să poziționeze capul laser pe planul X-Y. La Mitsubishi ML3015EX: ±0.05 mm pe 500 mm cursă.",
        "Toleranță dimensională — cât de aproape de cota din desen iese piesa fizică. Influențată de poziționare + lățimea tăieturii (kerf) + dilatare termică. Tipic ±0.1 mm.",
        "Repetabilitate — dacă tăiem aceeași piesă de 100 de ori, cât de mult variază. La noi: ±0.02 mm. Asta înseamnă că serie e uniformă, nu doar o piesă noroc.",
      ]},
      { type: "callout", text: "În practică: dacă ai o gaură ∅10 mm cu toleranță ±0.05 mm, te interesează și poziționarea (centrul găurii pe corect), și dimensiunea (10.00 mm fix), și repetabilitatea (toate piesele la fel)." },
      { type: "h2", text: "Toleranțe tipice per material și grosime" },
      { type: "p", text: "Cu cât tabla e mai groasă, cu atât toleranțele cresc — efect termic mai mare, conicitatea tăieturii (taper) mai pronunțată. Iată valorile realiste pe Mitsubishi ML3015EX:" },
      {
        type: "table",
        head: ["Material", "Grosime", "Toleranță standard", "Toleranță precizie"],
        rows: [
          ["Oțel carbon", "≤ 6 mm", "±0.1 mm", "±0.05 mm"],
          ["Oțel carbon", "6–12 mm", "±0.15 mm", "±0.1 mm"],
          ["Oțel carbon", "12–20 mm", "±0.2 mm", "±0.15 mm"],
          ["Inox 304/316", "≤ 6 mm", "±0.1 mm", "±0.05 mm"],
          ["Inox 304/316", "6–10 mm", "±0.15 mm", "±0.1 mm"],
          ["Aluminiu", "≤ 5 mm", "±0.1 mm", "±0.05 mm"],
          ["Aluminiu", "5–10 mm", "±0.15 mm", "±0.1 mm"],
        ],
      },
      { type: "p", text: "„Standard” e ce primești implicit, fără cerere expresă. „Precizie” e ce putem garanta dacă marchezi cota ca fiind critică în desen — implică verificare suplimentară pe piesa finală și, eventual, ajustare de proces." },
      { type: "h2", text: "Factori care influențează toleranța reală" },
      { type: "ol", items: [
        "Grosimea materialului — mai gros = toleranțe mai relaxate. Pe 20 mm oțel nu vei avea ±0.05 mm, indiferent de mașină.",
        "Calitatea tablei — tabla de stoc cu rugozitate sau ondulații afectează prima cotă a piesei (deformare termică).",
        "Numărul de cote critice pe piesă — cu cât mai multe contururi precise, cu atât crește riscul cumulativ; e bine să marchezi care sunt critice și care relaxate.",
        "Dimensiunea piesei — pe piese mari (>1500 mm), poziționarea relativă poate avea ușoară deviație termică pe parcursul tăierii.",
        "Forma — găurile foarte mici (sub diametrul materialului) nu pot fi tăiate la cotă exactă fără strategii speciale de pierce.",
      ]},
      { type: "h2", text: "Cum specifici toleranțele în desen" },
      { type: "p", text: "Cea mai mare problemă în desenele primite: clientul cere implicit ±0.05 mm pe toate cotele. Rezultă cost mărit (verificare + posibilă rectificare) pentru cote care, în realitate, n-aveau nevoie de atâta precizie. Recomandare practică:" },
      { type: "ul", items: [
        "Marchează explicit doar cotele critice (de exemplu, gauri pentru asamblare automată, suprafețe de etanșare).",
        "Pentru cotele non-critice, indică ISO 2768-mK (toleranțe generale medii) sau ±0.5 mm — e suficient pentru contururi exterioare ne-funcționale.",
        "Dacă piesa intră în prelucrare ulterioară (frezare finală, găurire), specifică „dimensiune brut” + adaos de prelucrare în desen.",
      ]},
      { type: "h3", text: "Exemplu concret" },
      { type: "p", text: "O piesă de 200×150 mm, oțel 4 mm, cu 4 găuri ∅8.5 mm pentru șurub M8. Doar găurile sunt critice (montaj). Conturul exterior poate avea ±0.5 mm. Specificare corectă:" },
      { type: "ul", items: [
        "Cote contur exterior: ISO 2768-mK (sau ±0.5 mm)",
        "Diametre găuri ∅8.5 +0.05 / -0.0",
        "Distanțe între centre găuri: ±0.1 mm",
      ]},
      { type: "p", text: "Costul piesei specificate corect e sensibil mai mic decât dacă ceri ±0.05 mm peste tot, fără justificare." },
      { type: "h2", text: "Ce putem garanta noi (Mitsubishi ML3015EX, date reale)" },
      { type: "ul", items: [
        "Pozițional: ±0.05 mm pe orice cursă sub 500 mm",
        "Repetabilitate: ±0.02 mm pe serii uniforme",
        "Toleranță contur: ±0.1 mm standard, ±0.05 mm la cerere pe materiale subțiri",
        "Toleranță gaură: ±0.05 mm pe diametre > grosimea materialului, ±0.03 mm pe materiale subțiri",
      ]},
      { type: "p", text: "Acestea nu sunt cifre de marketing — sunt măsurate prin control dimensional pe piese de probă, periodic, și pe piese de control la livrare când clientul cere first-article inspection report." },
      { type: "internal", href: "/servicii/debitare-laser", label: "Vezi specificațiile complete", text: "Toleranțe per material, formate fișier acceptate, proces de comandă." },
    ],
    faqs: [
      { q: "Care e diferența între ±0.05 și ±0.02 mm?", a: "±0.05 e poziționarea capului laser. ±0.02 e cât variază piesă-cu-piesă pe aceeași serie. Ambele contează." },
      { q: "Pot avea ±0.01 mm la laser?", a: "Nu pe materiale tipice. Pentru toleranțe sub ±0.05 mm pe cote critice, e nevoie de prelucrare ulterioară (frezare sau rectificare)." },
      { q: "Cum verific că piesa primită are toleranța promisă?", a: "Cere first-article inspection report la comandă. Măsurăm cotele critice cu echipament calibrat și îți trimitem raport." },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 3. DXF prep
  // ─────────────────────────────────────────────────────────────
  {
    slug: "cum-pregatesti-fisiere-dxf",
    title: "Cum pregătești fișierele DXF pentru debitare laser — ghid pas cu pas",
    description:
      "Ghid complet pentru pregătirea fișierelor DXF pentru debitare laser CNC. Layere, scara, contururi, erori frecvente de evitat.",
    metaTitle: "Cum pregătești fișiere DXF pentru debitare laser — ghid 2026 | SOZO PROJECT",
    metaDescription:
      "Ghid complet pentru pregătirea fișierelor DXF pentru debitare laser CNC. Layere, scara, contururi închise, erori frecvente. Checklist înainte de trimitere.",
    datePublished: "2026-05-09",
    dateModified: "2026-05-16",
    readMin: 8,
    hero: images.engineering,
    heroAlt: "Inginer pregătind fișier DXF pentru debitare laser în software CAD",
    category: "How-to",
    body: [
      { type: "p", text: "Un fișier DXF curat înseamnă ofertă rapidă, preț corect și piesă identică cu desenul. Un DXF prost îți întârzie comanda, generează costuri ascunse și uneori produce piese greșite. Acest ghid trece prin fiecare element pe care îl verificăm noi când primim un fișier — folosește-l ca pe un checklist înainte să trimiți." },
      { type: "h2", text: "Software-uri uzuale pentru DXF" },
      { type: "p", text: "Practic, orice CAD modern exportă DXF. În ordinea calității output-ului pe care o vedem în atelier:" },
      { type: "ul", items: [
        "AutoCAD — referință de fapt; exportă DXF curat dacă desenezi corect.",
        "SolidWorks — Save As → DXF din schiță. Atenție la layere și la blocuri convertite.",
        "Fusion 360 — Sketch → Right click → Save as DXF. Verifică unitățile (default poate fi inch).",
        "Inventor — similar cu SolidWorks.",
        "LibreCAD — gratuit, suficient pentru piese 2D simple.",
        "Onshape — export DXF din skicker.",
      ]},
      { type: "p", text: "Evită convertoarele online dubioase și PDF→DXF automat. Rezultatul are aproape întotdeauna linii duble, contururi deschise sau scară greșită." },
      { type: "h2", text: "Setări de bază: unitate, scară, format" },
      { type: "ol", items: [
        "Unitatea de măsură: milimetri. Dacă lucrezi în inch, convertește înainte de export. Toate atelierele de laser CNC din Europa folosesc mm.",
        "Scara: 1:1. Niciodată 1:10 sau 1:100. Conturul desenat 100 mm = 100 mm reali în fișier.",
        "Versiunea DXF: AutoCAD 2010 sau ulterioară. Versiunile mai vechi pierd anumite tipuri de entități.",
        "Codepage: ASCII sau UTF-8 dacă ai text (deși text-ul nu trebuie să fie pe layerul de tăiere).",
      ]},
      { type: "h2", text: "Structura layerelor" },
      { type: "p", text: "Aici se face diferența între un fișier amator și unul profesional. Conventia clasică:" },
      { type: "ul", items: [
        "Layer „CUT” (sau „Cut”, „Tăiere”) — toate liniile care trebuie tăiate de laser.",
        "Layer „ENGRAVE” (sau „Marcaj”) — linii care trebuie gravate, nu tăiate (de exemplu, numere de serie).",
        "Layer „FOLD” (sau „Pliere”) — pentru piese care urmează să fie îndoite la abkant; marchează liniile de îndoire fără să le tăiem.",
        "Layer „REFERINȚĂ” (sau orice alt nume) — pentru conturul brut, dimensiuni, note. Nu e tăiat.",
      ]},
      { type: "p", text: "Daca toate liniile sunt pe layerul „0” (default), avem două probleme: (1) nu știm care e contur și care e text, (2) trebuie să curăț noi fișierul, ce întârzie oferta. Investiția în 5 minute de organizare îți economisește o oră de comunicare cu noi." },
      { type: "h2", text: "Reguli pentru contururi" },
      { type: "ul", items: [
        "Toate contururile trebuie să fie închise. O linie deschisă cu 0.001 mm la capete = laser face o tăietură nedorită.",
        "Fără linii duble suprapuse. Două linii desenate pe aceeași poziție = laser le taie pe ambele, de două ori, riscând să ardă marginea.",
        "Polilinii preferate pentru contururi închise. Eliminei riscul de „nesfârșirea” conturului.",
        "Cercurile să fie cercuri reale (entitate CIRCLE), nu poligoane cu 32 de muchii.",
        "Curbele complexe (NURBS, splines) — convertește-le în polilinii sau arce. Multe controllere CNC nu citesc spline-uri direct.",
      ]},
      { type: "h2", text: "Greșeli frecvente și cum le eviți" },
      {
        type: "table",
        head: ["Greșeală", "Consecință", "Soluție"],
        rows: [
          ["Linii duble", "Tăiere dublă, margine arsă", "Comanda OVERKILL în AutoCAD înainte de export"],
          ["Contur deschis", "Piesă nu se decupează", "Comanda CLOSE pe poliline"],
          ["Text pe layer cut", "Laser taie literele", "Mută text pe layer separat"],
          ["Cotații în fișier", "Confuzie + tăiere greșită", "Layer „dim” separat sau elimină complet"],
          ["Scară greșită", "Piesa iese de 10× mai mică/mare", "Verifică o cotă cunoscută înainte de export"],
          ["Unități diferite", "Piesa la jumătate (inch→mm)", "Setează clar mm înainte de export"],
        ],
      },
      { type: "h2", text: "Cum verifici fișierul înainte să-l trimiți" },
      { type: "ol", items: [
        "Deschide DXF-ul într-un viewer separat (AutoCAD, LibreCAD, ViewCompanion, online viewers).",
        "Verifică scara — măsoară o cotă cunoscută cu unealta dimensională.",
        "Activează doar layerul de tăiere și verifică vizual că vezi toate contururile pe care le aștepți.",
        "Verifică contururile închise: poliline cu poziție start = poziție end.",
        "Asigură-te că nu ai entități în afara cadrului piesei (linii rătăcite, text uitat).",
      ]},
      { type: "callout", text: "Trucul nostru: dacă vezi piesa ta într-un viewer și o numeri în cap pas cu pas (1 contur exterior + 4 găuri = 5 elemente), știi că e curată. Dacă numeri 7 și aștepți doar 5, ai linii în plus." },
      { type: "h2", text: "Alternative: DWG, STEP, PDF" },
      { type: "ul", items: [
        "DWG — format AutoCAD nativ, mai bogat decât DXF. Acceptat de orice atelier serios.",
        "STEP / STP — format 3D. Util pentru piese cu cerințe de îndoire complexe sau pentru asamblări. Noi extragem geometria 2D din STEP automat.",
        "PDF cu cote — accept pentru ofertă, dar pentru producție avem nevoie de DXF (PDF-urile vectoriale au probleme cu liniile duble).",
      ]},
      { type: "h2", text: "Checklist final înainte de trimitere" },
      { type: "ul", items: [
        "Scara 1:1 în mm",
        "Layere clar denumite (cut / engrave / fold / reference)",
        "Contururi închise verificate",
        "Fără linii duble (run OVERKILL în AutoCAD)",
        "Fără text sau cote pe layerul de tăiere",
        "Cercurile sunt entități CIRCLE",
        "Splines convertite în polilinii dacă există",
        "Verificat într-un viewer extern",
      ]},
      { type: "p", text: "Dacă ai trecut toate punctele, fișierul e pregătit. Trimite-l pe WhatsApp sau prin formularul de ofertă — fișier clar înseamnă ofertă rapidă, de obicei în 2–4h." },
      { type: "internal", href: "/cere-oferta", label: "Trimite fișierul DXF acum", text: "Ai pregătit fișierul după checklist? Încarcă-l în formularul de ofertă — primești oferta în aceeași zi." },
    ],
    faqs: [
      { q: "Pot trimite DXF din Adobe Illustrator?", a: "Da, dar verifică unitățile (default e adesea points/inches) și convertește textul în path-uri. Atenție la linii duble — Illustrator generează des duplicate." },
      { q: "Ce fac dacă nu am DXF, doar PDF?", a: "Trimite PDF-ul cu dimensiuni pentru ofertă. Dacă confirmi comanda, putem extrage geometria din PDF (cost mic suplimentar) sau rea-desenăm fișierul pe baza cotelor tale." },
      { q: "Dimensiunile maxime acceptate?", a: "Tabla maximă: 3050 × 1525 mm. Piesa individuală poate fi orice dimensiune sub aceasta — încercăm să o încadrăm pe foaie." },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 4. Materiale
  // ─────────────────────────────────────────────────────────────
  {
    slug: "materiale-debitare-laser",
    title: "Materiale pentru debitare laser: oțel, inox, aluminiu — grosimi, toleranțe, sfaturi",
    description:
      "Ghid complet de materiale pentru debitare laser CNC: oțel carbon OL37/OL52, inox 304/316, aluminiu 5052/6061. Cum alegi materialul corect.",
    metaTitle: "Materiale debitare laser: oțel, inox, aluminiu — ghid complet | SOZO PROJECT",
    metaDescription:
      "Ghid complet de materiale pentru debitare laser CNC: oțel carbon OL37/OL52, inox 304/316, aluminiu 5052/6061. Grosimi maxime, toleranțe, recomandări per aplicație.",
    datePublished: "2026-05-09",
    dateModified: "2026-05-16",
    readMin: 8,
    hero: images.steelSheet,
    heroAlt: "Tablă oțel pregătită pentru debitare laser CNC, atelier industrial",
    category: "Tehnic",
    body: [
      { type: "p", text: "Trei familii de materiale acoperă peste 95% din debitarea laser industrială: oțel carbon, inox și aluminiu. Fiecare cu nuanțe care influențează cost, comportament la tăiere, toleranțe finale și aplicații recomandate. Ghidul de mai jos te ajută să alegi corect din prima — nu după primul lot eșuat." },
      { type: "h2", text: "Oțel carbon (OL37, OL52)" },
      { type: "p", text: "Calul de bătaie al fabricației metalice. Ieftin, bine standardizat, ușor de tăiat cu laser pe orice grosime tipică (1–20 mm). Două grade dominante:" },
      { type: "h3", text: "OL37 (S235JR)" },
      { type: "p", text: "Oțel structural de bază, rezistență la tracțiune ~360 MPa. Folosit pentru piese ne-critice ca sarcină: console, plăci de bază, panouri, suporți. Sudabil fără probleme. Acoperire vopsea sau zincare ulterioară posibilă fără tratamente speciale." },
      { type: "h3", text: "OL52 (S355JR)" },
      { type: "p", text: "Oțel cu rezistență mai ridicată (~470 MPa la tracțiune). Folosit unde piesa trebuie să suporte sarcini ciclice sau presiuni: structuri portante, componente automotive, atașamente echipamente agricole. Costă cu ~5–10% mai mult decât OL37, dar pe piese critice diferența e neglijabilă." },
      { type: "h3", text: "Aplicații tipice oțel carbon" },
      { type: "ul", items: [
        "Construcții metalice: gusete, plăci de bază, console, panouri",
        "Automotive aftermarket: suporți de montaj, scuturi termice, ranforsări",
        "Mobilă industrială: rame metalice, structuri rafturi",
        "Echipamente agricole: plăci de uzură (cu OL52 sau oțel anti-uzură ulterior tratat)",
      ]},
      { type: "h2", text: "Inox (304, 316, 430)" },
      { type: "p", text: "Inoxul costă 5–10× mai mult decât oțelul carbon, dar nu corodează, e estetic și rezistă chimic. Tăierea cu laser pe fibră dă margine curată dacă folosești azot ca gaz de asistență (oxigenul oxidează marginea)." },
      { type: "h3", text: "Inox 304" },
      { type: "p", text: "Cel mai folosit inox industrial. Excelent compromis între cost, rezistență la coroziune și sudabilitate. Folosit în industria alimentară (suprafețe cu contact alimentar), echipamente sanitare, chiuvete industriale, fațade decorative, mobilier urban inox." },
      { type: "h3", text: "Inox 316" },
      { type: "p", text: "Conține molibden, ce-i dă rezistență superioară la medii cu cloruri (apă marină, soluții saline, acid clorhidric diluat). Folosit în industria marină, chimică, farmaceutică și medicală. Costă cu ~30% mai mult decât 304." },
      { type: "h3", text: "Inox 430" },
      { type: "p", text: "Inox feritic (magnetic), mai ieftin decât 304. Folosit pentru aplicații decorative, electrocasnice, panouri de afișare. Atenție: nu e potrivit pentru exterior fără protecție." },
      {
        type: "table",
        head: ["Grad inox", "Grosime max", "Cost relativ", "Aplicații"],
        rows: [
          ["304", "10 mm", "1.0× (referință)", "Alimentar, decorativ, sanitar"],
          ["316", "10 mm", "1.3×", "Marin, chimic, medical"],
          ["430", "8 mm", "0.85×", "Decorativ interior, electrocasnice"],
        ],
      },
      { type: "h2", text: "Aluminiu (1050, 5052, 6061-T6)" },
      { type: "p", text: "Aluminiul taie bine cu laser fibră, dar reflectă mai mult decât oțelul, deci viteza scade. Densitatea lui (2.7 g/cm³ vs 7.85 pentru oțel) îl face de 3× mai ușor — critic pentru auto, aerospațial, electronică portabilă." },
      { type: "h3", text: "Aluminiu 1050" },
      { type: "p", text: "Aproape pur (99.5% Al). Foarte moale, formabil ușor, dar slab structural. Folosit pentru carcase decorative, panouri reflectorizante, etichete." },
      { type: "h3", text: "Aluminiu 5052" },
      { type: "p", text: "Aliaj cu magneziu, cel mai bun raport cost-rezistență-corosiune pentru tablă. Folosit în carcase electronice, rezervoare, panouri auto, echipamente marine de mică adâncime." },
      { type: "h3", text: "Aluminiu 6061-T6" },
      { type: "p", text: "Aliaj cu magneziu și siliciu, tratabil termic („T6” = tratament termic specific). Cel mai rezistent dintre aliajele uzual disponibile la tablă. Folosit în structuri aerospațiale, rame biciclete, structuri industriale ușoare. Mai dificil de tăiat (mai dur, dilatare termică mai mare)." },
      { type: "h2", text: "Cum alegi materialul corect pentru proiectul tău" },
      { type: "ol", items: [
        "Începi cu funcția: ce face piesa? Suportă sarcini? Stă în mediu coroziv? Trebuie ușoară?",
        "Verifici constrângerile: temperatură de operare, sudură ulterioară, vopsire, contact alimentar.",
        "Compari cost vs durată de viață: oțelul vopsit costă mai puțin decât inoxul, dar pe 10 ani inoxul rămâne, vopseaua se duce.",
        "Verifici disponibilitatea grosimii: nu toate gradele se găsesc în orice grosime; uneori e mai practic să schimbi gradul decât să aștepți import.",
      ]},
      { type: "h2", text: "Tabel comparativ complet" },
      {
        type: "table",
        head: ["Material", "Grosime max laser", "Densitate", "Coroziune", "Sudabilitate", "Cost relativ"],
        rows: [
          ["OL37", "20 mm", "7.85 g/cm³", "Slabă (necesită protecție)", "Excelentă", "1×"],
          ["OL52", "20 mm", "7.85 g/cm³", "Slabă", "Bună", "1.05×"],
          ["Inox 304", "10 mm", "8.0 g/cm³", "Bună", "Bună", "5–7×"],
          ["Inox 316", "10 mm", "8.0 g/cm³", "Excelentă", "Bună", "7–9×"],
          ["Aluminiu 5052", "10 mm", "2.68 g/cm³", "Bună", "Bună (TIG)", "3–4×"],
          ["Aluminiu 6061", "8 mm", "2.70 g/cm³", "Bună", "Acceptabilă", "3.5–4.5×"],
        ],
      },
      { type: "callout", text: "Sfat practic: dacă nu ești sigur, trimite-ne specificația aplicației (mediu, sarcini, durată) și recomandăm noi materialul. Consultanță inclusă în ofertă, fără cost suplimentar." },
      { type: "internal", href: "/servicii/debitare-laser", label: "Vezi specificațiile complete pentru debitare laser", text: "Materiale acceptate, grosimi maxime, toleranțe, formate fișier." },
    ],
    faqs: [
      { q: "Pot tăia cupru sau alamă cu laser?", a: "Tehnic da, dar reflectivitatea ridicată face tăierea grea pe materiale subțiri. Nu suntem specializați în acestea — recomandăm un atelier dedicat pentru cupru gros." },
      { q: "De ce inoxul costă atât de mult mai mult?", a: "Conținutul de crom (min 10.5%) și nichel (în 304/316) face ca aliajul să coste de câteva ori mai mult decât oțelul carbon." },
      { q: "Pot vopsi piesele de aluminiu după debitare?", a: "Da, dar e nevoie de tratament prealabil (eloxare sau primer special). Vopseaua direct pe aluminiu se descuamează." },
    ],
  },
];

export default posts;
export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
export function getAllSlugs() {
  return posts.map((p) => p.slug);
}
