import styled from "styled-components";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Dashboard from "./components/Dashboard";
import { createServer } from "miragejs";

import { useState } from "react";
import NewTransactionModal from "./components/NewTransactionModal";
import Modal from "react-modal"

function App() {
  // configurando miragejs

  createServer({
    routes() {
      this.namespace = "api";
      this.get("/transactions", () => {
        return [
          {
            id: 1,
            title: "websites",
            amount: "1200",
            type: "deposit",
            category: "Services",
            createdAt: new Date(),
          },
          {
            id: 2,
            title: "Renda passiva",
            amount: "800",
            type: "Deposit",
            category: "misc",
            createdAt: new Date(),
          },
          {
            id: 3,
            title: "Home",
            amount: "3000",
            type: "withdrawal",
            category: "Rent",
            createdAt: new Date(),
          },
        ];
      });
    },
  });

  // configurações modal
  Modal.setAppElement('#root');
  const [isModalNewTransactionOpen, setIsModalNewTransactionOpen] =
    useState(false);

  function handleModalNewTransactionOpen() {
    setIsModalNewTransactionOpen(true);
  }
  function handleModalNewTransactionClose() {
    setIsModalNewTransactionOpen(false);
  }

  return (
    <>
      <GlobalStyle />
      <Header onNewTransaction={handleModalNewTransactionOpen} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isModalNewTransactionOpen}
        onRequestClose={handleModalNewTransactionClose}
      />
    </>
  );
}

export default App;
