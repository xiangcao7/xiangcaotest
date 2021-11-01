import React, { Component } from 'react';
import Game from './components/Game';

//App是外壳 将其内部需要渲染的东西全都写为组件

class App extends Component{
  render(){
    return(
      <div>
       <Game></Game>
      </div>
    )
  }
}

export default App;
