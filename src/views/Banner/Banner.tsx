import React from 'react';
import Header from '../../Layout/Header/Header';
import { LINK_DOCUMENTATION } from 'src/Constants';
import ButtonLaunchDapps from 'src/common/ButtonLaunchDapps/ButtonLaunchDapps';
import { ExploreIcon } from 'src/Constants/icons/incons';
import Image from 'next/image';
import { imagePath } from 'src/Constants/imagePath';
import Container from 'src/common/Container/Container';
import localFont from 'next/font/local';

export const SERVETICA_400 = localFont({
    src: '../../fonts/ServeticaMedium.ttf',
    style: 'normal',
});

export default function Banner() {
    return (
        <div className="banner" style={{ position: 'relative', overflow: 'hidden', height: '95svh' }}>
            <Container style={{ position: 'relative' }}>
                <div
                    style={{
                        borderRadius: '880.496px',
                        background: 'radial-gradient(37.72% 37.72% at 50% 50%, rgba(0, 116, 62, 0.80) 0%, rgba(9, 25, 24, 0.00) 100%)',
                        position: 'absolute',
                        width: '880px',
                        height: '880px',
                        top: '-580px',
                        left: '-350px',
                    }}
                ></div>
                <Image src={imagePath.BANNER_FRAME_1} alt="bannerrrr" width={400} height={200} className="bannerrr" style={{ position: 'absolute', top: '0px', left: '500px' }} />
                <div className="container-banner">
                    <Header />
                    <div style={{ marginTop: 60, position: 'relative' }}>
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <span
                                className={SERVETICA_400.className}
                                style={{
                                    fontWeight: '500',
                                    textShadow: '0 1px 12px rgb(78 184 214 / 39%), 0 1px 21px rgb(78 184 214 / 71%)',
                                    fontSize: '48px',
                                    color: 'white',
                                }}
                            >
                                <p data-aos="fade-right">DEFI </p>
                                <p data-aos="fade-right" data-aos-delay="300" className={SERVETICA_400.className} style={{ color: '#49E18D' }}>
                                    ORCH
                                    <span style={{ color: 'white' }}>ESTRATOR</span>
                                </p>
                                <p data-aos="fade-right" data-aos-delay="600">
                                    <span>POWERED BY </span>
                                    <span className={SERVETICA_400.className} style={{ color: '#49E18D' }}>
                                        AI
                                    </span>
                                </p>
                            </span>
                            <div
                                data-aos="zoom-out"
                                data-aos-delay="900"
                                style={{
                                    height: '46px',
                                    width: '410px',
                                    background: 'linear-gradient(90deg, rgba(14, 23, 19, 0.00) 0%, #0A4C31 48%, rgba(14, 23, 19, 0.00) 100%)',
                                    alignItems: 'center',
                                    display: 'flex',
                                    justifyContent: 'left',
                                    margin: '20px 0 ',
                                }}
                            >
                                <span
                                    style={{
                                        color: '#95A7AC',
                                        fontFamily: 'Arial',
                                        marginTop: 2,
                                    }}
                                >
                                    Maximized DeFi Passive Incomes with <span style={{ color: '#49E18D' }}>Smart Wallet</span>
                                </span>
                            </div>
                            <div data-aos="fade-right" ata-aos-delay="1200" style={{ marginTop: 5, display: 'inline-flex', height: '46px', alignItems: 'center' }}>
                                <ButtonLaunchDapps />
                                <div
                                    style={{
                                        cursor: 'pointer',
                                        marginLeft: '40px',
                                    }}
                                >
                                    <a
                                        href={LINK_DOCUMENTATION}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{ alignItems: 'center', display: 'flex', textDecoration: 'none', textShadow: '1px 3px 4px rgba(0, 0, 0, 0.15)' }}
                                    >
                                        <p style={{ marginRight: 1.33, color: '#43CF93' }}>View Docs</p>

                                        <ExploreIcon width={'20px'} height={'20px'} color="#43CF93" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="video-banner" style={{ position: 'absolute', top: '-100px', right: '-60px', zIndex: 0, width: '50%' }}>
                            <div style={{ maxWidth: '900px', marginTop: '100px', height: '500px', overflow: 'hidden' }}>
                                <video style={{ pointerEvents: 'none', userSelect: 'none', width: '100%', height: 'calc(90% + 2px)' }} autoPlay loop muted>
                                    <source src="/video/hero_banner_orchai_landing.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                        <div
                            style={{
                                borderRadius: '880.496px',
                                background: 'radial-gradient(37.72% 37.72% at 50% 50%, rgba(0, 116, 62, 0.80) 0%, rgba(9, 25, 24, 0.00) 100%)',
                                position: 'absolute',
                                width: '980px',
                                height: '980px',
                                bottom: '-780px',
                                right: '-260px',
                                zIndex: 1,
                            }}
                        ></div>
                        <Image
                            src={imagePath.BANNER_FRAME_2}
                            alt="banner-frame-2"
                            width={300}
                            height={600}
                            className="banner-frame-2"
                            style={{ position: 'absolute', bottom: '-272px', right: '-100px', zIndex: 3 }}
                        />
                    </div>
                </div>
            </Container>
            {/* <div
                style={{
                    marginTop: '90px',
                    height: '145px',
                    backgroundImage: 'url(/img/test-3.png)',
                    backgroundSize: '55% 100%',
                    backgroundPosition: 'left center',
                    backgroundRepeat: 'no-repeat',
                    zIndex: 4,
                    position: 'relative',
                }}
            >
                <Container style={{ display: 'flex', height: '100%', placeItems: 'center' }}>
                    <div
                        style={{
                            width: '55%',
                            display: 'flex',
                            alignItems: 'center',
                            height: '100%',
                            placeItems: 'center',
                        }}
                    >
                        <div style={{ paddingRight: '150px' }}>
                            <p style={{ fontWeight: 600, fontSize: '16px' }}>Trusted by</p>
                            <div style={{ display: 'flex', placeItems: 'center', gap: '10px', justifyContent: 'space-between', flexWrap: 'wrap', marginTop: '10px' }}>
                                <Image
                                    data-aos="fade-right"
                                    data-aos-easing="ease-in-sine"
                                    // data-aos-offset="300"
                                    src={imagePath.ICON_ORAICHAIN}
                                    alt="logo oraichain"
                                    title="logo oraichain"
                                    width={146}
                                    height={30}
                                    className="oraichain-logo"
                                />
                                <Image
                                    data-aos-delay="600"
                                    data-aos="fade-right"
                                    data-aos-easing="ease-in-sine"
                                    src={imagePath.ICON_TRON}
                                    alt="logo tron"
                                    title="logo tron"
                                    width={100}
                                    height={30}
                                    className="tron-logo"
                                />
                                <Image
                                    data-aos="fade-right"
                                    data-aos-easing="ease-in-sine"
                                    data-aos-delay="1200"
                                    src={imagePath.ICON_ORAIDEX}
                                    alt="logo oraidex"
                                    title="logo oraidex"
                                    width={82}
                                    height={30}
                                    className="oraidex-logo"
                                />
                                <Image
                                    data-aos-delay="1800"
                                    data-aos="fade-right"
                                    data-aos-easing="ease-in-sine"
                                    src={imagePath.ICON_LEAP}
                                    alt="logo leap"
                                    title="logo leap"
                                    width={97}
                                    height={30}
                                    className="leap-logo"
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{ width: '40%' }}>
                        <div className="toltal-value">
                            <div
                                className="box1"
                                style={{
                                    minWidth: '200px',
                                    maxHeight: '115px',
                                    borderRadius: '12px',
                                    padding: '10px 28px',
                                    border: '1px solid #04B885',
                                    textAlign: 'center',
                                    backdropFilter: 'blur(2px)',
                                }}
                            >
                                <p className="title-box-1" style={{ color: 'white', fontSize: '14px', lineHeight: '19px' }}>
                                    Toltal TVL
                                </p>
                                <p
                                    className="value-box-1"
                                    style={{
                                        fontWeight: 700,
                                        fontSize: '42px',
                                        background: 'linear-gradient(275deg, #58FF96 -11.3%, #00A178 101.19%)',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        lineHeight: '57px',
                                    }}
                                >
                                    $500K
                                </p>
                            </div>
                            <div
                                className="box2"
                                style={{
                                    minWidth: '202px',
                                    height: '115px',
                                    borderRadius: '12px',
                                    padding: '10px 28px',
                                    border: '1px solid #04B885',
                                    textAlign: 'center',
                                    backdropFilter: 'blur(2px)',
                                }}
                            >
                                <p className="title-box-2" style={{ color: 'white', fontSize: '14px', lineHeight: '19px' }}>
                                    Smart Liquidity APR
                                </p>
                                <p
                                    className="value-box-2"
                                    style={{
                                        fontWeight: 700,
                                        fontSize: '42px',
                                        background: 'linear-gradient(275deg, #58FF96 -11.3%, #00A178 101.19%)',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        lineHeight: '57px',
                                    }}
                                >
                                    89%
                                </p>
                                <a href="/" style={{ display: 'flex', placeItems: 'center', gap: '5px', justifyContent: 'center', cursor: 'pointer' }}>
                                    <p className="link-box-2" style={{ fontSize: '14px', fontWeight: 600, color: '#FEFEF6' }}>
                                        Join now{' '}
                                    </p>
                                    <ArrowRightIcon />
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </div> */}
            {/* <div
                style={{
                    backgroundImage: 'url(/img/test-2.png)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '145px',
                    marginTop: '90px',
                    zIndex: 4,
                    position: 'relative',
                }}
            >
                <Container style={{ display: 'flex', paddingTop: '20px', width: '100%' }}>
                    <div style={{ width: '50%' }}>
                        <p style={{ fontWeight: 600, fontSize: '16px' }}>Trusted by</p>
                        <div style={{ display: 'flex', placeItems: 'center', gap: '10px', justifyContent: 'space-between', flexWrap: 'wrap', marginTop: '10px' }}>
                            <Image
                                data-aos="fade-right"
                                data-aos-easing="ease-in-sine"
                                // data-aos-offset="300"
                                src={imagePath.ICON_ORAICHAIN}
                                alt="logo oraichain"
                                title="logo oraichain"
                                width={146}
                                height={30}
                                className="oraichain-logo"
                            />
                            <Image
                                data-aos-delay="600"
                                data-aos="fade-right"
                                data-aos-easing="ease-in-sine"
                                src={imagePath.ICON_TRON}
                                alt="logo tron"
                                title="logo tron"
                                width={100}
                                height={30}
                                className="tron-logo"
                            />
                            <Image
                                data-aos="fade-right"
                                data-aos-easing="ease-in-sine"
                                data-aos-delay="1200"
                                src={imagePath.ICON_ORAIDEX}
                                alt="logo oraidex"
                                title="logo oraidex"
                                width={82}
                                height={30}
                                className="oraidex-logo"
                            />
                            <Image
                                data-aos-delay="1800"
                                data-aos="fade-right"
                                data-aos-easing="ease-in-sine"
                                src={imagePath.ICON_LEAP}
                                alt="logo leap"
                                title="logo leap"
                                width={97}
                                height={30}
                                className="leap-logo"
                            />
                        </div>
                    </div>
                    <div className="toltal-value" style={{ width: '55%' }}>
                        <div
                            className="box1"
                            style={{ minWidth: '200px', maxHeight: '115px', borderRadius: '12px', padding: '10px 28px', border: '1px solid #04B885', textAlign: 'center', backdropFilter: 'blur(2px)' }}
                        >
                            <p className="title-box-1" style={{ color: 'white', fontSize: '14px', lineHeight: '19px' }}>
                                Toltal TVL
                            </p>
                            <p
                                className="value-box-1"
                                style={{
                                    fontWeight: 700,
                                    fontSize: '42px',
                                    background: 'linear-gradient(275deg, #58FF96 -11.3%, #00A178 101.19%)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    lineHeight: '57px',
                                }}
                            >
                                $500K
                            </p>
                        </div>
                        <div
                            className="box2"
                            style={{
                                minWidth: '202px',
                                height: '115px',
                                borderRadius: '12px',
                                padding: '10px 28px',
                                border: '1px solid #04B885',
                                textAlign: 'center',
                                backdropFilter: 'blur(2px)',
                            }}
                        >
                            <p className="title-box-2" style={{ color: 'white', fontSize: '14px', lineHeight: '19px' }}>
                                Smart Liquidity APR
                            </p>
                            <p
                                className="value-box-2"
                                style={{
                                    fontWeight: 700,
                                    fontSize: '42px',
                                    background: 'linear-gradient(275deg, #58FF96 -11.3%, #00A178 101.19%)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    lineHeight: '57px',
                                }}
                            >
                                89%
                            </p>
                            <a href="/" style={{ display: 'flex', placeItems: 'center', gap: '5px', justifyContent: 'center', cursor: 'pointer' }}>
                                <p className="link-box-2" style={{ fontSize: '14px', fontWeight: 600, color: '#FEFEF6' }}>
                                    Join now{' '}
                                </p>
                                <ArrowRightIcon />
                            </a>
                        </div>
                    </div>
                </Container>
            </div> */}
        </div>
    );
}
