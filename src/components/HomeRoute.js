// import React from "react"
// import{Route, Redirect, useLocation} from "react-router-dom"

// const HomeRoute=({component: Component,...otherProps})=>{

//     const location = useLocation()
//     return(
//         <Route
//             {...otherProps}
//             render={(props)=>{
//                 //check if user is logged in
//                 if (location.pathname==="/"){
//                     return(
//                         <Component/>
//                     )
//                 }
//                 else{
//                     console.log("Cannot be found")
//                 }
//             }}
//         />
//     )
// }



// export default HomeRoute