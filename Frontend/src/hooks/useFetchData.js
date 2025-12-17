import { useEffect, useState } from 'react';

export const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            try {
                if (isMounted) setIsLoading(true);
                const res = await fetch(url);
                const resData = await res.json();
                if (isMounted) setData(resData);
            } catch (error) {
                if (isMounted) setError(error);
            } finally {
                if (isMounted) setIsLoading(false);
            }
        };
        fetchData();
        return () => {
            isMounted = false;
        };
    }, [url]);

    return { data, isLoading, error };
};
