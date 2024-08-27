import { useParams } from "react-router-dom"
import Task from "../../components/Task";
import { useState, useEffect } from "react";


export default function TaskPage(){
    const {taskId } = useParams()
    const [ data, setData ] = useState ([]);
    useEffect(() => {
        const token = localStorage.getItem('token')
        fetch(`http://localhost:3000/getbyid/${taskId}`, {
        method: 'GET',
          headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
           },
            
          })
        .then(res => res.json())
        .then(json => setData(json))

},[])
    return(
        <div className="mainContainer">
           <Task
                title={data.title}
                project={data.project}
                category={data.category}
                status={data.status}
                _id={data._id}
             >

       </Task> 
        </div>
        
    )
}
