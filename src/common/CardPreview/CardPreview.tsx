import Image from 'next/image';
import React from 'react';
import { ExploreIcon } from 'src/Constants/icons/incons';

export default function CardPreview({ icon, title, subTitle, bgIcon, link }: { icon: string; title: string; subTitle: string; bgIcon: string; link: string }) {
    return (
        <div className="bg-bgBanner" style={{ width: '100%', minWidth: '271px', height: '100%', borderRadius: '20px', border: '2px solid #DBFFFC', padding: '38px 42px', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Image src={icon} alt="combinator logo" title="logo combinator" width={90} height={90} className="combinator-logo" />
            </div>

            <p style={{ color: '#FEFEF6', fontSize: '22px', fontWeight: 700, marginTop: '40px' }}>{title}</p>
            <p style={{ color: '#95A7AC', fontSize: '16px', fontWeight: 400, marginTop: '10px' }}>{subTitle}</p>
            <div style={{ display: 'flex', placeItems: 'center', marginTop: '30px' }}>
                <a href={link} target="_blank" rel="noreferrer" style={{ alignItems: 'center', display: 'flex', textDecoration: 'none', textShadow: '1px 3px 4px rgba(0, 0, 0, 0.15)' }}>
                    <p style={{ fontSize: '16px', color: '#43CF93', marginRight: '5px' }}>Learn how to start</p>
                    <ExploreIcon width={'16px'} height={'16px'} color="#43CF93" />
                </a>
            </div>
            <Image src={bgIcon} alt="combinator logo" title="logo combinator" width={110} height={180} className="combinator-logo" style={{ position: 'absolute', bottom: '38px', left: '240px' }} />
        </div>
    );
}
