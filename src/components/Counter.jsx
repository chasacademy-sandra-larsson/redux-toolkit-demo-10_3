import {useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import store from "./../store/index"
import {increment, decrement, valueToAdd, reset} from "./../store/slices/counterSlice"


function Counter() {
       const [input, setInput] = useState("")

       const count = useSelector((state) => state.counter.value)
       const dispatch = useDispatch()

       console.log("hela alltet", store.getState())

        const handleChange = (event) => {
            setInput(event.target.value)

        }

        const handleSubmit = (event) => {
                //dispatch
                event.preventDefault()
                dispatch(valueTo(input))
        }

        const handleIncrement = () => {
                //dispatch
                dispatch(increment())

        }

        const handleDecrement = () => {
                //dispatch
                dispatch(decrement())

        }

        const handleReset = () => {
                //dispatch
                dispatch(reset())

        }



    return(
        <>
        <h1>Counter</h1>
        <p>Count is {count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        <form onSubmit={handleSubmit}>
            <input type="number" onChange={handleChange} value={input}/>
            <button type="submit">Value to add</button>
        </form>
        </>
    ) 
}

export default Counter