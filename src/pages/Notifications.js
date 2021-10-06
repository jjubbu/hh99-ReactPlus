
import React from "react";
import {useSelector} from "react-redux";
import Cards from "../components/Card";

import { Grid, Image, Text } from "../elements";

import {apiKey} from "../shared/firebase";

const Notifications = (props) => {

    // const is_login = useSelector((state) => state.user.is_login);
    // const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
    // const is_session = sessionStorage.getItem(_session_key)
    //     ? true
    //     : false;

    let noti = [
        {user_name:"aaa", post_id:"post1", image_url:"",},
        {user_name:"aaa", post_id:"post2", image_url:"",},
        {user_name:"aaa", post_id:"post3", image_url:"",},
        {user_name:"aaa", post_id:"post4", image_url:"",},
        {user_name:"aaa", post_id:"post5", image_url:"",}
    ];
    

        return (
            <React.Fragment>
                <Grid padding="16px"  >
                    {//n은 props    인듯?
                        noti.map((n)=>{
                            return (
                                <Cards {...n} key={n.post_id}/>
                            )
                        })
                    }
                
                </Grid>
            </React.Fragment>
        )

    

    return (<div>
        로그인을 해주세요!
    </div>)

}

export default Notifications;