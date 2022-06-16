const initialState={
    drugs:[],
    deleteComplete:false,
    imageURL:{link:"abracadabre"},
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
        case "DELETE_COMPLETE":
            return{...state, deleteComplete:action.payload}
        case "GET_URL":
            return{...state, imageURL:{link:action.payload}}
        default:
            return state;
    }
}

export default drugReducer