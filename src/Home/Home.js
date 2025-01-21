import React from 'react';
import useDataFetch from '../DataFetch/useDataFetch';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    
    const { data, error, loading } = useDataFetch();
    const navigate = useNavigate();

    const handleClick = (id) => {
        const questionnaire = data.find(q => q.id === id);  
        navigate(`/questionnaires/${id}`, { state: { questionnaire } }); 
    };

    if (loading) return <div>Loading...</div>;

    if (error) return <div>Error: {error}</div>;
    
    return (
        <div className='card'>
            <div className="home-top">
                <h1>Hey, wie geht’s dir wirklich?</h1>
                <p>Lass es uns gemeinsam herausfinden.</p>
            </div>
            <div className='home-btns'>
                {data && (
                    data.map(quest => (
                        <button  className="buttonsDesign" key={quest.id} onClick={() => handleClick(quest.id)} >{quest.theme}</button>
                    ))
                )}
            </div>
        </div>
    )
}
