# Prosjekt 2 - Dokumentasjon

## Krav til funksjonalitet

Vi har valgt natur som tema med faner (Fjell, Sjø, By og Skog), bildekategorier (Minimalistisk, Silhuett og Abstrakt), lydkategorier (Opphold, Regn og Storm) og tekstkategorier (Dikt, Haiku og Sangtekst). Kombinasjoner av disse vises gjennom valg av tabs og checkboxes. Vi har gått for en lignende layout som eksempelet fra oppgavebeskrivelsen, da vi opplevde dette som intuitivt og oversiktlig. Startsiden er en fast utstilling med den første av hver fane/kategori valgt, og ny utstilling genereres hver gang gang brukeren skifter fane/kategori.

Svg-filene er tegnet i en online editor (Method Draw), mens lyden er hentet fra gratisbiblioteket til Adobe. Teksten er generert online med poem-generator.org.uk. Alle filene er lagret lokalt.

## Krav til teknologi

### React
Siden er basert på React, JSX og ES6 uten tredjeparts komponenter. Vi har valgt at kun App-komponenten har klasse komponent, og dermed den eneste komponenten som håndterer staten. Dette er fordi det da er enklere å holde styr på staten på ett sted. De øvrige komponentene er funksjonelle. App-komponenten har som sagt state, og sender dermed nødvendige props til resten av komponentene. De kan da ha oversikt over og endre staten gjennom state og funksjoner sendt som props.

Komponentstrukturen er organisert i “organisms”, “molecules” og “atoms”. Atomene bruker ingen andre komponenter enn seg selv, og er nederst i struktur-treet, mens molekylene befinner seg ett nivå høyere. De kan for eksempel bestå av én eller flere atomer. Organismene er enda et nivå høyere og kan inneholde en kombinasjon av flere atomer og molekyler.

### AJAX
Bildene i svg (xml-data) og teksten i json skal lastes dynamisk med AJAX. Vi har valgt å bruke Fetch da dette er et enkelt API som dekker våre behov. Filene skal kun lastes hvis de benyttes, og når de først er lest skal de lagres på klienten. For å løse dette har vi valgt å bruke to react hooks som heter useEffect og useState. Dette er for å kunne utnytte samme funksjonalitet som react lifecycle hooks og lokal state i funksjonelle komponenter. useEffect lytter etter forandringer i staten av valgt bilde og tekst, og så laster inn filene ved behov ved hjelp av en filbane generert av kodeord i staten. Første gang gjøres dette med AJAX før filene deretter lagres i sessionstorage. Neste gang en fil benyttes vil den da hentes derfra. I begge tilfeller vi dataen hente bli satt i den lokale staten ved hjelp av useState. Et viktig poeng her er at denne “staten” ikke påvirker noen andre komponenter en seg selv.

### HTML Web Storage
Vi har valgt å la brukeren kunne lagre og vise sin favorittkombinasjon gjennom to ulike knapper. Deler av staten (informasjon om valgt tab, bilde, lyd og tekst) vil da lagres i localstorage, og så hentes og brukes til å sette ny state når brukeren ber om å vise sin favoritt. Med localstorage vil filene til favoritten fortsatt være lagret selv om nettleseren lukkes, noe som kan være kjekt om man raskt vil finne tilbake til sin favoritt ved senere besøk.

For å lagre bildene og tekstene på klienten har vi som sagt benyttes oss av sessionstorage. Her er det naturlig at man ikke vil lagre filene på klienten når nettleseren lukkes, og valget falt derfor enkelt på sessionstorage. Filene lagres da her etter de er lastet med AJAX første gang og hentes igjen fra sessionstorage neste gang de er i bruk.

### Responsive Web Design
Sidens layout er gjort responsivt og skalerbart ved at størrelse på komponenter er satt i viewport height og viewport width, samt med bruk av media-queries. Når skjermstørrelsen minskes vil display-komponenten forbli midt på siden i fokus, mens bilde -, lyd- og tekstkategoriene og favorittknappene vil flyttes under. Slik beholder de egen størrelse så lenge som mulig uten at det går på bekostning av kunstutstillingen. Media-queries er benyttet for å bestemme hvilke skjermstørrelser endringene skal skje ved, og bildene skaleres også dersom sidestørrelsen endres. 

### Node.js og NPM
Vi har installert node.js og brukt pakken create-react-app for å komme igang. Node er brukt som runtime environment, samt til å kjøre tester.

### Testing
Jest kommer ferdig oppsatt med create-react-app. I tillegg har vi brukt pakken react-test-renderer for å gjennomføre snapshot testing. Vi valgte å lage snapshot-test av App-komponenten da dette skaper et stort tre som dekker mye av strukturen. Første gang testen kjøres lages altså et snapshot, og senere tester vil lage et nytt snapshot som sammenlignes med det som allerede finnes. Slik så vi enkelt forandringer i treet ved nye commits, og om disse var med hensikt ble snapshoten oppdatert.

Testing av responsivt design ble utført på en Macbook, en Lenovo Ideapad, en Samsung Galaxy S7, en iPhone 6 samt en iPad Air 2. Siden fungerte som forventet på samtlige enheter, og ble også testet i fire ulike nettlesere, Google Chrome, Mozilla Firefox, Safari og Microsoft Edge. Alle nettleserne ga ønsket respons ved endring av vindusstørrelse og bruk av ulik funksjonalitet. Den eneste forskjellen mellom nettleserne var utformingen av lydavspilleren. HTML5 taggen <audio> støtter i utgangspunktet ikke CSS styling, og vi valgte å la den være med default-instillingene, da dette uansett fungerte godt med resten av designet vårt. Designforskjellen påvirket ikke websidens funksjonalitet, og vi anså det derfor av minimal betydning. Plassering av komponentene vertikalt nedover fungerte godt på mobil og iPad, og ved bytte til horisontal orientering på mobil oppførte websiden seg fremdeles som ønsket, og komponentene skalerte til den nye skjermbredden.

### Installasjon
Prosjektet er installert på virtuell maskin, etter oppskriften som ble lagt ut med oppgavebeskrivelsen. Det finnes på følgende adresse: <http://it2810-56.idi.ntnu.no/prosjekt2/>

