import BannerImageSlider from "@/components/BannerImageSlider/BannerImageSlider";
import ContentTiles from "@/components/ContentTiles/ContentTiles";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Review from "@/components/Review/Review";

export default function Home() {
    return (
        <>
            <BannerImageSlider />
            <ContentTiles />
            <Review />
            <Footer />
        </>
    );
}
