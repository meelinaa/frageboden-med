# Selbstbeurteilungsfragebogen: Depression und ADHS 🧠

<img src="/README-Images/banner.png" alt="Beschreibung" style="width: 100%; display: block;">

Dieses Projekt bietet eine interaktive Webanwendung, die Selbstbeurteilungsfragebögen zu den Themen **Depression** und **ADHS** enthält. Benutzer können die Fragen beantworten und erhalten eine Auswertung, die auf ihren Antworten basiert.

## Features

- **Selbstbeurteilungsfragebogen:** Enthält spezifische Fragen zu Depression und ADHS.
- **Auswertung:** Die Antworten der Benutzer werden analysiert, und es wird eine Bewertung der Schwere der Symptome angezeigt (z. B. keine Depression, leichte Symptome, hohe ADHS Wahrscheinlichkeit).
- **Interaktive Oberfläche:** Benutzerfreundliches Design mit einfacher Navigation durch die Fragebögen.
- **Fortschrittsanzeige:** Eine visuelle Anzeige, die den Fortschritt während der Bearbeitung darstellt.
- **JSON-Daten:** Dynamisches Laden der Fragebögen und Ergebnisse über eine lokale JSON-API.

---

## Screenshots

1. **Home-Seite:** Übersicht der Anwendung und Navigation zu den Fragebögen.

<img src="/README-Images/Home.png" alt="Home-Seite" style="width: 100%; display: block;">

2. **Info-Seite:** Details und Informationen über die Fragebögen.

<img src="/README-Images/Depression1.png" alt="Info-Seite" style="width: 50%; display: flex;">
<img src="/README-Images/Adhs1.png" alt="Info-Seite" style="width: 50%; display: flex;">

3. **Frageseite:** Darstellung einer Frage mit Fortschrittsanzeige und Antwortoptionen.

<img src="/README-Images/Test.png" alt="Frageseite" style="width: 50%; display: block;">

4. **Auswertungsseite:** Analyse der Antworten und Interpretation der Ergebnisse.

<img src="/README-Images/Auswertung.png" alt="Auswertung" style="width: 50%; display: block;">

---

## Projektstruktur

- **Frontend:** 
  - React für die dynamische und reaktionsschnelle Benutzeroberfläche.
- **State Management:** 
  - Verwaltung des Anwendungszustands mit React Hooks (`useState`, `useEffect`).
- **Styling:** 
  - Nutzung von CSS für eine klare und ansprechende Gestaltung.
- **Routing:** 
  - Navigation zwischen Fragebögen und Ergebnissen mit React Router.
- **JSON-API:** 
  - Lokale API unter `http://localhost:8000/questionnaires` für Fragebogendaten.

---

## Technologien

- ⚛️ **Frontend:** React (JavaScript ES6+, HTML, CSS)  
  Entwickelt für eine interaktive und reaktionsschnelle Benutzererfahrung.
- 🗄️ **Daten:** JSON-Daten, bereitgestellt über einen JSON-Server.
- 🌐 **Routing:** React Router für einfache Navigation.
- 🎨 **Design:** Fortschrittsanzeige und intuitive Darstellung der Ergebnisse.

---

## Software-Entwicklung und Planung

Dieses Projekt wurde von Grund auf selbst entwickelt und enthält:

- **Planung und Architektur:** Aufbau der Benutzeroberfläche und Implementierung der Anwendungslogik.
- **Agile Entwicklung:** Iterative Umsetzung der Funktionen mit einem klaren Fokus auf Benutzerfreundlichkeit.
- **Lernfokus:** Ziel des Projekts war es, fortgeschrittene Konzepte in React zu vertiefen, darunter State Management, Routing und API-Integration.

---

## Lokale Installation und Ausführung

### 1. Projekt klonen
Klonen Sie das Repository auf Ihre lokale Maschine:
```bash
    git clone https://github.com/meelinaa/frageboden-med.git
    cd fragebogen-med
```

### 2. Abhängigkeiten installieren
Installieren Sie alle benötigten Abhängigkeiten:
```bash
    npm install
```

### 3. JSON-Server starten
Starten Sie den JSON-Server, um die Fragebogendaten bereitzustellen:
```bash
    npx json-server --watch fragebogen\fragebogen.json --port 8000
```

### 4. Projekt starten
Starten Sie die React-Anwendung:
```bash
    npm start
```
Die Anwendung ist nun unter http://localhost:3000 verfügbar.

 ---

 ## Anwendung

### Fragebögen
Navigieren Sie durch die verschiedenen Fragebögen (Depression, ADHS). Jede Frage kann mit Radio-Buttons beantwortet werden.

### Fortschrittsanzeige
Sehen Sie jederzeit Ihren Fortschritt während der Bearbeitung.

### Auswertung
Am Ende des Fragebogens erhalten Sie eine Analyse, die Ihre Antworten interpretiert und die Schwere der Symptome darstellt.

---

## Lizenz

Dieses Projekt steht unter der [MIT-Lizenz](LICENSE). Sie können den Quellcode frei verwenden, ändern und weitergeben.

---

## Kontakt

Für Fragen oder Feedback kontaktieren Sie mich über [E-Mail](mailto:melinakiefer@hotmail.de) oder GitHub. Ich freue mich auf Ihre Rückmeldung!
