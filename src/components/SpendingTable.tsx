import { IExpenditure } from "../Interfaces";
import SpendingItem from "./SpendingItem";

interface Props {
  expendituresList: IExpenditure[];
}

function SpendingTable({ expendituresList }: Props) {
  return (
    <div className="spendingTable">
      <h3>Expenditures</h3>

      {expendituresList.map((item) => {
        return <SpendingItem item={item} />;
      })}
    </div>
  );
}

export default SpendingTable;
