import React, {useEffect, useState} from 'react';

export const LsComponent = () => {

    const [inc, setInc] = useState(0);

    useEffect(() => {
        const newValue = localStorage.getItem('incValue')
        if (newValue) {
            setInc(JSON.parse(newValue))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('incValue', JSON.stringify(inc))
    }, [inc])


    const incNum = () => {
        setInc(inc + 1)
    }

    // const setLSValue = () => {
    //     localStorage.setItem('incValue', JSON.stringify(inc))
    // }
    //
    // const getLSValue = () => {
    //    const newValue = localStorage.getItem('incValue')
    //     if (newValue) {
    //         setInc(JSON.parse(newValue))
    //     }
    // }
    // const clearLSValue =() => {
    //     localStorage.clear()
    // }


    return (
        <div>
            <h1>{inc}</h1>
            <button onClick={incNum}>inc+</button>
            {/*<button onClick={() => setInc(0)}>reset</button>*/}
            {/*<button onClick={setLSValue}>set LS inc</button>*/}
            {/*<button onClick={getLSValue}>get LS inc</button>*/}
            {/*<button onClick={clearLSValue}>clear LS inc</button>*/}
        </div>
    );
};