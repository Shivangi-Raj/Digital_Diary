import React,{Component} from "react";
import{render} from "react-dom"
import Signup from "./signup"
import Home from "./home"
import "./login.css";
import axios from "axios"


class Login extends Component{

    constructor(props){
        super(props);
        this.state={
          flag:0,
          username:"",
          password:""
        }
        this.changeToHome=this.changeToHome.bind(this);
        this.changeHandler=this.changeHandler.bind(this);
        this.backToHome=this.backToHome.bind(this);


    }

    changeHandler = e => {
        this.setState({[e.target.name]:e.target.value})

    }

    changeToHome(event){
        event.preventDefault()
        console.log(this.state)
        axios.post("http://localhost:3001/login/user", this.state)
        .then(response =>{
            // console.log(response.data)
            if(response.data=="correct"){
                this.setState({
                    flag:1
                })}else{
                    this.setState({
                        flag:2
                    })
                }
            
        })
        .catch(err =>{
            console.log(err)
        })
    }
    backToHome(event){
        this.setState({
            flag:0
        })
    }


    render(){
        if(this.state.flag==0){
            const {username, password} =this.state
        return(
            <div id="logindiv">
            {/* <form action="/action_page.php" style="border:3px solid blue" > */}
            <div class="container">
                <h1>Login </h1>
                <p>Give Requried Details!!</p>
                <hr></hr>
                
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter userID" name="username" value={username} onChange={this.changeHandler} required></input>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" value={password} onChange={this.changeHandler} required></input>
            
                <div class="clearfix">
                <button type="submit" class="signupbtn" onClick={this.changeToHome}>Login</button>
                </div>
            </div>
            {/* </form> */}

            </div>
        )
        }else if(this.state.flag==1){
            return(
            <Home/>
    )
            }else{
                return(
                    <div>
                    <div>Incorrect Password</div>
                    <a href="#" onClick={this.backToHome}>Try again</a>
                    </div>
                )
            }

    }
}
export default Login;