import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarSearch from "./components/NavbarSearch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./context/provider";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Gallery from "./components/Carousel";


function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <NavbarSearch />;
        <Gallery/>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/pizza/:id" element={<Home />} /> */}
          <Route path="/home" element={<Home />} />
          {/* <Route path="/carrito" element={<Home />} /> */}
          <Route path="/carrito" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </ContextProvider>
  );
}

export default App;
