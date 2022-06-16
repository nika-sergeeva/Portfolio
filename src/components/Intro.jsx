import styled from 'styled-components'

const IntroSection = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: radial-gradient(circle at right, #ffd6fc , #e3ddee);


@media only screen and (max-width: 1164px){
  flex-direction: column;
}
`
const Text = styled.div`
display: flex;
z-index: 5;
position: relative;
left: 111px;

@media only screen and (max-width: 1164px){
  left: 0;
  padding: 38px 15px;
  width: 73%;
}
@media only screen and (max-width: 690px){
  width: auto;
}

`
const Me = styled.img.attrs({
  src: '../images/me.jpg',
  alt: 'veronika sergeeva',
})`
width: 527px;
height: auto;
border-radius: 4px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
z-index: 3;

@media only screen and (max-width: 580px){
  width: 90%;
  height: auto;
}
`

const PicBox = styled.div`
height: 657px;
display: flex;
justify-content: center;
align-items: center;
position: relative;
padding-right: 111px;

@media only screen and (max-width: 1164px){
  height: auto;
  padding: 0 0 20px 0;
}

`
const Paragraph = styled.p`
font-weight: 300;
font-size: 30px;
text-align: left;
line-height: 54px;

@media only screen and (max-width: 1164px){
  font-size: 22px;
  text-align: center;
}
@media only screen and (max-width: 842px){
  font-size: 22px;
  text-align: center;
}

@media only screen and (max-width: 391px){
  font-size: 18px;
  line-height: 35px;
}
`

const Intro = () => {
  return (
    <IntroSection>
    <Text>
      <Paragraph>
 Hi there! Меня зовут <span style={{fontWeight: '700'}}>Вероника</span> и я начинающий <span style={{fontWeight: '700'}}>Frontend разработчик</span>.
   Мне нравится разбираться с проблемами, возникающими в процессе работы, и я умею эффективно 
взаимодействовать как с компьютерами, так и с людьм.
      </Paragraph>
    </Text>   
    <PicBox>
       <Me />
    </PicBox>
    </IntroSection>
  )
}

export default Intro
