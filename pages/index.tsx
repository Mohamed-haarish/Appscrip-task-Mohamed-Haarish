import React, { useState } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FilterSidebar from '@/components/FilterSidebar';
import ProductGrid from '@/components/ProductGrid';
import { Product, FilterState, SortOption } from '@/types/product';

interface HomeProps {
  products: Product[];
}

const Home: React.FC<HomeProps> = ({ products }) => {
  const [filters, setFilters] = useState<FilterState>({
    customizable: false,
    dealFor: '',
    materials: [],
    colors: [],
    seasons: [],
    patterns: [],
    sizes: [],
    inStock: false,
  });
  const [sortOption, setSortOption] = useState<SortOption>('recommended');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Handle mobile filter toggle
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowMobileFilters(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Generate schema.org JSON-LD for products
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        image: product.image,
        offers: {
          '@type': 'Offer',
          price: product.price,
          priceCurrency: product.currency,
          availability: product.inStock
            ? 'https://schema.org/InStock'
            : 'https://schema.org/OutOfStock',
        },
      },
    })),
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LOGO',
    url: 'https://example.com',
    logo: 'https://example.com/logo.png',
  };

  return (
    <>
      <Head>
        <title>Discover Our Products - Premium Quality Items | LOGO</title>
        <meta
          name="description"
          content="Explore our curated collection of premium products. Find customizable items, seasonal collections, and exclusive deals. Free shipping on orders over $100."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Discover Our Products - Premium Quality Items" />
        <meta
          property="og:description"
          content="Explore our curated collection of premium products. Find customizable items, seasonal collections, and exclusive deals."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://example.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </Head>

      <div>
        <Header />
        
        <main>
          <section className="hero-section">
            <h1 className="hero-title">DISCOVER OUR PRODUCTS</h1>
            <p className="hero-description">
              Explore our carefully curated collection of premium products designed to meet your
              every need. From customizable items to seasonal collections, discover quality and
              style in every piece.
            </p>
          </section>

          <div className="main-content">
            <button
              className="mobile-filters-button"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
            >
              FILTERS
            </button>
            
            <div className={`mobile-filter-container ${showMobileFilters ? 'show' : ''}`}>
              <FilterSidebar filters={filters} onFilterChange={setFilters} />
            </div>
            
            <div className="filter-sidebar-desktop">
              <FilterSidebar filters={filters} onFilterChange={setFilters} />
            </div>

            <ProductGrid
              products={products}
              filters={filters}
              sortOption={sortOption}
              onSortChange={setSortOption}
            />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  // Simulate fetching products from an API or database
  // In a real application, this would be an actual API call
  const products: Product[] = [
    {
      id: '1',
      name: 'Premium Backpack Grey',
      image: 'https://via.placeholder.com/400x400/808080/FFFFFF?text=Backpack+Grey',
      imageAlt: 'Premium grey backpack with modern design and multiple compartments',
      price: 129.99,
      currency: 'USD',
      inStock: true,
      customizable: true,
      material: ['NYLON', 'LEATHER'],
      color: '#000000',
      season: ['SPRING', 'SUMMER', 'FALL'],
      pattern: ['SOLID'],
      size: ['M', 'L'],
      dealFor: 'men',
    },
    {
      id: '2',
      name: 'Classic Backpack Black',
      image: 'https://via.placeholder.com/400x400/000000/FFFFFF?text=Backpack+Black',
      imageAlt: 'Classic black backpack with durable construction',
      price: 119.99,
      currency: 'USD',
      inStock: true,
      customizable: false,
      material: ['LEATHER'],
      color: '#000000',
      season: ['FALL', 'WINTER'],
      pattern: ['SOLID'],
      size: ['M', 'L', 'XL'],
      dealFor: 'men',
    },
    {
      id: '3',
      name: 'Dinosaur Toy Yellow',
      image: 'https://via.placeholder.com/400x400/FFFF00/000000?text=Dinosaur+Toy',
      imageAlt: 'Yellow dinosaur toy for kids, soft and safe',
      price: 24.99,
      currency: 'USD',
      inStock: false,
      customizable: false,
      material: ['COTTON'],
      color: '#FFFF00',
      season: ['SPRING', 'SUMMER'],
      pattern: ['PRINTED'],
      size: ['S'],
      dealFor: 'kids',
    },
    {
      id: '4',
      name: 'Leather Keychain Strap',
      image: 'https://via.placeholder.com/400x400/8B4513/FFFFFF?text=Leather+Keychain',
      imageAlt: 'Premium leather keychain strap with metal hardware',
      price: 19.99,
      currency: 'USD',
      inStock: true,
      customizable: true,
      material: ['LEATHER'],
      color: '#8B4513',
      season: ['SPRING', 'SUMMER', 'FALL', 'WINTER'],
      pattern: ['SOLID'],
      size: ['S'],
      dealFor: 'men',
    },
    {
      id: '5',
      name: 'White Pouch Bag',
      image: 'https://via.placeholder.com/400x400/FFFFFF/000000?text=White+Pouch',
      imageAlt: 'Minimalist white pouch bag for everyday use',
      price: 34.99,
      currency: 'USD',
      inStock: true,
      customizable: false,
      material: ['COTTON'],
      color: '#FFFFFF',
      season: ['SPRING', 'SUMMER'],
      pattern: ['SOLID'],
      size: ['S', 'M'],
      dealFor: 'women',
    },
    {
      id: '6',
      name: 'Striped Pouch Bag',
      image: 'https://via.placeholder.com/400x400/0000FF/FFFFFF?text=Striped+Pouch',
      imageAlt: 'Stylish striped pouch bag with modern pattern',
      price: 39.99,
      currency: 'USD',
      inStock: true,
      customizable: false,
      material: ['COTTON'],
      color: '#0000FF',
      season: ['SPRING', 'SUMMER'],
      pattern: ['STRIPED'],
      size: ['S', 'M'],
      dealFor: 'women',
    },
    {
      id: '7',
      name: 'Blue Patterned Pouch',
      image: 'https://via.placeholder.com/400x400/4169E1/FFFFFF?text=Blue+Pattern',
      imageAlt: 'Blue patterned pouch with unique design',
      price: 44.99,
      currency: 'USD',
      inStock: true,
      customizable: true,
      material: ['COTTON'],
      color: '#0000FF',
      season: ['SPRING', 'SUMMER', 'FALL'],
      pattern: ['PRINTED'],
      size: ['M', 'L'],
      dealFor: 'women',
    },
    {
      id: '8',
      name: 'Woven Orange Bag',
      image: 'https://via.placeholder.com/400x400/FFA500/000000?text=Woven+Bag',
      imageAlt: 'Handwoven orange bag with natural materials',
      price: 59.99,
      currency: 'USD',
      inStock: true,
      customizable: false,
      material: ['WOOL', 'COTTON'],
      color: '#FFA500',
      season: ['SUMMER', 'FALL'],
      pattern: ['CHECKED'],
      size: ['M', 'L'],
      dealFor: 'women',
    },
    {
      id: '9',
      name: 'Travel Backpack Navy',
      image: 'https://via.placeholder.com/400x400/000080/FFFFFF?text=Travel+Backpack',
      imageAlt: 'Navy blue travel backpack with laptop compartment',
      price: 149.99,
      currency: 'USD',
      inStock: true,
      customizable: true,
      material: ['NYLON'],
      color: '#000080',
      season: ['SPRING', 'SUMMER', 'FALL', 'WINTER'],
      pattern: ['SOLID'],
      size: ['L', 'XL'],
      dealFor: 'men',
    },
  ];

  return {
    props: {
      products,
    },
  };
};

export default Home;

