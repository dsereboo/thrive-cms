import { BrowserRouter, Route} from "react-router-dom";
import DrugPage from "../components/DrugPage";
// import Catalogue from "../pages/Catalogue";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
// import Pharmacy from "../pages/Pharmacy";
import ProtectedRoute from "../components/ProtectedRoute";


const Router=()=>{
    return(
        <BrowserRouter>
                <ProtectedRoute exact path="/" component={Homepage}/>
                <Route path="/login" component={Login}/>
                <ProtectedRoute path="/drugs/:id" component={DrugPage}/>
                {/* <Route path="/catalogue" component={Catalogue}/>
                <Route path="/pharmacy" component={Pharmacy}/> */}
        </BrowserRouter>
    )
}

export default Router