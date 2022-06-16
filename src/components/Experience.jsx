import React from 'react'
import { Container } from './Container'
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
align-items: center;
flex-direction: row;
@media only screen and (max-width: 690px){
  justify-content: center;
}
`
const Box = styled.div`
display: flex;
flex-direction: column;
justify-items: center;
align-items: center;
width: 400px;
height: auto;

 & img{
  width: 104px;
 }

 & h3{
  color: hsl(240, 18%, 77%); 
  font-weight: 300;
  margin: 17px;
 }

 & span{
  font-weight: 700;
}

  & ul{
    text-align: start;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
  }

  & li{
    list-style: initial;
    text-align: center;
  }
`
const CourseBox = styled.div`
display: flex;
flex-deraction: row;
margin: 30px 0;

    & img{
        width: 70px;
        vertical-align: top;
        border-radius: 50%;
    }
    & ul{
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 0 0 30px;
    }
    & li{
      text-align: start;
    }
    & p{
      width: 117px;
      padding: 10px 0 0 0;
    }

    @media only screen and (max-width: 552px){
      flex-direction: column;

      & div{
        margin: 0 auto;
      }

      & ul{
        margin: 25px;
      }

      & li{
        text-align: center;
        font-weight: 600;
      }
    }
`

const Experience = () => {
  return (
    <div id='experience' style={{margin: '5rem 0'}}>
      <h2 style={{marginBottom: '30px'}}>Experience</h2>
      <Container>
        <Wrapper>
        <Box>
          <img src="/images/rsuh.png" alt="rsuh" />
          <h3>РГГУ</h3>
          <p>Закончила универсистет с квалификацией бакалавр по специальности "Социология"</p> 
          <span style={{marginTop: '20px'}}>2020 г.</span>
        </Box>
        <Box>
          <img src="/images/dr-brilliant.png" alt="dr. brilliant" style={{padding: '59px 0px 18px 0'}} />
          <h3>Dr. Brilliant</h3>
          <p>Администратор стоматологической клиники</p>
          <ul>
            <li>Запись пациентов на прием</li>
            <li>Консультация по услугам клиники</li>
          </ul> 
          <span>до 2021 г.</span>
        </Box>
        <div>
          <h2 style={{marginTop: '40px'}}>courses</h2>
<CourseBox>
    <div>
        <img src="/images/codecademy.png" alt="" />
        <p>Codecademy</p>
    </div>
    <ul>
        <li>Build a Website with HTML, CSS, and Github Pages</li>
    </ul>
</CourseBox>
<CourseBox>
    <div>
        <img src="/images/freecodecamp.jpg" alt="" />
        <p>freeCodeCamp</p>
    </div>
    <ul>
        <li>JavaScript Algorithms and Data Structures</li>
    </ul>
</CourseBox>
<CourseBox>
    <div>
        <img src="/images/scrimba.png" alt="" />
        <p>scrimba</p>
    </div>
    <ul>
        <li>React</li>
    </ul>
</CourseBox>
</div>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Experience