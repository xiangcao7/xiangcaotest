import React, { Component } from 'react'//多种暴露方式 并不是解构赋值

export default class Mouse extends Component {
    state={
        x:0,
        y:0
    }
    onMouseMove=e=>{
        this.setState({
            x:e.clientX,
            y:e.clientY
        })
    }
    componentDidMount(){
        window.addEventListener('mousemove',this.onMouseMove)
    }
    render() {
       return this.props.render(this.state)
    }
}
