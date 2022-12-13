import React, { useState,useEffect } from "react";
import { Task } from "./Task";
import { useDrop } from "react-dnd";
import { TYPES } from "./types";
import axios from 'axios'

export const Main = () => {
    
    const [{isOver}, drop] = useDrop(()=>({
        accept:TYPES.TASK,
        drop: (item)=>{
            console.log('item: ', item)
            addTask(item)
        },
        collect: (monitor)=>({
            isOver: !!monitor.isOver(),
        })
    }))
    const [Work,setWork] = useState([])
    const [Tasks,setTasks] = useState([]) 

    const addTask = (item) =>{
        setTasks(t => t.filter(({id}) => id !== item.id))
        setWork((Work)=>[...Work, item]);
    }

    const style ={
        margin:"10px",
        padding:"10px",
        width:"200px",
        color:"white",
        backgroundColor:"black"
    }
    const dropStyle ={
        border:isOver ? "solid 3px red":"",
        margin:"10px",
        padding:"10px",
        width:"200px",
        color:"white",
        backgroundColor:"black"
    }

    useEffect(()=>{
        const load = async()=>{
            const r = await axios.get('http://127.0.0.1:8000/api/tasks/2');
            setTasks(r.data)
        }
        load();
    },[])

    console.log(Tasks)
    return(
        <div ref={drop} style={{display:'flex'}}>
            <div className="SideBar" style={style}>
                {
                    Tasks.map((t)=> <Task estilo={Tasks.priority} key={t.id} task={t}/>)
                }
            </div>

            <div
            className="WorkSpace" style={dropStyle}>
              {
                Work.map((t)=><Task key={t.id} task={t}/>)
              }
            </div>
        </div>   
    );
} 