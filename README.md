# Selbstbeurteilungsfragebogen: Depression, ADHS und Burnout 🧠

Dieses Projekt bietet eine interaktive Webanwendung, die Selbstbeurteilungsfragebögen zu den Themen **Depression**, **ADHS** und **Burnout** enthält. Benutzer können die Fragen beantworten und erhalten eine Auswertung, die auf ihren Antworten basiert.

## Features

- **Selbstbeurteilungsfragebogen:** Enthält spezifische Fragen zu Depression, ADHS und Burnout.
- **Auswertung:** Die Antworten der Benutzer werden analysiert, und es wird eine Bewertung der Schwere der Symptome angezeigt (z. B. keine Depression, leichte Symptome, schweres Burnout).
- **Interaktive Oberfläche:** Benutzerfreundliches Design mit einfacher Navigation durch die Fragebögen.
- **Fortschrittsanzeige:** Eine visuelle Anzeige, die den Fortschritt während der Bearbeitung darstellt.
- **JSON-Daten:** Dynamisches Laden der Fragebögen und Ergebnisse über eine lokale JSON-API.

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
    git clone <repository-url>
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

 