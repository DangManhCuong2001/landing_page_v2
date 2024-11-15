import React from 'react';
import CardPreview from 'src/common/CardPreview/CardPreview';
import Container from 'src/common/Container/Container';
import { LINK_APP_AUTOTRADER_SMART_STAKING, LINK_APP_COMBINATOR, LINK_APP_ORCHAI, LINK_BOT_TELEGRAM } from 'src/Constants';
import { imagePath } from 'src/Constants/imagePath';

export default function Ecosystem() {
    return (
        <div className="ecosystem" style={{ paddingTop: '100px', zIndex: 4, position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
                <div>
                    <p style={{ fontWeight: 700, fontSize: '52px', lineHeight: '55px' }}>Orchai</p>
                    <p
                        style={{
                            fontSize: '52px',
                            fontWeight: '700',
                            background: 'linear-gradient(270deg, #69F59D 3.57%, #00A178 69.61%, #02513D 117.23%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                        }}
                    >
                        Ecosystem
                    </p>
                </div>
                <div className="grid-text-2" style={{ textAlign: 'right' }}>
                    <p style={{ fontWeight: 700, fontSize: '28px', color: '#57645E' }}>Low-code DeFi Management</p>
                    <p style={{ fontWeight: 400, fontSize: '20px', color: '#95A7AC' }}>Enjoy APR up to 900% with Smart Liquidity</p>
                    <button style={{ background: 'linear-gradient(276deg, #69F59D -12.14%, #00A178 53.02%, #02513D 100%)', width: '160px', height: '42px', borderRadius: '22px', marginTop: '10px' }}>
                        <a style={{ color: 'white', fontWeight: 600, fontSize: '15px' }}>Explore</a>
                    </button>
                </div>
            </div>
            <div className="grid-view-2" style={{ marginTop: '50px' }}>
                <div data-aos="fade-right" data-aos-delay="100">
                    <CardPreview
                        icon={imagePath.ICON_COMBINATOR}
                        title="Combinator"
                        subTitle="Optimize portfolio management with AI-driven recommendations."
                        bgIcon={imagePath.BG_ICON_COMBINATOR}
                        link={LINK_APP_COMBINATOR}
                    />
                </div>
                <div data-aos="zoom-out" data-aos-delay="100">
                    <CardPreview
                        icon={imagePath.ICON_AUTOTRADER}
                        title="Auto Trader"
                        subTitle="Maximize gains and minimize risks with market-aware automated strategies."
                        bgIcon={imagePath.BG_ICON_AUTOTRADER}
                        link={LINK_APP_AUTOTRADER_SMART_STAKING}
                    />
                </div>
                <div data-aos="fade-left" data-aos-delay="100">
                    <CardPreview
                        icon={imagePath.ICON_ALERT_HUB}
                        title="Alert Hub"
                        subTitle="Provide real-time updates and tailored alerts for confident decisions."
                        bgIcon={imagePath.BG_ALERT_HUB}
                        link={LINK_BOT_TELEGRAM}
                    />
                </div>
            </div>
        </div>
    );
}
