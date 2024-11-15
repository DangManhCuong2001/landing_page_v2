import React from 'react';
import Container from 'src/common/Container/Container';
import { SERVETICA_400 } from '../Banner/Banner';
import Image from 'next/image';
import { imagePath } from 'src/Constants/imagePath';
import { LINK_COINGECKO, LINK_COINMARKETCAP, LINK_DEXTOOLS, LINK_MEXC, LINK_ORAIDEX, LINK_UNISWAP } from 'src/Constants';

export default function BannerOCHToken() {
    return (
        <Container style={{ marginTop: '160px', overflow: 'hidden' }}>
            <div data-aos="fade-up" className="banner-och" style={{ width: '100%', border: '2px solid #8BE4BE', borderRadius: '20px', background: '#F5FFFB' }}>
                <div>
                    <p
                        className={SERVETICA_400.className}
                        style={{
                            fontSize: '100px',
                            fontWeight: '750',
                            background: 'linear-gradient(270deg, #69F59D -56.34%, #00A178 36.37%, #02513D 103.23%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        $OCH
                    </p>
                    <div style={{ display: 'flex', gap: 10, marginBottom: 2, flexWrap: 'wrap' }}>
                        <button style={{ background: '#1C1D1D', height: '36px', width: '128px', borderRadius: '16px', padding: '0 16px' }}>
                            <a href={LINK_ORAIDEX} target="_blank" rel="noreferrer" style={{ display: 'flex', placeItems: 'center' }}>
                                <Image src={imagePath.ORAIDEX} alt="oraidex" width={20} height={20} style={{ marginRight: '10px' }} />
                                <p style={{ color: '#FFFFFF', fontWeight: 600 }}>OraiDEX</p>
                            </a>
                        </button>
                        <button style={{ background: '#FEEDF5', height: '36px', width: '128px', borderRadius: '16px', padding: '0 16px' }}>
                            <a href={LINK_UNISWAP} target="_blank" rel="noreferrer" style={{ display: 'flex', placeItems: 'center' }}>
                                <Image src={imagePath.UNISWAP_LOGO} alt="uniswap" width={20} height={20} style={{ marginRight: '10px' }} />
                                <p style={{ color: '#FF007A', fontWeight: 600 }}>Uniswap</p>
                            </a>
                        </button>

                        <button style={{ height: '36px', width: '128px', background: '#4CADD3', borderRadius: '16px', padding: '0 16px' }}>
                            <a href={LINK_MEXC} target="_blank" rel="noreferrer" style={{ display: 'flex', placeItems: 'center' }}>
                                <Image src={imagePath.LOGO_MEXC} alt="uniswap" width={20} height={20} style={{ marginRight: '10px' }} />
                                <p style={{ color: '#FFFFFF', fontWeight: 600 }}>MEXC</p>
                            </a>
                        </button>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                        <p style={{ marginRight: '10px', color: '#95A7AC' }}>Tracking OCH Price:</p>
                        <div style={{ display: 'flex', placeItems: 'center', gap: '15px' }}>
                            <a href={LINK_COINGECKO} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                                <Image src={imagePath.LOGO_COINGECKO} alt="oraidex" width={26} height={26} />
                            </a>
                            <a href={LINK_DEXTOOLS} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                                <Image src={imagePath.LOGO_DEXTOOLS} alt="dextools" width={26} height={26} />
                            </a>
                            <a href={LINK_COINMARKETCAP} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                                <Image src={imagePath.LOGO_COINMARKETCAP} alt="COINMARKETCAP" width={26} height={26} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="token-och" style={{ position: 'relative', paddingLeft: '30px', minHeight: '200px' }}>
                    <div style={{ background: 'rgba(106, 242, 213, 0.30)', width: '16px', height: '16px', position: 'absolute', left: '200px', transform: 'rotate(45deg)' }}></div>
                    <Image src={imagePath.IMAGE_OCH_1} alt="COINMARKETCAP" width={152} height={152} style={{ position: 'absolute', top: '0px', right: '220px' }} />
                    <Image src={imagePath.IMAGE_OCH_2} alt="COINMARKETCAP" width={203} height={203} style={{ position: 'absolute', top: '60px', right: '10px' }} />
                    <div style={{ background: 'rgba(106, 242, 213, 0.30)', width: '35px', height: '35px', position: 'absolute', left: '10px', bottom: '20px', transform: 'rotate(45deg)' }}></div>
                </div>
            </div>
        </Container>
    );
}
