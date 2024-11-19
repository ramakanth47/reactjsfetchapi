import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ProductCard.css"; // Custom styles for the card

const ProductCard = ({ product }) => {
  return (
    <Card className="product-card shadow-lg mb-4">
      <Card.Img variant="top" src={product.thumbnail} alt={product.title} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <p className="price">${product.price}</p>
          <p className="rating">{product.rating} ⭐</p>
        </div>
        <Link to={`/product/${product.id}`}>
          <Button variant="primary" className="w-100">
            View Details
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
