# Depression, ADHS und Burnout Selbstbeurteilungsfragebogen

Dies ist ein Webprojekt, das verschiedene Selbstbeurteilungsfragebögen zur Erkennung von **Depression**, **ADHS** und **Burnout** enthält. Die Benutzer können die Fragen ausfüllen und erhalten eine Auswertung basierend auf ihren Antworten. 

## Features
- **Selbstbeurteilungsfragebogen**: Der Fragebogen enthält Fragen zu den Themen Depression, ADHS und Burnout.
- **Evaluierung**: Basierend auf den Antworten der Benutzer wird eine Auswertung bereitgestellt, die die Schwere der Symptome angibt (z.B. keine Depression, minimale Depression, schwere ADHS).
- **Interaktive Benutzeroberfläche**: Die Benutzer können die Fragen durchgehen und ihre Antworten auswählen. Am Ende wird ihnen eine detaillierte Auswertung angezeigt.
- **Progress-Bar**: Während der Beantwortung der Fragen wird der Fortschritt visuell dargestellt.

## Technologien
- **React**: Für die Erstellung der Benutzeroberfläche und das Handling der Logik.
- **CSS**: Für das Styling und die visuelle Gestaltung.
- **React Router**: Zur Navigation zwischen den verschiedenen Fragen und Auswertungsseiten.
- **State Management**: Nutzung von React Hooks (`useState`, `useEffect`) für die Verwaltung des Zustands.

## Setup

### 1. Projekt klonen
Klonen Sie das Repository auf Ihre lokale Maschine:
git clone <repository-url>

### 2. Abhängigkeiten installieren
Navigieren Sie in das Projektverzeichnis und installieren Sie alle benötigten Abhängigkeiten:
cd <fragebogen-med>
npm install

### 3. Projekt starten
Starten Sie das Projekt lokal:
npm start

Das Projekt läuft nun auf http://localhost:3000.

## Anwendung

- **Fragebögen**: Der Benutzer kann durch verschiedene Fragebögen navigieren. Jeder Fragebogen (z.B. Depression, ADHS) enthält Fragen, die anhand von Radio-Buttons beantwortet werden können.
- **Auswertung**: 