import React,{ useRef } from "react";
import styled from "styled-components";

import { Text, Grid} from ".";

const TextArea = (props)=> {
    const [file, setFile] = React.useState('이미지를 선택해주세요');
    // const {_onChange, type} =props;
 
    //value에 따라 값 저장시 분류

    return(
        <React.Fragment>
            <Grid>
            <FileInput htmlFor="input_file">
                    <p>{file}</p>
                    <a>이미지 선택</a>
                </FileInput>
                <input type="file" id="input_file" style={{display:"none"}} onChange={(e)=>{setFile(e.target.value)}}/>
            </Grid>
        </React.Fragment>
    )
}


TextArea.defaultProps = {
    type: "text",
}

const FileInput = styled.label`

display: flex;
height: 27px;
width: 100%;
gap: 10px;

p{
    flex:1;
    height: 27px;
    border-bottom: 1px solid #000 ;
    margin: 0;
}
a{
    width: 100px;
    height: 27px;
    background:#ffde00;
    border-radius:5px;
    display: flex;
    justify-content: center;
    align-items: center;
}

`

export default TextArea;