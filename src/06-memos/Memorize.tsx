import { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

export const Memorize = () => {

    const {counter, incrementCounter} = useCounter(1);
    const [show, setShow] = useState(true);

    return (
        <>
            <h1>Memorize  <Small counter={counter} /> </h1>
            <hr />

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
    );
}
