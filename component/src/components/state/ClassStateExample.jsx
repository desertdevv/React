// ClassState 클래스 컴포넌트 작성
// "클래스 컴포넌트입니다 " 화면에 나타내기

import { Component } from "react";

// 클래스 컴포넌트 생성 과정에 들어가는 함수들
// render, constructor, getDerivedStateFromProps, componentDidMount
// render(): 코드를 화면에 그려주는 함수
// constructor(props) : 컴포넌트 내부에 사용되는 state선언
// 가장먼저 실행되고 한번만 실행된다



class ClassState extends Component  {
    constructor(props){
        super(props);
        this.state = {number1:0,number2:0} // state 초기화
    }
    render(){
        const {number1, number2} = this.state;
        const {btn} = this.props;
        return(
            <div>
                <div>
                    "클래스 컴포넌트입니다"
                    <h1>{number1}</h1>
                    <button onClick={this.number1SumOne
                    //     ()=>{
                    //     this.setState({number1:number1+1})
                    // }
                    }>{btn}</button>
                    {/* 클릭할때마다 number1 을  1씩 증가*/}


                    <h1>{number2}</h1>
                    <button onClick={this.number2SumOne
                    //     ()=>{
                    //     this.setState({number2:number2-1})
                    // }
                    }>{btn}</button>
                    {/* 클릭할때마다 number2 를  1씩 감소*/}
                </div>

            </div>

        )
    }

    number1SumOne = () =>{
        this.setState({number1:this.state.number1+1});
    }

    number2SumOne = () =>{
        this.setState({number2:this.state.number2-1});
    }





}

export default ClassState ;