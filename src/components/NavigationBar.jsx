import Socials from './Socials'
import styled from 'styled-components'
import MyNav from './MyNav'
import { Container } from './Container'
import { useState, useEffect } from 'react'

const Header = styled.header`
  height: 78px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  @media only screen and (max-width: 690px){
    justify-content: center;
  }
`

const NavigationBar = () => {

  const [width, setWidth] = useState(window.innerWidth)
useEffect(()=>{
  window.addEventListener("resize", function(){
    setWidth(window.innerWidth)
  })
}, [])


  return (
    <Header>
      <Container>
        <Wrapper>
          { width >= 690 && <Socials />   }
           <MyNav />
         </Wrapper>
      </Container>
    </Header>
  )
}

export default NavigationBar