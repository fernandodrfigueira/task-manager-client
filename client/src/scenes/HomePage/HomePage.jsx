import { useEffect, useState } from "react"
import Task from "../../components/Task"



export default function HomePage(){
    const [ data, setData ] = useState ([]);
    useEffect(() => {
        fetch('http://localhost:3000/gettasks', {
        method: 'GET',
          headers: {
            'Content-Type': 'application/json',
           },
            
          })
        .then(res => res.json())
        .then(json => setData(json))
    },
    
   [])
   console.log(data);
    return (<ul>{data.forEach((dataEntry) => {
       return(<li>{dataEntry.title}</li>)
    }
    
    )}</ul>)

}