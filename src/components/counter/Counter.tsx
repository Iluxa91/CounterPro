import React from 'react';
import style from './Counter.module.css'

type MeaningPropsType = {
    value: number
    maxValue: number
}

export const Counter: React.FC<MeaningPropsType> = ({value, maxValue}) => {
    let className = value === maxValue ? style.redText : style.classicText
    return (
        <div className={className}>
            {value}
        </div>
    )
}