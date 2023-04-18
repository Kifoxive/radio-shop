import React, { useState } from "react";
import styles from "../../styles";

import { CategoryCard } from "../../@components";
import { categories } from "./../../constants";
import Hero from "./Hero";
import { IProductCard } from "redux/products/types";
import { itemsApi } from "../../fakeApi/api";

import ProductCard, { CardItemSkeleton } from "../../@components/ProductCard";
import getRecentFromLS from "../../utils/getRecentFromLS";

const Home: React.FC = () => {
  const [recommendProducts, setRecommendProducts] = useState<IProductCard[]>();
  const [recentProducts, setRecentProducts] = useState<IProductCard[]>();

  const skeletons = [...new Array(4)].map((_, index) => (
    <CardItemSkeleton key={index} />
  ));

  React.useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await itemsApi.getRecommend();
        setRecommendProducts(data);
        setRecentProducts(getRecentFromLS());
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);

  return (
    <div className="p-6 w-full">
      <Hero />
      <h3 className={`${styles.heading3} text-black sm:text-start mb-4`}>
        Categories
      </h3>
      <div className="flex flex-wrap mb-20">
        {categories.map((item) => (
          <CategoryCard {...item} key={item.link} />
        ))}
      </div>
      <div className="mb-20">
        <h3 className={`${styles.heading3} text-black sm:text-start mb-4`}>
          Recommended
        </h3>
        <div className="flex flex-1 flex-wrap p-4">
          {!recommendProducts
            ? [...skeletons]
            : recommendProducts?.map((item) => (
                <ProductCard key={item.id} {...item} />
              ))}
        </div>
      </div>
      {recentProducts && (
        <div>
          <h3 className={`${styles.heading3} text-black sm:text-start mb-4`}>
            Recent
          </h3>
          <div className="flex flex-1 flex-wrap p-4">
            {recentProducts?.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
