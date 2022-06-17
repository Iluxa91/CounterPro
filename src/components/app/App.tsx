import React from 'react';
import {Scoreboard} from '../scoreboard/Scoreboard';
import {Settings} from "../settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerStateType} from "../../bll/store";
import {
    incValueAC,
    InitialStateType,
    onOffInputAC,
    resetValueAC,
    setMaxValueAC,
    setStartValueAC
} from "../../bll/counter-reducer";

const App = () => {

    let counter = useSelector<RootReducerStateType, InitialStateType>(state => state.counter)
    let dispatch = useDispatch()
    // const [maxValue, setMaxValue] = useState<number>(0)
    // const [startValue, setStartValue] = useState<number>(0)
    // const [count, setCount] = useState<number>(startValue)
    // const [isActive, setIsActive] = useState(true)
    const inc = () => {
        if (counter.count < counter.maxValue) {
            dispatch(incValueAC())
            // setCount(count + 1)
        }
    }

    const reset = () => {
        // setCount(startValue)
        dispatch(resetValueAC())
    }
    const changeActiveStatus = () => {
        // setIsActive(!isActive)
        // setCount(startValue)
        dispatch(onOffInputAC())
        dispatch(resetValueAC())

    }
    const onChangeMax = (value: number) => {
        // setMaxValue(value)
        dispatch(setMaxValueAC(value))
    }
    const onChangeStart = (value: number) => {
        // setStartValue(value)
        dispatch(setStartValueAC(value))
    }
    // useEffect(() => {
    //     let maxValueAsString = localStorage.getItem('counterMaxValue')
    //     if (maxValueAsString) {
    //         let newMaxValue = JSON.parse(maxValueAsString)
    //         setMaxValue(newMaxValue)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('counterMaxValue', JSON.stringify(maxValue))
    // }, [maxValue])
    //
    // useEffect(() => {
    //     let startValueAsString = localStorage.getItem('counterMaxValue')
    //     if (startValueAsString) {
    //         let newStartValue = JSON.parse(startValueAsString)
    //         setStartValue(newStartValue)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('counterStartValue', JSON.stringify(startValue))
    // }, [startValue])

    return (
        (counter.isActive) ?
            <Settings changeActiveStatus={changeActiveStatus}
                      onChangeMax={onChangeMax}
                      onChangeStart={onChangeStart}
                      maxValue={counter.maxValue}
                      startValue={counter.startValue}
            />
            : <>
                <Scoreboard startValue={counter.startValue}
                            maxValue={counter.maxValue}
                            value={counter.count}
                            inc={inc}
                            reset={reset}
                            changeActiveStatus={changeActiveStatus}
                />
            </>
    );
}

export default App;
