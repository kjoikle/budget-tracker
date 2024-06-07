function InputBar() {
  return (
    <div className="inputWrapper">
      <input type="text" placeholder="Expenditure" />
      <input type="text" placeholder="Category" />
      <input type="number" placeholder="Amount" />
      <input type="date" placeholder="Date" />
      <button>Add</button>
    </div>
  );
}

export default InputBar;
