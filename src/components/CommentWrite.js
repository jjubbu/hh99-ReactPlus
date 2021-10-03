import React from "react";

import {Grid, Input, Button} from "../elements"

const CommentWrite = (props) => {

    return (
        <React.Fragment>
            <Grid is_flex="is_flex">
                <Input label="" placeholder="댓글 내용을 입력해주세요:)"/>
                <Grid width="50px" margin="0 0 0 15px">
                    <Button text="작성" width="50px"/>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

//기본적으로 필요한 props를 넘겨주는 방식
CommentWrite.defaultProps = {};

export default CommentWrite;