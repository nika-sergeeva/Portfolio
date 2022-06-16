import styled from 'styled-components'


const Nav = styled.nav`
 display: flex;
 justify-content:space-between;
 align-items: center;
 width: 343px;

 @media only screen and (max-width: 690px){
    font-size: 20px;
    width: 100%;
  }
`

const MyNav = () => {
    return (
        <Nav>
            <a href="#skills">Skills</a>
            <a href="#works">Works</a>
            <a href="#experience">Experience</a>
        </Nav>
    )
}

export default MyNav