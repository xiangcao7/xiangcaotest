import React, { Component } from 'react';
import ShowArea from './components/ShowArea';
import Buttons from "./components/Buttons"
import {Color} from './components/Color'

//App是外壳 将其内部需要渲染的东西全都写为组件

class App extends Component{
  render(){
    return(
      <div>
       <Color>
        <ShowArea/>
        <Buttons/>
       </Color>
      </div>
    )
  }
}

export default App;
