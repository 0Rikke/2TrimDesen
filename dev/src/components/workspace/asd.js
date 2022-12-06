import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "../button/Button";

const style ={
    display:"flex",
    border:"solid 1px black",
    padding:"3vh",
    overflow:"hidden",
    margin:"10px",
    textAlign:"center",
    justifyContent:"center",
    float:"left",
    width:"880px"

}

export const Toolbar = ()=>{

    const [categories,setCategories] = useState({});

    useEffect(()=>{
        const load = async()=>{

            const consulta = await fetch('http://127.0.0.1:8000/api/categories/18')
            const resposta = await consulta.json();
            const obj = resposta[0];
            // const obj = JSON.parse(resposta)
            setCategories(obj);
            // console.log(obj)

        }
        load()
    },[])

    return(
        <div>
            <div style={style}>
            {
            Object.keys(categories).map((item) => {
                
                if(categories[item]>0){
                    return <Button key={item}name={item} onClick={()=>{ window.alert("recheio di murangu")}}/>
                }
            })
        }
            </div>
        </div>
    )
}