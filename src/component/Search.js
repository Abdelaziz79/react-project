import { useEcomerce } from "../context/EcomerceContext";

function Search() {
  const { search, setSearch } = useEcomerce();

  return (
    <input
      type="text"
      value={search}
      className="form-control"
      placeholder="Search for products"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default Search;
