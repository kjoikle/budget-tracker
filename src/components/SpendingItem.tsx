import { IExpenditure } from "../Interfaces";

interface Props {
  item: IExpenditure;
}

function SpendingItem({ item }: Props) {
  return (
    <div className="spendingItem">
      <div className="container1">{item.name}</div>
      <div className="container2">
        <div>${item.amount}</div>
        <button>X</button>
      </div>
    </div>
  );
}

export default SpendingItem;
