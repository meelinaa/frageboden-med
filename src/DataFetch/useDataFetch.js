import { useEffect, useState } from "react";

export default function useDataFetch() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/questionnaires')
        .then(response => {
            if(!response.ok){
                throw new Error("Couldnt fetch the data");
            }
            return response.json();
        })
        .then(data => {
            setData(data);
            setLoading(false);
        })
        .catch(error => {
            setError(error.message);
            setLoading(false);
        })
    }, []);
    
    return ({data, error, loading});
}
