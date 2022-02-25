import styled from 'styled-components'
import { textColor, button, background } from '../../assets/styles/Colors'

export const Container = styled.div`
  animation: inicio 1.5s ease-out forwards 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @keyframes inicio {
    from {
      transform: translate(0, 2000px);
    }
  }

  @media (max-width: 900px) {
    margin: 60px 30px 0 30px;
    justify-content: space-between;
    height: 100vh;
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${textColor};
  z-index: -1;
`

export const MainTitle = styled.p`
  font-size: 80px;
  font-weight: 700;

  @media (max-width: 650px) {
    font-size: 40px;
  }

  @media (max-width: 400px) {
    font-size: 35px;
  }

  @media (max-width: 350px) {
    font-size: 29px;
  }
`

export const SecondaryTitle = styled(MainTitle)`
  color: ${background};
  text-shadow: -1px -1px 0 ${button}, 1px -1px 0 ${button}, -1px 1px 0 ${button},
    1px 1px 0 ${button};
`

export const CoffeImg = styled.img`
  width: 100%;
`

export const MobileContent = styled.div`
  display: none;
  text-align: center;
  color: ${textColor};
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 10px;

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    button {
      display: block;
      width: fit-content;
    }
  }
`

const Blur = styled.span`
  :after {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    background: #996dff;
    border-radius: 100%;
    filter: blur(180px);
  }
`

export const RightBlur = styled(Blur)`
  :after {
    position: absolute;
    top: -60px;
    right: -60px;
    animation: inicioBlurRight 1.3s linear forwards 1;
  }

  @keyframes inicioBlurRight {
    from {
      transform: translateX(500px);
    }
  }

  @media (max-width: 900px) {
    display: none;
  }
`

export const LeftBlur = styled(Blur)`
  :after {
    position: absolute;
    bottom: -60px;
    left: -60px;
    animation: inicioBlurLeft 1.3s linear forwards 1;
  }

  @keyframes inicioBlurLeft {
    from {
      transform: translateX(-500px);
    }
  }

  @media (max-width: 900px) {
    :after {
      width: 400px;
      height: 400px;
      bottom: 0;
      left: 1%;
    }
  }

  @media (max-width: 650px) {
    :after {
      bottom: -50px;
    }
  }

  @media (max-width: 450px) {
    :after {
      bottom: -100px;
    }
  }

  @media (max-width: 300px) {
    :after {
      bottom: -150px;
    }
  }
`
