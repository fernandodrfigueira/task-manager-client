import { toBeRequired } from "@testing-library/jest-dom/matchers"
import { useState } from "react"

export default function NewTaskPage() {
    const [title, setTitle] = useState('')
    const [project, setProject] = useState('')
    const [category, setCategory] = useState('')
    

    return (
        <div>
            <form onSubmit={e => {
            e.preventDefault();

            }}>
                <label>Título</label>
                <input name="title" required onChange={(inputTitle) => {
                    setTitle(inputTitle.target.value)
                }}/>
                <label>Proyecto</label>
                <input name="project" required onChange={(inputProject) => {
                    setProject(inputProject.target.value)
                }}></input>
                <label>Categoría</label>
                <input name="category" required onChange={(inputCategory) => {
                    setCategory(inputCategory.target.value)
                }}></input>
                <button type="submit" onClick={() => {
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
                }
                }>Enviar</button>
            </form>
        </div>
        

    )
}