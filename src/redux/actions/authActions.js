export const signIn=(email,password)=>{
    return(dispatch, state,{getFirebase})=>{
        //Return firebase 
        const firebase= getFirebase()
        //Access auth object of firebase which has the function to create a user
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(
            // (response)=>{console.log(response)}
        )
        .catch(
            // (error)=>{dispatch(loginError(error))}
            
            (error)=>{
                dispatch(loginError(error.message))
            }
        )
    }
}

export const signOut=()=>{
    return(dispatch, state, {getFirebase})=>{
        //Return firebase 
        const firebase= getFirebase()
        //Access auth object of firebase which has the function to create a user
        firebase.auth().signOut()
        .then(
            // (response)=>{console.log(response)}
        )
        .catch(
            (error)=>{console.log(error)}
        )

    }
}


function loginError(error){
    return{
        type:"LOGIN_ERROR",
        payload:error,
    }
}