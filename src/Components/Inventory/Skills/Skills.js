import React from "react";
import "./Skills.css";
import Data from "../../Assets/ProfileData.json";
import Jello from 'react-reveal/Jello';
import RubberBand from 'react-reveal/RubberBand';
const Skills = () => {
    return (
        <div className="skill-container" id="Skills">
            <RubberBand>
                <h1 className="skill-container__title">What I Know</h1>
            </RubberBand>
            <div className="skill-container__Cards">
                {Data.skillsData.map((skillType) => (
                    <Jello>
                        <div className="skills__Card">
                            <div className="skills__title">
                                <h1>{skillType.skill.title}</h1>
                            </div>
                            <div className="skill_grid">

                                {skillType.skill.skills.map((skill) => (
                                    <>
                                        <div className="skill_name" style={{ borderColor: skill.borderCol }}>
                                            {skill.name}
                                        </div>
                                    </>

                                ))}
                            </div>

                        </div>

                    </Jello>
                ))}
            </div>

        </div>
    );
};

export default Skills;