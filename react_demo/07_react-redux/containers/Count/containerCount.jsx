import CountUI from '../../components/Count/Count'
import {connect} from 'react-redux'

//a函数的返回值作为状态传递给了UI组件
function a(){
    return {n:900}
}

//b函数的返回值作为操作状态的方法传递给UI组件
function b(){
    return {jia:()=>{
        console.log(1);
    }}
}

export default connect(a,b)(CountUI)

