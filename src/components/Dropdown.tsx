import { useState } from "react";

interface Props {
  selectedCategory: string;
  setSelectedCategory(option: string): void;
}

function Dropdown({ selectedCategory, setSelectedCategory }: Props) {
  const [isActive, setIsActive] = useState(false);
  const options = ["Entertainment", "Food", "Housing", "Other"];

  return (
    <div className="dropdown">
      <div className="dropdownBtn" onClick={() => setIsActive(!isActive)}>
        {selectedCategory ? selectedCategory : "Category"}
        <span>⬇️</span>
      </div>
      <div>
        {isActive && (
          <div className="dropdownContent">
            {options.map((option) => {
              return (
                <div
                  className="dropdownItem"
                  onClick={() => {
                    setSelectedCategory(option);
                    setIsActive(false);
                  }}
                >
                  {option}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
