import React,{useState,useEffect}from 'react';
import img from "./img/plane.jpg"

function useMouse(){
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const handleMouseMove = e =>{
      setX(e.clientX)
      setY(e.clientY)
    } 

    useEffect(()=>{
      window.addEventListener("mousemove",handleMouseMove)
      return ()=>{window.removeEventListener("mousemove",handleMouseMove)}
    },[])

    return [x,y]
}

function Position(){
    const [x,y] = useMouse()
    return (
      <div>
        鼠标当前位置：（x:{x},y: {y}）
      </div>
    )
}

function Plane(){
    const[x,y] = useMouse()
    return(
      <img
      src={img}
      alt="芜湖~"
      style={{
      position:'absolute',
      height:50,
      width:50,
      top:y-25,
      left:x-25
      }}/>)
}

class App extends React.Component{
  render(){
    return(
      <div>
        <h1>自定义hook实现组件复用</h1>
        <Position></Position>
        <Plane></Plane>
      </div>
    )
  }
}

export default App;