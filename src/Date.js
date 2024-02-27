import React from 'react';

function Date() {
    // Current date
    let currentDate = new Date();
    let currentDateString = currentDate.toString(); // Convert date object to string

    // Custom date
    let customDate = new Date();
    customDate.setFullYear(2022);
    customDate.setMonth(5); // June (zero-indexed)
    customDate.setDate(15);
    customDate.setHours(12);
    customDate.setMinutes(30);
    customDate.setSeconds(45);
    let customDateString = customDate.toString(); // Convert custom date object to string

    return (
        <div>
            <h2>Current Date</h2>
            <p>{currentDateString}</p>

            <h2>Custom Date</h2>
            <p>{customDateString}</p>
        </div>
    );
}

export default Date;
