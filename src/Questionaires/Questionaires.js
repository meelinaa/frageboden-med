import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export default function Questionaires() {
    const location = useLocation();
    const navigate = useNavigate();
    const questionnaire = location.state?.questionnaire;

    const startQuestions = () => {
        navigate(`/questionnaires/${questionnaire.id}/questions`, { state: {questionnaire}});
    }

    if (!questionnaire) return <div>Keine Daten gefunden!</div>;

    return (
        <div className="card">
            <h1>{questionnaire.theme}</h1>
            <h2>{questionnaire.title}</h2>
            <p>{questionnaire.description}</p>

            <button className="buttonsDesign" onClick={() => startQuestions(questionnaire)}>Start</button>
        </div>
    );
}
