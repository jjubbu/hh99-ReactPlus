import React from "react";
import {Grid, Image, Text} from "../elements";

const Cards = (props) => {

    const {image_url, user_name, post_id} = props;

    return (
        <React.Fragment>
            <Grid padding="16px" is_flex="is_flex" margin="8px 0" bg="#eff6ff">
                <Grid width="85px" height="85px" margin="0 8px 0 0" is_flex="is_flex">
                    <Image src={image_url} size={85} shape="square"/>
                </Grid>
                <Grid>
                    <Text>
                        <span
                            style={{
                                fontWeight: 700
                            }}>{user_name}</span>
                        님이 게시글에 댓글을 남겼습니다!</Text>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

Cards.defaultProps = {
    image_url:"http://health.chosun.com/site/data/img_dir/2020/05/07/2020050702573_0.jpg",
    user_name:"aa",
    post_id:""
}

export default Cards;