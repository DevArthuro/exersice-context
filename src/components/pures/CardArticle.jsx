import React from "react";
import styled from 'styled-components'

const Article = ({ articleInfo, className }) => {
    return (
        <article className={className}>
            <img src={articleInfo.social_image}/>
            <div>
                <h3> {articleInfo.title} </h3>
                <a href={articleInfo.url} target="_blank">Leer más</a>
            </div>
        </article>
    )
}

export default  styled(Article)`
    border-radius: 12px;
    background-color: white;
    color: black;
    box-shadow: 0px 0px 12px rgba(0,0,0,0.1);
    border: solid 1px #e6e6e6;
    width: min(300px, 100%);
    position: relative;
    img {
        max-width: 100%;
    }
    div {
        padding: 2rem;
    }
`;