import React from 'react'
import "./personal_projects_list.scss"
export default function PersonalProjectsList({title, active, setSelected, id}) {
    

    return (
        <li className={active ? "personalProjectList active" : "personalProjectList"} onClick={() => setSelected(id) }>
            {title}
        </li>
    )
}
