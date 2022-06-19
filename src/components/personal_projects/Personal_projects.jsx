import PersonalProjectsList from "../personal_projects_list/personal_projects_list";
import Card from "../cards/cards"
import "./personal_projects.scss";
import React, { useState } from "react";

export default function PersonalProjects(props) {


    return (
        <div className='personal_projects' id="personal_projects">
            <ul>
                <li><Card /></li>
            </ul>

        </div>
    )
}
