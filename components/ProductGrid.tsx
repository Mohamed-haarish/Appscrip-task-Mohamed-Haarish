import React, { useState, useMemo } from 'react';
import { Product, FilterState, SortOption } from '@/types/product';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  filters: FilterState;
  sortOption: SortOption;
  onSortChange: (sort: SortOption) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  filters,
  sortOption,
  onSortChange,
}) => {
  const [hoveredProduct, setHoveredProduct] = useState<Product | null>(null);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      if (filters.customizable && !product.customizable) return false;
      if (filters.dealFor && product.dealFor !== filters.dealFor) return false;
      if (filters.materials.length > 0 && !filters.materials.some(m => product.material.includes(m))) return false;
      if (filters.colors.length > 0 && !filters.colors.includes(product.color)) return false;
      if (filters.seasons.length > 0 && !filters.seasons.some(s => product.season.includes(s))) return false;
      if (filters.patterns.length > 0 && !filters.patterns.some(p => product.pattern.includes(p))) return false;
      if (filters.sizes.length > 0 && !filters.sizes.some(s => product.size.includes(s))) return false;
      if (filters.inStock && !product.inStock) return false;
      return true;
    });

    const sorted = [...filtered].sort((a, b) => {
      switch (sortOption) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

    return sorted;
  }, [products, filters, sortOption]);

  return (
    <div className="product-grid-container">
      <div className="product-grid-header">
        <h2 className="filter-title" style={{ margin: 0 }}>
          {filteredAndSortedProducts.length} Products
        </h2>
        <select
          className="sort-select"
          value={sortOption}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          aria-label="Sort products"
        >
          <option value="recommended">RECOMMENDED</option>
          <option value="price-low">PRICE: LOW TO HIGH</option>
          <option value="price-high">PRICE: HIGH TO LOW</option>
          <option value="name-asc">NAME: A TO Z</option>
          <option value="name-desc">NAME: Z TO A</option>
        </select>
      </div>
      <div className="product-grid" role="list" aria-label="Product listing">
        {filteredAndSortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onHover={setHoveredProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;

