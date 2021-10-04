//포스트 목록을 가져오고 추가하는 모듈
import { createAction, handleActions } from "redux-actions";
import {produce} from "immer"

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

const setPost = createAction(SET_POST, (post_list)=>({post_list}));
const addPost = createAction(ADD_POST, (post)=>({post}));

const initialState = {
    list:[],
}

//게시글 하나에 들어갈 정보들
const initialPost = {
    id:0,
    user_info:{
        user_name: "seon",
        user_profile: "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg"
    },
    post_image : "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg",
    comment:"고양이네요!",
    comment_count:10,
    insert_dt:"2021-09-30" 
}

export default handleActions(
    {
        [SET_POST]: (state, action) => produce(state, (draft)=> {

        }),
        [ADD_POST]: (state, action) => produce(state, (draft)=> {
            
        }),
    },initialState
);

const actionCreators = {
    setPost,
    addPost
}

export {actionCreators};