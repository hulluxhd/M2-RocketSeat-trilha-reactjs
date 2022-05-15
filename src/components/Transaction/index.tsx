interface TransactionProps {
  transaction: {
    id: number;
    title: string;
    amount: number;
    type: string
    category: string;
    createdAt: Date;
  };
}

function Transaction(props: TransactionProps) {
  const { title, amount, category, createdAt, type } = props.transaction;

  return (
    <tr>
      <td>{title}</td>
      <td className={type}>{type !== "deposit" ? "-" : null}{
        new Intl.NumberFormat('pt-BR', {
          style: "currency",
          currency: "BRL"
        }).format(amount)
      }</td>
      <td>{category}</td>
      <td>{new Intl.DateTimeFormat("pt-BR").format(new Date(createdAt))}</td>
    </tr>
  );
}

export default Transaction;
