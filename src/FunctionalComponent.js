import React, { useState, useRef, useEffect } from 'react'

const FunctionalComponent = () => {

    const inputRef = useRef(null);
    /* const divRef = useRef(null); */
    const [counter, setCounter] = useState(0);
    const [text, setText] = useState("");
    const value = useRef(0);
    console.log('value', value);

    useEffect(() => {
        console.log('useEffect')
        //return
    }, [counter])

    const increase = () => {
        setCounter(counter + 1);
        value.current = value.current + 1;
    }
    const decrease = () => {
        setCounter(counter - 1);
    }

    const changeBGColor = () => {
        // console.log(inputRef.current.value)
        /* const newInput = document.querySelector('input');
        console.log(newInput);
        newInput.style.backgroundColor = text; */
        inputRef.current.parentElement.style.backgroundColor = text;
    }

    const handleText = (e) => {
        setText(e.target.value);
    }

    /*  const onDivBorder = () => {
         divRef.current.style.border = "10px solid black";
     } */
    return (
        <div className="function" /* ref={divRef} */>
            <h2>Functional Component</h2>
            <p>Counter: {counter}</p>
            <button onClick={() => increase()}>Increase</button>
            <button onClick={() => decrease()}>Decrease</button>
            <hr />
            <input id="new" ref={inputRef} type='text' value={text} onChange={handleText} />
            <button onClick={() => changeBGColor()}> BG Color</button>
            {/* <button onClick={() => onDivBorder()}> Border</button> */}
        </div>
    )
}

export default FunctionalComponent
