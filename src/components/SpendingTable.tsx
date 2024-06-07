import { IExpenditure } from "../Interfaces";
import SpendingItem from "./SpendingItem";

interface Props {
  expenditureList: IExpenditure[];
  onDelete(idToDel: string): void;
}

function SpendingTable({ expenditureList, onDelete }: Props) {
  return (
    <div className="spendingTable">
      <h3>Expenditures</h3>

      {expenditureList.map((item) => {
        return <SpendingItem key={item.id} item={item} onDelete={onDelete} />;
      })}
    </div>
  );
}

export default SpendingTable;
