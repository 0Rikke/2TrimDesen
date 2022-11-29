import React from "react";
import './navbar.css';
export const NavBar = ()=>{
    return(
        <>
            <ul>
                <li><a href="#as">HOME</a></li>
                <li style={{float:"right"}}><a href="#as">USER</a></li>
            </ul>
        </>
    )
}