import React from "react";
import { TitleComponent } from "../pures/TitleComponent";

import imageProfile from '../../assets/porfileImage.jpg' 
import styled, { css } from "styled-components";
import { Container } from "../pures/Container";
import { StyledText } from "../pures/TextDecorationComponent";
import { Link, PrimaryButton, SecondaryButton } from "../pures/ButtonsComponents";

const RowsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 1em;
    padding: 50px 20px;
    div {
        flex: 1;
        text-align: center;
    }
    img {
        max-width: 450px;
        max-height: 350px;
        border-radius: 100%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
    }
`;

const containerButtoms = styled.div`
    .container-buttoms{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        gap: 1rem;
    }
`

const HeaderComponent = ({ className }) => {
    return (
        <div className={className}>
            <Container>
                <RowsContainer>
                    <div>
                        <TitleComponent>Hola bienvenido soy <StyledText>@DevArthuro</StyledText>, soy desarrollador Web</TitleComponent>
                    </div>
                    <img src={imageProfile} alt="profile-image"/>
                </RowsContainer>
                <containerButtoms className="container-buttoms">
                    <PrimaryButton>REVISA MIS PROYECTOS</PrimaryButton>
                    <SecondaryButton>DESCARGA MI CV</SecondaryButton>
                </containerButtoms>
                <br/>
                <Link href="#">Ver mis articulos</Link>
            </Container>
        </div>
    )
}

export default styled(HeaderComponent)`
    background-color: white;
    color: black;
`;