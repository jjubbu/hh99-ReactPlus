import React from "react";
import Permit from "./Permit";
import { Grid, Text, Button } from "../elements";
import { getCookie, deleteCookie } from "./Cookie";
import { useSelector , useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import {history} from "../redux/store"
import { apiKey } from "./firebase";




const Header = () => {
    const dispatch = useDispatch();
    const is_login = useSelector((state)=> state.user.is_login);
    const session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
    const is_session = sessionStorage.getItem(session_key)? true : false;
    
    //로그인 상태일시 보여줄 헤더
    if (is_login && is_session){
        return (
            <React.Fragment>
                <Grid is_flex padding="0 16px">
                    <Grid>
                        <Text margin="0" size="40px">헬로</Text>
                    </Grid>
                    <Grid is_flex>
                        <Button text="내 정보" _onClick={()=>{}}></Button>
                        <Button text="알림" _onClick={()=>{}}></Button>
                        <Button text="로그아웃" _onClick={()=>{dispatch(userActions.logoutFB({}));}}></Button>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }


    return (
        <React.Fragment>
            <Grid is_flex padding="0 16px">
                <Grid>
                    <Text margin="0" size="40px">헬로</Text>
                </Grid>
                <Grid is_flex>
                    <Button text="회원가입" _onClick={()=>{history.push('/signup')}}></Button>
                    <Button text="로그인" _onClick={()=>{history.push('/login')}}></Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

Header.defaultProps = {

}

export default Header;