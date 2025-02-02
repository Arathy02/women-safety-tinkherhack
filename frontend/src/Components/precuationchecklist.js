import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PrecautionChecklist = () => {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState({});
  // Checklist items
  const items = [
    "ID Card",
    "Power Bank",
    "Emergency Contact",
    "Water Bottle",
    "Cash",
    "First Aid Kit",
    "Flashlight",
    "Whistle",
    "Emergency Blanket",
    "Multi-tool",
    "Medication",
  ];
  // Handle checkbox toggle
  const handleCheckboxChange = (item) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  // Handle missing items notification
  const handleSubmit = () => {
    const uncheckedItems = items.filter((item) => !checkedItems[item]);
    if (uncheckedItems.length > 0) {
      alert(`You missed: ${uncheckedItems.join(", ")}`);
    } else {
      alert("All items checked! Stay safe!");
    }
  };

  return (
    <div className="mx-28 w-full bg-blue-600 px-6 py-10">
        <div>

      <h1 className="text-3xl font-bold text-blue-900 mb-6">
        Emergency Checklist
      </h1>

      {/* Checklist */}
        {items.map((item, index) => (
      <div className="w-full  p-6 rounded-lg ">
          <label key={index} className="flex items-center space-x-3 py-2">
            <input
              type="checkbox"
              checked={checkedItems[item] || false}
              onChange={() => handleCheckboxChange(item)}
              className="w-5 h-5"
            />
            <span className="text-lg">{item}000</span>
          </label>
      </div>
        ))}

      {/* Buttons Section with Increased Gap */}
      <div className="mt-10 flex flex-col items-center space-y-6">  
        <button
          className="bg-red-600 text-white text-lg px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300 w-64"
          onClick={handleSubmit}
        >
          Check Items
        </button>

        <button
          onClick={() => navigate("/home")}
          className="bg-gray-700 text-white text-lg px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300 w-64"
        >
          Back to Home
        </button>
      </div>
        </div>
    </div>
  );
};

export default PrecautionChecklist;
