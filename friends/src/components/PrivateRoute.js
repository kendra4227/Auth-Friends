import React from 'react';
import {Redirect, Route} from 'react-router-dom';

// Private route requirements:
// 1.It has the same API (interface) as <Route>
// 2.If an auth token exists, it renders a <Route/> and passes all props through to it 
// 3. Otherwise, its going to redirect the login page


 const PrivateRoute = ({component :Component, ...rest}) =>{
    return (
        <Route
        {...rest}
         render ={(routeProps)=> {
        // If the token is in the localStorage, render the 
        if (localStorage.getItem("token")){
            console.log("token found, rendering component");
            return <Component {...routeProps}/>
        }
          //Otherwise redirect login
        else {
            console.log("no token found, redirect to login");
            return <Redirect to = "/login"/>
        }
        }
    }
         />       
    )
} 
export default PrivateRoute;