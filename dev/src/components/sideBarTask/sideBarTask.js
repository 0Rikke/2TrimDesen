import React from 'react';
import { Task } from './Task';

const side ={
    //display:"flex",
    border:"solid 1px black",
    margin:"10px",
    width:"380px",
    height:"77vh",
    overflow: "scroll"
}

export const SideBarTask = ()=>{

    return(
        <div>
            <div style={side}>
                <Task taskColor="red" taskName="FirstTask"/>
                <Task taskColor={"green"} taskName={"SecondTesk"}/>
                <Task taskColor={"blue"} taskName={"ThirdTesk"}/>
                <Task taskColor="red" taskName="FirstTask"/>
                <Task taskColor={"green"} taskName={"SecondTesk"}/>
                <Task taskColor={"blue"} taskName={"ThirdTesk"}/>
            </div>
            
                
            
        </div>
        
    )
}