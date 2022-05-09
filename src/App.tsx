import styled from "styled-components"
import { GlobalStyle } from "./styles/global";

const Title = styled.h1`
  color: red;
`

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Title>Teste</Title>

    </div>
  );
}

export default App;
