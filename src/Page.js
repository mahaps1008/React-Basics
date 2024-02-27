import React, { useEffect, useState } from "react";
import Images from "./Components/Images";
import ReactPaginate from 'react-paginate'; // Import ReactPaginate

function Page() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(data => {
        setImages(data);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <div>
      {/* Pass the images data to the Images component */}
      <Images data={images} />
    </div>
  );
}

export default Page;
