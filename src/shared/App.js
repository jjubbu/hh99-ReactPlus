import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import PostList from "../pages/PostList";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

import Header from "./Header";
import { Grid } from "../elements";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Grid>
      <BrowserRouter>
        <Route path="/" exact component={PostList}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/signup" exact component={Signup}/>
      </BrowserRouter>
      </Grid>
    </React.Fragment>  
  );
}

export default App;
