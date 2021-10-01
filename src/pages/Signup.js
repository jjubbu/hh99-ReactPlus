import React from "react";
import { Grid , Text, Input,Button} from "../elements";

const Signup =()=>{
    return (
        <React.Fragment>
            <Grid padding="16px">
                <Text size="32px" bold margin="0">회원가입</Text>
                <Grid padding="16px 0 0">
                    <Input label="아이디" placeholder="아이디를 입력해주세요" _onChange={()=>{console.log('아이디를 잘 입력했어!')}}/>
                </Grid>
                <Grid padding="16px 0 0">
                    <Input label="닉네임" placeholder="닉네임을 입력해주세요" _onChange={()=>{console.log('닉네임을 잘 입력했어!')}}/>
                </Grid>
                <Grid padding="20px 0 0">
                    <Input label="비밀번호" placeholder="비밀번호를 입력해주세요" _onChange={()=>{console.log('비밀번호를 잘 입력했어!')}}/>
                </Grid>
                <Grid padding="20px 0 44px 0">
                    <Input label="비밀번호 확인" placeholder="비밀번호를 다시 입력해주세요" _onChange={()=>{console.log('비밀번호다시를 잘 입력했어!')}}/>
                </Grid>
                <Button text="회원가입하기" _onClick={()=>{console.log("회원가입버튼 클릭했다")}}/>
            </Grid>
            
        </React.Fragment>
    );
}

export default Signup;