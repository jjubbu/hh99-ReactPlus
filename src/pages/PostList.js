// PostList.js
import React from "react";
import { useSelector , useDispatch} from "react-redux";
import {actionCreators as postActions} from "../redux/modules/post"
import Post from "../components/Post";

const PostList = (props) => {
    //포스트 정보 가져오기
    const post_list = useSelector((state)=>state.post.list);
    //지금 로그인한 유저 정보 가져오기
    const user_info = useSelector((state)=>state.user.user);
    const dispatch = useDispatch();
    

    // eslint-disable-next-line react-hooks/exhaustive-deps
    React.useEffect(()=>{
        if (post_list.length === 0){
            dispatch(postActions.getPostFB());
        }
        
    },[]); //[]빈 배열이 들어가면 처음 한번만 반응한다!
    
    return (
        <React.Fragment>
            {/* <Post/> */}
            {/* post는 post_list의 내용물! 한덩어리씩 가져온당 */}
            {post_list.map((post, index)=>{
                //포스트한 유저의 아이디와 로그인한 유저의 uid가 같을 때
                if(user_info && post.user_info.user_id === user_info.uid){
                    return <Post key={post.id} {...post} is_me/>;
                }else{
                    return <Post key={post.id} {...post}/>;
                }
                
            })}
        </React.Fragment>
    )
}

export default PostList;

