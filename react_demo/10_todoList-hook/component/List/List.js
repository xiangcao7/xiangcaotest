import Item from '../Item/Item'
import React,{useContext}from 'react'
import {TodoContext} from "../../App"

export default function List() {
    const {todos} = useContext(TodoContext)
    return (
        <ul>
            {
                todos.map((todo)=>{
                    return <Item key={todo.id} {...todo}></Item>
                })
            }
        </ul>
    )
}
