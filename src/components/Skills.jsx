import styled from 'styled-components'
import { Container } from './Container'

const Box = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;

@media only screen and (max-width: 702px){
  flex-direction: column;
}
`
const InnerBox = styled.div`
  width: 303px;
  height: auto;
  padding: 30px;
  margin: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  @media only screen and (max-width: 702px){
    width: auto;
    margin: 25px 0;
  }
`
const Paragraph = styled.p`
font-size: 18px;
font-weight: 300;
line-height: 40px;

@media only screen and (max-width: 702px){
  font-size: 22px;
}
`

const Skills = () => {
  return (
    <div id="skills" style={{margin: '5rem 0'}}>
      
        <h2>Skills & Toolset</h2>
      <Container>
        <Box>
        <InnerBox>
             <img src="/images/languages.png" alt="js" />
             <p style={{fontWeight:'900', fontSize: '18px', padding: '20px'}}>Languages</p>
             <Paragraph>HTML5, CSS (SCSS/Sass), Javascript</Paragraph>
        </InnerBox>
        <InnerBox>
            <img src="/images/tools.png" alt="gear" />
             <p style={{fontWeight:'900', fontSize: '18px', padding: '20px'}}>Tools</p>
             <Paragraph> React.js, Redux, REST API, Git & GitHub, NPM</Paragraph>
        </InnerBox>
        </Box>
        </Container>
    </div>
  )
}

export default Skills