import Image from 'next/image';
import React from 'react';
import Container from 'src/common/Container/Container';
import { ExploreIcon } from 'src/Constants/icons/incons';
import { imagePath } from 'src/Constants/imagePath';

export default function AssetFlow() {
    return (
        <div style={{ marginTop: '150px', minHeight: '500px' }}>
            <div style={{ textAlign: 'center' }}>
                <p style={{ fontWeight: 700, fontSize: '28px', color: '#57645E' }}>Asset Flow Optimization</p>
                <button style={{ background: 'linear-gradient(276deg, #69F59D -12.14%, #00A178 53.02%, #02513D 100%)', width: '160px', height: '42px', borderRadius: '22px', marginTop: '10px' }}>
                    <a style={{ color: 'white', fontWeight: 600, fontSize: '15px' }}>Explore</a>
                </button>
            </div>
            <div className="grid-view-1 " style={{ marginTop: '40px' }}>
                <div data-aos="fade-right">
                    <div style={{ marginBottom: '20px' }}>
                        <p className="h3 " style={{ marginBottom: '5px', color: '#57645E' }}>
                            Liquid Staking
                        </p>
                        <span style={{ color: '#838383' }}>
                            Orchai Liquid Staking is designed to
                            <span style={{ fontWeight: 700 }}> tokenize staked Assets </span>
                            in integrated networks and allow them to be used as
                            <span style={{ fontWeight: 700 }}> collateral </span>
                            to borrow
                            <span style={{ fontWeight: 700 }}> USDT</span>.
                        </span>
                    </div>
                    <div>
                        <p className="h3" style={{ marginBottom: '5px', color: '#57645E' }}>
                            Money Market
                        </p>
                        <p style={{ color: '#838383' }}>
                            Orchai Money Market allows
                            <span style={{ fontWeight: 700 }}> deposit </span> and <span style={{ fontWeight: 700 }}>borrow stablescoins</span>. While lenders can deposit their stablecoins to{' '}
                            <span style={{ fontWeight: 700 }}> earn interest </span>, borrowers can provide their sAssets as collateral to
                            <span style={{ fontWeight: 700 }}> borrow USDT</span>.
                        </p>
                    </div>
                    <div style={{ display: 'flex', placeItems: 'center', marginTop: '20px' }}>
                        <a href={'/'} target="_blank" rel="noreferrer" style={{ alignItems: 'center', display: 'flex', textDecoration: 'none', textShadow: '1px 3px 4px rgba(0, 0, 0, 0.15)' }}>
                            <p style={{ fontSize: '16px', color: '#43CF93', marginRight: '5px' }}>Learn how to start</p>
                            <ExploreIcon width={'16px'} height={'16px'} color="#43CF93" />
                        </a>
                    </div>
                </div>
                <div data-aos="fade-left" style={{ position: 'relative', height: '150%', minHeight: '300px', width: '100%' }}>
                    <Image
                        src={imagePath.IMAGE_STAKE}
                        alt="img stake"
                        width={348}
                        height={254}
                        className="img stake"
                        style={{ position: 'absolute', top: 0, right: 0, width: '62%', height: 'auto' }}
                    />
                    <Image
                        src={imagePath.IMAGE_LIQUIDATION}
                        alt="img liquidation"
                        width={348}
                        height={254}
                        className="img liquidation"
                        style={{ position: 'absolute', top: '120px', right: '160px', width: '62%', height: 'auto' }}
                    />
                </div>
            </div>
        </div>
    );
}
