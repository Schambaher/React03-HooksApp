import { useState } from "react"

interface useCounterReturnProps {
    counter: number;
    incrementCounter: (value: number) => void;
    decrementCounter: (value: number) => void;
    reset: () => void
}

export const useCounter = (initialValue: number = 0): useCounterReturnProps => {

    const [counter, setCounter] = useState(initialValue);

    const incrementCounter = (razon: number = 1) => {
        setCounter(counter + razon);
    }

    const decrementCounter = (razon: number = 1) => {
        setCounter(counter - razon);
    }

    const reset = () => {
        setCounter(initialValue)
    }


    return {
        counter,
        incrementCounter,
        decrementCounter,
        reset
    }

}