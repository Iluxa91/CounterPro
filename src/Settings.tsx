import React, {useState} from 'react';
import {Button} from "./Button";
import s from './settings.module.css'
import {Input} from "./Input";

type PropsType = {
    changeActiveStatus: () => void
    onChangeMax: (value: number) => void
    maxValue: number
    startValue: number
    onChangeStart: (value: number) => void
}

export const Settings = (props: PropsType) => {
    let isDisable = (props.maxValue === props.startValue || props.maxValue < props.startValue ||
        props.maxValue < 1 || props.startValue < 0)

    return (
        <div className={s.settings}>
            <div className={s.values}>
                <div>
                    <Input name='MAX VALUE:'
                           onChange={props.onChangeMax}
                           value={props.maxValue}
                           isDisable={isDisable}
                    />
                    <Input name='START VALUE:'
                           onChange={props.onChangeStart}
                           value={props.startValue}
                           isDisable={isDisable}
                    />
                </div>

            </div>
            <div className={s.buttons}>
                <Button name='SET'
                        callBack={props.changeActiveStatus}
                        disabled={isDisable}
                />
            </div>
        </div>
    );
};
