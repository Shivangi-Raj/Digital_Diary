import React,{Component} from "react";
import{render} from "react-dom"
import './navv.css';
import {Navbar,Nav,NavDropdown,item,Form,Button,FormControl} from "react-bootstrap";
import Login from "./login";
import Home from "./home";
import Newpage from "./newpage";
import HttpService from "./httpService"
import Title from "./title";
import Multistage from "./multistage"

const http = new HttpService();
class Homee extends Component{
    constructor(props){
        super(props);
        this.state={
          flag:0,
          contents:[],
          mood:0
        }
        this.changeToHome=this.changeToHome.bind(this);
        this.changeToNewpage=this.changeToNewpage.bind(this);
        // http.getContents();
        this.loadContent=this.loadContent.bind(this);
        this.loadProductList=this.loadProductList.bind(this);
        this.happyStage=this.happyStage.bind(this);
        this.sadStage=this.sadStage.bind(this);
        this.nutralStage=this.nutralStage.bind(this);


        // this.showDetails=this.showDetails.bind(this);


        this.loadContent();
      }
    


    loadContent=()=>{
      var self=this;
      http.getContents()
      .then(data =>{
        self.setState({contents:data})
        },err=>{
        console.log("error");

      })

    };
    loadProductList = ()=>{
      const list=this.state.contents.map((content) =>
      <Title title={content.title}></Title>
      );
      return(list)
}



    changeToHome(event){
      this.setState({
        flag:1
      })
    }
    changeToNewpage(event){
      this.setState({
        flag:2
      })
    }

    happyStage(event){
      this.setState({
        flag:3
      })
    }
    sadStage(event){
      this.setState({
        flag:4
      })
      console.log("bbb")
    }    
    nutralStage(event){
      this.setState({
        flag:5
      })
      console.log("bbb")
    }




        render(){
        if(this.state.flag==0){
          const {value}=this.state
            return(
                <div id="nav">
    
          <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#" onClick={this.changeToHome}>Home</Nav.Link>
          <Nav.Link to="#" onClick={this.changeToNewpage}>New Page</Nav.Link>
          <Nav className="mr-auto">
            {/* <select title="Memories" id="">
              <option >Happy</option>
              <option >Sad</option>
              <option >Fear</option>
              <option >Angry</option>

            </select> */}
          * <NavDropdown title="Memories" id="">
            <NavDropdown.Item href="#">Happy</NavDropdown.Item>
            {/*<NavDropdown.Item href="#">Sad</NavDropdown.Item>
            <NavDropdown.Item href="#">Angry</NavDropdown.Item>
            <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Fear</NavDropdown.Item>*/}
          </NavDropdown>
          </Nav>
        </Nav>
      </Navbar>
      <br />
      <h1>HOME</h1>
      <button id="happy" value="happy" onClick={this.happyStage}>HAPPY</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button id="sad" value="sad" onClick={this.sadStage}>SAD</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button id="nutral" value="nutral" onClick={this.nutralStage}>NUTRAL</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


      {this.loadProductList()}
 
         </div>
    )
            }else if(this.state.flag==1){
              return(
                <Home/>

              )
            }else if(this.state.flag==2){
              return(
                <Newpage/>
              )
            }else if(this.state.flag==3||this.state.flag==4||this.state.flag==5){
              return(
                <div>
                <Multistage flag={this.state.flag}/>
                {/* {this.state.flag} */}
                </div>

              )
            }
        
    }
    }
    
export default Homee;