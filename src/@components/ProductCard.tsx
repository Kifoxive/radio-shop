import React from "react";
import styles from "../styles";

import ContentLoader from "react-content-loader";
import { IProductCard } from "redux/products/types";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/cart/slice";
import { ICartItem } from "../redux/cart/types";

const ProductCard: React.FC<IProductCard> = ({
  title,
  description,
  price,
  rating,
  imageUrl,
  optionName,
  options,
  type,
  componentName,
  id,
}) => {
  const [selectedOptionIndex, setSelectedOptionIndex] =
    React.useState<number>(0);
  const navigator = useNavigate();
  const dispatch = useAppDispatch();

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  const onBuy = () => {
    onAddToCart();
    navigator("/cart");
  };

  const onAddToCart = () => {
    dispatch(
      addToCart({
        product: {
          title,
          description,
          price,
          rating,
          imageUrl,
          optionName,
          options,
          type,
          componentName,
          id,
        },
        selectedOption: options ? options[selectedOptionIndex] : null,
      } as ICartItem)
    );
  };

  return (
    <div className="basis-[700px] box-border m-[1rem] flex flex-col md:in2row lg:in3row xl:in4row bg-white shadow-md justify-between">
      <div
        className="box-border h-[200px] p-4 cursor-pointer"
        onClick={() => navigator(`/components/${id}`)}
      >
        <img
          className="h-full w-full object-contain bg-center"
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className="flex flex-col gap-8 p-8 pt-0">
        <div className="flex justify-between">
          <div>
            <h4 className={`${styles.cap1} mb-2`}>{title}</h4>
            <p className={`${styles.paragraph} text-gray-400`}>{description}</p>
          </div>
          <p className={`${styles.cap1} text-sky-400 ml-2`}>{formattedPrice}</p>
        </div>
        <div>
          {optionName && options && (
            <>
              <p className={`${styles.smallText} uppercase mb-3`}>
                {optionName}
              </p>
              <ul className="flex flex-wrap gap-4">
                {options.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setSelectedOptionIndex(index)}
                      className={`${
                        index === selectedOptionIndex
                          ? "border-sky-500"
                          : "border-transparent"
                      } ${
                        styles.paragraph
                      } p-2 border-2 border-solid bg-gray-300`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        <div className="flex justify-between gap-8">
          <button
            onClick={onBuy}
            className={`${styles.smallText} relative flex-1 gap-4 p-3  text-white uppercase bg-sky-400 font-bold hover:top-1 hover:bg-sky-500 hover:shadow-md transition-all`}
          >
            Buy now
          </button>
          <button
            onClick={onAddToCart}
            className={`${styles.smallText} relative flex-1 gap-4 p-3 text-[1.2rem] text-sky-500 uppercase border-solid border-2 border-sky-500 font-bold hover:top-1 hover:bg-sky-500 hover:shadow-md hover:text-white transition-all`}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export const CardItemSkeleton = () => (
  <ContentLoader
    speed={2}
    width={300}
    height={400}
    viewBox="0 0 300 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#a2a2a2"
    className="basis-[700px] flex-1 box-border m-[1rem] sm:in2row lg:in3row xl:in4row"
  >
    {/* image */}
    <rect x="10" y="10" rx="10" ry="10" width="280" height="160" />
    {/* title */}
    <rect x="10" y="190" rx="5" ry="5" width="150" height="20" />
    {/* price */}
    <rect x="250" y="190" rx="5" ry="5" width="40" height="20" />
    {/* description */}
    <rect x="10" y="230" rx="0" ry="0" width="198" height="100" />
    {/* left button */}
    <rect x="10" y="350" rx="5" ry="5" width="130" height="35" />
    {/* right button */}
    <rect x="160" y="350" rx="5" ry="5" width="130" height="35" />
  </ContentLoader>
);

export default ProductCard;
