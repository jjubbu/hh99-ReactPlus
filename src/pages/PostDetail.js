import React from "react";
import { Post, CommentWrite, CommentList } from "../components";
import {Grid, Text, Image, Button, Input} from "../elements/index";

const PostDetail = () => {

    return (
        <React.Fragment>
            <Post/>
            <CommentWrite/>
            <CommentList/>
        </React.Fragment>
    )
};

export default PostDetail;