import React from 'react';

function Sorting() {
    let letters = ['c', 'a', 'b', 'e', 'd'];
    letters.sort().reverse(); // Sorting and then reversing the array
    
    return (
        <div>
            <h2>Sorted and Reversed Letters</h2>
            <ul>
                {letters.map((letters,index)=>
                <li key={index}>{letters}</li>
                )}
                
            </ul>
        </div>
    );
}

export default Sorting;
