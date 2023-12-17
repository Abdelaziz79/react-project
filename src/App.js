import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./component/navbar";
import ProductsList from "./component/ProductsList";
import ProductDETAILS from "./component/ProductDETAILS";
import About from "./component/About";
import Slider from "./component/slider";
import { Routes, Route } from "react-router";
import { EcomerceProvider } from "./context/EcomerceContext.js";

function App() {
  return (
    <div className="App">
      <EcomerceProvider>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Slider />
                <ProductsList />
              </>
            }
          />
          <Route path="about" element={<About />} />
          <Route path="products/:productid" element={<ProductDETAILS />} />
        </Routes>
      </EcomerceProvider>
    </div>
  );
}

export default App;
