import ImgCoffe from '../../assets/images/coffe.svg'
import {
  Container,
  Title,
  MainTitle,
  SecondaryTitle,
  MobileContent,
  RightBlur,
  LeftBlur,
  CoffeImg,
} from './styles'
import { ButtonSubmit } from '../Header/styles'

export const Main = () => {
  return (
    <>
      <Container>
        <MobileContent>
          O café que fará seu código decolar para o próximo nível
          <ButtonSubmit
            style={{ marginBottom: '25px', minHeight: '43px', zIndex: '10' }}
          >
            Pegar meu café &gt;
          </ButtonSubmit>
        </MobileContent>

        <Title>
          <MainTitle>Great Coffe</MainTitle>
          <SecondaryTitle>&lt;Great Code/&gt;</SecondaryTitle>
        </Title>
        <CoffeImg src={ImgCoffe} alt='Rocket Coffe' />
      </Container>

      <RightBlur />
      <LeftBlur />
    </>
  )
}
