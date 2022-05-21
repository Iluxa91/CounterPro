import React, {useEffect, useState} from 'react';
import {Scoreboard} from './Scoreboard';
import {Settings} from "./Settings";

const App = () => {

    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [count, setCount] = useState<number>(startValue)
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
        debugger
        setIsActive(!isActive)
        setCount(startValue)
    }
    const onChangeMax = (value: number) => {
        debugger
        setMaxValue(value)
    }
    const onChangeStart = (value: number) => {
        debugger
        setStartValue(value)
    }
    useEffect(() => {
        let maxValueAsString = localStorage.getItem('counterMaxValue')
        if (maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString)
            setMaxValue(newMaxValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterMaxValue', JSON.stringify(maxValue))
    }, [maxValue])

    useEffect(() => {
        let startValueAsString = localStorage.getItem('counterMaxValue')
        if (startValueAsString) {
            let newStartValue = JSON.parse(startValueAsString)
            setMaxValue(newStartValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterMaxValue', JSON.stringify(startValue))
    }, [startValue])

    return (
        (isActive) ?
            <Settings changeActiveStatus={changeActiveStatus}
                      onChangeMax={onChangeMax}
                      onChangeStart={onChangeStart}
                      maxValue={maxValue}
                      startValue={startValue}
            />
            : <>
                <Scoreboard startValue={startValue}
                            maxValue={maxValue}
                            value={count}
                            Inc={Inc}
                            Reset={Reset}
                            changeActiveStatus={changeActiveStatus}
                />
            </>
    );
}

export default App;
