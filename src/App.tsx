import { useState } from "react";
import "./App.css";
import InputBar from "./components/InputBar";
import SpendingTable from "./components/SpendingTable";
import { IExpenditure } from "./Interfaces";
import TotalSummary from "./components/TotalSummary";

function App() {
  const [expenditureList, setExpenditureList] = useState<IExpenditure[]>([]);

  function addToList(item: IExpenditure) {
    setExpenditureList([...expenditureList, item]);
  }

  function deleteFromList(itemID: string) {
    setExpenditureList(
      expenditureList.filter((listItem) => {
        return listItem.id !== itemID;
      })
    );
  }

  return (
    <div className="wrapper">
      <h1>Budget Tracker</h1>

      <h3>Total Spent:</h3>
      <TotalSummary itemsList={expenditureList} />

      <InputBar addToList={addToList} />

      <SpendingTable
        expenditureList={expenditureList}
        onDelete={deleteFromList}
      />
    </div>
  );
}

export default App;
