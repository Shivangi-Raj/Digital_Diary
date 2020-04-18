import React,{Component} from "react";
import{render} from "react-dom"
import axios from "axios";
import './navv.css';
import {Navbar,Nav,NavDropdown,Form,Button,FormControl} from "react-bootstrap";
import Login from "./login";
import Home from "./home";
import Newpage from "./newpage";
import Navigation from "./nav ";
// import axios from "axios";
// import cors from "cors"
import "./content.css"
import "./main.css"

// import "../js/content1"
// import "../js/content.php"

class New_page extends Component{
	constructor(props){
		super(props);
		this.state={
			flag:0,
			file:null,
			name:"",
			title:"",
			image:null,
			details:"",
			reviews:"",
			mood:"",
			// selectFile:{}


		}
		this.handleChangeImage=this.handleChangeImage.bind(this)
		this.handleChangeTitle=this.handleChangeTitle.bind(this)
		this.handleChangeDetails=this.handleChangeDetails.bind(this)
		
		// this.handleImage=this.handleImage.bind(this)

		// this.handleChanges=this.handleChanges.bind(this)
		this.submitHandler=this.submitHandler.bind(this)
		this.submitReview=this.submitReview.bind(this)
		this.changeToHome=this.changeToHome.bind(this);
		this.changeToNewpage=this.changeToNewpage.bind(this);



	}


	submitReview(event){
		console.log("in submit review")
		event.preventDefault();
		console.log(this.state)
		const review = document.getElementById('texta').value;

		console.log(review)
		// const emojiSection = document.getElementById('emojisection');
		const options = {
			method: 'POST',
			body: JSON.stringify({ review }),
			headers: new Headers({ 'Content-Type': 'application/json' })
		  }
		//   console.log(options.body)
		//   console.log(options)

		//   axios.post()

		fetch("http://localhost:3006/api/mood/s-analyzer",options)
		.then(res => res.json())
		.then(({analysis})=>{
			console.log(analysis)
			if(analysis<0){
				document.getElementById('emogisection').innerHTML = '<img id="emogi" src="https://media.tenor.com/images/3ef3153dcf281e60ac8ebad488449227/tenor.gif">';
				this.setState({
					mood:"sad"
				})
			};
			if(analysis===0){
				document.getElementById('emogisection').innerHTML = '<img id="emogi" src="https://i.pinimg.com/474x/15/df/a7/15dfa79e8ae843fcc4ac4aa78370d745.jpg">';
				this.setState({
					mood:"nutral"
				})
			};
			if(analysis>0){
				document.getElementById('emogisection').innerHTML = '<img id="emogi" src="https://i.pinimg.com/originals/a8/9b/5f/a89b5fe852d32184378c2e76d2403412.gif">';
				this.setState({
					mood:"happy"
				})

			}
			

		})
		.catch(err =>{
			// emojiSection.innerHTML="There was an error processing your request!"
			////console.log("error");
		});
	// 	// .then (({ analysis }) => {
	// 	// 	console.log("okss");
	// 			})


		// console.log("fetched"
	}

	
	
	handleChangeImage(event){
		//console.log(event.target.files[0].name)
		// const fd=new FormData();
		// fd.append("image",event.target.files[0],event.target.files[0].name)
		//console.log(fd)

		// this.setState({
		// 	image:event.target.files[0]
		// })

		// this.setState({
		// 	 	image:event.target.files
		// 	 })
	//  console.log(this.state)

	event.preventDefault();
	const { files } = event.target;
	const localImageUrl =  window.URL.createObjectURL(files[0]);
	   console.log(localImageUrl);	

	this.setState({
		file: URL.createObjectURL(event.target.files[0])
		})
	

	// this.onFileLoaded(localImageUrl);
	// console.log(data);


			}
	handleChangeDetails(event){
		this.setState({
			details:event.target.value
		})
	}
handleChangeTitle(event){
	this.setState({
		title:event.target.value
	})
}	
		submitHandler(event){

			// const fd= new FormData();
			// fd.append("image",this.state.selectFile,this.state.image.selectFile.name)
			// console.log(fd);
		////console.log("S")
		//console.log(this.state.selectFile)
		event.preventDefault()
		this.setState({
			flag:3
		})
		// console.log(this.state)
		axios.post("http://localhost:3001/newpage/content",this.state)
		.then(response =>{
			console.log(response)
		})
		.catch(err =>{
			console.log(err)
		})
		// console.log(this.state.file)

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
	  let imagePreview;
	  if(this.state.file){
		  imagePreview=<img src={this.state.file} id="imageP" alt='image preview'></img>
	  }
	  if(this.state.flag==0){
	  const {title,details}=this.state
    return(
      <div id="newpgdiv">
		  <div>
          <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#" onClick={this.changeToHome}>Home</Nav.Link>
      <Nav.Link to="#" onClick={this.changeToNewpage}>New Page</Nav.Link>
      <Nav className="mr-auto">
      </Nav>
    </Nav>
  </Navbar>
  <br />
      <br></br>
      <div className="parent">
		  {/* <div className="x"> */}
		<form id="uploadimage"  method="post" enctype="multipart/form-data">
			<div className="child">
		<h1 id="pgh1">Image Upload</h1><br/>
			<div id="image_preview">{imagePreview}</div>
			<hr id="line1"></hr>
			<div id="selectImage">
				<label id="label_np">Select Your Image</label><br/>
				<input type="file" name="file" id="image" onChange={this.handleChangeImage} onBlur={this.handleChanges}  required ></input>
				<input type="submit" value="Upload" className="submit" onClick={this.submitHandler} ></input>
			</div>
			</div>
	<div className="child">
		<div className="wrap-input100 validate-input" data-validate="Title">
			<b><input  type="name" id="title_np" name="title" value={title} onChange={this.handleChangeTitle} color="black" placeholder="Title"></input></b>
		</div>
		<textarea id="texta" name="details" value={details} onChange={this.handleChangeDetails} onKeyUp={this.submitReview} rows="20" cols="70" ></textarea>
	<div id="emogisection"></div>
	<br></br>
	</div>
	</form>
      </div>
	  <br></br>
	  </div>
	  <br></br>
	  </div>
	)
	}else if(this.state.flag==1){
		return(
		<Home></Home>
		)

	}else{
		return(
		<Newpage></Newpage>
		)
	}
	// else{
	// 	return(
	// 		// <div>successfully saved items</div>
	// 	<Home></Home>	
	// 	)
	// }
  }
}

export default New_page;