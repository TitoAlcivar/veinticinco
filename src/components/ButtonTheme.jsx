import React from "react"

export const ButtonTheme = ({setCounter, counter}) => {

    const handleClick = () => {
        setCounter(prev => prev  === 'light' ? 'dark' : 'light');
    };

    return (
        <>
            <button className={counter} onClick={handleClick}>{counter}</button>
        </>
    )
}
