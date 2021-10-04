//세션 확인을 해주는 컴포넌트. 이 컴포넌트에 감싸진 것들은 세션 확인 후에 보여질 수 있다!
//분리했으나 작동되지 않음. 확인필요.
import React from "react";
import {useSelector} from "react-redux";
import {apiKey} from "./firebase";

const Permit = (props) => {

    const user_info = useSelector(state => state.user.user);
    const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
    const is_session = sessionStorage.getItem(_session_key)? true: false;
 
    if (is_session && user_info) {
        return <React.Fragment>
            {props.children}
        </React.Fragment>
    }
    return null;
}

export default Permit;