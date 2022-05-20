import React, {useState} from 'react';
import {Scoreboard} from './Scoreboard';
import {Settings} from "./Settings";

export type AppPropsType = {
    // startValue: number
    // maxValue: number
}

const App: React.FC<AppPropsType> = (props:AppPropsType) => {

    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    let [count, setCount] = useState<number>(startValue)
    const [isActive, setIsActive] = useState(true)
    const Inc = () => {
        if (count < maxValue) {
            setCount(count + 1)
        }
    }

    const Reset = () => {
        setCount(startValue)
    }
    const changeActiveStatus = () => {
        setIsActive(!isActive)
    }
    const onChangeMax = () => {
        setMaxValue(maxValue)
    }
    const onChangeStart = () => {
        setStartValue(startValue)
    }

    return (
        (isActive) ?
            <>
                <Scoreboard value={count}
                            Inc={Inc}
                            Reset={Reset}
                            startValue={startValue}
                            maxValue={maxValue}
                            changeActiveStatus={changeActiveStatus}
                />
            </> :
            <Settings changeActiveStatus={changeActiveStatus} maxValue={maxValue} onChangeMax={onChangeMax}
            onChangeStart={onChangeStart} startValue={startValue}/>
    );
}

export default App;
