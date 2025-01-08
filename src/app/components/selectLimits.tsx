import React, { useState } from 'react'

function SelectLimits(props: SelectLimitsProps) {
    const [selectedOption, setSelectedOption] = useState<string>("5");

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = parseInt(event.target.value, 10);
        setSelectedOption(event.target.value);
        props.onLimitChange(newValue);
    };
  
    return (
      <div className="flex flex-col items-center space-y-4">
        <select
          className=" rounded-md border border-gray-300 bg-white py-2 px-3 text-sm text-gray-700 shadow-sm  focus:outline-none focus:ring-yellow-400"
          value={selectedOption}
          onChange={handleChange}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          {/* <option value="15">15</option>
          <option value="20">20</option> */}
        </select>
      </div>
    );
}

export default SelectLimits
