import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as PostActions} from "../redux/modules/post";
import { actionCreators as imageActions } from "../redux/modules/image";


import {Grid, Text, Button, Image, Input} from "../elements";
import Upload from "../shared/Upload";

const PostWrite = (props) => {
    const dispatch = useDispatch();
    const is_login = useSelector((state)=>state.user.is_login);
    const preview = useSelector((state)=>state.image.preview);
    
    const {history} = props;

    

    const getPostContents = (e)=>{
        setContents(e.target.value);
    }

    const addPost = () => {
       dispatch(PostActions.addPostFB(contents));
    };

   


    const post_list = useSelector((state)=>state.post.list);

    //수정할 게시글의 아이디 
    const post_id = props.match.params.id;

    const editPost = () => {
      dispatch(PostActions.editPostFB(post_id,{contents:contents}));
    };

    //수정페이지인지 아닌지 확인하기
    const is_edit = post_id?true:false;

    //수정페이지일때 post모듈의 list에서 post_id와 같은 덩어리만 찾아낸다.
    let _post = is_edit? post_list.find((p)=>p.id === post_id):null;

    const [contents, setContents] = React.useState(_post?_post.contents:"");

    React.useEffect(()=>{
      //수정창에서 새로고침해서 리덕스 날라가서 포스트 정보가 없을 때
      if(is_edit && !_post){
        window.alert('포스트 정보가 없음!');
        history.goBack();
        return;
      }

      //수정창일때 리덕스의 프리뷰 변경
      if(is_edit){
        dispatch(imageActions.setPreview(_post.image_url))
      }
    },[]);

    //로그인 상태가 아닌 경우
    if(!is_login){
      return (
        <Grid>
          <Text bold size="32px">앗 잠깐!</Text>
          <Text size="16px">로그인 후에만 글을 쓸 수 있어요!</Text>
          {/* replace는 push랑 다르게 '갈아끼운다'는 개념! */}
          <Button text="로그인 하러가기" _onClick={()=>{history.replace('/login')}}/>
        </Grid>
      )
    }

      return(
        <React.Fragment>
        <Grid padding="16px">
          <Text margin="0px" size="36px" bold>
            {is_edit ? '게시글 수정' : '게시글 작성'}
          </Text>
          <Upload />
        </Grid>

        <Grid>
          <Grid padding="16px">
            <Text margin="0px" size="24px" bold>
              미리보기
            </Text>
          </Grid>

          <Image shape="rectangle" src={preview? preview:"http://placehold.it/400x300"} />
        </Grid>

        <Grid padding="16px">
          <Input label="게시글 내용" placeholder="게시글 작성" multiLine _onChange={getPostContents} value={contents}/>
        </Grid>

        <Grid padding="16px">
          {is_edit ? 
          (<Button text="게시글 수정" _onClick={editPost}></Button>) 
          :(<Button text="게시글 작성" _onClick={addPost}></Button>)}
        </Grid>
      </React.Fragment>
      )
}

export default PostWrite;