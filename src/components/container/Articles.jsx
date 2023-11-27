import React, { useContext, useEffect, useState } from "react";
import styled from 'styled-components';

import { SubTitle } from "../pures/TitleComponent";
import { StyledText } from "../pures/TextDecorationComponent";
import { Container } from "../pures/Container";
import Article from '../pures/CardArticle'
import { ArticlesContext } from "../../context/ArticlesContext";

const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 1rem;
    justify-content: space-between;
`

const Articles = () => {
    
    let { articles } = useContext( ArticlesContext )

    return (
        <Container>
            <SubTitle>Mis Posts <StyledText>Dev To</StyledText></SubTitle>
            <Row>
                {
                    articles.map((data) => <Article articleInfo={data} key={data.id} />)
                }
            </Row>
        </Container>
    )
}

export default Articles;