import { Divider } from 'antd'
import React, { Component } from 'react'
import Item from '../Item/Item'

export default class List extends Component {
    
    render() {
        const {todos,changeTodo,deleteTodo} = this.props
        return (
            <ul>
                {
                    todos.map((todo) => {
                        return <Item key={todo.id} {...todo} changeTodo={changeTodo} deleteTodo={deleteTodo}> </Item>
                    })
                }
            </ul>
        )
    }
}
