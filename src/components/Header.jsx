import React, { useState } from 'react';
import Electronics from '../assets/Electronics.svg';
import Outdoor from '../assets/Outdoor.svg';
import Sport from '../assets/Sport.svg';
import Toy from '../assets/Toys.svg';
import '../App.css';

function Header() {
  const [order, setOrder] = useState([1, 2, 3, 4]);

  const handleSort = (e) => {
    setOrder((prevOrder) => {
      const newOrder = [...prevOrder];
      const firstItem = newOrder.shift();
      newOrder.push(firstItem);
      return newOrder;
    });
    e.target.classList.add('Parent')
  };

  return (
    <div className="w-full h-96  bg-slate-300 z-50 flex justify-center items-center">
      <div className="flex justify-center w-3/4 h-28 items-center z-40 transition-transform ease-in-out duration-500 bg-white style={{ transform: `translateX(${-order.indexOf(1) * 100}%)` }}">
        {order.map((itemId, index) => (
          <div
            key={itemId}
            className={`cursor-pointer ml-5 flex justify-center z-0 items-center rounded w-52 h-14 bg-white items-center shadow-lg shadow-slate-300 animate-fade-in animate-fade-out-${index + 1}`}
            onClick={handleSort}

          >
            {itemId === 1 && <img src={Electronics} height="30px" width="30px" alt="Electronics" />}
            {itemId === 2 && <img src={Outdoor} height="30px" width="30px" alt="Outdoor" />}
            {itemId === 3 && <img src={Sport} height="30px" width="30px" alt="Sport" />}
            {itemId === 4 && <img src={Toy} height="30px" width="30px" alt="Toy" />}
            <h2 className="ml-2 text-2xl font-medium">
              {itemId === 1 && 'Electronics'}
              {itemId === 2 && 'Toys & Games'}
              {itemId === 3 && 'Sports'}
              {itemId === 4 && 'Outdoor Living'}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
