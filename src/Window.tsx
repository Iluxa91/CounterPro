import React from "react";

type WindowPropsType = {
    number: number
    className: string
}
export const Window = (props: WindowPropsType) => {
    return <div className={props.className}>{props.number}</div>
}
