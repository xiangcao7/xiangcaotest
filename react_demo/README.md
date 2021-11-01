## 一、redux迷你版：
    1、去除Count组件自身的状态
    2、src下建立：
        -src
            -redux
                -store.js
                -count_reducer.js
    3、store.js：
        1）引入redux中的createStore函数，创建一个Store
        2）createStore调用时要传入一个为其服务的reducer
        3）暴露store对象
    4、count_reducer.js:
        1)reducer的本质是一个函数，接受preState，action，返回加工后的state
        2)reducer有两个功能：初始化和加工
        3)reducer第一次被调用时，是store自动触发的，传递的preState是underfined，传递的action是{type：’@@REDUX/INIT‘}
    5、在index.js中检测store中状态的改变，一旦发生改变重新渲染<App/> 
        redux只负责管理状态，状态改变后驱动页面的展示 需要人为操作store.subscribe（）去渲染
## 二、react-redux的使用
    1、明确两个概念：
        1）UI组件：不能使用任何redux的api，只负责页面的呈现、交互等
        2）容器组件：负责和redux通信，将结果交给UI组件
    2、如何创造一个容器组件——靠react-redux的connect函数
        connect（mapStateToProps,mapDispatchToProps）(UI组件)
            前者映射状态，返回值是一个对象
            后者映射操作状态的方法，返回值是一个对象
    3、容器组件中的store是靠props传进去的，而不是直接引入 
