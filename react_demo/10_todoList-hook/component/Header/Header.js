import React,{useContext}from 'react'
import "./Header.css"
import {nanoid} from "nanoid"
import {TodoContext} from "../../App"


export default function Header() {
    const {changeState} = useContext(TodoContext)
    //添加todos
    const handleKeyUp=(e)=>{
        if(e.keyCode!==13) return 
        if(e.target.value.trim()===''){
            alert('输入不能为空')
            return
        }
        const toObj={id:nanoid(),name:e.target.value,done:false}
        changeState(toObj)
        e.target.value=''
    }
    return (
        <div className="header">
                <input 
                type="text" placeholder="请输入你的任务名称 按回车键确认"
                onKeyUp={handleKeyUp}
                ></input>
        </div>
    )
}
