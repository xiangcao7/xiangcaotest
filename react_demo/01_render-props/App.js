

import React from 'react';
import Mouse from './component/Mouse'
import img from './img/plane.jpg'

//App是外壳 将其内部需要渲染的东西全都写为组件

class App extends React.Component{
  render(){
    return(
      <div>
        <Mouse
        render={mouse => {
          return <p>当前鼠标的坐标为：{mouse.x},{mouse.y}</p>
        }}
        />
        <Mouse
        render={mouse =>{
          return <img
          src={img}
          alt="芜湖~"
          style={{
            position:'absolute',
            height:50,
            width:50,
            top:mouse.y-25,
            left:mouse.x-25
          }}
         />
        }}
        />
      </div>
    )
  }
}

export default App;
