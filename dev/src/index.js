import React from 'react';
import ReactDOM from 'react-dom/client';
import { Workspace } from './components/workspace/Workspace';
import { SideBarTask } from './components/sideBarTask/sideBarTask';
import { Title } from './components/Title/Title';
// import {NavBar} from './components/Nav/NavBar';
import { BottomGadg } from './components/Gadgets/BottomGadg';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <NavBar/> */}
      <div style={{display:"flex"}}> 
      <div>
          <SideBarTask/>
        </div> 
        <div>
          <Title titulo="titulo aqui"/>
          <Workspace/> 
        </div>
         
    </div>
    
    <BottomGadg/>

  </React.StrictMode>
);

