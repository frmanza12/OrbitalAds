import { useState, useEffect, useCallback } from "react";

const useFetch = (url: string,) => {
    const [fetchedData, setFetchedData] = useState({
        data: [],
        isLoading: true,
        error: false,
    })

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setFetchedData({
                data: data.results ? data.results : data,
                isLoading: false,
                error: false,
            })
        } catch (error) {
            setFetchedData({
                data: [],
                isLoading: false,
                error: true,
            })
        }
    }, [url])


    useEffect(() => {
        fetchData();
    }, [url, fetchData])

    const { data, isLoading, error } = fetchedData;
    return { data, isLoading, error };

}

export default useFetch;
