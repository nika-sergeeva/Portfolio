import React from 'react'
import { Container } from './Container'
import MyNav from './MyNav'
import Socials from './Socials'
import styled from 'styled-components'

const MyFooter = styled.footer`
    height: 88px;
    width: 100%;
    padding: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const FooterWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;

@media only screen and (max-width: 690px){
  flex-direction: column-reverse;
  height: 100px;
  height: 137px;
  padding-bottom: 2rem;
}
`

const Footer = () => {
  return (
    <MyFooter>
      <Container>
        <FooterWrapper>
          <MyNav />
          <Socials />
        </FooterWrapper>
      </Container>  
    </MyFooter>
  )
}

export default Footer