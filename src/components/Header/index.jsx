import cx from 'classnames'
import { useState } from 'react'
import logo from '../../assets/images/logo.svg'
import logoLettering from '../../assets/images/logo-mobile.svg'
import menu from '../../assets/images/menu.svg'
import close from '../../assets/images/Close.png'
import {
  HeaderWrapper,
  LogoDesktop,
  LogoMobile,
  LogoMenuMobile,
  Nav,
  Button,
  ButtonSubmit,
  Menu,
  Separator,
  MenuButton,
} from './styles'

export const Header = () => {
  const [first, setFirst] = useState(true)
  const [menuIsOpen, toggleMenu] = useState(false)

  return (
    <>
      <HeaderWrapper>
        <LogoDesktop src={logo} alt='Logo da rocketseat' />
        <LogoMobile src={logoLettering} alt='Rocketseat' />

        <Nav>
          <Button>Home</Button>
          <Button>Menu</Button>
          <Button>Recompensas</Button>
          <Button>Gift Cards</Button>
          <Button>Lojas</Button>
        </Nav>
        <ButtonSubmit>Pegar meu café</ButtonSubmit>

        <LogoMenuMobile
          src={menuIsOpen ? close : menu}
          alt='Menu mobile'
          onClick={() => {
            toggleMenu(!menuIsOpen)
            setFirst(false)
          }}
        />
      </HeaderWrapper>
      <Separator />

      <Menu
        className={cx({ open: menuIsOpen }, { close: !first && !menuIsOpen })}
      >
        <MenuButton onClick={() => toggleMenu(false)} className='selected'>
          Home
        </MenuButton>
        <MenuButton onClick={() => toggleMenu(false)}>Menu</MenuButton>
        <MenuButton onClick={() => toggleMenu(false)}>Recompensas</MenuButton>
        <MenuButton onClick={() => toggleMenu(false)}>Gift Cards</MenuButton>
        <MenuButton onClick={() => toggleMenu(false)}>Lojas</MenuButton>
      </Menu>
    </>
  )
}
