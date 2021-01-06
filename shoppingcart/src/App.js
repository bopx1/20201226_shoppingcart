import "./App.css";
import Header from "./Components/Header";
import Checkout from "./Components/Checkout";
import Item from "./Components/Item";
import { useState } from "react";
import { getProducts } from "./Constants/Products";

function App() {
  let [products, setProducts] = useState(getProducts());
  let totalItems = 0;
  let subtotal = 0;
  let items = products.map((item) => {
    totalItems += item.quantity;
    subtotal += item.quantity * item.price;
    return (
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
  });
  // products.forEach((item) => {
  //   items.push(
  //     <Item
  //       key={item.name}
  //       id={item.id}
  //       src={item.src}
  //       name={item.name}
  //       description={item.description}
  //       price={item.price}
  //       quantity={item.quantity}
  //       onRemoveItem={onRemoveItem}
  //       onQuantityChanged={onQuantityChanged}
  //     />
  //   );
  //   totalItems += item.quantity;
  //   subtotal += item.quantity * item.price;
  // });

  function onRemoveItem(id) {
    products = products.filter((product) => {
      return product.id !== id;
    });
    setProducts(products);
  }

  function onQuantityChanged(id, newQuantity) {
    if (!newQuantity) {
      newQuantity = 0;
    }
    // let newProducts = [...products];
    // let productIndex = newProducts.findIndex((product) => {
    //   return product.id === id;
    // });
    // newProducts[productIndex].quantity = parseFloat(newQuantity);
    let newProducts = products.map((product) => {
      if (product.id === id) {
        let newProduct = {
          ...product,
          quantity: parseFloat(newQuantity),
        };
        return newProduct;
      }
      return product;
    });
    console.log(newProducts);
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
