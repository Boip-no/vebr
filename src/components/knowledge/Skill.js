import React from "react";

function Skill(props) {
    const skillLevel = props.skillLevel;
    let i = 0;    
            if (i < skillLevel.skill) {
                return i += "<BiRadioCircleMarked />";
            }
            else {
                return i += "<BiRadioCircle />";
            }
}

export default Skill;

