import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import Buttons from "./Buttons";
import React from "react";
import PauseButton from "./PauseButton";
import Setting from "./Setting";
import { useContext, useState, useEffect, useRef } from "react";
import SettingContext from "./SettingContext";

const safe = "##22438";
const danger = "#FF0000";

function Timer() {
  const settingInformation = useContext(SettingContext);
  const [paused, setpaused] = useState(false);
  const [mode, setMode] = useState("work");
  const [secondleft, setSecondLeft] = useState(0);
  const secondLeftRef = useRef(secondleft);
  const pausedRef = useRef(paused);
  const modeRef = useRef(mode);
  function switchMode() {
    const nextMode = modeRef.current === "work" ? "break" : "work";
    const nextSecond =
      (nextMode === "work"
        ? settingInformation.workingMin
        : settingInformation.breakMin) * 60;
    setMode(nextMode);
    modeRef.current = nextMode;
    setSecondLeft(nextSecond);
    secondLeftRef.current = nextSecond;
  }
  function tick() {
    secondLeftRef.current--;

    setSecondLeft(secondLeftRef.current);
  }
  function initTimer() {
    setSecondLeft(settingInformation.workingMin * 60);
  }
  useEffect(() => {
    initTimer();
    const interval = setInterval(() => {
      console.log("int");
      if (pausedRef.current) {
        return;
      }
      if (secondLeftRef.current === 0) {
        return switchMode();
      }
      tick();
    }, 1000-2);
    return () => clearInterval(interval);
  }, [settingInformation]);

  const totalSeconds =
    mode === "work"
      ? settingInformation.workingMin * 60
      : settingInformation.breakMin * 60;

  const percent = Math.round((secondleft / totalSeconds) * 100);
  const minute = Math.floor(secondleft / 60);
  let second = secondleft % 60;
  if (second < 10) second = "0" + second;

  return (
    <div>
      <CircularProgressbar
        value={percent}
        text={minute + ":" + second}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: mode === "work" ? danger : safe,
          trailColor: "rgba(254,254,234,.4)",
        })}
      />
      <div className="btn">
        {paused ? (
          <Buttons
            onClick={() => {
              setpaused(false);
              pausedRef.current = false;
            }}
          />
        ) : (
          <PauseButton
            onClick={() => {
              setpaused(true);
              pausedRef.current = true;
            }}
          />
        )}
      </div>
      <div className="setting">
        <Setting onClick={() => settingInformation.setShowSettings(true)} />
      </div>
    </div>
  );
}

export default Timer;
