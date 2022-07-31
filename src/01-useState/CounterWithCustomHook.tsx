import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const { counter, incrementCounter, decrementCounter, reset } = useCounter(10)

    return (
        <>
        
            <h1>CounterWithCustomHook: { counter }</h1>

            <hr />

            <button
                onClick={ () => incrementCounter(1) }
                className="btn btn-primary">+1</button>

            <button
                onClick={ reset } 
                className="btn btn-secondary ms-2">reset</button>

            <button
                onClick={() => decrementCounter(2)} 
                className="btn btn-danger ms-2">-1</button>

        </>
    )
}
