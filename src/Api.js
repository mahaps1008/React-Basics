import React, { useState, useEffect } from 'react';

function Api() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products");
                const result = await response.json();
                setProducts(result.products);
            } catch (error) {
                console.log("Error occurred:", error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <p>ID: {product.id}</p>
                        <p>Title: {product.title}</p>
                        <p>Description: {product.description}</p>
                        <p>Price: {product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Api;
