import Navbar from "../components/Navbar";
import CategoryBar from "../components/CategoryBar"; // Import the category bar
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Main Application Header */}
      <Navbar />

      {/* 2. Sub-Header Category Navigation */}
      <CategoryBar />

      {/* 3. Main Dynamic Content Slots */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-8">
        {children}
      </main>

      {/* 4. Global Footer block */}
      <Footer />
    </div>
  );
}

export default MainLayout;