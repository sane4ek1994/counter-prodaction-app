import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";


function App() {

    const minCount = 0
    const  maxCount = 5

    const [count, setCount] = useState<number>(minCount);
    const [resetErr, setResetErr] = useState<boolean>(true);

    const incCounter = () => {
        if (count < maxCount) {
            setCount(count + 1)
            setResetErr(false)
        }
        return setResetErr(false)

    }

    const resetCounter = () => {
        setCount(minCount)
        setResetErr(true)
    }
    const incErr = count >= maxCount
    return (
    <div className="App">
        <Counter count={count}  incErr={incErr} resetErr={resetErr} incCounter={incCounter} resetCounter={resetCounter} />
    </div>
  );
}

export default App;
