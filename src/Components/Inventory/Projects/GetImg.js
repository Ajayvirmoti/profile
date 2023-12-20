import React from 'react';
import "./GetImg.css";

const GetImg = ({image}) => {
    // Write your code here
    // make a variable to map aal the mg from the ../Assets/img folder 
    console.log(image);
    
    const temp = require("../Assets/img/"+image);

    return (
        <div className='get-image'>
            <img src={temp} width={100}/>
        </div>
    );
};

export default GetImg;
