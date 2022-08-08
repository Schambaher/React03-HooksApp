import { useEffect, useState } from "react"

interface useFetchProps<T> {
    data: T | null;
    isLoading: boolean;
    hasError: null;
}

export const useFetch = <T>(url: string): useFetchProps<T> => {

    const [state, setState] = useState<useFetchProps<T>>({
        isLoading: true,
        data: null,
        hasError: null
    });
    
    const getFetch = async() => {

        setState({
            ...state,
            isLoading: true
        })

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            ...state,
            data: data,
            isLoading: false
        });
    }


    useEffect(() => {
        getFetch();
    }, [url]);
    
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };

}