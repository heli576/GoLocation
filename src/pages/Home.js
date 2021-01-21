import React from 'react';
import {useHistory} from 'react-router-dom';
import '../App.css';

import desktop from "../images/desktop.png";
import mobile from "../images/mobile.png";

const Home = () => {
  const history = useHistory();
  const imageUrl = window.innerWidth >= 650 ? desktop : mobile;

  return (
    <div className = "App" style = {{backgroundImage: `url(${imageUrl})`}}>
    <div className = "btnwrapper">
    <button className = "btn" onClick = {() => history.push("/mylocation")}> Live Location </button>
    <button className = "btn" onClick = {() => history.push("/search")}> Search Location </button>
    </div >
    </div>
  )
}

export default Home;
