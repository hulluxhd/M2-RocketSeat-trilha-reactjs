import { Container } from "./style";
import income from "../../assets/income.svg"
import outcome from "../../assets/outcome.svg"
import total from "../../assets/total.svg"
import {  useTransaction } from "../../contexts/TransactionsContext";
function Summary() {

    const { transactions } = useTransaction()
    let entradas = 0
    let saidas = 0
    transactions.forEach(transaction => {
        transaction.type === "deposit" ? entradas += transaction.amount : saidas += transaction.amount;
    })

        return (
            <Container>
                <div>
                    <header>
                        <p>Entradas</p>
                        <img src={income} alt="entradas" />
                    </header>
                    <strong>{new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(entradas)}</strong>
                </div>
                <div>
                    <header>
                        <p>Saídas</p>
                        <img src={outcome} alt="saidas" />
                    </header>
                    <strong>{new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format( -1 * saidas)}</strong>
                </div>
                <div className="highlight-green">
                    <header>
                        <p>Total</p>
                        <img src={total} alt="Total" />
                    </header>
                    <strong>{new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(entradas - saidas)}</strong>
                </div>
            </Container>
        );
    }

export default Summary;