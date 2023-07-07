import { useState } from "react"

export const Likebutton = () => {

    const [counter, setCounter] = useState(0)

    const handleClick = () => setCounter(prev => prev += 1);

    const setBg = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return '#' + randomColor
    }





    return (
        <>
            <button style={{ backgroundColor: { setBg } }} onClick={handleClick}> {counter} Likes</button>
        </>
    );
}
