import { NumberFormat } from '../Utility/NumberHelper'

function Checkout({ subtotal }) {
  let tax = subtotal * 0.1;
  let total = subtotal + tax;
  return (
    <section className="container">
      <div className="promotion">
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input type="text" id="promo-code" /> <button type="button" />
      </div>
      <div className="summary">
        <ul>
          <li>
            Subtotal <span>{NumberFormat(subtotal)}</span>
          </li>
          <li>
            Tax <span>{NumberFormat(tax.toFixed(2))}</span>
          </li>
          <li className="total">
            Total <span>{NumberFormat(total.toFixed(2))}</span>
          </li>
        </ul>
      </div>
      <div className="checkout">
        <button type="button">Check Out</button>
      </div>
    </section>
  );
}
export default Checkout;
