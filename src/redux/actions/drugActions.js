//Action to cater for crud operations 
export const getDrugs = () => {
    return (dispatch, state, { getFirestore }) => {
      //async call to firebase to create project and return the result
      const db = getFirestore();
      //add data to firestore collection using the firestore object
      db.collection("Branches").doc("Kwabenya").collection("Drugs")
        .onSnapshot((response) => {
          let drugs = [];
          response.forEach((item) => {
            drugs.push({ ...item.data(), id:item.id });
          });
          dispatch({ type: "GET_DRUGS", payload: drugs });
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