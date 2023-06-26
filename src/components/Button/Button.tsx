import React, {ComponentPropsWithoutRef} from 'react';
import s from './Button.module.css'

type TButton = ComponentPropsWithoutRef<'button'>
const Button = ({disabled, className,children, ...restProps}: TButton) => {

    const finalClassName = `
     ${s.btn} ${disabled ? s.btnError : ''}
    `
    return (
        <button disabled={disabled} className={`${finalClassName} ${className}`} {...restProps}>{children}</button>
    );
};

export default Button;
