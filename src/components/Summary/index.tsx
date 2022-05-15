import { Container } from "./style";
import income from "../../assets/income.svg"
import outcome from "../../assets/outcome.svg"
import total from "../../assets/total.svg"
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
function Summary() {

    const {transactions} = useContext(TransactionsContext)

    const entradas = 0;

    return ( 
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={income} alt="entradas"/>
                </header>
                <strong>{transactions.forEach(transaction =>{
                    transaction.type === "deposit" ? entradas += transaction.amount : null
                })}</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcome} alt="saidas"/>
                </header>
                <strong>-R$1000,00</strong>
            </div>
            <div className="highlight-green">
                <header>
                    <p>Total</p>
                    <img src={total} alt="Total"/>
                </header>
                <strong>R$1000,00</strong>
            </div>
        </Container>
     );
}

export default Summary;