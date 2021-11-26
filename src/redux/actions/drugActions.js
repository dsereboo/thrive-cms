//Action to cater for crud operations
export const getDrugs = () => {
  return (dispatch, state, { getFirestore }) => {
    //async call to firebase to create project and return the result
    const db = getFirestore();
    //add data to firestore collection using the firestore object
    db.collection("Branches")
      .doc("Kwabenya")
      .collection("Drugs")
      .onSnapshot(
        (response) => {
          let drugs = [];
          // let error = "";
          response.forEach((item) => {
            drugs.push({ ...item.data(), id: item.id });
          });
          dispatch({ type: "GET_DRUGS", payload: drugs });
          // dispatch({type:"ADD_FUSE",payload:drugs})
          // dispatch({type:"LOGIN_ERROR", payload:error})
        },
        (err) => {
          //Log for an error
          console.log(err);
        }
      );
  };
};

export const deleteDrug = (drugId) => {
  return (dispatch, state, { getFirestore }) => {
    //async call to return firebase firestore
    const db = getFirestore();
    //delete data from firestire
    db.collection("Branches")
      .doc("Kwabenya")
      .collection("Drugs")
      .doc(drugId)
      .delete()
      .then(
        // console.log("done")
        ()=>{dispatch({type:"DELETE_COMPLETE", payload:true})
        console.log(state)
        }
     
        )
      .catch(() => {
        console.log("Error deleting expense record");
      });
  };
};

export const addDrug = (drug) => {
  return (dispatch, state, { getFirestore }) => {
    //async call to firebase to create project and return the result
    const db = getFirestore();
    //Upload Image drug to firebase storage
    //add data to firestore collection using the firestore object
    db.collection("Branches")
      .doc("Kwabenya")
      .collection("Drugs")
      .add(drug)
      .then((response) => {
        //When async call is successful dispatch redux action
        // dispatch(addSuccessful());
        console.log(response);
      })
      .catch((err) => {
        //if async call fails, log to error log or some mechanism
        console.log(err);
      });
    //asynchronous call to firebase to create users and return result
  };
};

function addLink(link){
  return{
    type:"GET_URL",
    payload:link
  }
}

export const addImage = (image) => {
  return (dispatch, state, { getFirebase }) => {
    const firebase = getFirebase();
    if (image) {
      //2.
      const storageRef = firebase.storage().ref();
      //3.
      const imageRef = storageRef.child(image.name);
      //4.
      imageRef.put(image).then(
        () => {
        imageRef.getDownloadURL().then((url) => {
          let link = url;
          console.log(link, "link");
          dispatch(addLink(link));
        });
        // dispatch({ type: "GET_URL", payload:"Helllo" })
      });
      // .catch(
      //   (error)=>{console.log(error)}
      // )
      //5.
      //   upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
      //     () => {
      //       // Upload completed successfully, now we can get the download URL
      //       uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
      //         console.log('File available at', downloadURL);
      //       });
      //     }
      //     )
    } else {
      alert("Please upload an image first.");
    }
  };
};

// () => {
//   // Upload completed successfully, now we can get the download URL
//   imageRef.snapshot.ref.getDownloadURL().then((downloadURL) => {
//     console.log('File available at', downloadURL);
//   });
// }
