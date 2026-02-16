import Header from "./components/Header";
import ImageGallery from "./components/ImageGallery";
import hero from "./assets/hero.png";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* Hero Section */}
      <div className="flex justify-center mt-6 px-4">
        <div className="relative">
          <img
            src={hero}
            alt="hero"
            className="rounded-lg w-full max-w-xl"
          />
          
        </div>
      </div>

      <ImageGallery />
      <Footer />
    </div>
  );
}

export default App;