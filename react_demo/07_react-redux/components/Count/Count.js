import React, { Component } from 'react'

//UI组件 不可以有任何redux的API
export default class Count extends Component {
    increment=()=>{
        const {value}=this.selectNumber
       
    }
    decrement=()=>{
        const {value}=this.selectNumber
        
    }
    incrementIfOdd=()=>{
        const {value}=this.selectNumber
     
       
    }
    incrementAsync=()=>{
        const {value}=this.selectNumber
       
    }
    render() {
        console.log(this.props.a,this.props.b);
        return (
            <div>
                <h1>当前求和为：</h1>
                <select
                ref={c=>this.selectNumber=c}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                </select>&nbsp;{/* 参数c即是这个标签对象 */}
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前和为奇数时加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;
            </div>
        )
    }
}
