import { createContext, useContext, useEffect, useReducer } from "react";

const EcomerceContext = createContext();
const API = "https://fakestoreapi.com/products";

const initialState = {
  search: "",
  Products: [],
  categories: [],
};

function reduce(state, action) {
  switch (action.type) {
    case "setProducts":
      return { ...state, Products: action.payload };

    case "setCategories":
      return { ...state, categories: action.payload };

    case "setSearch":
      return { ...state, search: action.payload };

    default:
      throw new Error("invalid action");
  }
}

function EcomerceProvider({ children }) {
  const [{ search, Products, categories }, dispatch] = useReducer(
    reduce,
    initialState
  );
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
      .then((data) => dispatch({ type: "setProducts", payload: data }));
  };

  const getCategories = async () => {
    await fetch(`${API}/categories`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "setCategories", payload: data });
      });
  };

  const getProductInCategory = async (catName) => {
    await fetch(`${API}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "setProducts", payload: data });
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
        dispatch,
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
