import { useState } from "react"

export const Likebutton = () => {

    const [counter, setCounter] = useState(0)

    const handleClick = () => setCounter(prev => prev += 1);

    // const setBg = () => {
    //     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    //     return '#' + randomColor
    // }

    const colours = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    const colors = () => {
        colours[Math.floor(Math.random() * colours.length)]
        return colours
    }



    return (
        <>
            <button style={{ backgroundColor: { colors } }} onClick={handleClick}> {counter} Likes</button>
        </>
    );
}
