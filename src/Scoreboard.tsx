import React from 'react';
import {Button} from './Button';
import {Counter} from './Counter';
import style from './Scoreboard.module.css'

export type ScoreboardPropsType =  {
    value: number
    Inc: () => void
    Reset: () => void
    changeActiveStatus: () => void
    startValue:number
    maxValue:number
}

export const Scoreboard: React.FC<ScoreboardPropsType> =
    ({value, Inc, Reset, startValue, maxValue,changeActiveStatus}) => {
        return (
            <div className={style.scoreboard}>
                <div className={style.counter}>
                    <Counter value={value} maxValue={maxValue}/>
                </div>
                <div className={style.buttons}>
                    <Button name={'INC'}
                            callBack={Inc}
                            disabled={value === maxValue}/>
                    <Button name={'RES'}
                            callBack={Reset}
                            disabled={value === startValue}/>
                    <Button name={'SET'} callBack={changeActiveStatus}/>
                </div>
            </div>
        )
    }
