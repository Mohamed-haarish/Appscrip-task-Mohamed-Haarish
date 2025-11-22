import React from 'react';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  onHover?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onHover }) => {
  const getInitials = (name: string): string => {
    const words = name.split(' ');
    if (words.length >= 2) {
      return `${words[0][0]}${words[1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  const handleMouseEnter = () => {
    if (onHover) {
      onHover(product);
    }
  };

  return (
    <div
      className="product-card"
      onMouseEnter={handleMouseEnter}
      role="article"
      aria-label={`Product: ${product.name}`}
    >
      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.imageAlt}
          className="product-image"
          loading="lazy"
        />
        {!product.inStock && (
          <div className="out-of-stock-badge">OUT OF STOCK</div>
        )}
        <div className="product-overlay">
          <div className="overlay-initials">{getInitials(product.name)}</div>
        </div>
      </div>
      <div className="product-name">
        <span>{product.name}</span>
        <svg
          className="favorite-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-label="Add to favorites"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </div>
    </div>
  );
};

export default ProductCard;

