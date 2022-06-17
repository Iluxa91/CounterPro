import React from 'react';
import style from './Button.module.css'

type ButtonPropsType = {
    name: string
    onClick: () => void //onClick
    disabled?: boolean
}

export const Button: React.FC<ButtonPropsType> = ({name, onClick, disabled}) => {
    return (
        <>
            <button
                className={style.button}
                onClick={onClick}
                disabled={disabled}
            >
                {name}
            </button>
        </>
    )
}