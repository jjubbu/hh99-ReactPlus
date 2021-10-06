import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { storage } from "../../shared/firebase";

const UPLOADING = "UPLOADING";
const UPLOAD_IMAGE = "UPLOAD_IMAGE";
const SET_PREVIEW = "SET_PREVIEW"

const upLoading = createAction(UPLOADING, (uploading)=>({uploading}));
const upLoadImageURL = createAction(UPLOAD_IMAGE, (url)=>({url}));
const setPreview = createAction(SET_PREVIEW, (preview)=>({preview}));

const initialState = {
    image_url:'',
    uploading:false,
    preview:null,
}

const uploadImageFB = (image) => {
    return function (dispatch, getState, {history}){
        dispatch(upLoading(true));

         //ref 안에 '파이어베이스 스토리지의 파일경로/이 파일의 이름' 을 넣고 .put(파일정보) 로 파일을 보내준다!
        const _upLoad = storage.ref(`images/${image.name}`).put(image);
        _upLoad.then((snapshot)=>{
            console.log(snapshot);
            

            //업로드한 파일의 링크 가져오기!
            snapshot.ref.getDownloadURL().then((url)=>{
                dispatch(upLoadImageURL(url));
                console.log(url);
            });
        })
    }
}

export default handleActions({
    [UPLOAD_IMAGE]:(state, action)=>produce(state, (draft)=>{
        draft.image_url = action.payload.image_url;
        draft.uploading = false;
    }),
    [UPLOADING]:(state, action)=>produce(state, (draft)=>{
        draft.uploading = action.payload.uploading;
    }),
    [SET_PREVIEW]:(state, action)=>produce(state, (draft)=>{
        draft.preview = action.payload.preview
    })
}, initialState);

const actionCreators = {
    upLoadImageURL,
    uploadImageFB,
    setPreview
}

export {actionCreators}