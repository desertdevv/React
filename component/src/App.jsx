import Func from "./components/FuncComponent"
// import Class from "./components/ClassComponent"
import {ClassTest} from "./components/ClassComponent"

import {PropEx1} from "./components/props/ClassProps"
import PropEx2 from "./components/props/FuncProps"

function App() {


  return (
    <>
      <h1>컴포넌트 연습</h1>
      <Func>  </Func>
      <ClassTest/>
      <hr></hr>
      <h1>props 연습</h1>
      <PropEx1 color="green" style="청청">
        <span style={{backgroundColor: 'pink'}}>큐티깜찍</span>
      </PropEx1>
      <PropEx2 today="햄버거" tomorrow='죽'>
          <mark>샌드우치</mark>
      </PropEx2>

    </>
  )
}

export default App
