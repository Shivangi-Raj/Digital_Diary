import React,{Component} from 'react';
import {render} from 'react-dom';
import Signup from "./component/signup"
import Login from "./component/login"


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      file:null,
      flag:0
    }
    this.sChange=this.sChange.bind(this);
    this.lChange=this.lChange.bind(this);


  }
  sChange(event){
    this.setState({
      flag:1
    })
  }
  lChange(event){
    this.setState({
      flag:2
    })
  }

  // onDrag = event => {
  //   event.preventDefault()
  // }

  // onDrop = event => {
  //   event.preventDefault()
  //   let file = event.dataTransfer.files[0]
  //   this.setState({ file })
  // }

  
// let file = e.dataTransfer.files[0]
// let url = URL.createObjectURL(file)
// console.log(url)


  render(){
    if(this.state.flag===0){
      // let { file } = this.state
      // let url = file && URL.createObjectURL(file)
      // console.log(url)
    return(
      <div id="div1">
        <h1>Index page</h1>
        <button type="button" onClick={this.sChange}>Sign Up </button>
        <button type="button" onClick={this.lChange}>Log In </button>

        {/* <div onDragOver={this.onDrag} onDrop={this.onDrop}>
        <p>Drop an image!</p>
        <img width="40px" hieght="70px" src={url} />
      </div> */}

      </div>
    );
    }else if(this.state.flag===1){
      return(
      <Signup/>
      )
    }else{
      return(
        <Login />
      )
    }

  }
}
render(<App/>,window.document.getElementById("root"));


// serviceWorker.unregister();
