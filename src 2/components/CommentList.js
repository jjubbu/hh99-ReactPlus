import React from "react";

import {Grid, Image, Text,Button} from "../elements"

const CommentList = (props) => {

    return (
        <React.Fragment>
            <Grid margin="48px 0">
                <CommentItem/>
                <CommentItem/>
                <CommentItem/>
            </Grid>
        </React.Fragment>
    )
}

const CommentItem = (props) => {
    const {user_profile, user_name, user_id, post_id, contents, insert_dt} = props;
    return(
        <Grid is_flex="is_flex">
                    <Grid is_flex="is_flex" width="93px">
                        {/* <Image/> */}
                        <Text>{user_name}</Text>
                    </Grid>
                    <Grid width="100%" is_flex="is_flex" margin="0 0 0 8px">
                        <Text margin="0px">{contents}</Text>
                        {/* <Text margin="0px">{insert_dt}</Text> */}
                        <Button text="삭제" width="50px"/>
                    </Grid>
                </Grid>
    )
}
//기본적으로 필요한 props를 넘겨주는 방식
CommentItem.defaultProps = {
    user_profile: "",
    user_name: "mean0",
    user_id: "",
    post_id: 1,
    contents: "귀여운 고양이네요!",
    insert_dt: '2021-01-01 19:00:00'
}

export default CommentList;