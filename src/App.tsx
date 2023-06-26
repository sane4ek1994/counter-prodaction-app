import React, {useState} from 'react';
import {Counter} from "./components/Counter/Counter";
import {SettingCounter} from "./components/SettingCounter/SettingCounter";
import {LsComponent} from "./components/LocalStorage/LSComponent";
import s from './components//Counter/Counter.module.css'
import {Route, Routes} from "react-router-dom";


function App() {


    const [startCount, setStartCount] = useState(0);
    const [maxCount, setMaxCount] = useState(5);
    const [count, setCount] = useState(startCount);
    const [errorMessage, setErrorMessage] = useState('');

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
                             incCounter={incCounter}
                             resetCounter={resetCounter} maxCount={maxCount}
                             startCount={startCount}/>}/>
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
