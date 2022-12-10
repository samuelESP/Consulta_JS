import React from 'react'

import  logo  from "../../assets/logo-dio.png";

import { Button } from '../Button';

import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu, MenuRight} from './styles';

const Header = ({autenticado}) => {
  return (
    <Wrapper>
      <Container>
           <Row>
            <img src={logo} alt="Logo da Dio" />
            <BuscarInputContainer>
                <Input placeholder='Buscar....'/>
            </BuscarInputContainer>
            <Menu>Live Code</Menu>
            <Menu>Golbal</Menu>
          </Row>  
          <Row>
            <MenuRight href='#' >Home</MenuRight>
            <Button title='Entrar'/>
            <Button title='Cadastrar'/>
          </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }