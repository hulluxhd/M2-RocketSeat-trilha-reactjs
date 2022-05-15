import Header from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Dashboard from "./components/Dashboard";
import { createServer, Model } from "miragejs";

import { useState } from "react";
import NewTransactionModal from "./components/NewTransactionModal";
import Modal from "react-modal";
import TransactionContextProvider from "./contexts/TransactionsContext";

function App() {
  // configurando miragejs

  createServer({
    models: {
      transaction: Model,
    },

    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: "Ganhei um real",
            type: "deposit",
            amount: 1,
            category: "dev",
            createdAt: new Date("2022-01-10"),
          },
        ],
      });
    },

    routes() {
      this.namespace = "api";
      this.get("/transactions", () => {
        return this.schema.all("transaction");
      });
      this.post("/transactions", (schema, request) => {
        const data = JSON.parse(request.requestBody);

        return schema.create("transaction", data);
      });
    },
  });

  // configurações modal
  Modal.setAppElement("#root");
  const [isModalNewTransactionOpen, setIsModalNewTransactionOpen] =
    useState(false);

  function handleModalNewTransactionOpen() {
    setIsModalNewTransactionOpen(true);
  }
  function handleModalNewTransactionClose() {
    setIsModalNewTransactionOpen(false);
  }

  return (
   
      <TransactionContextProvider>
        <GlobalStyle />
        <Header onNewTransaction={handleModalNewTransactionOpen} />
        <Dashboard />
        <NewTransactionModal
          isOpen={isModalNewTransactionOpen}
          onRequestClose={handleModalNewTransactionClose}
        />
      </TransactionContextProvider>
   
  );
}

export default App;
