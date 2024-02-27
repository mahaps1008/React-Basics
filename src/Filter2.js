import React from 'react'

function Filter2() {
    let persons = [
        { name: 'Alice', age: 28 },
        { name: 'Bob', age: 35 },
         { name: 'Charlie', age: 22 }
        ];
        
        
        // Using filter to get persons older than 30
        let olderThan30 = persons.filter(person => person.age > 30);
        
        console.log(olderThan30);
       
        
        
        let totalAge = persons.reduce((sum, person) => sum + person.age, 0);
        
        console.log(totalAge); 
        return(
            <div>
                <h1> older than 30</h1>
                <ul>
                    {olderThan30.map((persons,index)=>(
                        <li key={index}>{persons.name}</li>
                    )
                    )}
                </ul>
            </div>

        );
}

export default Filter2