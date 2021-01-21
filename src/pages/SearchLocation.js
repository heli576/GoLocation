import React,{useState} from "react";
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
  const [city,setCity]=useState('');
  const [location,setLocation]=useState({});

const handleChange=async(e)=>{
  setCity(e.target.value);
}

const handleSearch=async(e)=>{
  if(e.key==="Enter"){
  const url2=`https://us1.locationiq.com/v1/search.php?key=pk.3516ab8e881de2c39d2b51e72faa58b5&q=${city}&format=json`;
await fetch(url2)
.then(response => response.json())
.then(data =>{
setLocation(data[0]);
setCity('');
})
}
}

var whatsappmessage    = encodeURIComponent("Address: "+location.display_name);

return(
    <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
     <input value={city} placeholder="Search..." className="search" onChange={handleChange} onKeyPress={handleSearch}/>
      {location&&(
        <div>
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
  </div>)}
    </div>
  )
}

export default MyLocation
