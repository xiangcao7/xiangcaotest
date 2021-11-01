import React, { Component } from 'react'
import store from "../../redux/store"
import {createIncrementAction,createIncrementAsyncAction,createDecrementAction} from "../../redux/count_action"

export default class Count extends Component {
    increment=()=>{
        const {value}=this.selectNumber
        store.dispatch(createIncrementAction(value*1))
    }
    decrement=()=>{
        const {value}=this.selectNumber
        store.dispatch(createDecrementAction(value*1))
    }
    incrementIfOdd=()=>{
        const {value}=this.selectNumber
        const count=store.getState()
        if(count % 2 !== 0){
            store.dispatch(createIncrementAction(value*1))
        }
    }
    incrementAsync=()=>{
        const {value}=this.selectNumber
        store.dispatch(createIncrementAsyncAction(value*1,500))
      /*   setTimeout(()=>{
            store.dispatch(createIncrementAsyncAction(value*1,500))
        },500) */
    }
    render() {
        return (
            <div>
                <h1>当前求和为：{store.getState()}</h1>
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
