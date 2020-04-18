import React,{Component} from "react";
import{render} from "react-dom"
import {Navbar,Nav,NavDropdown,item,Form,Button,FormControl} from "react-bootstrap";
import HttpService from "./httpService"
import Details from "./Details"
import Card from "./card"
import "./multistage.css"

const http = new HttpService();

class MultiStage extends Component{

    constructor(props){
        super(props);
        this.state={
          flag:0,
          contents:{},
          properties:'',
          property:'',
          index:0
        }
        // console.log("c")
        // console.log(this.state.property);
        this.loadDetails=this.loadDetails.bind(this);
        this.next=this.next.bind(this);
        this.prev=this.prev.bind(this);

        // this.loadDetailsList=this.loadDetailsList.bind(this);

        this.loadDetails();
    }

    next = (event)=>{
        if(this.state.index>=this.state.contents.length-1){
            const newIndex=0
            console.log(this.state.contents.length)
        // const newIndex=this.state.index+1;
        // console.log(newIndex)
        const newProperty=this.state.contents[newIndex];
        // console.log(newProperty)
        this.setState({
            property:newProperty,
            index:newIndex
         })


        console.log(this.state.index);
        // console.log(this.state.property.image);

        }else{
            // const newIndex=0;
            const newIndex=this.state.index+1;

            const newProperty=this.state.contents[newIndex];
            // console.log(newProperty)
            this.setState({
                property:newProperty,
                index:newIndex
             })
    
    
            console.log(this.state.index);
            // console.log(this.state.property.image);
    

        }
    }

    prev = (event)=>{
        if(this.state.index>0){
        const newIndex=this.state.index-1;
        // console.log(newIndex)
        const newProperty=this.state.contents[newIndex];
        // console.log(newProperty)
        this.setState({
            property:newProperty,
            index:newIndex
         })

        }else{
            const newIndex=this.state.contents.length-1;
            const newProperty=this.state.contents[newIndex];
        // console.log(newProperty)
        this.setState({
            property:newProperty,
            index:newIndex
         })
        }
    }

    loadDetails(){
        // console.log(this.props.title)
        // console.log("a");
        var mood="";
        var self=this
        if(this.props.flag==3){
            mood="happy"
        }
        else if(this.props.flag==4){
            mood="sad"
        }else{
            mood="nutral"
        }
        http.getContentsImage(mood)
        .then(data =>{
            // console.log(data)
            self.setState({contents:data,property:data[0]})
            // console.log(this.state.property)
            // console.log(this.state.contents)
        },err =>{
            console.log("error")
        })
    }
// var datas={"properties":data};

    // loadDetailsList(){
    //     console.log("b")
    //     // console.log("hello");
    //     const list=this.state.contents.map((content) =>
    //     // console.log("hello");
    //     <Details title={content.title} details={content.details} image={content.image} mood={content.mood}/>
    //     );
    //     console.log(this.state.flag)
     
    //     return(list)
    // }



    render(){
        var datas={"properties":this.state.contents};
        // console.log(datas)
        return(
            <div>
                {/* {this.props.flag} */}
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
          {/* * <NavDropdown title="Memories" id=""> */}
            {/* <NavDropdown.Item href="#">Happy</NavDropdown.Item> */}
            {/*<NavDropdown.Item href="#">Sad</NavDropdown.Item>
            <NavDropdown.Item href="#">Angry</NavDropdown.Item>
            <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Fear</NavDropdown.Item>*/}
          {/* </NavDropdown> */}
          </Nav>
        </Nav>
      </Navbar>
      <br />
          <div className="page">
              <section>
                  {/* <img src={logo} className="app=logo" alt="image"></img> */}
                  <h1 id="hi_multi">Your Happy Moments :) !!</h1>
              </section>
              {/* {this.state.property.title}
              {this.state.property.image}
              {this.state.index} */}
              {/* ZZZZZZZZZZZZZ */}
              <div className="card-slider">
                  {/* AAAAAAA */}
                  <div className="card-slider-wrapper">
                      <br></br>
                      <button id="prev" value="prev" onClick={this.prev}>prev</button>
                <button id="next" value="next" onClick={this.next}>next</button>
                <Card title={this.state.property.title} index={this.state.index} image={this.state.property.image}></Card>
          </div>
          </div>
          </div>
            </div>
        )
    }
}
export default MultiStage;