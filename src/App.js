import React, { useState } from 'react';
import Category from './Componets/Category';

let Max = 5;

const App = () => {
  const [general, setGeneral] = useState(generate2D(5, 5));
  const [vip, setVip] = useState(generate2D(6, 6));
  const [economy, setEconomy] = useState(generate2D(8, 8));
  const [seats, setSeats] = useState([]);
  // const [isSelected, setSelected] = useState(false);

  function generate2D(row, col) {
    const array = [];
    for (let i = 0; i < row; i++) {
      array[i] = [];
      for (let j = 0; j < col; j++) {
        array[i][j] = 'available';
      }
    }
    return array;
  }

  function updateSeatsStatus(rowIndex, colIndex, category,title) {
    if (seats.length < Max || category[rowIndex][colIndex] === 'selected') {
      const isUpdated = category.map((row, rowid) => {
        return rowIndex === rowid
          ? row.map((col, colid) => {
              return colIndex === colid
                ? col === 'available'
                  ? 'selected'
                  : 'available'
                : col;
            })
          : row;
      });

      if (category === vip) {
        setVip(isUpdated);
      } else if (category === general) {
        setGeneral(isUpdated);
      } else if (category === economy) {
        setEconomy(isUpdated);
      }

      updateStatus(rowIndex, colIndex, title);
    }
  }

  function updateStatus(rowIndex, colIndex, title) {
    let seatId = `${title}-${rowIndex}-${colIndex}`;
    if (seats.includes(seatId)) {
      let arr = seats.filter((item) => item !== seatId);
      setSeats(arr);
    } else {
      setSeats([...seats, seatId]);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Concert Booking</h1>
        <Category title={'General'} seats={general} updateSeatsStatus={updateSeatsStatus} />
        <Category title={'VIP'} seats={vip} updateSeatsStatus={updateSeatsStatus} />
        <Category title={'Economy'} seats={economy} updateSeatsStatus={updateSeatsStatus} />

        <div className="text-center mt-8">
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-all"
            onClick={() => {
              if(seats.length!=0){
              alert(`Booked Seats are ${seats[0]?seats[0]:''} ${seats[1]?seats[1]:''} ${seats[2]?seats[2]:''} ${seats[3]?seats[3]:''} ${seats[4]?seats[4]:''}`);
              // console.log(seats)
              setGeneral(generate2D(5,5))
              setVip(generate2D(6,6))
              setEconomy(generate2D(8,8))
              setSeats([]); 
              }
              else{
                alert('Please Select Ticket')
              }
            
              
            }}
          >
            Book Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
