import React from 'react';
import {Button} from '../button/Button';
import {Counter} from '../counter/Counter';
import style from './Scoreboard.module.css'

export type ScoreboardPropsType =  {
    value: number
    inc: () => void
    reset: () => void
    changeActiveStatus: () => void
    startValue:number
    maxValue:number
}

export const Scoreboard: React.FC<ScoreboardPropsType> =
    ({value, inc, reset, startValue, maxValue,changeActiveStatus}) => {
        return (
            <div className={style.scoreboard}>
                <div className={style.counter}>
                    <Counter value={value} maxValue={maxValue}/>
                </div>
                <div className={style.buttons}>
                    <Button name={'INC'}
                            onClick={inc}
                            disabled={value === maxValue}/>
                    <Button name={'RES'}
                            onClick={reset}
                            disabled={value === startValue}/>
                    <Button
                        name={'SET'}
                        onClick={changeActiveStatus}/>
                </div>
            </div>
        )
    }
