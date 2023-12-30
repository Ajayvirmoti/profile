import React from "react";
import "./Skills.css";
import skillsData from "../../Assets/Skill_Set.json";
import Jello from 'react-reveal/Jello';
import RubberBand from 'react-reveal/RubberBand';
const Skills = () => {
    let borderCol = "";
    return (
        <div className="skill-container" id="Skills">
            <RubberBand>
                <h1 className="skill-container__title">What I Know</h1>
            </RubberBand>
            <div className="skill-container__Cards">
                {skillsData.skillsData.map((skillType) => (
                    <Jello>
                        <div className="skills__Card">
                            {/* {console.log(skillType)} */}
                            <div className="skills__title">
                                <h1>{skillType.skill.title}</h1>
                            </div>
                            <div className="skill_grid">

                                {skillType.skill.skills.map((skill) => (
                                    <>
                                        {/* { borderCol = skill.borderCol } */}
                                        <div className="skill_name" style={{ borderColor: skill.borderCol }}>
                                            {skill.name}
                                            {/* {console.log(skill.borderCol)} */}

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