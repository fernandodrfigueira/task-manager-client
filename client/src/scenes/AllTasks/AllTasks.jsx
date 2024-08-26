import { useEffect, useState } from "react"
import Task from "../../components/Task"
import { useNavigate } from 'react-router-dom';



export default function HomePage(){
    const navigate = useNavigate();
    const [ data, setData ] = useState ([]);
    useEffect(() => {
        const token = localStorage.getItem('token')
        fetch('http://localhost:3000/gettasks', {
        method: 'GET',
          headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
           },
            
          })
        .then(res => res.json())
        .then(json => setData(json))
    },
    
   [])
   console.log(data);
    return (
        <div>
        <button onClick={() => navigate('/new')}>+</button>
        <ul> {data.map((dataEntry) => {
       return <li><Task
                title={dataEntry.title}
                project={dataEntry.project}
                category={dataEntry.category}
                status={dataEntry.status}
                _id={dataEntry._id}
             >

       </Task></li> 
    }
    
    )}</ul>
    </div>)

}