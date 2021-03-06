import React from "react";
import styled from "styled-components";

const Pagina = styled.div`
  margin: 2% 1%;
  //border: 1px solid red;
  width: 15vw;
  height: 50vh;
  padding: 0 1%;
  background-color: #262626;
  border-radius: 10px;
  @media screen and (min-device-width: 375px) and (max-device-width: 667px) {
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    height: 350px;
    text-align: center;
    border-radius: 0%;
   
  }
`;

const Titulo = styled.h2`
  text-align: center;
  color: white;
  @media screen and (min-device-width: 375px) and (max-device-width: 667px) {
    display: flex;
    flex-wrap: wrap  ;
  text-align: center;
  }
`;
const TipoFiltro = styled.div`
  color: white;
  margin-top: 10%;
  text-align: center;
  @media screen and (min-device-width: 375px) and (max-device-width: 667px) {
    display: flex;
    flex-wrap: wrap  ;
    text-align: center;
    margin: 10px;
    

  }
`
const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  @media screen and (min-device-width: 375px) and (max-device-width: 667px) {
    display: flex;
    flex-wrap: wrap;
    
    
  }
`

class Filtros extends React.Component {
  render() {    
    return (
      <Pagina>
        <Titulo>FILTROS</Titulo>

        <TipoFiltro>
           Valor mínimo
          <div>

            <Input
              placeholder="USD: 62000000.97"
              type="number"
              onChange={this.props.updateMinPrice}
              value={this.props.valorMinimo}
            ></Input>
          </div>
        </TipoFiltro>

        <TipoFiltro>
          Valor máximo
          <div>

            <Input
              placeholder="USD 2500000000.97"
              type="number"
              onChange={this.props.updateMaxPrice}
              value={this.props.valorMaximo}
            ></Input>
          </div>
        </TipoFiltro>

        <TipoFiltro>
          Busca por nome
          <div>
            <Input
              placeholder="Falcon 9"
              type="text"
              onChange={this.props.updateQuery}
              value={this.props.textQuery}
              ></Input>                        
          </div>
        </TipoFiltro>        
      </Pagina>
      
    );
  }
}
export default Filtros;
