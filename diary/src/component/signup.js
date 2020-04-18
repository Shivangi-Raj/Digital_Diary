import React,{Component} from "react";
import{render} from "react-dom"
import Login from "./login"
import Home from "./home"
import {Router,Link} from "react-router-dom"
import axios from "axios";
// import "./login.css";

class Signup extends Component{

    constructor(props){
        super(props);
        this.state={
          flag:0,
          username:'',
          email:'',
          password:''
        }
        this.changeToLogin=this.changeToLogin.bind(this);
        this.changeToHome=this.changeToHome.bind(this);
        this.changeHandler=this.changeHandler.bind(this)

    }

    changeHandler = e => {
        this.setState({[e.target.name]:e.target.value})

    }

    // submitHandler(event){
   

    //     this.setState({
    //         flag:2
    //     })
 
    // }

    changeToLogin(event){
        this.setState({
            flag:1
        })
    };
    changeToHome(event){
        event.preventDefault()
        this.setState({
            flag:2
        })
        console.log(this.state)
        axios.post("http://localhost:3001/signup/user/", this.state)
        .then(response =>{
            console.log(response)
        })
        .catch(err =>{
            console.log(err)
        })
    }


    render(){
        if(this.state.flag===0){
        const {username, email, password }=this.state
        return(
            <div id="div2">
                <img src={this.props.url}></img>
                <form >
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr></hr>
                    <div>
                    <label><b>Name</b></label>
                    <input type="text"  name="username" value={username} onChange={this.changeHandler} required></input>
                    </div>
                    <div>
                    <label><b>Email</b></label><br></br>
                    <input type="email"  name="email" value={email} onChange={this.changeHandler} required></input>
                    </div>

                    <div>
                    <label><b>Password</b></label>
                    <input type="password"  name="password" value={password} onChange={this.changeHandler} required></input>
                    </div>

                    <div className="clearfix">
                    <a href="#" className="slogin" onClick={this.changeToLogin}>Back To Login Page</a><br></br>
                    <button type="submit" className="signupbtn" onClick={this.changeToHome}>Sign Up</button>
    </div>
  </div>
</form>
</div>
        );
    }else if(this.state.flag==1){
        return(
            <Login/>
        );
    }else{
        return(
            <Home/>
        )
    }

    }
}
export default Signup;