import { useEcomerce } from "../context/EcomerceContext";

function Search() {
  const { search, dispatch } = useEcomerce();

  return (
    <input
      type="text"
      value={search}
      className="form-control"
      placeholder="Search for products"
      onChange={(e) => {
        dispatch({ type: "setSearch", payload: e.target.value });
      }}
    />
  );
}

export default Search;
