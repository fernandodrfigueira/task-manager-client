import { useState } from "react"

export default function Task({title, project, category, status, _id}) {
    const [ isEdit, setIsEdit ] = useState(false)
    const [updatedTitle, setTitle] = useState(title)
    const [updatedProject, setProject] = useState(project)
    const [updatedCategory, setCategory] = useState(category)
    const [updatedStatus, setStatus] = useState(status)
    
    return (<div className="basicCard">
        {!isEdit&&(
            <div>
                <p className="taskTitle">{updatedTitle}</p>
                <p className="taskProject">{updatedProject}</p>
                <p className="taskCategory">{updatedCategory}</p>
                <p className="taskStatus">{updatedStatus}</p>
            </div>
)}
        {isEdit&&(
            <div className="cardForm">
                <input className="basicInput" name="title" placeholder={updatedTitle} required onChange={(inputTitle) => {
                    setTitle(inputTitle.target.value)
                }}/>
                <input className="basicInput" name="project" placeholder={updatedProject} required onChange={(inputProject) => {
                    setProject(inputProject.target.value)
                }}></input>
                <input className="basicInput" name="category" placeholder={updatedCategory} required onChange={(inputCategory) => {
                    setCategory(inputCategory.target.value)
                }}></input>
                <select className="basicSelect" value={updatedStatus} onChange={(inputStatus) => {
                    setStatus(inputStatus.target.value)
                }}>
                    <option value="completada">completada</option>
                    <option value="pendiente">pendiente</option>
                </select>

                
            </div>
)}
                <p className="taskId">{_id}</p>
                <div className="cardButtons">
                <button className="basicButtonRed" type="delete" onClick= {() => {
                    fetch(`http://localhost:3000/delete/${_id}`, {
                        method: 'DELETE',
                        headers: { 
                            'Authorization': localStorage.getItem('token'),
                            'Content-Type': 'application/json',
                           },
                        })
                }
                
                }>Borrar</button>
                {!isEdit&&(
                    <button className="basicButton" type="edit" onClick={() => {
                        setIsEdit(true)
                    }}>Editar</button>)}
                {isEdit&&(
                    <button className="basicButton" type="submit" onClick={() => {
                        setIsEdit(false)
                        fetch(`http://localhost:3000/updateTask/?id=${_id}`, {
                            method: 'PUT',
                            headers: { 
                                'Authorization': localStorage.getItem('token'),
                                'Content-Type': 'application/json',
                               },
                            body: JSON.stringify(
                                {
                                "title": updatedTitle,
                                "project": updatedProject,
                                "category": updatedCategory,
                                "status": updatedStatus,
                            }
                            )
                            
                        })
                    console.log(title, project, category)
                    }
                    }>Guardar</button>)}
                    </div>
            </div>
    )
}