import { GlobalStyle } from './assets/styles/GlobalStyle'
import { Header } from './components/Header'
import { Main } from './components/Main'
import styled from 'styled-components'
import { background } from './assets/styles/Colors'

const Container = styled.div`
  background: ${background};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  // overflow-y: scroll;

  @media (max-width: 900px) {
    height: 100vh;
  }
`

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Main />
    </Container>
  )
}

export default App
