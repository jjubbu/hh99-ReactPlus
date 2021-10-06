import {createAction, handleActions} from "redux-actions"
import {produce} from "immer";
import {firestore, storage} from "../../shared/firebase";
import moment from "moment";
import {actionCreators as imageAction} from './image'
//게시글 목록 가져오고 추가하는 모듈

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";

const setPost = createAction(SET_POST, (post_list) => ({post_list}));
const addPost = createAction(ADD_POST, (post) => ({post}));
const editPost = createAction(EDIT_POST, (post_id, post) => ({post_id, post}));

const initialState = {
    list: []
}

const initialPost = {
    // id: 0,     user_info: {         user_name: "mean0",         user_profile:
    // "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg"     },
    image_url: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
    contents: "고양이네요!",
    comment_cnt: 0,
    insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"), //현재시간.표시설정(년-월-일 시:분:초)
}

const addPostFB = (contents = "",) => {
    return function (dispatch, getState, {history}) {
        const postDB = firestore.collection("post");
        const _user = getState().user.user;
        const user_info = {
            user_name: _user.user_name,
            user_id: _user.uid,
            user_profile: _user.user_profile

        }
        const _post = {
            ...initialPost,
            contents: contents,
            insert_dt: moment().format("YYYY-MM-DD hh:mm:ss")
        };

        const _image = getState().image.preview;
        //파일명 정해주기! 유저아이디_올린시각
        const upLoad = storage
            .ref(
                `images/${user_info.user_id}_${new Date().getTime()}`
            )
            .putString(_image, 'data_url');

        upLoad.then(snapshot => {
            snapshot
                .ref
                .getDownloadURL()
                .then(url => {
                    console.log(url);
                    // dispatch(imageAction.uploadImageFB(url));
                    return url;
                })
                .then(url => {
                    postDB
                        .add({
                            ...user_info,
                            ..._post,
                            image_url: url
                        })
                        .then((doc) => {
                            let post = {
                                user_info,
                                ..._post,
                                id: doc.id,
                                image_url: url
                            };
                            dispatch(addPost(post));
                            history.replace('/');
                            dispatch(imageAction.setPreview(null));
                        })
                        .catch((err) => {
                            window.alert("앗 포스트 작성에 문제가 있어요!")
                            console.log("post 저장 실패!")
                        })
                    })
                .catch((err) => {
                    window.alert("앗 이미지 업로드에 문제가 있어요!");
                    console.log("앗 이미지 업로드에 문제가 있어요!", err);
                })
        })

    }
}

//firebase의 게시글 정보를 전부 가져오자!
const getPostFB = () => {
    return function (dispatch, getState, {history}) {
        const postDB = firestore.collection("post");
        postDB
            .get()
            .then((docs) => {
                let post_list = [];
                docs.forEach((doc) => {
                    // let _post = {     id: doc.id,     ...doc.data() }; let post = {     id:
                    // doc.id,     user_info: {         user_name: _post.user_name,
                    // user_profile: _post.user_profile,         user_id:_post.user_id,     },
                    // image_url: _post.image_url,     contents: _post.contents,     comment_cnt:
                    // _post.comment_cnt,     insert_dt: _post.insert_dt } 위와 동일한 결과를 보이지만 좀 더 수식으로
                    // 해결한 것.
                    let _post = doc.data();
                    //key값을 배열로 만들어주고 배열 안의 개수만큼 함수 돌리기 (reduce)
                    let post = Object
                        .keys(_post)
                        .reduce((a, current) => {
                            //현재 key값에 user_가 포함된다면
                            if (current.indexOf("user_") !== -1) {
                                //user_info안에 해당 값들을 넣어준다.
                                return {
                                    ...a,
                                    user_info: {
                                        ...a.user_info,
                                        [current]: _post[current]
                                    }
                                }
                            }
                            //맨 처음에는 id:doc.id를 반환하고 그 이후부터 key:_post[key] ==value 를 이전 반환값에 추가해서 반환!
                            return {
                                ...a,
                                [current]: _post[current]
                            }
                        }, {
                            id: doc.id,
                            user_info: {}
                        });

                    post_list.push(post);

                });
                dispatch(setPost(post_list));
            });
    }
}

//post_id 값이 안들어오면 null을 반환해서 튕겨내기..!
const editPostFB = (post_id = null, post = {}) => {
    return function (dispatch, getState, {history}){
        if(!post_id){
            return;
        }
        const _image = getState().image.preview;
        const _post_idx = getState().post.list.findIndex(p=>p.id === post_id);
        const _post = getState().post.list[_post_idx];

        // console.log("포스트아이디확인",_post);
        const postDB = firestore.collection("post");
        
        //이미지가 그대로일때
        if(_image === _post.image_url){
            //포스트 아이디로 찾은 문서 내용물을 post로 업데이트!
            postDB.doc(post_id).update(post).then(doc=>{
                dispatch(editPost(post_id, {...post}))
                history.replace("/");
            });
            return;
        }else{
            //이미지가 변경되었을때
            const user_id = getState().user.user.uid;
            const upLoad = storage
            .ref(
                `images/${user_id}_${new Date().getTime()}`
            )
            .putString(_image, 'data_url');

            upLoad.then(snapshot => {
                snapshot
                .ref
                .getDownloadURL()
                .then(url => {
                    console.log(url);
                    return url;
                })
                .then(url => {
                    postDB.doc(post_id).update({...post, image_url:url}).then(doc=>{
                        dispatch(editPost(post_id, {...post, image_url:url}))
                        history.replace("/");
                    })
                })
                .catch((err) => {
                    window.alert("앗 이미지 업로드에 문제가 있어요!");
                    console.log("앗 이미지 업로드에 문제가 있어요!", err);
                })
            });    
        }
    }    
}
export default handleActions({
    [SET_POST]: (state, action) => produce(state, (draft) => {
        //getPostFB로 새로 정한 post_list를 state의 list에 넣어준다!
        draft.list = action.payload.post_list;
    }),
    [ADD_POST]: (state, action) => produce(state, (draft) => {
        //배열의 제일 앞에 붙여주기
        draft
            .list
            .unshift(action.payload.post);
    }),
    [EDIT_POST]:(state, action) => produce(state, (draft)=>{
        //몇번째 덩어리를 수정할지!
        let idx = draft.list.findIndex((p)=>p.id === action.payload.post_id);
        draft.list[idx] = {...draft.list[idx], ...action.payload.post}
        console.log(draft.list)
    })
}, initialState);

export const actionCreators = {
    setPost,
    addPost,
    getPostFB,
    addPostFB,
    editPostFB
}