import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function NewTaskPage() {
    const [title, setTitle] = useState('')
    const [project, setProject] = useState('')
    const [category, setCategory] = useState('')
    const navigate = useNavigate()
    

    return (
        <div className="mainContainer">
            <form onSubmit={e => {
            e.preventDefault();

            }}>
                <div className="formElement">
                    <label className="basicLabel">Título</label>
                    <input className="basicInput" name="title" required onChange={(inputTitle) => {
                        setTitle(inputTitle.target.value)
                     }}/>
                </div>
                <div className="formElement">
                    <label className="basicLabel">Proyecto</label>
                    <input className="basicInput" name="project" required onChange={(inputProject) => {
                    setProject(inputProject.target.value)
                    }}></input>
                </div>
                <div className="formElement">
                    <label className="basicLabel">Categoría</label>
                    <input className="basicInput" name="category" required onChange={(inputCategory) => {
                        setCategory(inputCategory.target.value)
                }}></input>
                </div>
                <button className="basicButton" type="submit" onClick={() => {
                    fetch('http://localhost:3000/addTask', {
                        method: 'POST',
                        headers: { 
                            'Authorization': localStorage.getItem('token'),
                            'Content-Type': 'application/json',
                           },
                        body: JSON.stringify(
                            {
                            "title": title,
                            "project": project,
                            "category": category,
                            "status": "pendiente"
                        }
                        )
                        
                    })
                console.log(title, project, category)
                navigate('/all')
                window.location.reload(); 
                }
                }>Enviar</button>
            </form>
        </div>
        

    )
}