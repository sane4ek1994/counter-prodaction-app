import React, {useEffect, useState} from 'react';
import {Counter} from "./components/Counter/Counter";
import {SettingCounter} from "./components/SettingCounter/SettingCounter";
import s from './components//Counter/Counter.module.css'
import {Route, Routes} from "react-router-dom";


function App() {


    const [startCount, setStartCount] = useState(0);
    const [maxCount, setMaxCount] = useState(5);
    const [count, setCount] = useState(startCount);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const startValue = localStorage.getItem('startValue')
        const maxValue = localStorage.getItem('maxValue')

        if (maxValue) {
            setMaxCount(JSON.parse(maxValue))
        }
        if (startValue) {
            setStartCount(JSON.parse(startValue))
            setCount(JSON.parse(startValue))
        }
    }, [setMaxCount, setStartCount, setCount])
    const incCounter = () => {
        if (count < maxCount) {
            setCount(count + 1)
        }
        setErrorMessage('')
    }

    const resetCounter = () => {
        setCount(startCount)
    }

    const incErr = count >= maxCount

    return (
        <div className={s.wrapperCounter}>
            {/*<LsComponent/>*/}
            <Routes>
                <Route path={'/'} element={
                    <Counter count={count}
                             errorMessage={errorMessage}
                             incErr={incErr}
                             maxCount={maxCount}
                             startCount={startCount}
                             incCounter={incCounter}
                             resetCounter={resetCounter}
                             setMaxCount={setMaxCount}
                             setStartCount={setStartCount}
                             setCount={setCount}

                    />}/>
                <Route path={'/setting'} element={
                    <SettingCounter setCount={setCount}
                                    setErrorMessage={setErrorMessage}
                                    startCount={startCount}
                                    maxCount={maxCount} setStartCount={setStartCount}
                                    setMaxCount={setMaxCount}/>}/>
            </Routes>

        </div>
    );
}

export default App;
