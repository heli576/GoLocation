import React,{useState,useEffect} from "react";
import {useHistory} from "react-router-dom";
import '../App.css';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import desktop from "../images/desktop1.png";
import mobile from "../images/mobile1.png";

const MyLocation=()=>{
  const history=useHistory();
  const imageUrl = window.innerWidth >= 650 ? desktop : mobile;
  const [location,setLocation]=useState({});

  const loadLocation=async()=>{
   await navigator.geolocation.getCurrentPosition((position)=> {
      const url=`https://us1.locationiq.com/v1/reverse.php?key=pk.3516ab8e881de2c39d2b51e72faa58b5&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`;
      fetch(url)
      .then(response => response.json())
      .then(data=>{
      setLocation(data);
   })
    })
  }

useEffect(()=>{
  loadLocation();
},[])

var whatsappmessage    = encodeURIComponent("Address: "+location.display_name);

return(
    <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
    <Card className="root" variant="outlined">
      <CardContent>
       <Typography variant="h6" component="h6">
        Latitude:{location.lat}
        </Typography>
        <Typography variant="h6" component="h6">
        Longitude:{location.lon}
        </Typography>
        <Typography variant="h6" component="h6">
        Address:{location.display_name}
        </Typography>
       </CardContent>
      <CardActions>
       <button className="sharebtn" onClick={event=>window.open('https://api.whatsapp.com/send?text='+whatsappmessage,'_blank')}>Share</button>
        <button className="sharebtn" onClick={()=>history.push("/")}>Home</button>
      </CardActions>
    </Card>
    </div>
  )
}

export default MyLocation
