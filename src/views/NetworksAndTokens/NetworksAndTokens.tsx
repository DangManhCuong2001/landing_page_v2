import Image from 'next/image';
import React from 'react';
import Container from 'src/common/Container/Container';
import { imagePath } from 'src/Constants/imagePath';

export default function NetworksAndTokens() {
    return (
        <div style={{ marginTop: '150px' }}>
            <div data-aos="fade-up" style={{ textAlign: 'center' }}>
                <span
                    style={{
                        fontSize: '45px',
                        fontWeight: '700',
                        background: 'linear-gradient(275deg, #58FF96 -11.3%, #00A178 101.19%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                    }}
                >
                    Networks{' '}
                </span>
                <span
                    style={{
                        fontSize: '45px',
                        fontWeight: '700',
                        color: '#0E1713',
                    }}
                >
                    and{' '}
                </span>
                <span
                    style={{
                        fontSize: '45px',
                        fontWeight: '700',
                        background: 'linear-gradient(275deg, #58FF96 -11.3%, #00A178 101.19%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                    }}
                >
                    Tokens{' '}
                </span>
                <span
                    style={{
                        fontSize: '45px',
                        fontWeight: '700',
                        color: '#0E1713',
                    }}
                >
                    we support
                </span>
            </div>
            <div className="container-networks-tokens" style={{ marginTop: '20px' }}>
                <div className="container-networks-tokens-2" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                    <div className="item1">
                        <div className="chain-support" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', flexWrap: 'wrap', gap: '10px' }}>
                            <div data-aos="fade-right">
                                <BoxChainSupport bgColor="black" icon={imagePath.ICON_ORAICHAIN_2} name="Oraichain" />
                            </div>
                            <div data-aos="fade-right" data-aos-delay="200">
                                <BoxChainSupport bgColor="blue" icon={imagePath.ICON_ETHER} name="Ethereum" />
                            </div>
                            <div data-aos="fade-right" data-aos-delay="700">
                                <BoxChainSupport bgColor="black" icon={imagePath.ICON_BNB_CHAIN} name="BNB Chain" />
                            </div>
                            <div data-aos="fade-right" data-aos-delay="1200">
                                <BoxChainSupport bgColor="blue" icon={imagePath.ICON_OSMOSIS} name="Osmosis" />
                            </div>
                            <div data-aos="fade-right" data-aos-delay="1700">
                                <BoxChainSupport bgColor="black" icon={imagePath.ICON_TRON_MAINNET} name="Tron Mainnet" />
                            </div>
                            <div data-aos="fade-right" data-aos-delay="2200">
                                <BoxChainSupport bgColor="blue" icon={imagePath.ICON_COSMOSHUB} name="Cosmos Hub" />
                            </div>
                        </div>
                        <div className="token-support" style={{ display: 'flex', placeItems: 'center', justifyContent: 'space-between', marginTop: '35px' }}>
                            <Image data-aos-delay="200" data-aos="fade-right" src={imagePath.ICON_ORAICHAIN_2} alt="logo oraichain" width={30} height={30} className="logo oraichain" />
                            <Image data-aos-delay="400" data-aos="fade-right" src={imagePath.ICON_ETHER} alt="logo oraichain" width={30} height={30} className="logo oraichain" />
                            <Image data-aos-delay="600" data-aos="fade-right" src={imagePath.ICON_BNB_CHAIN} alt="logo oraichain" width={30} height={30} className="logo oraichain" />
                            <Image data-aos-delay="800" data-aos="fade-right" src={imagePath.ICON_TRON_MAINNET} alt="logo oraichain" width={30} height={30} className="logo oraichain" />
                            <Image data-aos-delay="1000" data-aos="fade-right" src={imagePath.ICON_OSMOSIS} alt="logo osmosis" width={30} height={30} className="logo osmosis" />
                            <Image data-aos-delay="1200" data-aos="fade-right" src={imagePath.ICON_SCORAI} alt="logo oraichain" width={30} height={30} className="logo oraichain" />
                            <Image data-aos-delay="1400" data-aos="fade-right" src={imagePath.ICON_SCOSMO} alt="logo oraichain" width={30} height={30} className="logo oraichain" />
                            <Image data-aos-delay="1600" data-aos="fade-right" src={imagePath.ICON_SORAI} alt="logo oraichain" width={30} height={30} className="logo oraichain" />
                            <Image data-aos-delay="1800" data-aos="fade-right" src={imagePath.ICON_COSMOSHUB} alt="logo oraichain" width={30} height={30} className="logo oraichain" />
                        </div>
                    </div>
                    <div className="item2">
                        <div className="text-1" style={{ marginBottom: '30px' }}>
                            <p data-aos="fade-left" className="h3 " style={{ marginBottom: '5px', fontSize: '22px', color: '#57645E' }}>
                                Seamless Interoperability
                            </p>
                            <p data-aos="fade-left" data-aos-delay="300" style={{ color: '#838383' }}>
                                Interact with a growing network of DeFi protocols and chains - ALL IN ONE PLATFORM.
                            </p>
                        </div>
                        <div className="text-2" style={{ marginBottom: '0px' }}>
                            <p data-aos="fade-left" data-aos-delay="500" className="h3 " style={{ marginBottom: '5px', fontSize: '22px', color: '#57645E' }}>
                                Diverse Farming Strategies
                            </p>
                            <p data-aos="fade-left" data-aos-delay="800" style={{ color: '#838383' }}>
                                Access a range of yield-generating assets – WITH MORE TO COME.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function BoxChainSupport({ icon, name, bgColor }: { icon: string; name: string; bgColor: 'black' | 'blue' }) {
    return (
        <div
            style={{
                width: '170px',
                height: '68px',
                borderRadius: '12px',
                backgroundColor: bgColor == 'black' ? '#222' : '#D0FAE7',
                display: 'flex',
                placeItems: 'center',
                padding: '14px 18px',
                gap: 10,
            }}
        >
            <Image src={icon} alt="logo oraichain" width={40} height={40} className="logo oraichain" />
            <p style={{ color: bgColor == 'black' ? 'white' : 'black', fontSize: '16px' }}>{name}</p>
        </div>
    );
}
