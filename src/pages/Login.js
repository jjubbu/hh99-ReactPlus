import React from "react";
import { Grid , Text, Input,Button} from "../elements";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";

const Login =()=>{
    console.log(getCookie("user_id"));
    
    const login = () => {
        setCookie("user_id","seon",3);
        setCookie("user_pw","1234",3);
        
    }
    login();
    return (
        <React.Fragment>
            <Grid padding="16px">
                <Text size="32px" bold margin="0">로그인</Text>
                <Grid padding="16px 0 0">
                    <Input label="로그인" placeholder="로그인을 입력해주세요" _onChange={()=>{console.log('아이디를 잘 입력했어!')}}/>
                </Grid>
                <Grid padding="20px 0">
                    <Input label="비밀번호" placeholder="비밀번호를 입력해주세요" _onChange={()=>{console.log('비밀번호를 잘 입력했어!')}}/>
                </Grid>
                
                <Button text="로그인하기" _onClick={()=>{deleteCookie("user_id");}}/>
               
            </Grid>
            
        </React.Fragment>
    )
}

export default Login;