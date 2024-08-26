import { useState } from "react"
import { useNavigate } from 'react-router-dom';


export default function HomePage(){
    const navigate = useNavigate();
    const [ id, setId ] = useState('');
    const goSeeAll = () =>{
        navigate('/all');
    }
    const getById = () =>{
        navigate(`/tasks/${id}`);
    }
    return(
        <div>
           <button onClick={goSeeAll}>Ver todas</button>
           <input name="id" required onChange={(inputId) => {
                    setId(inputId.target.value)
                }}></input>
            <button onClick={getById}>Buscar tareas</button>
        </div>
        

    )
}