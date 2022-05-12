interface TransactionProps {
  transaction: {
    title: string;
    amount: string;
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
      <td className={type}>{type !== "deposit" ? "-" : null}R${amount}</td>
      <td>{category}</td>
      <td>{createdAt.toString().split("T")[0]}</td>
    </tr>
  );
}

export default Transaction;
