import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Questions() {
    const location = useLocation();
    const navigate = useNavigate();
    const questionnaire = location.state?.questionnaire;
    
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);  
    const [count, setCount] = useState(0);

    const [result, setResult] = useState(null);
    const [resultLong, setResultLong] = useState(null);
    const [showEvaluation, setShowEvaluation] = useState(false);
    const [resultClass, setResultClass] = useState('');  

    const [progress, setProgress] = useState(100/questionnaire.questions.length);

    if (!questionnaire || !questionnaire.questions) {
        return <div>Loading...</div>; 
    };

    const currentQuestion = questionnaire.questions[currentQuestionIndex];

    const handleAnswerChange = (event) => {
        setSelectedAnswer(parseInt(event.target.value)); 
    };

    const handleBack = () => {
        setCount(count - selectedAnswer);
        setSelectedAnswer(null);
        setCurrentQuestionIndex(currentQuestionIndex - 1);
    };

    const handleNext = () => {
        if (selectedAnswer != null) {
            setCount(count + selectedAnswer);
            setSelectedAnswer(null);
            setProgress(progress + (100/questionnaire.questions.length));  // Dynamische Berechnung
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handleEvaluation = () => {
        if (questionnaire.id === 1) {
            if (count <= 8) {
                setResult("Keine Depression");
                setResultLong("Deine Antworten zeigen keine signifikanten Symptome einer Depression. Es könnte jedoch hilfreich sein, achtsam zu bleiben, falls sich die Symptome in der Zukunft ändern.");
                setResultClass('no');
            } else if (count <= 13) {
                setResult("Minimale Depression");
                setResultLong("Deine Antworten deuten auf erste Anzeichen einer Depression hin. Ein Gespräch mit einem Fachmann könnte dir helfen, besser mit deinen Gefühlen umzugehen.");
                setResultClass('minimal');
            } else if (count <= 19) {
                setResult("Leichte Depression");
                setResultLong("Es gibt deutliche Anzeichen einer leichten Depression. Eine frühzeitige Intervention, wie etwa Gesprächstherapie oder weitere Unterstützung, wird empfohlen.");
                setResultClass('mild');
            } else if (count <= 28) {
                setResult("Mittelschwere Depression");
                setResultLong("Deine Antworten zeigen eine mittelschwere Depression. Eine professionelle Behandlung wird dringend empfohlen, um deine Lebensqualität zu verbessern.");
                setResultClass('moderate');
            } else {
                setResult("Schwere Depression");
                setResultLong("Es scheint, dass du an einer schweren Depression leidest. Es ist sehr wichtig, sofort professionelle Hilfe in Anspruch zu nehmen, um deine Situation zu verbessern.");
                setResultClass('severe');
            }
        }
    
        else if (questionnaire.id === 2) {
            if (count <= 8) {
                setResult("Keine ADHS");
                setResultLong("Die Symptome deuten darauf hin, dass keine ADHS vorliegt. Es könnte hilfreich sein, weiterhin achtsam zu bleiben.");
                setResultClass('no');
            } else if (count <= 13) {
                setResult("Mögliche ADHS");
                setResultLong("Es gibt Hinweise auf mögliche ADHS-Symptome. Eine Untersuchung durch einen Fachmann wird empfohlen.");
                setResultClass('minimal');
            } else if (count <= 19) {
                setResult("Wahrscheinliche ADHS");
                setResultLong("Die Antworten weisen stark auf ADHS hin. Es wird eine umfassende Untersuchung empfohlen.");
                setResultClass('mild');
            } else {
                setResult("Sehr wahrscheinliche ADHS");
                setResultLong("Die Symptome sind sehr ausgeprägt und deuten eindeutig auf ADHS hin. Eine sofortige fachliche Beratung wird dringend empfohlen.");
                setResultClass('definite-adhd');
                setResultClass('moderate');
            }
        }
    
        else {
            setResult("Keine gültige ID.");
            setResultLong("Es konnte keine Auswertung durchgeführt werden.");
            setResultClass('error');
        }
    
        setShowEvaluation(true); 
    };
    
    const goHome = () => {
        setCount(0);  
        setSelectedAnswer(null);  
        setCurrentQuestionIndex(0);  
        setResult(null); 
        setResultLong(null); 
        setShowEvaluation(false);
        navigate(`/`);
    }

    return (
        <div className="questions">
            <div className="card">
                
                <div className="questions-top">
                    <div className="progress-bar">
                        <div className="bar"
                        style={{ 
                            width: `${progress}%`,
                            transition: 'width 0.5s ease'
                        }}>
                        </div>
                    </div>
                    <div>
                        <h1>{currentQuestion.text}</h1>
                        <p>{currentQuestion.id}/{questionnaire.questions.length}</p>
                    </div>
                </div>

                <div className="questions-answers">
                    <ul>
                        {currentQuestion.answers.map((answer, index) => (
                            <li key={index}>
                                <label>
                                    <input
                                        type="radio"
                                        name={`question-${currentQuestion.id}`}
                                        value={answer.score}
                                        checked={selectedAnswer === answer.score}
                                        onChange={handleAnswerChange}
                                    />
                                    {answer.text}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="questions-bottom">
                    {/*<button className="buttonsDesign" onClick={handleBack} disabled={currentQuestionIndex === 0}>Zurück</button>*/}
                    <button className="buttonsDesign" onClick={handleNext} disabled={currentQuestionIndex === questionnaire.questions.length - 1} >Weiter</button>
                    <button className="buttonsDesign" onClick={handleEvaluation} disabled={currentQuestionIndex < questionnaire.questions.length - 1}>Auswertung</button>
                </div>
            </div>

            {showEvaluation && (
                <div className="questions-evaulation">
                    <p id="count">{count}</p>
                    <h1 className={resultClass}>{result}</h1> 
                    <p>{resultLong}</p>
                    <button className="buttonsDesign" onClick={() => goHome()}>Neuer Test</button>
                </div> 
            )}
        </div>
    );
}

