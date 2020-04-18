import React,{Component} from "react";
import{render} from "react-dom"

class Detail extends Component{
    render(){
        return(
            <div >
                title: {this.props.title}
                <br></br>
                
                Details:{this.props.details}
                <br></br>

                Mood: {this.props.mood}
                <br></br>

            </div>
        );
    }
}
export default Detail;