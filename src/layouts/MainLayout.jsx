import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Global Navbar at the top */}
      <Navbar />

      {/* 2. Dynamic content wrapper in the middle */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-8">
        {children}
      </main>

      {/* 3. Global Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default MainLayout;