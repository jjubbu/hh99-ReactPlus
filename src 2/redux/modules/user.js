//유저 로그인 정보 가져오는 모듈
import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import {setCookie, deleteCookie} from "../../shared/Cookie";
import {auth} from "../../shared/firebase";
import firebase from 'firebase/app';

//초기값 생성
const initialState = {
    user: null,
    is_login: false
}

//액션타입 생성
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

//createAction 을 이용한 액션 생성 함수
const setUser = createAction(SET_USER, (user) => ({user}));
const logOut = createAction(LOG_OUT, (user) => ({user}));
const getUser = createAction(GET_USER, (user) => ({user}));

//미들웨어 액션 로그인시 메인페이지로 가기
const loginFB = (id, pw) => {
    return function (dispatch, getState, {history}) {
        auth
            .setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(() => {
                return auth
                
                    .signInWithEmailAndPassword(id, pw)
                    .then((userCredential) => {
                        dispatch(
                            setUser({
                                user_name: userCredential.user.displayName, 
                                id: id, 
                                user_profile: '',
                                uid:userCredential.user.uid
                            })
                        );
                        history.push('/');
                    })
                    .catch((error) => {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        console.log(errorCode, errorMessage);
                    });
            })
    }
}

//회원가입
const signupFB = (id, pw, user_name) => {
    return function (dispatch, getState, {history}) {
        //이메일 형태의 아이디와 비밀번호를 받는다.
        auth
            .createUserWithEmailAndPassword(id, pw)
            .then((userCredential) => {
                auth
                    .currentUser
                    .updateProfile({displayName: user_name})
                    .then(() => {
                        dispatch(setUser({
                            user_name: user_name, 
                            id: id,
                            user_profile: '',
                            uid:userCredential.user.uid
                            }));
                        history.push('/');
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode, errorMessage);
            });
    }
};

const loginCheckFB = () => {
    return function (dispatch, getState, {history}){
        auth.onAuthStateChanged((user) => {
            if(user){
                dispatch(setUser({
                    user_name: user.displayName,
                    user_profile:'',
                    id:user.email,
                    uid: user.uid
                }))
            }else{
                dispatch(logOut());
            }
        })
    }
}

const logoutFB = () => {
    return function (dispatch, getState, {history}) {
      auth.signOut().then(() => {
        dispatch(logOut());
        //뒤로가기할때 메인화면으로 바꿔치기!
        history.replace("/");
      });
    };
  };

// handleActions, immer 를 이용한 리듀서 draft = immer가 원본값을 복사한 값 createAction을 통해
// 만들어진 액션 생성함수에서 넘겨진 값은 payload에 저장된다.
export default handleActions({
    [SET_USER]: (state, action) => produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;
    }),
    [LOG_OUT]: (state, action) => produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
    }),
    [GET_USER]: (state, action) => produce(state, (draft) => {})
}, initialState);

//action creator export
const actionCreators = {
    logOut,
    getUser,
    signupFB,
    loginFB,
    loginCheckFB,
    logoutFB
};

export {
    actionCreators
};
