// ClassOneNumTwoBtn.jsx 한숫자를 가지고 버튼 두개로 1씩 올리고 내리기

import { Component } from "react";

class TwoBtn extends Component{
    constructor(props){
        super(props);
        this.state = {number1:0}
    }
    render(){
        const {number1} = this.state;
        const {btn,btn2} =this.props;

        return(
            <div>
                <div>
                    "ClassOneNumTwoBtn"
                    <br/>
                    <button onClick={this.num1MinusOne}>{btn}</button>
                    <h1 style={{display:'inline'}}>{number1}</h1>
                    <button onClick={this.num1SumOne}>{btn2}</button>
                </div>

            </div>

        )
    }


    num1SumOne = ()=>{
        this.setState({number1:this.state.number1+1});
    }

    num1MinusOne = ()=>{
        this.setState({number1:this.state.number1-1});
    }


}
export default TwoBtn ;