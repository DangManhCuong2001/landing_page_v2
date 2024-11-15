import Image from 'next/image';
import Container from 'src/common/Container/Container';
import AssetFlow from 'src/views/AssetFlow/AssetFlow';
import Banner from 'src/views/Banner/Banner';
import BannerOCHToken from 'src/views/BannerOCHToken/BannerOCHToken';
import Blog from 'src/views/Blog/Blog';
import Community from 'src/views/Community/Community';
import ContactUs from 'src/views/ContactUs/ContactUs';
import Ecosystem from 'src/views/Ecosystem/Ecosystem';
import Footer from 'src/views/Footer/Footer';
import NetworksAndTokens from 'src/views/NetworksAndTokens/NetworksAndTokens';
import Views from 'src/views/Views';

export default function Home() {
    return (
        <main>
            <Banner />
            <Views />
            <ContactUs />
            <Footer />
        </main>
    );
}
