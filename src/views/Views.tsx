import React from 'react';
import Container from 'src/common/Container/Container';
import Ecosystem from './Ecosystem/Ecosystem';
import AssetFlow from './AssetFlow/AssetFlow';
import SubBanner from './SubBanner/SubBanner';
import NetworksAndTokens from './NetworksAndTokens/NetworksAndTokens';
import BannerOCHToken from './BannerOCHToken/BannerOCHToken';
import Blog from './Blog/Blog';
import Community from './Community/Community';
import ContactUs from './ContactUs/ContactUs';

export default function Views() {
    return (
        <div style={{ position: 'relative', width: '100%', zIndex: 4, top: '-145px', left: 0 }}>
            <div style={{ height: '100%', position: 'absolute', width: '100%', top: 0, left: 0 }}>
                <div
                    style={{
                        // marginTop: '90px',
                        height: '427px',
                        // backgroundColor: 'blue',
                        backgroundImage: 'url(/img/bg-sub-banner.png)',
                        backgroundSize: '100% 100%',
                        backgroundPosition: 'left center',
                        backgroundRepeat: 'no-repeat',
                    }}
                ></div>
                <div style={{ backgroundColor: 'white', height: 'calc(100% - 427px)' }}></div>
            </div>
            <Container style={{ position: 'relative' }}>
                <SubBanner />
                <Ecosystem />
                <AssetFlow />
                <NetworksAndTokens />
                <BannerOCHToken />
                <Blog />
                <Community />
            </Container>
        </div>
    );
}
