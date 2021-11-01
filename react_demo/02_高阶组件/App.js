import React, { Component } from 'react';
import img from "./img/plane.jpg"

//App是外壳 将其内部需要渲染的东西全都写为组件


//创建高阶组件
function  withMouse(WrappedComponent) {
  //该组件提供状态逻辑复用
  class Mouse extends Component{
    state={
      x:0,
      y:0
    }

    handleMouseMove = e => {
      this.setState({
        x:e.clientX,
        y:e.clientY
      })
    }

    componentDidMount(){
      window.addEventListener("mousemove",this.handleMouseMove)
    }

    componentWillUnmount(){
      window.removeEventListener("mousemove",this.handleMouseMove)
    }

    render(){
      return(<WrappedComponent {...this.state}></WrappedComponent>)//可以传递this.props 给MousePlane添加的props实际添加给了Mouse 所以要继续往下传递
    }
  }
  return Mouse
}

const Position = props =>(
  <div>
    鼠标当前位置：（x:{props.x},y: {props.y}）
  </div>
)

const Plane = props=>(<img
  src={img}
  alt="芜湖~"
  style={{
    position:'absolute',
    height:50,
    width:50,
    top:props.y-25,
    left:props.x-25
  }}
/>)

const MousePosition=withMouse(Position);

const MousePlane=withMouse(Plane);

class App extends React.Component{
  render(){
    return(
      <div>
        <h1>高阶组件</h1>
        <MousePosition></MousePosition>
        <MousePlane></MousePlane>{/* 在网页中 高阶组件的组件名都是一样的 这里是<mouse> 会给后期带来不好的体验 所以需要去设置displayName */}
      </div>
    )
  }
}

export default App;
