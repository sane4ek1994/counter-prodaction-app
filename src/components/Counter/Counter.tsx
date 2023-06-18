import React from 'react';
import Button from "../Button/Button";
import s from './Counter.module.css'

type TCounter = {
    count: number
    incErr: boolean
    resetErr: boolean
    incCounter: () => void
    resetCounter: () => void
}

export const Counter: React.FC<TCounter> = (props) => {
    const {count, incErr, resetErr, incCounter, resetCounter} = props

    const finalClassName = `
        ${s.counter}
        ${incErr ? s.counterError : ''}
    `
    return (
        <div className={s.wrapperCounter}>
            <div className={finalClassName}>{count}</div>
            <div className='wrapperButton'>
                <Button isError={incErr} callback={incCounter}>inc</Button>
                <Button isError={resetErr} callback={resetCounter}>reset</Button>
            </div>
        </div>
    );
};


