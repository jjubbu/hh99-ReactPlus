import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const {text, _onClick, width} = props;
    const styles = {width:width}
 return (
     <React.Fragment>
         <TagButton onClick={_onClick} {...styles}>{text}</TagButton>
     </React.Fragment>
 )
}

Button.defaultProps = {
    width:100+"%",
    text:"텍스트",
    _onClick : () => {}
}

const TagButton = styled.button`
    width: ${(props)=>props.width};
    height: 50px;
    font-size: 12px;
    background-color: #000;
    color:#fff;
    box-sizing: border-box;
    border: none;
    padding:0;
`;

export default Button;