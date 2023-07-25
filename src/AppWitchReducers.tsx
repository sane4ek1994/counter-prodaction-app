import {ChangeEvent} from 'react';
import {Counter} from "./components/Counter/Counter";
import {SettingCounter} from "./components/SettingCounter/SettingCounter";
import s from './components//Counter/Counter.module.css'
import {Route, Routes, useNavigate} from "react-router-dom";
import {
    incCounterAC,
    resetCounterAC, resetErrorMessageAC,
    setErrorMessageAC,
    setMaxCountAC,
    setStartCountAC, isCorrectedValueAC, TState
} from "./state/count-reducer";
import {useDispatch, useSelector} from "react-redux";
import {TAppRootState} from "./state/store";


function AppWitchReducers() {

    // const [state, dispatchCounter] = useReducer(countReducer,
    //     {start: 0, count: 0, max: 5, error: '', isCorrectedValue: false});
    const state = useSelector<TAppRootState, TState>((state) => state.count)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    // подправиить работу local storage с redux
    // useEffect(() => {
    //     const startValue = localStorage.getItem('startValue')
    //     const maxValue = localStorage.getItem('maxValue')
    //
    //     if (maxValue) {
    //         setMaxCount(JSON.parse(maxValue))
    //     }
    //     if (startValue) {
    //         setStartCount(JSON.parse(startValue))
    //         setCount(JSON.parse(startValue))
    //     }
    // }, [setMaxCount, setStartCount, setCount])

    const incCounter = () => {
        if (state.count < state.max) {
            dispatch(incCounterAC())
        }
        dispatch(resetErrorMessageAC())
    }

    const resetCounter = () => {
        dispatch(resetCounterAC())
    }

    const settingCount = () => {
        localStorage.setItem('startValue', JSON.stringify(state.start))
        localStorage.setItem('maxValue', JSON.stringify(state.max))
        dispatch(resetCounterAC())
        navigate('/')
    }


    const getStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value <= 0 || +e.currentTarget.value > state.max) {
            dispatch(setErrorMessageAC())
            dispatch(isCorrectedValueAC(true))
        } else {
            dispatch(resetErrorMessageAC())
            dispatch(isCorrectedValueAC(false))
        }
        dispatch(setStartCountAC(+e.currentTarget.value))
    }

    const getMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value < 0 || +e.currentTarget.value === state.start) {
            dispatch(setErrorMessageAC())
            dispatch(isCorrectedValueAC(true))
        } else {
            dispatch(resetErrorMessageAC())
            dispatch(isCorrectedValueAC(false))
        }
        dispatch(setMaxCountAC(+e.currentTarget.value))
    }

    const incErr = state.count >= state.max

    return (
        <div className={s.wrapperCounter}>
            {/*<LsComponent/>*/}
            <Routes>
                <Route path={'/'} element={
                    <Counter count={state.count}
                             errorMessage={state.error}
                             incErr={incErr}
                             maxCount={state.max}
                             startCount={state.start}
                             incCounter={incCounter}
                             resetCounter={resetCounter}

                    />}/>
                <Route path={'/setting'} element={
                    <SettingCounter
                        startCount={state.start}
                        maxCount={state.max}
                        isCorrectedValue={state.isCorrectedValue}
                        settingCount={settingCount}
                        getStartValue={getStartValue}
                        getMaxValue={getMaxValue}
                    />}/>
            </Routes>

        </div>
    );
}

export default AppWitchReducers;