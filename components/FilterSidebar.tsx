import React from 'react';
import { FilterState } from '@/types/product';

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, onFilterChange }) => {
  const handleCheckboxChange = (key: keyof FilterState, value: string | boolean) => {
    const newFilters = { ...filters };
    
    if (key === 'customizable' || key === 'inStock') {
      newFilters[key] = value as boolean;
    } else if (Array.isArray(newFilters[key])) {
      const array = newFilters[key] as string[];
      const index = array.indexOf(value as string);
      if (index > -1) {
        array.splice(index, 1);
      } else {
        array.push(value as string);
      }
    }
    
    onFilterChange(newFilters);
  };

  const handleSelectChange = (value: string) => {
    const newFilters = { ...filters };
    newFilters.dealFor = value;
    onFilterChange(newFilters);
  };

  const handleColorSelect = (color: string) => {
    const newFilters = { ...filters };
    const index = newFilters.colors.indexOf(color);
    if (index > -1) {
      newFilters.colors.splice(index, 1);
    } else {
      newFilters.colors.push(color);
    }
    onFilterChange(newFilters);
  };

  const colors = ['#000000', '#FFFFFF', '#FF0000', '#0000FF', '#FFFF00', '#FFA500', '#800080'];

  return (
    <aside className="filter-sidebar" role="complementary" aria-label="Product filters">
      <div className="filter-section">
        <h2 className="filter-title">ALL ITEMS</h2>
      </div>

      <div className="filter-section">
        <div className="filter-group">
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="customizable"
              checked={filters.customizable}
              onChange={(e) => handleCheckboxChange('customizable', e.target.checked)}
            />
            <label htmlFor="customizable">CUSTOMIZABLE</label>
          </div>
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-title">DEAL FOR</h3>
        <div className="select-group">
          <select
            value={filters.dealFor}
            onChange={(e) => handleSelectChange(e.target.value)}
            aria-label="Deal for filter"
          >
            <option value="">All</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
          </select>
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-title">MATERIAL</h3>
        <div className="filter-group">
          {['LEATHER', 'COTTON', 'WOOL', 'NYLON'].map((material) => (
            <div key={material} className="checkbox-group">
              <input
                type="checkbox"
                id={`material-${material}`}
                checked={filters.materials.includes(material)}
                onChange={() => handleCheckboxChange('materials', material)}
              />
              <label htmlFor={`material-${material}`}>{material}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-title">COLOR</h3>
        <div className="color-swatches">
          {colors.map((color) => (
            <button
              key={color}
              className={`color-swatch ${filters.colors.includes(color) ? 'selected' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorSelect(color)}
              aria-label={`Select color ${color}`}
            />
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-title">SEASON</h3>
        <div className="filter-group">
          {['SPRING', 'SUMMER', 'FALL', 'WINTER'].map((season) => (
            <div key={season} className="checkbox-group">
              <input
                type="checkbox"
                id={`season-${season}`}
                checked={filters.seasons.includes(season)}
                onChange={() => handleCheckboxChange('seasons', season)}
              />
              <label htmlFor={`season-${season}`}>{season}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-title">PATTERN</h3>
        <div className="filter-group">
          {['SOLID', 'STRIPED', 'CHECKED', 'PRINTED'].map((pattern) => (
            <div key={pattern} className="checkbox-group">
              <input
                type="checkbox"
                id={`pattern-${pattern}`}
                checked={filters.patterns.includes(pattern)}
                onChange={() => handleCheckboxChange('patterns', pattern)}
              />
              <label htmlFor={`pattern-${pattern}`}>{pattern}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-title">SIZE</h3>
        <div className="filter-group">
          {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
            <div key={size} className="checkbox-group">
              <input
                type="checkbox"
                id={`size-${size}`}
                checked={filters.sizes.includes(size)}
                onChange={() => handleCheckboxChange('sizes', size)}
              />
              <label htmlFor={`size-${size}`}>{size}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-group">
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="inStock"
              checked={filters.inStock}
              onChange={(e) => handleCheckboxChange('inStock', e.target.checked)}
            />
            <label htmlFor="inStock">IN STOCK</label>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;

