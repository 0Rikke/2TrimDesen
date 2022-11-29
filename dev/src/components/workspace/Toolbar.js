import React from "react";
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

    const func = ()=>{ window.alert('oi')}

    return(
        <div>
            <div style={style}>

        {/* 
    fazer a função map com o que tiver setado
    ou seja tem que fazer um hook também e armazenar 
    no toobal o status lá dos icones armazenados                
        */}
            <Button onClick={func}/>
            <Button onClick={func}/>
            <Button onClick={func}/>
            <Button onClick={func}/>
            <Button onClick={func}/>


            </div>
        </div>
        
    )
}