import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Child = () => {

    const counter = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <>
            <div>Count: {counter}</div>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Increase</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrease</button>
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        </>

    )
}

export default Child