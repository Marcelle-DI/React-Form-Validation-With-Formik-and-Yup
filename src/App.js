
import React from 'react';
import Personalform from './components/Personalform';

import "./assets/enSURE.css";
import logo from './assets/enSURElogo.png';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div>
          <Personalform />
        </div>
        <div>
          <img src={logo} alt="enSure Logo"/>
        </div>        
      </div>


    </div>
  );
}

export default App;
