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
        <div className="mainContainer">
            
            <div className="homeSearch">
                <input className="basicInput" name="id" required onChange={(inputId) => {
                        setId(inputId.target.value)
                    }}></input>
                <button className="basicButton" onClick={getById}>Buscar tareas</button>
            </div>
            <button className="basicButton" onClick={goSeeAll}>Ver todas</button>
        </div>
        

    )
}