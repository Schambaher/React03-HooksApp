import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heaveStuff = (iterationNumber: number = 100) => {
    for(let i = 0; i < iterationNumber; i++) {
        console.log('Ahi vamos...');
    }

    return `${iterationNumber} iteraciones realizadas`;
}

export const MemoHook = () => {

    const {counter, incrementCounter} = useCounter(100);
    const [show, setShow] = useState(true);

    const memorizedValue = useMemo(() => heaveStuff(counter), [counter]);

    return (
        <>
            <h1>Memorize  <small>{ counter }</small> </h1>
                <hr />

                <h4>{ memorizedValue }</h4>

                <button
                    onClick={() => incrementCounter(1)}
                    className="btn btn-primary"
                >
                    +1
                </button>

                <button
                    onClick={() => setShow(!show)}
                    className="btn btn-outline-primary ms-2"
                >
                    Show/hide {JSON.stringify(show)}
                </button>
        </>
    )
}
