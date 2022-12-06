import React, { useState } from "react";



export const Modal = ({visibility})=>{

    const[texto,setTexto] = useState('')

    const handleChange = ({target}) => setTexto(target.value)

    
    if(visibility){
        visibility = "block";
    }else{
        visibility = "none";
    }
    const modal = {
        display: visibility,
        position:"absolute",
        height:"500px",
        width:"1000px",
        backgroundColor:"black",
        left:'150px',
        top:"70px",
        color:"white",
    }


    const add = async()=>{
        
        const body = new FormData();
        body.append('projectName',texto)
        body.append('mercado', 1)
        body.append('home', 1)
        body.append('work', 1)
        body.append('id_user', 16)

        const request = await fetch('http://127.0.0.1:8000/api/categories/create',{
        method:'POST',
        body
       })

       

       visibility = !visibility;
    }

    
    
    return(
        <div style={modal}>
            
                <label htmlFor="t">Nome do projeto</label>
                <input name="t"type="text" onChange={handleChange}/>
                <button type="button" onClick={add}>enviar</button>
            
        </div>
    )
}