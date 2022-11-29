import React from "react";
import { Gear } from 'react-bootstrap-icons';

export const Conf = (onClick)=>{
    return <button onClick={onClick}><Gear/></button>
}