import  {useState} from 'react';

const FuncStateExample = ({})=>{
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    
    const num1SumOne = ()=>{
        setNumber1(number1+1);
    }

    const num2MinusOne = ()=>{
        setNumber2(number2-1);
    }

    return(
        <div>
            <div>
                <h3>"함수콤포"</h3>
                <h1>{number1}</h1>
                <button onClick={num1SumOne
                //     ()=>{
                //     setNumber1(number1+1);
                // }
                }>Click Me! + </button>

                <h1>{number2}</h1>
                <button onClick={num2MinusOne
                //     ()=>{
                //     setNumber2(number2-1);
                // }
                }>Click Me! - </button>
            </div>
        </div>
    )

}

export default FuncStateExample;

