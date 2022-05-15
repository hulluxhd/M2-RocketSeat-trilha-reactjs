
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import Transaction from "../Transaction";
import { Container } from "./style";

function TransactionTable() {

    const {transactions} = useContext(TransactionsContext)


    return ( 
        <Container>
            <table>
            <thead>
                <th>Título</th>
                <th>Valor</th>
                <th>Categoria</th>
                <th>Data</th>
            </thead>
            <tbody>
                {transactions.map(transaction => 
                <Transaction key={transaction.id} transaction={transaction}/>)}
            </tbody>
        </table>
        </Container>
     );
}

export default TransactionTable;