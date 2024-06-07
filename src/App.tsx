import "./App.css";
import InputBar from "./components/InputBar";
import SpendingTable from "./components/SpendingTable";

function App() {
  const list = [{ name: "PS5", amount: 500, category: "Entertainment" }];

  return (
    <div className="wrapper">
      <h1>Budget Tracker</h1>

      <h3>Total Spent: $$$</h3>

      <InputBar />

      <SpendingTable expendituresList={list} />
    </div>
  );
}

export default App;
