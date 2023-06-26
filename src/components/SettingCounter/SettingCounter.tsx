import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "../Counter/Counter.module.css";
import Button from "../Button/Button";
import {Input} from "../Input/Input";
import {useNavigate} from "react-router-dom";


const error = 'Incorrect value!'
type TSettingCounter = {
    startCount: number | string
    maxCount: number
    setErrorMessage: (val: string) => void
    setStartCount: (val: number ) => void
    setMaxCount: (val: number) => void
    setCount: (val: number) => void
}
export const SettingCounter = (props: TSettingCounter) => {
    const {startCount, maxCount,setStartCount, setErrorMessage, setMaxCount, setCount} = props
    const [isCorrectedValue, setIsCorrectedValue] = useState(false);

    const navigate = useNavigate()




    const getStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(+e.currentTarget.value)
        if (+e.currentTarget.value <= 0 || +e.currentTarget.value > maxCount) {
            setErrorMessage(error)
            setIsCorrectedValue(true)
        } else {
            setErrorMessage('')
            setIsCorrectedValue(false)
        }
        setStartCount(+e.currentTarget.value)
    }

    const getMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value < 0 || +e.currentTarget.value === startCount) {
            setErrorMessage(error)
            setIsCorrectedValue(true)
        } else {
            setErrorMessage('')
            setIsCorrectedValue(false)
        }
        setMaxCount(+e.currentTarget.value)
    }

    const settingCount = () => {
        localStorage.setItem('startValue', JSON.stringify(startCount))
        localStorage.setItem('maxValue', JSON.stringify(maxCount))
        setCount(+startCount)
        navigate('/')
    }

    const finalClassName = `
        ${s.input}
        ${isCorrectedValue ? s.inputErr : ''}
    `

    return (
        <>
            <div className={s.wrapperInput}>max value:
                <Input className={finalClassName} type="number"
                       value={maxCount} onChange={getMaxValue}/>
            </div>

            <div className={s.wrapperInput}>start value:
                <Input className={finalClassName} type="number"
                       value={startCount}
                       onChange={getStartValue}/>
            </div>
            <div className='wrapperButton'>
                <Button onClick={settingCount}>setting</Button>
            </div>

        </>
    );
};


