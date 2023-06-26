import React from 'react';
import Button from "../Button/Button";
import s from './Counter.module.css'
import { useNavigate } from 'react-router-dom';

type TCounter = {
    startCount: number
    maxCount: number
    count: number
    incErr: boolean
    errorMessage: string
    incCounter: () => void
    resetCounter: () => void
}

export const Counter: React.FC<TCounter> = (props) => {
    const {count,startCount, maxCount, incErr,errorMessage, incCounter, resetCounter} = props

    const navigate = useNavigate();

    const handleClickNavigate = () => {
        navigate('/setting');
    }

    const finalClassName = `
        ${s.counter}
        ${incErr ? s.counterError : ''}
    `
    return (
        <div >
            <div className={finalClassName}>{errorMessage ?  errorMessage : count}</div>
            <div className={s.wrapperButton}>
                <Button disabled={count >= maxCount} onClick={incCounter}>inc</Button>
                <Button disabled={errorMessage !=='' || count === startCount} onClick={resetCounter}>reset</Button>
                <Button onClick={handleClickNavigate}>setting</Button>
            </div>
        </div>
    );
};


