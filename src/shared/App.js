import React from "react";
import {Route} from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/store";
import { useDispatch } from "react-redux";

import PostList from "../pages/PostList";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

import Header from "./Header";
import { Grid } from "../elements";

import {actionCreators as userActions} from "../redux/modules/user";
import { apiKey } from "./firebase";

function App() {
  const dispatch = useDispatch();

  const session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(session_key)? true : false;

  React.useEffect(()=>{
    if(is_session){
      dispatch(userActions.loginCheckFB());
    }
  },[]);

  return (
    <React.Fragment> 
      <Header/>
      <Grid>
        {/* 
        store에 있는 history를 연결하여 
        .then을 통해 액션이 리듀서로 실행되기 전에
        히스토리 실행하기.
        */}
      <ConnectedRouter history={history}> 
        <Route path="/" exact component={PostList}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/signup" exact component={Signup}/>
      </ConnectedRouter>
      </Grid>
    </React.Fragment>  
  );
}

export default App;
