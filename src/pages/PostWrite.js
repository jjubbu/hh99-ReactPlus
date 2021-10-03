import React from "react";
import { Grid, Text, Image, Button, TextArea,InputFile} from "../elements/index";

const PostWrite = () => {

    return (
        <React.Fragment>
            <Grid padding="16px" margin="0 0 48px">
            <Text size="32px" bold margin="22px 0 14px">게시글 작성</Text>
                <InputFile type="file"/>
            </Grid>
            <Grid>
                <Text size="20px" bold margin="0 16px 11px">미리보기</Text>
                <Image shape="rectangle"/>
            </Grid>
            <Grid margin="24px 0 36px" padding="16px">
                <TextArea label="게시글 내용"/>
            </Grid>
            <Grid padding="16px">
            <Button text="게시글 작성"/>
            </Grid>
        </React.Fragment>
    )
};

export default PostWrite;