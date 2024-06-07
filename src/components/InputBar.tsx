import { ChangeEvent, useState } from "react";
import { IExpenditure } from "../Interfaces";
import { v4 as uuidv4 } from "uuid";

interface Props {
  addToList(item: IExpenditure): void;
}

function InputBar({ addToList }: Props) {
  const [expenditureName, setExpenditureName] = useState<string>("");
  const [expenditureCategory, setExpenditureCategory] = useState<string>("");
  const [expenditureCost, setExpenditureCost] = useState<number>(0);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.name === "name") {
      setExpenditureName(e.target.value);
    } else if (e.target.name === "category") {
      setExpenditureCategory(e.target.value);
    } else if (e.target.name === "cost") {
      setExpenditureCost(Number(e.target.value));
    }
  }

  function handleClick() {
    const newItem = {
      name: expenditureName,
      category: expenditureCategory,
      cost: expenditureCost,
      id: uuidv4(),
    };
    addToList(newItem);

    setExpenditureCategory("");
    setExpenditureCost(0);
    setExpenditureName("");
  }

  return (
    <div className="inputWrapper">
      <input
        name="name"
        type="text"
        placeholder="Expenditure"
        value={expenditureName}
        onChange={handleChange}
      />
      <input
        name="category"
        type="text"
        placeholder="Category"
        value={expenditureCategory}
        onChange={handleChange}
      />
      <input
        name="cost"
        type="number"
        placeholder="Cost"
        value={expenditureCost}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default InputBar;
