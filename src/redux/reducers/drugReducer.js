const initialState={
    drugs:[],
    error:{login:""},
}

const drugReducer=(state=initialState,action)=>{
    switch(action.type){
        case "GET_DRUGS":
            return {drugs: action.payload}
        case "DELETE_DRUG":
            let delID= action.payload
            let undeletedDrugs=state.drugs.filter((drug)=> drug.id!==delID )
            return{drugs: undeletedDrugs};
        case "LOGIN_ERROR":
            return {...state, error:{login: action.payload}}
        default:
            return state;
    }
}

export default drugReducer