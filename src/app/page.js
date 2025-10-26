"use client"
import { useReducer } from "react";
import DigitButton from "./DigitButton";

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  CHOOSE_OPERATION: 'choose-operation',
  EVALUATE: 'evaluate'

}

function reducer(state, {type, payload}){
  switch(type){
    case ACTIONS.ADD_DIGIT:
      return {
        ...state, 
        currentOutput: `${state.currentOutput || ""}${payload.digit}`,
      }
  }
}

export default function Home() {
  const [{currentOutput, perviousOutput, operation}, dispatch] = useReducer(reducer, {})

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-output">{perviousOutput} {operation}</div>
        <div className="current-output">{currentOutput}</div>
      </div>
      <button className="span-two">AC</button>  
      <button>⌫</button> 
      <DigitButton digit="÷" dispatch={dispatch} />
      <button>1</button>    
      <button>2</button>  
      <button>3</button> 
      <button>*</button>
      <button>4</button>
      <button>5</button>  
      <button>6</button> 
      <button>+</button>
      <button>7</button>    
      <button>8</button>  
      <button>9</button> 
      <button>-</button>
      <button>.</button>   
      <button>0</button>  
      <button className="span-two">=</button>
    </div>
  );
}
