import React, { Component } from 'react'
import "./Header.css"
import {nanoid} from "nanoid"

export default class Header extends Component {

    handleKeyUp=(e)=>{
        if(e.keyCode!==13) return 
        if(e.target.value.trim()===''){
            alert('输入不能为空')
            return
        }
        const toObj={id:nanoid(),name:e.target.value,done:false}
        this.props.changeState(toObj)
        e.target.value=''
    }
    render() {
        return (
            <div className="header">
                <input 
                type="text" placeholder="请输入你的任务名称 按回车键确认"
                onKeyUp={this.handleKeyUp}
                ></input>
            </div>
        )
    }
}
