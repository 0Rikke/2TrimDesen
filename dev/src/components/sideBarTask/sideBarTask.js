import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Task } from './Task';

const side ={
   
    border:"solid 1px black",
    width:"25vw",
    height:"70vh",
    overflow: "scroll",
    backgroundColor:"#111",
    marginRight:"20px"
    
}

export const SideBarTask = ()=>{

    const [tasks,setTesks] = useState([]);

    useEffect(()=>{
        const load = async() => {
            const request = await fetch("http://127.0.0.1:8000/api/tasks/2");
            const response = await request.json();
            // console.log(response);
            setTesks(response);
        }
        load()
    },[])

    return(
        <div>
            <div style={side}>
            {
                tasks.map(({nome,priority,id}) =>{
                    
                        return <Task key={id}taskName={nome} taskColor={priority}/> 
                        
                })
            }
            </div>       
        </div>
        
    )
}