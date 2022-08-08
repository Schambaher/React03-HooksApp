import React, { FC } from "react";

interface HijoProps {
    numero: number;
    incrementar: (numero: number) => void
}

export const Hijo: FC<HijoProps> = React.memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary ms-2"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})