import { Button, Col, Container, Row } from "react-bootstrap";
import Product from "./product";
import Loading from "./Loading";
import { useEcomerce } from "../context/EcomerceContext";

function ProductsList() {
  const { categories, getProductInCategory, Products } = useEcomerce();
  console.log(categories, Products);

  return (
    <>
      <h2 className="text-center display-5 m-5">Our Products</h2>
      {categories.length > 0 ? (
        <Container>
          {categories.length &&
            categories.map((cat) => (
              <Button
                key={cat}
                onClick={() => getProductInCategory(cat)}
                className="btn-success mx-2"
              >
                {cat}
              </Button>
            ))}
          <Row>
            {Product.length > 0 &&
              Products.map((product) => {
                return (
                  <Col className="col-3" key={product.id}>
                    <Product product={product} />
                  </Col>
                );
              })}
          </Row>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default ProductsList;
