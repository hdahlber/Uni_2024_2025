import React, { useState } from 'react';

export default function Card(props) {
  // State to track the quantity selected by the user
  const [quantity, setQuantity] = useState(1);

  // Handle the quantity change
  const handleQuantityChange = (event) => {
    const value = Math.max(1, Math.min(99, event.target.value)); // Ensure the value is between 1 and 99
    setQuantity(value);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {/* Card Image (Placeholder) */}
      <img
        className="w-full h-48 object-cover"
        src="https://cdn.britannica.com/55/82755-050-4652939D/Icon-painting-Jesus-Christ-Pantocrator.jpg" // Placeholder image
        alt="Placeholder"
      />

      <div className="p-4">
        {/* Card Title */}
        <h2 className="text-xl font-bold">{props.title}</h2>
        
        {/* Card Description */}
        <p className="text-sm text-gray-700 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id arcu lacus. Nam ultricies enim eros, vel pretium massa pulvinar et. 
          Phasellus sed tellus hendrerit, consectetur diam id, mattis eros. Suspendisse efficitur tristique metus, eget sagittis mi lobortis a. 
          Aenean sit amet orci justo. Sed id leo nunc. Mauris nibh sem, aliquet ac orci a, luctus imperdiet ipsum. Fusce tristique, lectus quis tincidunt efficitur, tortor leo facilisis felis, id mollis purus ex in dolor. Sed eu nibh egestas, commodo velit ut, dictum leo. Proin sit amet nisi erat.
        </p>

        {/* Quantity Selector */}
        <div className="flex items-center mt-4">
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            max="99"
            className="w-16 p-2 border rounded text-center"
          />
          <span className="ml-2">Quantity</span>
        </div>

        {/* Add to Cart Button */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => alert(`Added ${quantity} item(s) to the cart!`)}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}