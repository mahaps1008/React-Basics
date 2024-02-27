import React from 'react';

function Filter() {
  // Perform the filtering logic outside the JSX return statement
  let numbers = [1, 2, 3, 4, 5, 6];
  let evenNumbers = numbers.filter(num => num % 2 === 0);
  console.log(evenNumbers);

  // Return JSX elements or null
  return (
    <div>
      <h1>Even Numbers Filter</h1>
      <ul>
        {evenNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;
