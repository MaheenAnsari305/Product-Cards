import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card" style={styles.card}>
      <img
        src={product.image}
        alt={product.title}
        style={styles.image}
      />
      <div style={styles.content}>
        <h2 style={styles.title}>{product.title}</h2>
        <p style={styles.description}>{product.description}</p>
        <p style={styles.price}>${product.price}</p>
        <div style={styles.rating}>
          <span>Rating: {product.rating.rate}</span> | 
          <span>({product.rating.count} reviews)</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    width: "250px",
    margin: "20px",
    padding: "10px",
    display: "inline-block",
    verticalAlign: "top",
    textAlign: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  content: {
    padding: "10px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  description: {
    fontSize: "14px",
    color: "#555",
    margin: "10px 0",
  },
  price: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#2a9d8f",
  },
  rating: {
    fontSize: "14px",
    color: "#333",
  },
};

export default ProductCard;
