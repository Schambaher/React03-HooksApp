import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState<number>(10);
    
    const incrementar = useCallback(
        (value: number) => {
            setCounter(counter => counter + value);
    },[]);

    useEffect(() => {
    //   incrementar()
    }, [incrementar])
    


    // const incrementar = () => {
    //     setCounter(counter + 1);
    // }

    return (
        <>
            <h1>Callback Hook { counter }</h1>

            <hr />

            <ShowIncrement incrementar={incrementar} />
        </>
    )
}
