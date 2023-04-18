import React from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import CookieBanner from "react-cookie-banner";

import {
  Home,
  About,
  Career,
  Contact,
  Categories,
  ProductPage,
  Cart,
} from "./pages";
import { Footer, Navigation } from "./@components";

const App: React.FC = () => {
  return (
    <div className="App flex justify-center w-full">
      <div className="flex flex-col items-center w-full min-h-[100vh] bg-sky-300">
        <Navigation />
        <main className="flex-1 w-full flex justify-center max-w-[1300px] md:my-10 bg-[#f5f5f5]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/c/*" element={<Categories />} />
            <Route path="/components/:id" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <div className="fixed bottom-0 w-full">
        <CookieBanner
          message="This website uses cookies in order to offer you the most relevant information. Please accept cookies for optimal performance"
          // onAccept={() => {}}
          cookie="user-has-accepted-cookies"
          buttonMessage="Yes, I accept cookies"
          dismissOnScroll={false}
          className="bg-sky-500"
          styles={{
            banner: { backgroundColor: "rgb(12, 74, 110)" },
            message: { fontWeight: 400 },
          }}
        />
      </div>
    </div>
  );
};

export default App;
