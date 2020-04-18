import React,{Component} from "react";
import{render} from "react-dom"
import './navv.css';
import {Navbar,Nav,NavDropdown,Form,Button,FormControl} from "react-bootstrap";
import Login from "./login";
import Home from "./home";
import Newpage from "./newpage";

// import './font-awesome.min.css';


class Navigation extends Component{
  constructor(props){
    super(props);
    this.state={
      flag:0
    }
    this.changeToHome=this.changeToHome.bind(this);
    this.changeToNewpage=this.changeToNewpage.bind(this);
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


    render(){
      if(this.state.flag==0){
        return(
            <div id="nav">

      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#" onClick={this.changeToHome}>Home</Nav.Link>
      <Nav.Link to="#" onClick={this.changeToNewpage}>New Page</Nav.Link>
      <Nav className="mr-auto">
      <NavDropdown title="Memories" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Happy</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Sad</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Angry</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Fear</NavDropdown.Item>
      </NavDropdown>
      </Nav>
    </Nav>
  </Navbar>
  <br />
     </div>




            )
        }else if(this.state.flag==1){
          return(
            <Home/>
          )
        }else{
          return(
            <Newpage/>
          )
        }
    }
}

export default Navigation;