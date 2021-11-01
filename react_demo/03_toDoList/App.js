import React, { Component } from 'react';
import Header from "./component/Header/Header"
import List from "./component/List/List"
import Footer from "./component//Footer/Footer"
import './App.css'

//App是外壳 将其内部需要渲染的东西全都写为组件

class App extends Component{

  //状态在哪里 操作状态的方法就在哪里
  state={
    todos:[{
      id:"001",
      name:"吃饭1",
      done:true  
    },{
      id:"002",
      name:"吃饭2",
      done:true  
    },{
      id:"003",
      name:"吃饭3",
      done:false  
    },{
      id:"004",
      name:"吃饭4",
      done:false  
    }]
  }

  changeState = (msg) => {//msg是个todo obj
    const newTodos = [msg,...this.state.todos]
    this.setState({
      todos:newTodos
    })
   /*  this.setState({
      todos:this.state.todos.unshift(msg) 返回的是个长度 
    }) */
  }

  changeTodo = (id,flag) => {
    const {todos} = this.state
    const newTodos=todos.map((todoObj) => {
      if(todoObj.id===id)return{...todoObj,done:flag}
      else return todoObj
      /* {
        todoObj.done=flag 不可以直接修改state！
      } */
    })
    this.setState({
      todos:newTodos
    })
  }

  deleteTodo = (id)=>{
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id!==id
    })
    this.setState({
      todos:newTodos
    })
  }

  checkAllTodo = (done)=>{
    const {todos} = this.state
    const newTodos = todos.map((todoObj)=>{
      return {...todoObj,done}
    })
    this.setState({
      todos:newTodos
    })
  }

  clearDoneTodo = ()=>{
    /* const ids=[]
    this.state.todos.forEach((todoObj)=>{
        if(todoObj.done){
            ids.push(todoObj.id)
        }
    }) */
    const {todos} = this.state
    /* const newTodos = todos.filter((todoObj)=>{
      return !(ids.includes(todoObj.id))
    }) */
    const newTodos =  todos.filter((todoObj=>{
      return todoObj.done===false
    }))
    this.setState({
      todos:newTodos
    })
  }

  render(){
    return(
      <div className="app">
        <Header changeState={this.changeState}/>
        <List todos={this.state.todos} changeTodo={this.changeTodo} deleteTodo={this.deleteTodo}/>
        <Footer todos={this.state.todos} checkAllTodo={this.checkAllTodo} clearDoneTodo={this.clearDoneTodo}/>
      </div>
    )
  }
}

export default App;

/* todoList相关知识点 
  1、拆分组件、实现静态组件，注意：className,style的写法 
  2、动态初始化列表，如何确定将数据放在那个组件的state中？
    ————某个组件使用：放在自身的state中
    ————某些组件使用，放在他们的父组件state中 （状态提升） 
  3、关于父子组件通信：
    父组件给子组件传递数据：props传递
    子组件给父组件传递数据：父组件给子组件一个函数 子组件通过props调用并且传递参数
  4、注意defaultChecked和checked的区别 类似的还有：defaultValue和value
  5、状态在哪里，操作状态的方法就在哪里*/
