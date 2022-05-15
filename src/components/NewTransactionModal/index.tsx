import Modal from "react-modal";
import {
  ContainerForm,
  IncomeOutcomeButtonsContainer,
  IncomeOutcomeButton,
} from "./style";
import close from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";
import { api } from "../../services/api/api";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {

  const [type, setType] = useState("deposit");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState(0);
  const [title, setTitle] = useState("");

  function handleNewTransaction(e: FormEvent) {
    e.preventDefault()
    const data = {
      title: title,
      category: category,
      value: value,
      type: type,
    }
    api.post("/transactions", data)

    setTitle("")
    setCategory("")
    setValue(0)
    setTitle("")
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <ContainerForm onSubmit={(e)=>handleNewTransaction(e)}>
        <img
          className="react-modal-close"
          onClick={onRequestClose}
          src={close}
          alt="close modal"
        />
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Título" value={title} onChange={ (e)=>setTitle(e.target.value)}/>
        <input type="number" placeholder="Valor"  onChange={ (e)=>setValue(Number(e.target.value))} />
        <IncomeOutcomeButtonsContainer>
          <IncomeOutcomeButton
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <span>Entrada</span>
            <img src={incomeImg} alt="income" />
          </IncomeOutcomeButton>
          <IncomeOutcomeButton
            type="button"
            onClick={() => setType("withdrawl")}
            isActive={type === "withdrawl"}
            activeColor="red"

          >
            <span>Saída</span>
            <img src={outcomeImg} alt="income" />
          </IncomeOutcomeButton>
        </IncomeOutcomeButtonsContainer>
        <input type="text" placeholder="Categoria" value={category} onChange={ (e)=>setCategory(e.target.value)} />
        <button type="submit">Cadastrar</button>
      </ContainerForm>
    </Modal>
  );
}

export default NewTransactionModal;
