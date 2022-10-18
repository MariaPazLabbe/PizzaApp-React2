import React, { createContext, useState, useEffect } from "react";

const DataContext = createContext();

const ContextProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const dataPizza = async () => {
      const response = await fetch("/pizzas.json");
      const data = await response.json();
      setPizzas(data);
    };

    dataPizza();
  }, []);

  const valueContextProvider = {
    pizzas,
    setPizzas,
    cart,
    setCart,
  };

  return (
    <DataContext.Provider value={valueContextProvider}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, ContextProvider };
