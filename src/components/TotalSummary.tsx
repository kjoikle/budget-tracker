import { IExpenditure } from "../Interfaces";

interface Props {
  itemsList: IExpenditure[];
}

function TotalSummary({ itemsList }: Props) {
  function calculateTotal() {
    let total = 0;

    itemsList.map((item) => {
      total += item.cost;
    });

    return total;
  }

  return (
    <div>
      <h3>${calculateTotal()}</h3>
    </div>
  );
}

export default TotalSummary;
