import styled from 'styled-components'
import { FaGithubAlt } from 'react-icons/fa'
import { AiOutlineLinkedin } from 'react-icons/ai'

const GitHub = styled(FaGithubAlt)`
  width: 38px;
  height: 38px;
  fill: #e5acb6;

&:hover{
  fill: #ffc0cb;
}
`
const LinkedIn = styled(AiOutlineLinkedin)`
  width: 38px;
  height: 38px;
  fill: #e5acb6;

&:hover{
fill: #ffc0cb;
}
`

const SocLinks = styled.ul`
  display: flex;
  flex-diraction: row;
  gap: 20px;
  padding-left: 0;

  & li{
    display: flex;
    justify-content: center;
    margin: 0;
  }

  & li:nth-child(2){
    padding-left: 15px;
  }
`


const Socials = () => {
  return (
    <SocLinks>
        <li>
          <a href="https://github.com/nika-sergeeva" target="_blank" rel="noopener noreferrer"> 
            <GitHub />
          </a>
        </li>
        
        <li>
           <a href="https://www.linkedin.com/in/veron1ka-sergeeva/" target="_blank" rel="noopener noreferrer"> 
               <LinkedIn />
           </a>
        </li>
    </SocLinks>
  )
}

export default Socials

