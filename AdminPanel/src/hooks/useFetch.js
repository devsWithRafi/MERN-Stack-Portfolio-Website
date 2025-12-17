import { useCallback, useEffect, useState } from 'react';

export const useFetch = (Url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch(Url);
            if (!response.ok) throw new Error('Data Fetch error!');

            const resData = await response.json();
            setData(resData);
        } catch (error) {
            setError(error.message);
        }
    }, [Url]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, error, reFetch: fetchData };
};
