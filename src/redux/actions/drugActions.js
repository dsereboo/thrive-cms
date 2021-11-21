//Action to cater for crud operations 
export const getDrugs = () => {
    return (dispatch, state, { getFirestore }) => {
      //async call to firebase to create project and return the result
      const db = getFirestore();
      //add data to firestore collection using the firestore object
      db.collection("Branches").doc("Kwabenya").collection("Drugs")
        .onSnapshot((response) => {
          let drugs = [];
          let error=""
          response.forEach((item) => {
            drugs.push({ ...item.data(), id:item.id });
          });
          dispatch({ type: "GET_DRUGS", payload: drugs });
          dispatch({type:"LOGIN_ERROR", payload:error})
        }, (err) => {
          //Log for an error
          console.log(err);
        })
    };
  };


  export const deleteDrug=(drugId)=>{
    return(dispatch, state, {getFirestore})=>{
        //async call to return firebase firestore
        const db= getFirestore()
        //delete data from firestire
        db.collection('Branches').doc("Kwabenya").collection("Drugs").doc(drugId).delete()
        .then(
           
        )
        .catch(
            ()=>{console.log("Error deleting expense record")}
        )
    }
}


export const addDrug=(drug)=>{
  return(dispatch,state,{getFirestore})=>{
      //async call to firebase to create project and return the result
      const db=getFirestore() ;
      //add data to firestore collection using the firestore object
      db.collection('Branches').doc("Kwabenya").collection("Drugs").add(drug)
      .then(
          ()=>{
              //When async call is successful dispatch redux action
              //dispatch({type: "ADD_USER", payload: expense,});
          }
      )
      .catch(
          (err)=>{
              //if async call fails, log to error log or some mechanism
              console.log(err)
          }
      )
      //asynchronous call to firebase to create users and return result
     
}
}

