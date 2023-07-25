import {ChangeEvent} from 'react';
import s from "../Counter/Counter.module.css";
import Button from "../Button/Button";
import {Input} from "../Input/Input";


type TSettingCounter = {
    isCorrectedValue: boolean
    startCount: number
    maxCount: number
    settingCount: () => void
    getStartValue: (val: ChangeEvent<HTMLInputElement>) => void
    getMaxValue: (val: ChangeEvent<HTMLInputElement>) => void

}
export const SettingCounter = (props: TSettingCounter) => {
    const {startCount, maxCount, isCorrectedValue, settingCount, getStartValue, getMaxValue} = props


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


