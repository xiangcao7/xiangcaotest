import React, { Component } from 'react'
import "./Item.css"

export default class Item extends Component {
    
    handleCheck = (id)=>{//外层参数为id  return的函数没有参数
        return (e)=>{
            this.props.changeTodo(id,e.target.checked)
        }
    }

    handleDelete = (id)=>{
        if(window.confirm("确定删除？")){
            this.props.deleteTodo(id)
        }
       
    }

    render() {
        const {id,name,done}=this.props
        return (
            <li>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button  className="btn" onClick={()=>{this.handleDelete(id)}}>删除</button>
            </li>
        )
    }
}
