import React from "react";
import Data from "../Assets/Others.json";
import Card from "../TiltCard/Card";
import './Others.css';

const Others = () => {
    return (
        <div className="others">
            <div className="others-title">Others</div>
            <div className="others-grid">
                {Data.OthersData.map((data) => (
                    <Card className="others__card">
                        {/* <img src={require("../Assets/img/" + data.project.logo)} className="project__banner" /> */}
                        <img src={require("../Assets/img/" + data.card.logo)} className="project__banner" />
                        <div className="project__card__title">
                            {console.log(data.card)}
                            <h1 className="project__title">{data.card.title}</h1>
                            <div className="project__description">{data.card.about}</div>
                        </div>
                    </Card>



                ))}
                {/* <div>hello</div> */}
            </div>
        </div>
    )

}

export default Others;