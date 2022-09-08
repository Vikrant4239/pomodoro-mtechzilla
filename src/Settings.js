import React from 'react'
import ReactSlider from 'react-slider'
import './Slider.css'
import {useContext} from "react";
import SettingContext from './SettingContext';
import Backbutton from './Backbutton';

function Settings() {
    const settingInformation = useContext(SettingContext);
  return (
    <div>
        <label ><h4>Break:{settingInformation.workingMin}:00</h4></label>
        <ReactSlider className='setSlider' thumbClassName={'thumb'} value={settingInformation.workingMin} onChange={newValue=>settingInformation.setWorkingMin(newValue)} min={1} max={120} />
        <label ><h4>Time:{settingInformation.breakMin}:00</h4></label>
        <ReactSlider className='setSlider2' thumbClassName={'thumb2'} value={settingInformation.breakMin} onChange={newValue=>settingInformation.setBreakMin(newValue)} min={1} max={120} />
        <Backbutton onClick={()=>settingInformation.setShowSettings(false)}/>
    </div>
  )
}

export default Settings