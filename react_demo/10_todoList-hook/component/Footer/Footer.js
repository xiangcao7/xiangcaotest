import React,{useContext}from 'react'
import "./Footer.css"
import {TodoContext} from "../../App"

export default function Footer() {
    const {todos,checkAllTodo,clearDoneTodo} = useContext(TodoContext)
    const handleAll = (e)=>{
        checkAllTodo(e.target.checked)
    }

    const handleClick = ()=>{
        clearDoneTodo()
    }
    
    const doneCount = todos.reduce((pre,current)=>pre+(current.done?1:0),0)
    const total=todos.length
    return (
        <div>
                <label>
                    <input type="checkbox" checked={(doneCount===total)&&total!==0} onChange={handleAll}>
                    </input>
                </label>
                <span>
                    <span>
                        已完成{doneCount}
                    </span>
                    /全部 {total}
                </span>
                <button className="btn1" onClick={() => handleClick()}>清除已完成的任务</button>
            </div>
    )
}
