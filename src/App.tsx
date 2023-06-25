import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {SettingCounter} from "./components/SettingCounter/SettingCounter";


function App() {


    const [startCount, setStartCount] = useState<number>(0);
    const [maxCount, setMaxCount] = useState<number>(5);
    const [count, setCount] = useState<number>(startCount);
    const [resetErr, setResetErr] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState(true);

    const incCounter = () => {
        if (count < maxCount) {
            setCount(count + 1)
            setResetErr(false)
        }
        return setResetErr(false)

    }

    const resetCounter = () => {
        setCount(startCount)
        setResetErr(true)
    }

    const incErr = count >= maxCount

    return (
    <div className="App">
        <SettingCounter setCount={setCount} setErrorMessage={setErrorMessage}  startCount={startCount} maxCount={maxCount} setStartCount={setStartCount} setMaxCount={setMaxCount}/>
        <Counter count={count} errorMessage={errorMessage}  incErr={incErr} resetErr={resetErr} incCounter={incCounter} resetCounter={resetCounter} />
    </div>
  );
}

export default App;
