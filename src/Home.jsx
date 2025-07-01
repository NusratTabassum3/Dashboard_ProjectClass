import HeroSection from "./components/frontend/home/HeroSection";
import BookBuy from "./components/frontend/home/BookBuy";
import BookDtails from "./components/frontend/home/BookDtails";
function Home() {
  return (
    <div className="font-bona">
      <HeroSection />
      <BookDtails />
      <BookBuy />
    </div>
  );
}

export default Home;
