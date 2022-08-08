import { useCounter, useFetch } from "../hooks";
import { Loading, QuoteElement } from "../03-examples";

export interface Quote {
    quote_id: number;
    quote: string;
    author: string;
} 

export const Layout = () => {
    
    const {counter, incrementCounter} = useCounter(1);
    const {data, isLoading} = useFetch<Quote[]>(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    if (data === null) {
        return(
            <></>
        )
    }
    const {quote_id, author, quote} = data[0];

    return (
        <>
            <h1>BreakingBad quotes</h1>

            <hr />

            {
                isLoading 
                    ? <Loading />
                    : <QuoteElement quote_id={quote_id} quote={quote} author={author} />
            }

            <button
                disabled={isLoading}
                onClick={() => incrementCounter(1)}
                className="btn btn-primary mt-3"
            >
                Next Quote
            </button>
            
        </>
    )
}
