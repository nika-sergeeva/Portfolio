import styled from 'styled-components'
import { Container } from './Container'


const Box = styled.div`
width: 502px; 
border-radius: 10px; 
box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  &:nth-child(2){
    margin-left:30px;
  }

  & img{
  width: 100%; 
  border-radius: 10px 10px 0 0;
}
@media only screen and (max-width: 1054px){
  &:nth-child(2){
    margin-left: 0;
    margin-top: 30px;
  }
}

@media only screen and (max-width: 535px){
  width: 100%;
}
`
const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center ;
  align-items: center;
  padding: 20px;

  & p{
    padding: 20px;
  }

  & ul{
    display: flex;
    padding: 0;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  & li{
    background-color: thistle;
    border-radius: 10px;
    margin: 5px 6px;
    padding: 5px 21px;
    display: flex;
    justify-content: center;
  }

  @media only screen and (max-width: 535px){
    & p{
      font-size: 18px;
    }
  }
`
const OuterBox = styled.div`
display: flex;
justify-content: space-evenly ;
flex-direction: row;
//gap: 20px;
margin: 30px 0;

@media only screen and (max-width: 1054px){
  flex-direction: column;
  align-items: center;
}
`


const Works = () => {
  return ( 
    <div id='works' style={{margin: '5rem 0'}}>
      <Container>
        <h2>My Works</h2>
        <OuterBox>
        <Box>
        <a href="https://quizz-app-five.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src="/images/quizlet.png" alt="quizz"/>
            </a>
            <InnerBox>
            <h3>Quizz </h3>
            <p>Учебный проект который построен на React с использованием Open Trivia Database API.</p>
            <ul>
              <li>React.js</li>
              <li>API</li>
            </ul>
            </InnerBox>
        </Box>
        
        <Box>
        <a href="https://todo-react-eta-two.vercel.app/" target="_blank" rel="noopener noreferrer">
          <img src="/images/todo.png" alt="quizz"/>
          </a>
          <InnerBox>
           <h3>T O D O</h3>
            <p>Проект с <a href="https://www.frontendmentor.io" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. 
          React приложение, которое хранит ваши TODO'шки в Local Storsge.</p>
            <ul>
              <li>React.js</li>
              <li>Redux</li>
              <li>Redux Persist</li>
              <li>Framer Motion</li>
            </ul>
            </InnerBox>
        </Box>
        
        </OuterBox>
        
 
<p>Больше проектов можно найти в моем профиле на <a href="https://github.com/nika-sergeeva" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>



</Container>

    </div>
  )
}

export default Works