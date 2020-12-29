import "./App.css";
import Header from "./Components/Header";
import Checkout from "./Components/Checkout";
import Item from "./Components/Item";
import { useState } from "react";

let PRODUCTS = [
  {
    id: 1,
    src: "/apple.jpg",
    name: "Apple",
    description: "Delicious apple",
    price: 150000,
    quantity: 12,
  },
  {
    id: 2,
    src: "/milk.jpg",
    name: "Milk",
    description: "Delicious milk",
    price: 200000,
    quantity: 15,
  },
];

function App() {
  let [products, setProducts] = useState(PRODUCTS);
  var items = [];
  let totalItems = 0;
  let subtotal = 0;
  products.forEach((item) => {
    items.push(
      <Item
        key={item.name}
        id={item.id}
        src={item.src}
        name={item.name}
        description={item.description}
        price={item.price}
        quantity={item.quantity}
        onRemoveItem={onRemoveItem}
        onQuantityChanged={onQuantityChanged}
      />
    );
    totalItems += item.quantity;
    subtotal += item.quantity * item.price;
  });

  function onRemoveItem(id) {
    products = products.filter(product => {
      return product.id !== id;
    });
    console.log(products);
    setProducts(products);
  }

  function onQuantityChanged(id, newQuantity){
    let newProducts = [...products];
    let productIndex = newProducts.findIndex((product) => {
      return product.id === id;
    });
    newProducts[productIndex].quantity = newQuantity;
    setProducts(newProducts);
  }

  return (
    <div>
      <Header totalItems={totalItems}></Header>
      <section className="container">
        <ul className="products">{items}</ul>
      </section>
      <Checkout subtotal={subtotal}></Checkout>
    </div>
  );
}

export default App;
