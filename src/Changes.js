import React from 'react'
import Settings from './Settings';
import Timer from './Timer';
import {useState} from "react";
import SettingContext from './SettingContext';
import {Link} from 'react-router-dom'

function Changes() {
    const [showSettings, setShowSettings]=useState(false); 
    const [workingMin, setWorkingMin]=useState(5);
    const [breakMin, setBreakMin]=useState(25);
  return (

    <div className='changes'>
    
      
    
      
    

      <h4>You may set the time accordingly</h4>
      <h5>At first it will show a blink of your 'Break' and then the Timer will start</h5>
      
      <SettingContext.Provider value={{
        showSettings,
        setShowSettings,
        workingMin,
        breakMin,
        setWorkingMin,
        setBreakMin,
      }}>
        {showSettings ? <Settings/>:<Timer/>}
      </SettingContext.Provider>
      <Link to='/'><button>
        SignOut
      </button>
      </Link>
      
    
    </div>

    
    
  );
}

export default Changes