import React from "react";
import styled from "styled-components";

const LayoutComponent = ({ children, className }) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default styled(LayoutComponent)`
    background-color: #131B32;
    color: #fff;
    min-height: 100vh;
    padding: 0.1px;
`;