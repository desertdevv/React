// PropEx2 함수 컴퐅넌트 생성
// "오늘 먹은 음식은 입니다." 작성후 화면에 그리기
// 전달 props : today

import {Component} from 'react';

const PropEx2 = ({today,tomorrow ='닭가슴',children}) => {
    // const {today} = this.props;
    // 함수에는 this사용불가
   
    // const {today,tomorrow ='닭가슴'} = props;

    return (
        <div>
            <div>
                "오늘 먹은 음식은 {today}입니다."
            </div>
            <div>
                "내일 먹을 음식은 {tomorrow}입니다."
            </div>
            <div>"어제먹은 음식은 {children}입니다."</div>
        </div>
    );
};

export default PropEx2;