import React from "react";
import {useSelector} from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";

import {apiKey} from "../shared/firebase";
import Post from "../components/Post";

const PostList = ()=>{
    const history = useHistory();
    const is_login = useSelector((state)=> state.user.is_login);
    const session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
    const is_session = sessionStorage.getItem(session_key)? true : false;
    
    const addPostButton = () => {
        if(is_login && is_session){
            return <PlusButton onClick={()=>{history.push('/postwrite')}}>+</PlusButton>
        }
    }
    return(
        <React.Fragment>
            {addPostButton()}
            <Post />
        </React.Fragment>
    )
}


const PlusButton = styled.button`

width: 52px;
height: 52px;
position: absolute;
border: none;
border-radius: 100%;
background: #ffd600;
font-size: 40px;
font-weight: 700;
bottom:50px;
right: 3%;
z-index: 9999;
`

export default PostList;