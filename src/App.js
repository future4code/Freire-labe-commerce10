import React from "react";
import Filtros from "./components/Filtros/Filtros";
import Produtos from "./components/Produtos/Produtos";
import Carrinho from "./components/Carrinho/Carrinho";
import styled from "styled-components";

import falcon from "./components/Produtos/img/falcon9.jpg";
import falconheavy from "./components/Produtos/img/falconheavy.jpg";
import statshipsn15 from "./components/Produtos/img/starshipsn15.jpg";
import "./App.css";

const Pagina = styled.div`
  margin: 0px;
  padding :0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: black;
`;



class App extends React.Component {
  state = {
    carrinho: [],
    valorMinimo: "",
    valorMaximo: "",
    textoQuery: "",
    sortingParameter:"precoAlto",
    naves: [
      {
        id: 1,
        imagem: falcon,
        acessibilidade: "falcon",
        nomeProduto: "Falcon 9",
        preco: 90000000.97,
        quantidade: 0,
        descrição: "PRIMEIRO FOGUETE DE CLASSE ORBITAL"
      },
      {
        id: 2,
        imagem: falconheavy,
        acessibilidade: "falcon heavy",
        nomeProduto: "Falcon heavy",
        preco: 62000000.97,
        quantidade: 0,
        descrição: "O FOGUETE MAIS PODEROSO DO MUNDO"
      },
      {
        id: 3,
        imagem: statshipsn15,
        acessibilidade: "Starship sn15",
        nomeProduto: "Starship sn15",
        preco: 2500000000.97,
        quantidade: 0,
        descrição: "O FOGUETE MAIS RAPIDO DO MUNDO"
      }
     ]
  };

  updateMinPrice = (event) => {
    this.setState({ valorMinimo: event.target.value });
  };

  updateMaxPrice = (event) => {
    this.setState({ valorMaximo: event.target.value });
  };

  updateQuery = (event) => {
    this.setState({ textoQuery: event.target.value });
  };
  
  updateSortingParameter = (event) => {
    this.setState({ sortingParameter: event.target.value });
  };
 
  adicionarProdutoCarrinho = (idProduto) => {
    const adiciocionarProduto = this.state.carrinho.find(
      (produto) => idProduto === produto.id
    );

    if (adiciocionarProduto) {
      const itemCarrinho = this.state.carrinho.map((produto) => {
        if (idProduto === produto.id) {
          return {
            ...produto,
            quantidade: produto.quantidade + 1,
          };
        }

        return produto;
      });

      this.setState({ carrinho: itemCarrinho });
    } else {
      const adicionarProduto = this.state.naves.find((produto) => idProduto === produto.id);

      const itemCarrinho = [
        ...this.state.carrinho,
        { ...adicionarProduto, quantidade: 1 },
      ];

      this.setState({ carrinho: itemCarrinho });
    }
  };
  
  removerProduto = (idProduto) => {

    const ItemCarrinho = this.state.carrinho.map((produto) => {
        if (produto.id === idProduto) {
          console.log(produto.id)
          return {
            ...produto,
            quantidade: produto.quantidade - 1,
          };
        }
        return produto;
      })
      .filter((produto) => produto.quantidade > 0);

    this.setState({ carrinho: ItemCarrinho });
  };

  render() {
    
    return (

      <Pagina>
       
        
        <Filtros
          valorMinimo={this.state.valorMinimo}
          valorMaximo={this.state.valorMaximo}
          textoQuery={this.state.textoQuery}
          updateQuery={this.updateQuery}
          updateMinPrice={this.updateMinPrice}
          updateMaxPrice={this.updateMaxPrice}
        />

        <Produtos produtos={this.state.naves}
        clicar={this.adicionarProdutoCarrinho}
         valorMinimo={this.state.valorMinimo}
         valorMaximo={this.state.valorMaximo}
         textoQuery={this.state.textoQuery}        
         sortingParameter={this.state.sortingParameter}
         updateSortingParameter={this.updateSortingParameter}
        />
        
        <Carrinho 
           produtos={this.state.carrinho} 
           removeProduto = {this.removerProduto}
           />
     
      </Pagina>
    );
  }
}

export default App;
