import React from "react";
import { Grid , Text, Input,Button} from "../elements";
import { emailCheck } from "../shared/common";

import { useDispatch } from "react-redux";
import { actionCreators as userActions} from "../redux/modules/user";


const Signup =()=>{
    const dispatch = useDispatch();

    const [id, setId] = React.useState('');
    const [pw, setPw] = React.useState('');
    const [pw_check, setPwCheck] = React.useState('');
    const [user_name, setName] = React.useState('');


    const signup = () => {

        //비밀번호 다르면 안넘어가게!
        if (pw !== pw_check){
            return;
        }
        //인풋창 공란이면 안넘어가게!
        if (id === "" || pw === "" || user_name === "" | pw_check === ""){
            return;
        }
        if (!emailCheck(id)){
            window.alert('아이디를 이메일 형식으로 입력해주세요.')
        }
        dispatch(userActions.signupFB(id, pw, user_name));
    }

    return (
        <React.Fragment>
            <Grid padding="16px">
                <Text size="32px" bold margin="0">회원가입</Text>
                <Grid padding="16px 0 0">
                    <Input label="아이디" placeholder="아이디를 입력해주세요" _onChange={(e)=>{setId(e.target.value)}}/>
                </Grid>
                <Grid padding="16px 0 0">
                    <Input label="닉네임" placeholder="닉네임을 입력해주세요" _onChange={(e)=>{setName(e.target.value)}}/>
                </Grid>
                <Grid padding="20px 0 0">
                    <Input label="비밀번호" placeholder="비밀번호를 입력해주세요" _onChange={(e)=>{setPw(e.target.value)}}/>
                </Grid>
                <Grid padding="20px 0 44px 0">
                    <Input label="비밀번호 확인" placeholder="비밀번호를 다시 입력해주세요" _onChange={(e)=>{setPwCheck(e.target.value)}}/>
                </Grid>
                <Button text="회원가입하기" _onClick={()=>{signup()}}/>
            </Grid>
            
        </React.Fragment>
    );
}

export default Signup; 