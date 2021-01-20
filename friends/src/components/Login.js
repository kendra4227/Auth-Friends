import React from 'react';
import axios from "axios";
class login extends React.Component {
    state ={
        credentials:{
            username:"",
            password:"",
        
        }
}


handleChange = e =>{
    this.setState({
        credentials:{
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }
    });
};

login = (e) => {
    e.preventDefault();
//  hit the login API endpoint with the  username and password in the request body
axios.post("http://localhost:5000/api/login", this.state.credentials)
.then(res=> { 
    console.log(res)
    localStorage.setItem("token", res.data.payload); 
})
//happy path: store the token from the response as a localStorage item called "token"
.catch(err => console.log(err));
//sad path: just log it for now 

};

render() {
return(
    <div className = "form">
        <form onSubmit ={this.login}>
            <input 
            type="text" 
            name="username" 
            value={this.state.credentials.username}
            onChange={this.handleChange}/>

<input 
            type="password" 
            name="password" 
            value={this.state.credentials.password}
            onChange={this.handleChange}/>

            <button>Log In</button>
        </form>
    </div>
);
}
}

export default login;