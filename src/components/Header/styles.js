import styled from 'styled-components'
import {
  background,
  textColor,
  button,
  borderMenuMobile,
  textColorMenuMobile,
} from '../../assets/styles/Colors'

export const HeaderWrapper = styled.header`
  width: 90%;
  max-width: 1000px;
  display: flex;
  align-item: center;
  justify-content: space-between;
  margin: 30px;
  padding: 20px;
  position: relative;

  @media (max-width: 900px) {
    width: 90%;
    padding: 0;
  }
`

export const LogoDesktop = styled.img`
  height: 50px;
  width: 45px;
  animation: animated-logo 1s ease-in-out infinite alternate;

  @keyframes animated-logo {
    to {
      transform: translate(3px, 3px);
    }
  }

  @media (max-width: 900px) {
    display: none;
  }
`

export const LogoMobile = styled.img`
  display: none;

  @media (max-width: 900px) {
    display: block;
  }
`

export const LogoMenuMobile = styled.img`
  display: none;
  width: 40px;
  height: 40px;

  @media (max-width: 900px) {
    display: block;
    cursor: pointer;
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 900px) {
    display: none;
  }
`

export const Button = styled.button`
  border: none;
  background: transparent;
  font-size: 15px;
  letter-spacing: 1px;
  color: ${textColor};
  border-bottom: 1px solid ${background};

  transition: border 0.1s;

  :hover {
    cursor: pointer;
    border-bottom: 2px solid ${button};
  }
`

export const ButtonSubmit = styled(Button)`
  text-align: center;
  padding: 9px 38px 12px;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 6px;
  border: 2px solid ${button};
  transition: box-shadow 0.2s;
  z-index: 1;

  :hover {
    box-shadow: ${button} 0px 0px 20px 0.5px;
  }

  @media (max-width: 900px) {
    display: none;
  }
`

export const Separator = styled.div`
  display: none;

  :after {
    content: '';
    position: absolute;
    left: -2px;
    opacity: 0.5;
    height: 1px;
    width: 100vw;
    background-color: ${borderMenuMobile};
  }

  @media (max-width: 900px) {
    display: block;
  }
`

export const Menu = styled.div`
  display: none;
  background: black;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: calc(100% - 92px);
  color: white;
  z-index: 10;

  &.open {
    animation: open 0.3s linear forwards 1;
    display: flex;
    flex-direction: column;
  }

  &.close {
    display: flex;
    flex-direction: column;
    animation: close 0.3s linear forwards 1;
  }

  @keyframes open {
    from {
      transform: translateX(500px);
    }
  }

  @keyframes close {
    to {
      transform: translateX(100%);
    }
  }
`

export const MenuButton = styled.button`
  background: transparent;
  position: relative;
  border: none;
  color: ${textColorMenuMobile};
  border-bottom: 1px solid #a8a8b3;
  opacity: 0.6;
  text-align: left;
  padding: 10px 20px;
  font-size: 18px;
  border-left: 4px solid transparent;
  cursor: pointer;

  &:hover {
    opacity: 1;
    border-left: 4px solid #8257e5;
  }

  &.selected {
    opacity: 1;
    border-left: 4px solid #8257e5;
  }
`
