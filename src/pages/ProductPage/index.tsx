import React, { useState } from "react";
import styles from "../../styles";

import { useNavigate, useParams } from "react-router";
import { IProductCard } from "redux/products/types";
import { itemsApi } from "../../fakeApi/api";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";
import { back_arrow, loading } from "../../assets";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/cart/slice";
import { ICartItem } from "../../redux/cart/types";
import addRecentToLS from "../../utils/addRecentToLS";

const ProductPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [added, setAdded] = useState(false);
  const [data, setData] = useState<IProductCard>();
  const [selectedOptionIndex, setSelectedOptionIndex] =
    React.useState<number>(0);

  React.useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!id) return;
        const { data } = await itemsApi.getOne(id);
        setData(data[0]);
        addRecentToLS(data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);

  if (!data || !id)
    return (
      <div className="flex justify-center items-center">
        <img src={loading} alt="preloader" className="w-[100px] animate-spin" />
      </div>
    );

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(data.price);

  const onBuy = () => {
    onAddToCart();
    navigate("/cart");
  };

  const onAddToCart = () => {
    setAdded(true);
    dispatch(
      addToCart({
        product: data,
        selectedOption: data.options ? data.options[selectedOptionIndex] : null,
      } as ICartItem)
    );
  };

  return (
    <div className="flex flex-col w-full bg-white h-full">
      <div className="flex py-10 px-5">
        {/* <p className="w-0 h-0 border-t-[25px] border-solid border-t-transparent border-r-[50px] border-r-sky-400 border-b-[25px] border-b-transparent"></p> */}
        <button
          onClick={() => navigate(-1)}
          className={`${styles.cap1} flex items-center relative px-8 py-2 hover:shadow-lg border-solid border-2 border-sky-400 text-sky-400 uppercase hover:top-1`}
        >
          <img
            src={back_arrow}
            alt="back"
            className="inline-block h-[18px] mr-10 "
          />
          Back
        </button>
      </div>

      {!data || !id ? (
        <div className="flex justify-center items-center">
          <img
            src={loading}
            alt="preloader"
            className="w-[100px] animate-spin"
          />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row justify-between flex-1 p-2">
          <div className="flex-1 max-h-[400px] box-border p-10">
            <img
              className="h-full w-full object-contain bg-center"
              src={data.imageUrl}
              alt={data.title}
            />
          </div>
          <div className="flex-1 flex flex-col justify-between gap-8 p-4">
            <div className="flex flex-col gap-8">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <Rating
                    initialValue={data.rating}
                    allowFraction
                    iconsCount={5}
                    readonly={true}
                    size={25}
                    SVGstyle={{ display: "inline" }}
                  />
                  <span className={`${styles.cap1} text-yellow-500 ml-2`}>
                    {data.rating}
                  </span>
                </div>
                <p className={`${styles.cap1} text-sky-400 text-[2.2rem] ml-4`}>
                  {formattedPrice}
                </p>
              </div>
              <div>
                <h3 className={`${styles.cap1} font-medium mb-2`}>
                  {data.title}
                </h3>
                <p className={`${styles.paragraph} text-gray-400`}>
                  {data.description}
                </p>
              </div>
              <div>
                {data.optionName && data.options && (
                  <>
                    <p className={`${styles.smallText} uppercase mb-3`}>
                      {data.optionName}
                    </p>
                    <ul className="flex flex-wrap gap-4">
                      {data.options.map((item, index) => (
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
            </div>

            <div className="flex justify-between gap-8">
              <button
                onClick={onBuy}
                className={`${styles.smallText} relative flex-1 gap-4 p-3  text-white uppercase bg-sky-400 font-bold hover:top-1 hover:bg-sky-500 hover:shadow-md transition-all`}
              >
                Buy now
              </button>
              {added ? (
                <button
                  onClick={onAddToCart}
                  className={`${styles.smallText} relative flex-1 gap-4 p-3 text-[1.2rem] text-green-500 uppercase border-solid border-2 border-green-500 font-bold hover:bg-green-500 hover:shadow-md hover:text-white transition-all`}
                >
                  Added ✓
                </button>
              ) : (
                <button
                  onClick={onAddToCart}
                  className={`${styles.smallText} relative flex-1 gap-4 p-3 text-[1.2rem] text-sky-500 uppercase border-solid border-2 border-sky-500 font-bold hover:top-1 hover:bg-sky-500 hover:shadow-md hover:text-white transition-all`}
                >
                  Add to cart
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
