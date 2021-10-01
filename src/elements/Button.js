import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const {text, _onClick} = props;
 return (
     <React.Fragment>
         <TagButton onClick={_onClick}>{text}</TagButton>
     </React.Fragment>
 )
}

Button.defaultProps = {
    text:"텍스트",
    _onClick : () => {}
}

const TagButton = styled.button`
    width: 100%;
    height: 50px;
    font-size: 12px;
    background-color: #000;
    color:#fff;
    box-sizing: border-box;
    border: none;
`;

export default Button;