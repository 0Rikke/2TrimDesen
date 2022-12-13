import React from "react";
import { useDrag } from "react-dnd";
import { TYPES } from "./types";
export const Task = ({task,estilo}) =>{
    
    const [{isDragging},drag] = useDrag(()=>({
        type:TYPES.TASK,
        item:task,
        collect: (monitor)=>({
            isDragging: !!monitor.isDragging(),
        })
    }))


    
    
    

    
    return <div ref={drag} style={{backgroundColor: isDragging ? "white" : "",color: isDragging ?"black":""}}>{task.nome}</div>
}