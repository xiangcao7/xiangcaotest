import React, { Component } from 'react'
import "./Footer.css"

export default class Footer extends Component {

    handleAll = (e)=>{
        this.props.checkAllTodo(e.target.checked)
    }

    handleClick = ()=>{
        this.props.clearDoneTodo()
    }

    render() {
        const {todos} = this.props
        const doneCount = todos.reduce((pre,current)=>pre+(current.done?1:0),0)
        const total=todos.length
        
        return (
            <div>
                <label>
                    <input type="checkbox" checked={(doneCount===total)&&total!==0} onChange={this.handleAll}>
                    </input>
                </label>
                <span>
                    <span>
                        已完成{doneCount}
                    </span>
                    /全部 {total}
                </span>
                <button className="btn1" onClick={() => this.handleClick()}>清除已完成的任务</button>
            </div>
        )
    }
}
