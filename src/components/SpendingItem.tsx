import { IExpenditure } from "../Interfaces";

interface Props {
  item: IExpenditure;
  onDelete(idToDel: string): void;
}

let categoryColors: Map<string, React.CSSProperties> = new Map();

categoryColors.set("Housing", { background: "#84a0e3" });
categoryColors.set("Entertainment", { background: "#bf96eb" });
categoryColors.set("Food", { background: "#e38487" });

function SpendingItem({ item, onDelete }: Props) {
  function handleDelete() {
    onDelete(item.id);
  }

  const color = categoryColors.get(item.category);

  return (
    <div className="spendingItem" style={color}>
      <div className="container1">{item.name}</div>
      <div className="container2">
        <div>${item.cost}</div>
      </div>
      <button onClick={handleDelete} className="deleteButton">
        X
      </button>
    </div>
  );
}

export default SpendingItem;
