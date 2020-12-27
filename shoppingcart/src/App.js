import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Checkout from "./Components/Checkout";
import Item from "./Components/Item";

function App() {
  var items = [];
  items.push(<Item src='/apple.jpg' name='Apple' description='Delicious apple' price='5.99' quantity='12'></Item>);
  items.push(<Item src='/milk.jpg' name='Milk' description='Description for milk' price='10.99' quantity='15'></Item>);
  return (
    <div>
      <Header></Header>
      <section className="container">
        <ul className="products">
          {items}
        </ul>
      </section>
      <Checkout></Checkout>
    </div>
  );
}

export default App;
