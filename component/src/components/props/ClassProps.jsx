// 클래스명이 propsEx1인 클래스 컴포넌트 생성
// "오늘의 포인트 컬러는 연두입니다." 작성 후 화면에 그리기
import  { Component } from 'react';

class PropEx1 extends Component {
    
    render(){
        const {color,style,children} = this.props;
        // const dressCode = this.props.children;
        return(
            <div>
                <div>
                    오늘의 포인트 컬러는 {color}입니다.
                </div>
                <div>
                    내일의 코디는 {style}입니다.
                </div>
                <div>
                    {/* 수료날 드레스코드는 {dressCode}입니다. */}
                    수료식날 드레스코드는 {children}입니다
                </div>
            </div>
        )
    }
}

PropEx1.defaultProps= {style:'블랙앤화이트'};

export {PropEx1};