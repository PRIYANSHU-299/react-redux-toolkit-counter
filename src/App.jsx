import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {increment , decrement , incrementbyamount, decrementbyamount} from "./redux/features/counterslice"


const App = () => {

  const dispatch = useDispatch()

  const count = useSelector((state)=> state.counter.value)

  const [num, setnum] = useState(5)
  return (
    <div>
      <h1>{count}</h1>

      <button onClick={()=>{
        dispatch(increment())
      }}> Increment</button>

      <button onClick={()=>{
        dispatch(decrement())
      }}>Decrement</button>

      <input
      value={num}
      type="number"
       onChange={(e)=>{
        setnum(ParseInt(e.target.value))
       }} />

      <button onClick={()=>{
        dispatch(incrementbyamount(Number(num)))
      }}>Incrementbyamount</button>

      <button onClick={()=>{
        dispatch(decrementbyamount(Number(num)))
      }}>Decrementbyamount</button>
    </div>
  )
}

export default App
