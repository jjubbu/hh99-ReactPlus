import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Grid , Button} from "../elements";
import { storage } from "./firebase";

import { actionCreators as uploadImage } from "../redux/modules/image";

const Upload = (props) => {
    const [file, setFile] = React.useState('이미지를 선택해주세요');
    const fileInput = React.useRef();
    const dispatch = useDispatch();

    const is_uploading = useSelector(state=>state.image.uploading);

    const selectFile = (e) => {
        if (e.target.files.length !== 0){setFile(e.target.files[0].name);};
       
        const reader = new FileReader();
        const file = e.target.files[0];

        //파일을 읽고 읽기가 끝났을 시 행동을 실행!
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            dispatch(uploadImage.setPreview(reader.result));
        }
    }
    const uploadFb = () => {
        let image = fileInput.current.files[0];
        dispatch(uploadImage.uploadImageFB(image));
      
        
       
    }
    return (
        <React.Fragment>
            <Grid>
            <FileInput htmlFor="input_file">
                    <p>{file}</p>
                    <p>이미지 선택</p>
                </FileInput>
                <input type="file" id="input_file" style={{display:"none"}} onChange={selectFile} ref={fileInput} disabled={is_uploading}/>
            </Grid>
            {/* <Button text="업로드하기" _onClick={uploadFb}/> */}
        </React.Fragment>
    )
}
const FileInput = styled.label`

display: flex;
height: 27px;
width: 100%;
gap: 10px;
align-items: center;
margin-top: 20px;

p:first-child{
    flex:1;
    height: 27px;
    border-bottom: 1px solid #000 ;
    margin: 0;
}
p:last-child{
    width: 100px;
    height: 27px;
    background:#ffde00;
    border-radius:5px;
    text-align: center;
    line-height: 27px;
}

`
export default Upload;