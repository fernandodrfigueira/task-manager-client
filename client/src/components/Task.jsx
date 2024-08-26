import { useState } from "react"

export default function Task({title, project, category, status, _id}) {
    const [ isEdit, setIsEdit ] = useState(false)
    const [updatedTitle, setTitle] = useState(title)
    const [updatedProject, setProject] = useState(project)
    const [updatedCategory, setCategory] = useState(category)
    const [updatedStatus, setStatus] = useState(status)
    
    return (<div>
        {!isEdit&&(
            <div>
                <p>{updatedTitle}</p>
                <p>{updatedProject}</p>
                <p>{updatedCategory}</p>
                <p>{updatedStatus}</p>
            </div>
)}
        {isEdit&&(
            <div>
                <input name="title" placeholder={updatedTitle} required onChange={(inputTitle) => {
                    setTitle(inputTitle.target.value)
                }}/>
                <input name="project" placeholder={updatedProject} required onChange={(inputProject) => {
                    setProject(inputProject.target.value)
                }}></input>
                <input name="category" placeholder={updatedCategory} required onChange={(inputCategory) => {
                    setCategory(inputCategory.target.value)
                }}></input>
                <select value={updatedStatus} onChange={(inputStatus) => {
                    setStatus(inputStatus.target.value)
                }}>
                    <option value="completada">completada</option>
                    <option value="pendiente">pendiente</option>
                </select>

                
            </div>
)}
                <p>{_id}</p>
                <button type="delete" onClick= {() => {
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
                    <button type="edit" onClick={() => {
                        setIsEdit(true)
                    }}>Editar</button>)}
                {isEdit&&(
                    <button type="submit" onClick={() => {
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
    )
}