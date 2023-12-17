import { createContext, useContext, useEffect, useState } from "react";

const EcomerceContext = createContext();
const API = "https://fakestoreapi.com/products";

function EcomerceProvider({ children }) {
  const [search, setSearch] = useState("");

  const [Products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const searchedProducts =
    search.length > 0
      ? Products.filter((product) =>
          `${product.title} ${product.category} ${product.description} ${product.price}`
            .toLowerCase()
            .includes(search.toLowerCase())
        )
      : Products;

  const getProduct = async () => {
    await fetch(API)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const getCategories = async () => {
    await fetch(`${API}/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  };

  const getProductInCategory = async (catName) => {
    await fetch(`${API}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };

  useEffect(() => {
    getProduct();
    getCategories();
  }, []);

  return (
    <EcomerceContext.Provider
      value={{
        Products: searchedProducts,
        categories,
        search,
        setSearch,
        getProductInCategory,
      }}
    >
      {children}
    </EcomerceContext.Provider>
  );
}
function useEcomerce() {
  const context = useContext(EcomerceContext);
  if (context === undefined) throw new Error("invalid place");
  return context;
}

export { EcomerceProvider, useEcomerce };
