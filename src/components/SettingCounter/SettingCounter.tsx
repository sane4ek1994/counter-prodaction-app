import React, {ChangeEvent, useState} from 'react';
import s from "../Counter/Counter.module.css";
import Button from "../Button/Button";
import {Input} from "../Input/Input";


type TSettingCounter = {
    startCount: number
    maxCount: number
    setErrorMessage: (val: boolean) => void
    setStartCount: (val: number) => void
    setMaxCount: (val: number) => void
    setCount: (val: number) => void
}
export const SettingCounter = (props: TSettingCounter) => {
    const {startCount, maxCount,setErrorMessage, setStartCount, setMaxCount, setCount} = props

    const [isCorrectedValue, setIsCorrectedValue] = useState(false);


    const getStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value < 0 || +e.currentTarget.value > maxCount) {
            setErrorMessage(false)
            setIsCorrectedValue(true)
            return
        }
        setStartCount(+e.currentTarget.value)
        setErrorMessage(true)
        setIsCorrectedValue(false)
    }

    const getMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value <= 0 || +e.currentTarget.value  === startCount) {
            setErrorMessage(false)
            setIsCorrectedValue(true)
            return
        }
        setMaxCount(+e.currentTarget.value)
        setErrorMessage(true)
        setIsCorrectedValue(false)
    }

    const settingCount = () => {
        setCount(startCount)
    }

    const finalClassName = `
        ${s.input}
        ${isCorrectedValue ? s.inputErr : ''}
    `

    return (
        <div>
            <div className={s.wrapperCounter}>

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
                    <Button callback={settingCount}>setting</Button>
                </div>
            </div>
        </div>
    );
};


