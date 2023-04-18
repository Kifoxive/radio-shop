import React, { useState } from "react";
import styles from "../../styles";

import {
  getCartItems,
  getTotalPrice,
  getTotalProductsCount,
} from "../../redux/cart/selectors";
import { useAppSelector } from "../../redux/hooks";
import { CartItem, Dropdown } from "../../@components";
import { Link } from "react-router-dom";
import { empty_cart } from "../../assets";
import { useMediaQuery } from "../../utils";

const Cart: React.FC = () => {
  const items = useAppSelector(getCartItems);
  const totalProductCount = useAppSelector(getTotalProductsCount);
  const totalPrice = useAppSelector(getTotalPrice);
  const [shippingCost, setShippingCost] = useState(0);
  const [discount, setDiscount] = useState(1);
  const [codeValue, setCodeValue] = useState("");

  const formattedTotalPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(totalPrice);

  const shippingOptions = [
    { text: "Standard delivery - $5.00", value: 5 },
    { text: "Free 15-day delivery", value: 0 },
    { text: "Quick delivery services - $12.00", value: 12 },
  ];

  const onValueChange = (property: string, value: number) => {
    setShippingCost(value);
  };

  const formattedTotalCost = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(shippingCost + totalPrice * discount);

  const applyCode = () => {
    codeValue ? setDiscount(0.8) : setDiscount(1);
  };
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <div className="flex flex-row w-full">
      {items.length === 0 ? (
        <div className="flex-1 flex flex-col justify-around items-center p-10 pt-0">
          <div>
            <h3 className={`${styles.heading3} p-8 text-black text-center`}>
              Your cart is empty
            </h3>
            <p className={`${styles.paragraph} text-center text-gray-500`}>
              There is nothing in your cart. Head to the home page to add items
            </p>
          </div>

          <img src={empty_cart} alt="empty bag" className="w-[400px]" />
          <Link
            to="/"
            className={`${styles.cap1} relative py-4 px-8 uppercase bg-sky-300 text-white hover:top-1 hover:bg-sky-400`}
          >
            Go to home page
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row w-full">
          <div className="basis-4/6">
            <h3
              className={`${styles.heading3} text-black sm:text-start mb-4 p-8`}
            >
              Shopping cart
            </h3>
            <div>
              <div className="flex flex-row w-full">
                <div className="w-full">
                  {matches && (
                    <div
                      className={`${styles.paragraph} flex uppercase text-gray-500 px-8`}
                    >
                      <p className="basis-6/12 text-center">product details</p>
                      <p className="basis-2/12 text-center">quantity</p>
                      <p className="basis-2/12 text-center">price</p>
                      <p className="basis-2/12 text-center">total</p>
                    </div>
                  )}

                  <div className="flex flex-col gap-4 p-4 md:p-8">
                    {items.map((item) => (
                      <CartItem
                        {...item}
                        key={item.product.id + item.selectedOption}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="basis-2/6 bg-gray-200">
            <h3 className={`${styles.heading3} text-black sm:text-start p-8`}>
              Order summary
            </h3>
            <div className="flex flex-col gap-12 p-10">
              <div className="flex justify-between">
                <p className={`${styles.paragraph} font-medium uppercase`}>
                  Items: {totalProductCount}
                </p>
                <p className={`${styles.paragraph} font-medium`}>
                  {formattedTotalPrice}
                </p>
              </div>
              <div className="max-w-[400px]">
                <p className={`${styles.paragraph} font-medium uppercase mb-4`}>
                  Shipping
                </p>
                <Dropdown
                  property="shipping"
                  options={shippingOptions}
                  onValueChange={onValueChange}
                />
              </div>
              <div className="max-w-[400px]">
                <p className={`${styles.paragraph} font-medium uppercase mb-4`}>
                  Promo code
                </p>
                <input
                  onChange={({ target }) => setCodeValue(target.value)}
                  value={codeValue}
                  type="text"
                  className={`${styles.paragraph} w-full p-5 placeholder:text-black border-2 border-solid border-transparent focus:border-blue-400`}
                  placeholder="Enter your code"
                />
              </div>
              <div>
                <button
                  onClick={applyCode}
                  className={`${styles.smallText} bg-red-400 px-8 py-4 uppercase font-bold text-white relative hover:top-1 hover:bg-red-500 hover:shadow-lg`}
                >
                  Apply
                </button>
              </div>
              <div className="flex justify-between pt-10 border-gray-300 border-solid border-t-2">
                <p className={`${styles.paragraph} font-medium uppercase`}>
                  Total cost
                </p>
                <p className={`${styles.paragraph} font-medium`}>
                  {formattedTotalCost}
                </p>
              </div>
              <button
                className={`${styles.smallText} bg-blue-400 px-8 py-4 uppercase font-bold text-white relative hover:top-1 hover:bg-blue-500 hover:shadow-lg`}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
