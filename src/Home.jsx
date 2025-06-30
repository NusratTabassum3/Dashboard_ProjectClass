import HeroSection from "./frontend/home/HeroSection";
import BookBuy from "./frontend/home/BookBuy";
import BookDtails from "./frontend/home/BookDtails";
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
