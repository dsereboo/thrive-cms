const initialState={drugs:[]}

const drugReducer=(state=initialState,action)=>{
    switch(action.type){
        case "GET_DRUGS":
        return {drugs: action.payload}
        default:
            return state;
    }
}

export default drugReducer