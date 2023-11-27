import styled from "styled-components";

export const StyledText = styled.span`
    font-wight: bold;
    position: relative;
    color: green;
    line-height: 1.3rem;
    &::after{
        position: absolute;
        content:'';
        width: 100%;
        height: 4px;
        background-color: currentColor;
        left: 0;
        bottom: 0;
        border-radius: 4px
    }
`;