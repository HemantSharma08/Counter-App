import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {

const dispatch = useDispatch()

// extract the value in the input taag
const inputElement =useRef()

const handleIncrement = () =>{
  dispatch({type:"INCREMENT"})
}

const handleDecrement = () =>{
      dispatch({type:"DECREMENT"})
      }

// extract the value in the input taag
const handleAdd = ()=>{
  dispatch(
            {
              type:"ADD",
              payload:{
                    num:inputElement.current.value
              }
            }
          );
  // after submit it will blank
  inputElement.current.value=""
}

const handleSubstract = ()=>{
  dispatch({
    type:"SUB",
    payload:{
      num:inputElement.current.value
    }
  })  
  inputElement.current.value=""
}

return (
<>
<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
<button onClick={handleIncrement} type="button" className="btn btn-success">+1</button>
<button onClick={handleDecrement} type="button" className="btn btn-danger">-1</button>
</div>

<div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
<input type="number" ref={inputElement} placeholder="Input number"/>
<button type="button" onClick={handleAdd} className="btn btn-success">Add</button>
<button type="button" onClick={handleSubstract} className="btn btn-danger">Substract</button>
</div>

</>
) 
};
export default Controls;