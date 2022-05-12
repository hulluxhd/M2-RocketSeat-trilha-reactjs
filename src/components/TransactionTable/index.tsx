import { useEffect, useState } from "react";
import { api } from "../../services/api/api";
import Transaction from "../Transaction";
import { Container } from "./style";

function TransactionTable() {

    const [transactions, setTransactions] = useState([])

    useEffect(()=>{
        async function a(){
            await api.get("/transactions")
            .then(response => setTransactions(response.data))
        }
        a()
        console.log(transactions)
 
    }, [])


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
                <Transaction transaction={transaction}/>)}
            </tbody>
        </table>
        </Container>
     );
}

export default TransactionTable;