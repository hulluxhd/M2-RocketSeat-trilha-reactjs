import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api/api";

export const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData);

interface TransactionContextProviderProps {
  children: ReactNode;
}

// essa interface é necessária pois é a máscara que indicará o que está sendo exportado pelo provider. 
// no caso, são transmitidas as transações do useContext e também a função de novo cadastro
interface TransactionContextData {
    transactions: Transaction[],
    newTransaction: (transaction: newTransactionInfo) => Promise<void>
}


interface Transaction {
  id: number;
  title: string;
  category: string;
  type: string;
  amount: number;
  createdAt: Date;
}

// funcionalidade do TS que omite os atributos de outra interface
type newTransactionInfo = Omit<Transaction, "id" | "createdAt">

function TransactionContextProvider({
  children,
}: TransactionContextProviderProps) {
  
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  
  // função que cadastra uma nova transação
  async function newTransaction(obj: newTransactionInfo){

    const {data} = await api.post("/transactions", {...obj, createdAt: new Date()})
    setTransactions([...transactions, data.transaction])

}
  // recupera as transações que estão no bd assim que o componente renderizar
  useEffect(() => {
    async function gettingDataFromAPI() {
      await api
        .get("/transactions")
        .then((response) => setTransactions(response.data.transactions));
    }
    gettingDataFromAPI();
  }, []);

  return (
    <TransactionsContext.Provider value={{transactions, newTransaction}}>
      {children}
    </TransactionsContext.Provider>
  );
}

export default TransactionContextProvider;

export function useTransaction() {
  const context = useContext(TransactionsContext)

  return context;
}
