import React from "react";
import styles from "../styles";

import { useMediaQuery } from "../utils";
import { Link } from "react-router-dom";
import { ICartItem } from "redux/cart/types";
import { useAppDispatch } from "../redux/hooks";
import { close } from "../assets";
import {
  addToCart,
  minusItem,
  removeItem,
  setItemQuantity,
} from "../redux/cart/slice";

const CartItem: React.FC<ICartItem> = ({ product, selectedOption, count }) => {
  const dispatch = useAppDispatch();

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  const formattedTotalPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price * count);

  const onIncreaseItem = () =>
    dispatch(
      addToCart({
        product,
        selectedOption,
      } as ICartItem)
    );

  const onDecreaseItem = () =>
    dispatch(
      minusItem({
        product,
        selectedOption,
      } as ICartItem)
    );

  const onRemoveItem = () => {
    dispatch(
      removeItem({
        product,
        selectedOption,
      } as ICartItem)
    );
  };

  const onSetItemQuantity = (count: number) => {
    dispatch(
      setItemQuantity({
        product,
        selectedOption,
        count,
      })
    );
  };
  const matches = useMediaQuery("(min-width: 768px)");
  return (
    <>
      {matches ? (
        <div className="flex items-center bg-white w-full relative min-h-[120px]">
          <Link to={`/components/${product.id}`} className="basis-6/12 flex">
            <div className="flex-1 p-4">
              <img
                src={product.imageUrl}
                alt={product.componentName}
                className="max-h-[100px]"
              />
            </div>
            <div className="flex-1 p-6">
              <h3 className={`${styles.cap1} mb-2`}>{product.title}</h3>
              <p className={`${styles.paragraph} text-gray-400`}>
                {selectedOption}
              </p>
            </div>
          </Link>
          <div className="basis-2/12 flex justify-center items-center">
            <button
              onClick={onIncreaseItem}
              className={`${styles.paragraph} mr-1 px-4 font-bold hover:bg-gray-200`}
            >
              +
            </button>
            <div className="border-gray-300 border-2 border-solid">
              <input
                title="quantity"
                type="text"
                value={count}
                onChange={({ target }) => onSetItemQuantity(+target.value)}
                className={`${styles.paragraph}  w-[30px] text-center`}
              />
            </div>
            <button
              onClick={onDecreaseItem}
              className={`${styles.paragraph} ml-1 px-4 font-bold hover:bg-gray-200`}
            >
              –
            </button>
          </div>
          <div className="basis-2/12">
            <p className={`${styles.cap1} text-sky-400 text-center`}>
              {formattedPrice}
            </p>
          </div>
          <div className="basis-2/12">
            <p className={`${styles.cap1} text-sky-400 text-center`}>
              {formattedTotalPrice}
            </p>
          </div>
          <div className="h-full p-2 absolute top-0 right-0">
            <button onClick={onRemoveItem} className="hover:bg-gray-200 p-4">
              <img src={close} alt="close" className="h-[20px] w-[20px]" />
            </button>
          </div>
        </div>
      ) : (
        <div className="items-center flex w-full bg-white min-h-[100px] p-4">
          {/* image */}
          <div className="basis-1/2 px-4">
            <img src={product.imageUrl} alt={product.componentName} />
          </div>
          {/* content */}
          <div className="basis-1/2 ml-2">
            {/* content - text */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className={`${styles.cap1} mb-2`}>{product.title}</h3>
                <p className={`${styles.paragraph} text-gray-400`}>
                  {selectedOption}
                </p>
              </div>
              <div>
                <button onClick={onRemoveItem} className="hover:opacity-20">
                  <img src={close} alt="close" className="h-[20px] w-[20px]" />
                </button>
              </div>
            </div>
            {/* content - options */}
            <div className="flex items-center flex-wrap gap-2 max-w-[300px]">
              <div className="flex justify-between w-full">
                <p className={`${styles.smallText} uppercase text-gray-500`}>
                  Price
                </p>
                <p className={`${styles.paragraph} text-sky-400 text-center`}>
                  {formattedPrice}
                </p>
              </div>

              <div className="flex justify-between w-full mt-2">
                <span className={`${styles.smallText} uppercase text-gray-500`}>
                  Total
                </span>
                <span
                  className={`${styles.paragraph} text-sky-400 text-center`}
                >
                  {formattedTotalPrice}
                </span>
              </div>

              <div className="flex justify-between w-full items-center">
                <label
                  htmlFor="quantity"
                  className={`${styles.smallText} uppercase text-gray-500`}
                >
                  Quantity
                </label>

                <div className="flex items-center">
                  <button
                    onClick={onIncreaseItem}
                    className={`${styles.cap1} px-4 py-2 font-bold`}
                  >
                    +
                  </button>
                  <div className="border-gray-300 border-2 border-solid ">
                    <input
                      id="quantity"
                      type="text"
                      value={count}
                      onChange={({ target }) =>
                        onSetItemQuantity(+target.value)
                      }
                      className={`${styles.paragraph}  w-[30px] text-center`}
                    />
                  </div>
                  <button
                    onClick={onDecreaseItem}
                    className={`${styles.cap1} px-4 py-2 font-bold`}
                  >
                    –
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartItem;
