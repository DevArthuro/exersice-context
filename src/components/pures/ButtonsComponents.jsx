import styled, { css } from "styled-components";

const ButtonStyle = css`
    display: inline-block;
    padding: 1rem 1.2rem;
    border-radius: 12px;
    font-weight: bold;
    font-size: 1.2em;
    text-transform: uppercase;
    border: 0;
    margin: 0px 10px 15px;
    cursor: pointer;
`

export const Link = styled.a`
    ${ButtonStyle}
    text-decoration: underline;
`

export const PrimaryButton = styled.button`
    ${ButtonStyle}
    background-color: #00bcd4;
    color: inherit;
    border: solid 1px currentColor;
`

export const SecondaryButton = styled.button`
    ${ButtonStyle}
    background-color: transparent;
    color: inherit;
    border: solid 1px currentColor;
`