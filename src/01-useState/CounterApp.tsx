import { useState } from "react"

interface CounterProps {
    counter1: number;
    counter2: number;
    counter3: number;
}

export const CounterApp = () => {

    const [counter, setCounter] = useState<CounterProps>({
        counter1: 10,
        counter2: 20,
        counter3: 30
    });

    const {counter1, counter2, counter3} = counter;

    return (
        

        <>
            <h1>Counters: { `${counter1} - ${counter2} - ${counter3}` } </h1>
            <hr />

            <button
                className=" btn btn-primary" 
                onClick={() => setCounter({
                    ...counter,
                    counter1: counter1 + 1
                })}
            > 
                +1 counter1
            </button>

            <button
                className=" btn btn-primary ms-2" 
                onClick={() => setCounter({
                    ...counter,
                    counter2: counter2 + 5
                })}
            > 
                +5 counter2
            </button>

            <button
                className=" btn btn-primary ms-2"
                onClick={() => setCounter({
                    ...counter,
                    counter3: counter3 + 10
                })}
            > 
                +10 counter3
            </button>
        </>

    )
}
