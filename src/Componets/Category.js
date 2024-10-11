import React from 'react';

const Category = ({ title, seats, updateSeatsStatus }) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
      <div className="grid grid-cols-1 gap-2 justify-center">
        {seats.map((row, rowindex) => (
          <div key={rowindex} className="flex justify-center space-x-2">
            {row.map((col, colindex) => (
              <div
                key={colindex}
                className={`w-[100px] text-white text-lg font-bold cursor-pointer h-10 flex items-center justify-center border border-gray-300 rounded ${
                  col === 'selected' ? 'bg-green-500' : 'bg-red-500'
                }`}
                onClick={() => updateSeatsStatus(rowindex, colindex, seats,title)}
              >
                {col}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
