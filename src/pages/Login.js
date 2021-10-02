import React from "react";
import { Grid , Text, Input,Button} from "../elements";

import {useDispatch} from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user";

const Login =()=>{

    const dispatch = useDispatch();
    const [id, setId] = React.useState('');
    const [pw, setPw] = React.useState('');
    const login = () => {
        //미들웨어로 작업 안하면 페이지 안바뀜..!
        if(id === "" || pw === ""){
            window.alert("아이디 혹은 비밀번호가 공란입니다. 입력해주세요");
            return;
        }
        dispatch(userActions.loginFB(id, pw));

    }

    return (
        <React.Fragment>
            <Grid padding="16px">
                <Text size="32px" bold margin="0">로그인</Text>
                <Grid padding="16px 0 0">
                    <Input label="로그인" placeholder="로그인을 입력해주세요" _onChange={(e)=>{setId(e.target.value)}}/>
                </Grid>
                <Grid padding="20px 0">
                    <Input label="비밀번호" placeholder="비밀번호를 입력해주세요" _onChange={(e)=>{setPw(e.target.value)}} type="password"/>
                </Grid>
                
                <Button text="로그인하기" _onClick={()=>{login()}}/>
               
            </Grid>
            
        </React.Fragment>
    )
}

export default Login;