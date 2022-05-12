import logo from "../../assets/logo.svg"
import { Container, Content } from "./style";

interface HeaderProps{
    onNewTransaction: () => void 
}

function Header({onNewTransaction}: HeaderProps) {
    return ( 
        <Container>
            <Content>
            <img src={logo} alt="money"/>
            <button onClick={onNewTransaction}>Nova transação</button>
            </Content>
        </Container>
     );
}

export default Header;