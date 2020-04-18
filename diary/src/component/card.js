import React from 'react';
import PropTypes from 'prop-types';

const Card = ({title,index,image}) => {
    // constructor(props){
    //     super(props);
    // }
    // const {title}=title;
    // const {image}=image
    // const {index}=index;
    return(
    <div id={`card-${index}`} className="card">
        <img src={image} alt={title}></img>
        <div className="details">
            <span className="index">{index}</span>
    <p className="titleCard">{title}</p>
        </div>

    </div>

    )
}
export default Card