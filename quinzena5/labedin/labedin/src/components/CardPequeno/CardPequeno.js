import React from 'react'
import styled from 'styled-components'

const SmallCardContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 80px;
    width: 550px;
`

const ImagemSmallCard = styled.img `
    width: 40px;
    margin-right: 10px;
    border-radius: 50%;
`

const TituloSmallCard = styled.h4 `
    margin-bottom: 15px;
`

const ConteudoContainer = styled.p `
    margin-bottom: 15px;
`

function CardPequeno (props) {
    return (
        <SmallCardContainer>
            <ImagemSmallCard src={props.linkDaImagem}/>
            <TituloSmallCard>{props.titulo}</TituloSmallCard>
            <ConteudoContainer>{props.informacao}</ConteudoContainer>
        </SmallCardContainer>
    )
}

export default CardPequeno 