import React from "react";
import styled from "styled-components";

const Grid = (props) => {

    //스타일에 넣을 props 불러오기
    const {is_flex, width, padding, margin, background, children, positionR, gap} = props; 

    //불러온 props중 스타일만 분리
    const styles = {
        is_flex: is_flex,
        width: width,
        padding: padding,
        margin:margin,
        background: background,
        positionR:positionR,
        gap:gap
    }

    return <React.Fragment>
        {/* GridBox에 props로 불러온 스타일 값 넣기 */}
        <GridBox {...styles}>{children}</GridBox>
    </React.Fragment>
}

Grid.defaultProps = {
    children:null,
    is_flex: false,
    width:"100%",
    padding: false,
    margin:false,
    background:false,
    positionR: false,
    gap:"0",
}

const GridBox = styled.div`

    width: ${(props)=> props.width};
    height: 100%;
    box-sizing: border-box;
    ${(props)=>props.padding? `padding: ${props.padding};`:""}
    ${(props)=>props.margin? `margin: ${props.margin};`:""}
    ${(props)=>props.background? `background: ${props.background};`:""}
    ${(props)=>props.positionR? `position: relative`:""}
    ${(props)=>props.is_flex? `display:flex; align-items:center; justify-content:space-between` :""};
    ${(props)=>props.is_flex? `gap:${props.gap}` :""};
`


export default Grid;