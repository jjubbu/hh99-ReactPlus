import React from "react";


import {Grid, Image, Text} from "../elements"





const Post = (props) => {

    return (
        <React.Fragment>
            <Grid padding="" >
                <Grid is_flex>
                    <Image shape="circle" src={props.src}/>
                    <Text bold>{props.user_info.user_name}</Text>
                    <Text>{props.insert_dt}</Text>
                </Grid>
                <Grid padding="16px">
                    <Text>{props.comment}</Text>
                </Grid>
                <Grid>
                    <Image shape="rectangle" src={props.src}/>
                </Grid>
                <Grid padding="16px">
                    <Text bold>{props.comment_count}</Text>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

//기본적으로 필요한 props를 넘겨주는 방식
Post.defaultProps = {
    user_info:{
        user_name: "seon",
        user_profile: "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg"
    },
    post_image : "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg",
    comment:"고양이네요!",
    comment_count:10,
    insert_dt:"2021-09-30" 
}; 


export default Post;