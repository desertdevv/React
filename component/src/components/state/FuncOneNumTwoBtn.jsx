import { useState } from "react"

const FuncTwoBtn = ()=>{
    const [number1, setNumber1] = useState(0);

    const num1SumOne = ()=>{
        setNumber1(number1+1);
    }

    const num2MinusOne=()=>{
        setNumber1(number1-1);
    }

    return(
        <div>
            <div>
                <h1>함수로 버튼</h1>
                <button onClick={num2MinusOne}>-</button>
                <h1 style={{display:'inline'}}>{number1}</h1>
                <button onClick={num1SumOne}>+</button>
            </div>
        </div>
    )




}

export default FuncTwoBtn;