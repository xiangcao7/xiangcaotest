const initState = 0
const countReducer=(state = initState,action)=>{
    const {type,data} = action
    switch(type){
        case "increment":
            return state+data;
        case "decrement":
            return state-data;
        default:
            return state
    }
}
export default countReducer