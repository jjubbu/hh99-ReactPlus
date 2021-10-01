import React from "react";
import styled from "styled-components";

const Image = (props) => {

    const {shape, src, size} = props;

    const styles = { src:src, size:size}

    if(shape === "circle"){
        return(<ImageCircle {...styles}></ImageCircle>)
    }
    if (shape === "rectangle"){
        return(
            <AspectOuter>
                <AspectInner {...styles}/>
            </AspectOuter>
        );
    }
    return (
        <React.Fragment>

        </React.Fragment>
    )
}

Image.defaultProps = {
    shape:"circle",
    src: "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg",
    size: 36
}

const ImageCircle = styled.div`

    --size: ${(props)=>props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);

    background-image: url("${(props)=>props.src}");
    background-size:cover;
    margin-right: 4px;
`;

const AspectOuter = styled.div`
    width: 100%;
    min-width: 250px;
`
const AspectInner = styled.div`
    position: relative;
    padding-top: 75%;
    overflow:hidden;
    background-image:url("${(props)=>props.src}");
    background-size: cover;
`
export default Image;