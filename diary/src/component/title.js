import React,{Component} from"react"
import Details from "./Details";
import HttpService from "./httpService"


const http = new HttpService();
class Title extends Component{
    constructor(props){
        super(props);
        this.state={
          flag:0,
          contents:[]
        }
        console.log("c")
        this.loadDetails=this.loadDetails.bind(this);
        this.loadDetailsList=this.loadDetailsList.bind(this);

        // this.loadDetails();
    }

loadDetails(){
    // console.log(this.props.title)
    console.log("a");
    var self=this
    http.getContentsTitle(this.props.title)
    .then(data =>{
        self.setState({contents:data})
    },err =>{
        console.log("error")
    })
}
// {this.loadDetailsList()}
loadDetailsList(){
    console.log("b")
    console.log("hello");
    // file open krna ... content.details ko uss file me store krna ..
    const list=this.state.contents.map((content) =>
    // console.log("hello");
    <Details title={content.title} details={content.details} image={content.image} mood={content.mood} ></Details>
    );
    console.log(this.state.flag)
 
    return(list)
}




    render(){
        // if(this.state.flag==0){
        return(
            <div id="div_title">
                <a href="#" onClick={this.loadDetails}>{this.props.title}</a>
                {this.loadDetailsList()}

            </div>
        )
        // }else{
        //     return(
        //         <div>
        //             <h1>HERRRRRRRRRRR</h1>

        //     </div>
        //     )
        }
    }
// }
export default Title;