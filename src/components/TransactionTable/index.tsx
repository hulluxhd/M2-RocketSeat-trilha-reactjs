import { useEffect, useState } from "react";
import { api } from "../../services/api/api";
import Transaction from "../Transaction";
import { Container } from "./style";

function TransactionTable() {

    const [transactions, setTransactions] = useState([])

    useEffect(()=>{
        async function gettinDataFromAPI(){
            await api.get("/transactions")
                .then(response => setTransactions(response.data.transactions))
            console.log(transactions[0])
        }
        gettinDataFromAPI()
      
 
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
                <Transaction key={transaction} transaction={transaction}/>)}
            </tbody>
        </table>
        </Container>
     );
}

export default TransactionTable;