import { IExpenditure } from "../Interfaces";

interface Props {
  item: IExpenditure;
  onDelete(idToDel: string): void;
}

function SpendingItem({ item, onDelete }: Props) {
  function handleDelete() {
    onDelete(item.id);
  }

  return (
    <div className="spendingItem">
      <div className="container1">{item.name}</div>
      <div className="container2">
        <div>${item.cost}</div>
        <button onClick={handleDelete} className="deleteButton">
          X
        </button>
      </div>
    </div>
  );
}

export default SpendingItem;
