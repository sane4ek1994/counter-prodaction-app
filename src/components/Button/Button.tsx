import React from 'react';
import s from './Button.module.css'

type TButton = {
    isError?: boolean
    callback: () => void
    children: React.ReactNode
}
const Button = ({isError,callback, children}: TButton) => {

    const finalClassName = `
     ${s.btn} ${isError ? s.btnError : ''}
    `
    return (
        <button disabled={isError} className={finalClassName} onClick={callback}>{children}</button>
    );
};

export default Button;
