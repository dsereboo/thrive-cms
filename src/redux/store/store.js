import { createStore,compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import firebase from "../../firebase/config";
import { getFirebase, reduxReactFirebase, firebaseReducer } from "react-redux-firebase";
import{getFirestore,reduxFirestore} from "redux-firestore"
import drugReducer from "../reducers/drugReducer";


const combinedReducers=combineReducers({
    firebase:firebaseReducer,
    drugs: drugReducer,
    }
)

export const store=createStore(combinedReducers, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reduxFirestore(firebase),
    reduxReactFirebase(firebase)
        )
    )