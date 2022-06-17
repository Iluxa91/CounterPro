import React, {useState} from 'react';
import {Button} from "../button/Button";
import s from './settings.module.css'
import {Input} from "../input/Input";

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
                        onClick={props.changeActiveStatus}
                        disabled={isDisable}
                />
            </div>
        </div>
    );
};
