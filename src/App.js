import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import "./App.css"; // Global custom styles

const App = () => {
  return (
    <Router>
      {/* Main content container */}
      <Container className="main-content">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
