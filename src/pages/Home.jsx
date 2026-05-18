import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';

function Home() {
  return (
    <div className="space-y-8">
      {/* 1. Promo / Branding Hero Section */}
      <Hero />

      {/* 2. Main Catalog Product Feed Display */}
      <ProductGrid />
    </div>
  );
}

export default Home;