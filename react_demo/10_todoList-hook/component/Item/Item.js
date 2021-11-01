import React,{useContext} from 'react'
import "./Item.css"
import {TodoContext} from "../../App.js"

export default function Item(props) {
    const {changeTodo,deleteTodo} = useContext(TodoContext)

    /* const {id,name,done}=todos */
    const {id,name,done}=props//function组件不需要this
    
    const handleCheck = (id) =>{
        return (e)=>{
            changeTodo(id,e.target.checked)
        }
    }
    const handleDelete = (id) =>{
        if(window.confirm("确定删除/")){
            deleteTodo(id)
        }
    }
    return (
        <li>
            <label>
                <input type="checkbox" checked={done} onChange={handleCheck(id)}/>
                <span>{name}</span>
            </label>
            <button  className="btn" onClick={()=>{handleDelete(id)}}>删除</button>
        </li>
    )
}
