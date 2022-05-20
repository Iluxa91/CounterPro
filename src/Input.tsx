import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './input.module.css'

type PropsType = {
    name: string
    onChange: (value:number)=>void
    value: number
}


// useEffect(()=>{
// let valueAsString = localStorage.getItem('counterValue')
//     if (valueAsString) {
//         let newValue = JSON.parse(valueAsString)
//         setValue(newValue)
//     }
// },[])
// useEffect(() => {
//     localStorage.setItem('counterValue', JSON.stringify(value))
// }, [value])


export const Input = (props: PropsType) => {

    const [error, setError] = useState(false)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(+e.currentTarget.value)

    }
    return (
        <div className={s.textcols}>
            <div className={s.text}>{props.name}</div>
            <input className={error ? s.error : s.input}
                   type="number" step="1"

                   onChange={onChangeHandler}/>
        </div>
    );
};
