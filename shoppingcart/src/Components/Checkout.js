import { useState } from "react";
import { getPromotions } from "../Constants/Promotions";
import { NumberFormat } from "../Utility/NumberHelper";

function Checkout({ subtotal }) {
  const [inputPromotion, setInputPromotion] = useState("");
  let defaultPromotion = getPromotions().find((p) => p.code === "default");
  const [appliedPromotion, setAppliedPromotion] = useState(defaultPromotion);
  const baseDiscountText = "Discount";
  const [discountText, setDiscountText] = useState(baseDiscountText);
  let tax = subtotal * 0.1;
  let total = subtotal + tax;
  let discount = (total * appliedPromotion.amount) / 100;
  total = total - discount;
  const applyPromotion = () => {
    let validPromotion = getPromotions().find((p) => p.code === inputPromotion);
    if (validPromotion) {
      setDiscountText(baseDiscountText + "(" + validPromotion.amount + "%)");
      setAppliedPromotion(validPromotion);
    } else {
      setDiscountText(baseDiscountText);
      setAppliedPromotion(defaultPromotion);
    }
  };
  return (
    <section className="container">
      <div className="promotion">
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input
          type="text"
          value={inputPromotion}
          onChange={(event) => setInputPromotion(event.target.value)}
          id="promo-code"
        />{" "}
        <button type="button" onClick={applyPromotion} />
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
            {discountText} <span>{NumberFormat(discount.toFixed(2))}</span>
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
