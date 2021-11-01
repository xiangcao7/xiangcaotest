/* 该文件专门为Count组件生成action对象 */
import { INCREMENT,DECREMENT } from "./constant"


export const createIncrementAction=data=>({type:INCREMENT,data})
export const createDecrementAction=data=>({type:DECREMENT,data})
//给store返回一个函数 store调用该函数并设置定时器 500ms后给store返回action对象
//异步action中一般都会调用同步action 异步action不是必须要用的
export const createIncrementAsyncAction=(data,time)=>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(createIncrementAction(data))
        },time)
    }
}