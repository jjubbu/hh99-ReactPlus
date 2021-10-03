import React,{ useRef } from "react";
import styled from "styled-components";

import { Text, Grid} from ".";

const TextArea = (props)=> {
    const Ref = useRef();
    const {label, placeholder, _onChange, type} =props;
 
    //value에 따라 값 저장시 분류

    return(
        <React.Fragment>
            <Grid>
            <Text margin="0">{label}</Text>
            <TagInput ref={Ref} placeholder={placeholder} onChange={_onChange} type={type}/>
            </Grid>
        </React.Fragment>
    )
}


TextArea.defaultProps = {
    label : "텍스트",
    placeholder: "게시글을 입력해주세요",
    _onChange: () => {},
    type: "text",
}

const TagInput = styled.textarea`
    border: 1px solid #212121;
    width: 100%;
    padding: 12px 4px;
    box-sizing: border-box;
    height: 266px;
    resize: none;
`

export default TextArea;