import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalogue from "../pages/Catalogue";
import Homepage from "../pages/Homepage";
import Pharmacy from "../pages/Pharmacy";


const Router=()=>{
    return(
        <BrowserRouter>
                <Route path="/" component={Homepage}/>
                <Route path="/catalogue" component={Catalogue}/>
                <Route path="/pharmacy" component={Pharmacy}/>
        </BrowserRouter>
    )
}

export default Router