import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const { is_flex, width, margin, padding, bg, children , height, gap} = props;

  const styles = {
      is_flex: is_flex,
      width: width,
      margin: margin,
      padding: padding,
      bg: bg,
      height:height,
      gap:gap,
  };
  return (
    <React.Fragment>
      <GridBox {...styles}>{children}</GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  chidren: null,
  is_flex: false,
  width: "100%",
  height:"100%",
  padding: false,
  margin: false,
  bg: false,
  gap:false,
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between; `
      : ""}
      ${(props) =>
    props.is_flex
      ? `gap:${props.gap}`
      : ""}
`;

export default Grid;
