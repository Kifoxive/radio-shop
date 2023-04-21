import React, { useEffect, useState } from "react";
import styles from "../styles";

import { menuLinks } from "../constants";
import { Link, useLocation } from "react-router-dom";

import { cart, close, menu, processor } from "../assets";
import { useAppSelector } from "../redux/hooks";
import { getCartItems, getTotalProductsCount } from "../redux/cart/selectors";

const Navigation: React.FC = () => {
  const { pathname } = useLocation();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const totalProductsCount = useAppSelector(getTotalProductsCount);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const items = useAppSelector(getCartItems);

  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem("cart", json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <nav className="sticky w-full top-0 right-0 z-50">
      {/* top part */}
      <div className="flex w-full justify-between items-center bg-[#2b2b2b]">
        <div className="p-4">
          <Link to="/" className="flex items-center">
            <img src={processor} alt="logo" className="max-w-[30px]" />
            <h3 className="text-[1.8rem] text-white ml-4 font-electro">
              Radio shop
            </h3>
          </Link>
        </div>

        <div className="flex  items-center">
          <div className="p-4 mr-4 md:mr-8">
            <Link to={"/cart"} className="bg-red-300">
              <p
                className="h-[25px] w-[25px]"
                style={{
                  background: `url(${cart}) 100% center / contain no-repeat`,
                }}
              >
                {totalProductsCount > 0 && (
                  <span className="relative -bottom-3 -right-7 block bg-red-400 text-black rounded-full p-2 text-[1.4rem] text-center font-bold">
                    {totalProductsCount}
                  </span>
                )}
              </p>
            </Link>
          </div>
          <div className="flex md:hidden p-4">
            <button
              title="menu"
              onClick={() => setShowMenu(true)}
              style={{
                background: `url(${menu}) center 100% / contain no-repeat`,
              }}
              className="h-[30px] w-[30px]"
            />
            <div
              className={`${
                showMenu ? "flex" : "hidden"
              } absolute flex-col items-end left-0 right-0 gap-3 bg-[#2b2b2b] shadow-lg`}
            >
              <div className="px-4">
                <button
                  title="close"
                  onClick={() => setShowMenu(false)}
                  style={{
                    background: `url(${close}) center 100% / contain no-repeat`,
                  }}
                  className="h-[30px] w-[30px]"
                />
              </div>
              <ul className="flex flex-col w-full">
                {menuLinks.map((item, index) => (
                  <li
                    className="flex"
                    key={index}
                    onClick={() => setShowMenu(false)}
                  >
                    <Link
                      className={`${styles.paragraph} ${
                        pathname === `${item.link}` && "bg-gray-500"
                      } w-full px-12 py-8 uppercase hover:bg-gray-700 text-white`}
                      to={item.link}
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* bottom part */}
      <div className="hidden md:flex justify-between p-2 bg-white">
        <ul
          className="flex gap-2
        "
        >
          {menuLinks.map((item, index) => (
            <li className="flex" key={index}>
              <Link
                className={`${styles.paragraph} ${
                  pathname === `${item.link}` && "bg-sky-400 text-black"
                } px-8 py-4 uppercase hover:bg-sky-300 hover:text-white transition-colors`}
                to={item.link}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
