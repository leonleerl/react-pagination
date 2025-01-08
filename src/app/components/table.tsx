import React from "react";

function Table({ questions, limit }: TableProps) {
  const blankRows = limit - questions.length > 0 ? limit - questions.length : 0;

  return (
    <table className="w-full border-collapse table-auto shadow-md rounded-lg">
      <thead>
        <tr className="bg-black text-white h-12">
          <th className="p-3 text-left">Name</th>
          <th className="p-3 text-left">Category</th>
          <th className="p-3 text-left">Difficulty</th>
          <th className="p-3 text-left"></th>
        </tr>
      </thead>
      <tbody>
        {questions.map((questions) => (
          <tr
            key={questions.name}
            className={"border hover:bg-gray-100"}
          >
            <td className="p-3">{questions.name}</td>
            <td className="p-3">{questions.category}</td>
            <td className="p-3">{questions.difficulty}</td>
            <td className="p-3 flex space-x-4">
              <button className="bg-yellow-400 text-black py-1 px-3 rounded-md hover:bg-yellow-300">
                View
              </button>
              <button className="border border-black text-black py-1 px-3 rounded-md hover:bg-gray-100">
                Delete
              </button>
            </td>
          </tr>
        ))}

        {Array.from({ length: blankRows }).map((_, index) => (
          <tr
            key={`blank-${index}`}
            className={"border hover:bg-gray-100  h-12"}
          >
            <td className="p-3">&nbsp;</td>
            <td className="p-3">&nbsp;</td>
            <td className="p-3">&nbsp;</td>
            <td className="p-3">&nbsp;</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
