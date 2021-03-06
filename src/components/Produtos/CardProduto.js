import React from "react";
import styled from "styled-components";

const CardProduto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px; 
    border-radius: 10px;
    background-color: #424949 ;

    :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
  @media screen and (min-device-width: 375px) and (max-device-width: 667px) {
    display: flex;
    display: block;
    text-align: center;
    align-items: center;
    }
    `

const ImagemProduto = styled.img`
    
    width: 220px;
    height: 280px;
    border-radius: 10px;
    @media screen and (min-device-width: 375px) and (max-device-width: 667px) {
        display: flex;
       display: block;
      align-items: center;
      
   
    
    }
`
const BotaoAdd = styled.button`
    padding: 5px;
    border-radius: 5px;
    margin: 10px;
`

class Card extends React.Component{
    render(){
        
        const produto = this.props.produtos;
        return(
            
            <CardProduto>
                <ImagemProduto src={produto.imagem} alt={produto.acessibilidade}/>
                <h4>{produto.nomeProduto}</h4>
                <p>{produto.preco} Dólar </p>
                <h6>{produto.descrição}</h6>

                <BotaoAdd onClick={() => this.props.clicar(produto.id)}>Adicionar ao carrinho</BotaoAdd>
            </CardProduto>
        )
    }
}

export default Card;
