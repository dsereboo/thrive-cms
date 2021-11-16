import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalogue from "../pages/Catalogue";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Pharmacy from "../pages/Pharmacy";


const Router=()=>{
    return(
        <BrowserRouter>
                <Route exact path="/" component={Homepage}/>
                <Route path="/login" component={Login}/>
                <Route path="/catalogue" component={Catalogue}/>
                <Route path="/pharmacy" component={Pharmacy}/>
        </BrowserRouter>
    )
}

export default Router