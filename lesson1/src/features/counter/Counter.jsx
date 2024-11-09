import {useSelector,useDispatch} from "react-redux";
import { increment,decrement,reset,incrementByAmount } from "./counterSlice";
import { useState } from "react";


const Counter = () => {
  const count = useSelector((state)=>state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setincrementByAmount] = useState(0);

  const resetAll = ()=>{
    setincrementByAmount(0);
    dispatch(reset()); 

  }
  const addValue = Number(incrementAmount) || 0;
  return (
    <section>
      <p>{count}</p>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <input type="text" value={incrementAmount} onChange={(e)=>setincrementByAmount(e.target.value)}/>
      <div>

        <button onClick={()=>dispatch(incrementByAmount(addValue))}>Add Amount</button>
        <button onClick={resetAll}>Reset</button>
      
    </div>
    </section>
    
  )
}

export default Counter