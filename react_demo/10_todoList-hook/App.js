import React, {useState,createContext} from 'react';
import Header from "./component/Header/Header"
import List from "./component/List/List"
import Footer from "./component/Footer/Footer"
import './App.css'


export const TodoContext = createContext()

export function App() {
  const [todos, settodos] = useState([{
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
  },{
    id:"005",
    name:"吃饭5",
    done:false
  }])

  const changeState = (msg) => {
  const newTodos = [msg,...todos]
  settodos(newTodos)
  }

  const changeTodo = (id,flag) => {
  const newTodos=todos.map((todoObj) => {
    if(todoObj.id===id)return{...todoObj,done:flag}
    else return todoObj
  })
  settodos(newTodos)
  } 

  const deleteTodo = (id)=>{
  const newTodos = todos.filter((todoObj)=>{
    return todoObj.id!==id
  })
  settodos(newTodos)
  }

  const clearDoneTodo = ()=>{
  const newTodos =  todos.filter((todoObj=>{
    return todoObj.done===false
  }))
  settodos(newTodos)
  }

  return (
    <div className='app'>
      <TodoContext.Provider value={{todos,changeState,clearDoneTodo,changeTodo,deleteTodo}}>
      <Header></Header>
      <List></List>
      <Footer></Footer>
      </TodoContext.Provider>
    </div>
  )
}

