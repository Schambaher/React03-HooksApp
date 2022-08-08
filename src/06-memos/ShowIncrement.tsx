import React, { FC } from "react";

interface ShowIncrementProps {
    incrementar: (value: number) => void;
}

export const ShowIncrement: FC<ShowIncrementProps> = React.memo(({ incrementar }) => {

    console.log('Me volví a generar :(');

    return (
        <button
            onClick={() => incrementar(5)}
            className="btn btn-primary"
        >
            Incrementar
        </button>
    )
});
