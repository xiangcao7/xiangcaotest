import React, { Component } from 'react';
import Count from './containers/Count/containerCount'
import store from './redux/store'

//App是外壳 将其内部需要渲染的东西全都写为组件

class App extends Component{

  render(){
    return(
      <div>
       <Count store={store}></Count>
      </div>
    )
  }
}

export default App;
