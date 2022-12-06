import React, {useContext,useState,useEffect}from "react";
import { Modal } from "../modal/Modal";
import { Button } from "../button/Button";
import "./navbar.css";
import Context from "../Context";

export const NavBar = ()=>{

    const [selected,setSelceted] = useContext(Context)

    const [categories,setCategories] = useState({});
    const [showHide,setShowHide] = useState(false)
    
    const handleSelected = ()=>{
        setSelceted('')
        console.log()
    };
    
    useEffect(()=>{
        const load = async()=>{

            const consulta = await fetch('http://127.0.0.1:8000/api/categories/17')
            const resposta = await consulta.json();
           
            const obj = resposta[0];
            // const obj = JSON.parse(resposta)
            // console.log(obj)
            setCategories(obj);
            

        }
        load()
    },[])

    return(
        <div>
            <ul>
                {
                    Object.keys(categories).map((key) =>{
                            if(categories[key] > 0){
                            return <li key={key}><a><Button name={key} onClick={handleSelected}/></a></li>
                            } 
                    })
                }
                <li><a href="#as"><Button onClick={()=>setShowHide(!showHide )} name='+'/></a></li>  
                <li style={{float:"right"}}><a href="#teste">user</a></li>
            </ul>  

                <Modal visibility={showHide}/>        
        </div>
    )
}