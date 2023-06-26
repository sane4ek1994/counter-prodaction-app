import React, {useEffect} from 'react';
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
    setMaxCount: (val: number) => void
    setStartCount: (val: number) => void
    setCount: (val: number) => void

}

export const Counter: React.FC<TCounter> = (props) => {
    const {count,startCount,setCount,setStartCount,setMaxCount, maxCount, incErr,errorMessage, incCounter, resetCounter} = props

    const navigate = useNavigate();

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
    }, [])
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


