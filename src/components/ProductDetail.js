import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../services/api";
import { Spinner, Alert, Button, Row, Col, Card } from "react-bootstrap";
import "./ProductDetail.css"; // Custom styles for the product detail

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const productData = await fetchProductDetails(id);
        setProduct(productData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    getProductDetails();
  }, [id]);

  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }

  if (error) {
    return <Alert variant="danger">Error: {error}</Alert>;
  }

  const {
    title,
    description,
    category,
    price,
    stock,
    brand,
    dimensions,
    image,
  } = product;
  const { width, height, depth } = dimensions || {};

  return (
    <Row className="mt-4">
      <Col md={6}>
        <Card className="product-detail-card">
          <Card.Img variant="top" src={image} alt={title} />
        </Card>
      </Col>
      <Col md={6}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>
          <strong>Category:</strong> {category}
        </p>
        <p>
          <strong>Brand:</strong> {brand}
        </p>
        <p>
          <strong>Price:</strong> ${price}
        </p>
        <p>
          <strong>Stock:</strong> {stock} available
        </p>

        {dimensions && (
          <div className="product-dimensions">
            <h5>Dimensions:</h5>
            <p>Width: {width} cm</p>
            <p>Height: {height} cm</p>
            <p>Depth: {depth} cm</p>
          </div>
        )}

        <Button variant="primary" className="mt-3 w-100">
          Add to Cart
        </Button>
      </Col>
    </Row>
  );
};

export default ProductDetail;
