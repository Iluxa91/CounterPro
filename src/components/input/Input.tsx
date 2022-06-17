import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './input.module.css'

type PropsType = {
    name: string
    onChange: (value: number) => void
    value:number
    isDisable:boolean
}

export const Input = (props: PropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(+e.currentTarget.value)
    }

    const className = props.isDisable ? s.error : s.input

    return (
        <div className={s.textcols}>
            <div className={s.text}>{props.name}</div>
            <input className={className}
                   type="number" step="1"
                   onChange={onChangeHandler}
                   value={props.value}
            />
        </div>
    );
};
