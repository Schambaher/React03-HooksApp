import React, { FC } from "react";

interface SmallProps {
    counter: number;
}

export const Small: FC<SmallProps> = React.memo(({counter}) => {

    console.log("me volví a generar :(");
    return (
        <small>{ counter }</small>
    )
})
