export default function Task({title, project, category, status, _id}) {
    return (<div>
                <p>{title}</p>
                <p>{project}</p>
                <p>{category}</p>
                <p>{status}</p>
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
            </div>
    )
}