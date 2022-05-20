import React from 'react';
import {Button} from "./Button";
import s from './settings.module.css'
import {Input} from "./Input";

type PropsType = {
    changeActiveStatus: () => void
    onChangeMax: (value:number)=>void
    maxValue:number
    onChangeStart: () => void
    startValue: number
}
// const addItem = () => {
//     if (value > 0) {
//         props.addItem(value);
//     } else {
//         setError(true)
//     }
// }
export const Settings = (props: PropsType) => {
    return (
        <div className={s.settings}>
            <div className={s.values}>
                <div>
                    <Input name='MAX VALUE:' onChange={props.onChangeMax} value={props.maxValue}/>
                    <Input name='START VALUE:' onChange={props.onChangeStart} value={props.startValue}/>
                </div>

            </div>
            <div className={s.buttons}>
                <Button name='SET' callBack={props.changeActiveStatus}/>
            </div>
        </div>
    );
};
