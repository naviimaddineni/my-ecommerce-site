import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>My E-commerce Store</h1>
      </header>

      <nav>
        <a href="#home">Home</a>
        <a href="#shop">Shop</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="container">
        <Product 
          imgSrc="https://via.placeholder.com/300" 
          name="Product Name" 
          price="$49.99" 
        />
        <Product 
          imgSrc="https://via.placeholder.com/300" 
          name="Another Product" 
          price="$59.99" 
        />
        <Product 
          imgSrc="https://via.placeholder.com/300" 
          name="Third Product" 
          price="$39.99" 
        />
      </div>

      <footer>
        <p>&copy; 2024 My E-commerce Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

function Product({ imgSrc, name, price }) {
  return (
    <div className="product">
      <img src={imgSrc} alt={name} />
      <h2>{name}</h2>
      <p>{price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default App;