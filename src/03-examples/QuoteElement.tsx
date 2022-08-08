import { useLayoutEffect, useRef, useState } from "react"
import { Quote } from "./MultipleCustomHooks"

export const QuoteElement = ({ quote, author }: Quote) => {

    const [boxSize, setBoxSize] = useState({
        width: 0,
        height: 0
    });

    const pRef = useRef<HTMLParagraphElement>(null);

    useLayoutEffect(() => {

        if (pRef.current !== null) {
            const { width, height } = pRef.current?.getBoundingClientRect();

            setBoxSize({
                width,
                height
            })
        }
    }, [quote])

    return (
        <>
            <blockquote 
                className="blockquote text-end"
                style={{ display: 'flex' }}
            >
                <p ref={pRef} className="mb-3">{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>

            <code>{JSON.stringify(boxSize)}</code>
        </>
    )
}
