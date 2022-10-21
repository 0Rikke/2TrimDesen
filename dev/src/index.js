import React from 'react';
import ReactDOM from 'react-dom/client';
import { Workspace } from './components/workspace/Workspace';
import { SideBarTask } from './components/sideBarTask/sideBarTask';
import { Title } from './components/Title/Title';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Title titulo={"Titulo de Teste"}/>

    <div style={{display:"flex"}}> 
      <div>
        <Workspace/> 
      </div>
      <div>
        <SideBarTask/>
      </div>  
    </div>
  </React.StrictMode>
);

