import React from "react";
import Data from "../../Assets/ProfileData.json";
import Card from "../../TiltCard/Card";
import './Others.css';


const Others = () => {
    
    return (
        <div className="others">
            <div className="others-title">Others</div>
            <div className="others-grid">
                {Data.otherData.Data.map((data) => (
                    <Card className="others__card">
                        <img src={require("../../Assets/img/" + data.card.logo)} className="project__banner" />
                        <div className="project__card__title">
                            <h1 className="project__title">{data.card.title}</h1>
                            <div className="project__description">{data.card.about}</div>
                        </div>
                    </Card> 
                ))}
            </div>
        </div>
    )

}

export default Others;