const initialState={drugs:[]}

const drugReducer=(state=initialState,action)=>{
    switch(action.type){
        case "GET_DRUGS":
            return {drugs: action.payload}
        case "DELETE_DRUG":
            let delID= action.payload
            let undeletedDrugs=state.drugs.filter((drug)=> drug.id!==delID )
            return{drugs: undeletedDrugs};
        default:
            return state;
    }
}

export default drugReducer