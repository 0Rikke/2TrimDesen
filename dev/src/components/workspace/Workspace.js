import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Toolbar } from "./Toolbar";
import { Workarea } from "./Workarea";
import { Title } from "../Title/Title";


export const Workspace = ()=>{

    const [categories,setCategories] = useState({});
   
    //const func = ()=>{ window.alert("recheio di murangu")};
    
    useEffect(()=>{
        const load = async()=>{

            const consulta = await fetch('http://127.0.0.1:8000/api/categories/16')
            const resposta = await consulta.json();
           // console.log(resposta)
            const obj = resposta[1];
            // const obj = JSON.parse(resposta)
            // console.log(obj)
            setCategories(obj);
            

        }
        load()
    },[])    

    return(
        <div>
            <Title titulo="titulo aqui" categories={categories}/>
            <Workarea/>
            
            <Toolbar categories={categories}/>
        </div>
    )
}