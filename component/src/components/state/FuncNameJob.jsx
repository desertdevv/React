//FuncNameJob.jsx
// 이름과 직업을 받는 input생성
// 이름을 입력하고 커서가 나가면 span에 입력한 이름 출력
// 직업은 입력할때 마다 span에 입력이 되고 있는 직업 출력

import { useState } from "react"


const FuncNameJob =()=>{
        const [name,setName] = useState("");
        const [job,setJob] =useState("");


        const nameSpan =(e)=>{
            setName(e.target.value);
        }
        const jobSpan =(e)=>{
            setJob(e.target.value);
        }

        const nameBlur=()=>{

        }

        return(
            <div>
                <input placeholder="이름을 입력하세요" onBlur={nameSpan}/>&nbsp;
                <input placeholder="직업을 입력하세요" onChange={jobSpan}/>
                <br/>
                <span>이름: {name} </span><br/>
                <span>직업: {job} </span>

            </div>
        )
    }
    


export default FuncNameJob;