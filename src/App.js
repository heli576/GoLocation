import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Home from "./pages/Home";
import MyLocation from "./pages/MyLocation";
import SearchLocation from "./pages/SearchLocation";

const App=()=>{
return(
  <Router>
  <Switch>
   <Route path="/" exact component={Home}/>
   <Route path="/mylocation" exact component={MyLocation}/>
   <Route path="/search" exact component={SearchLocation}/>
</Switch>
 </Router>
)
}

export default App;
