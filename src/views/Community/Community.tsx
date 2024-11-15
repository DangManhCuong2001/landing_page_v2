import Image from 'next/image';
import React from 'react';
import Container from 'src/common/Container/Container';
import { DiscordIcon, LinkedInIcon, MediumIcon, NoNameIcon1, NoNameIcon2, TeleIcon, TwitterIcon, YoutubeIcon } from 'src/Constants/icons/incons';
import { imagePath } from 'src/Constants/imagePath';

export default function Community() {
    return (
        <Container style={{ marginTop: '120px' }}>
            <div style={{ border: '2px solid #8BE4BE', background: '#0E1713', borderRadius: '20px', width: '100%', display: 'flex', position: 'relative' }}>
                <div style={{ width: '50%', overflow: 'hidden' }}>
                    <Image src={imagePath.COMMUNITY_BANNER} alt="community" width={412} height={347} className="community" style={{ position: 'absolute', left: 0, bottom: 0 }} />
                </div>
                <div style={{ width: '50%', padding: '88px 51px', position: 'relative', zIndex: 0, backdropFilter: 'blur(6px)', minWidth: '380px', borderRadius: '20px' }}>
                    <span style={{ fontSize: '40px', fontWeight: 700, color: 'white' }}>
                        Join our{' '}
                        <span style={{ background: 'linear-gradient(275deg, #58FF96 -11.3%, #00A178 101.19%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                            Community
                        </span>
                    </span>
                    <p style={{ color: '#95A7AC', maxWidth: '340px' }}>Engage with the community, ask questions, participate in AMAs and more!</p>
                    <div style={{ display: 'flex', placeItems: 'center', marginTop: '40px', gap: '10px', flexWrap: 'wrap' }}>
                        <BoxComunity Icon={<TwitterIcon fill="#616161" />} />
                        <BoxComunity Icon={<TeleIcon fill="#616161" />} />
                        <BoxComunity Icon={<DiscordIcon fill="#616161" />} />
                        <BoxComunity Icon={<MediumIcon fill="#616161" />} />
                        <BoxComunity Icon={<YoutubeIcon fill="#616161" />} />
                        <BoxComunity Icon={<LinkedInIcon fill="#616161" />} />
                        <BoxComunity Icon={<NoNameIcon1 fill="#616161" />} />
                        <BoxComunity Icon={<NoNameIcon2 fill="#616161" />} />
                    </div>
                </div>
            </div>
        </Container>
    );
}

function BoxComunity({ Icon }: { Icon: React.JSX.Element }) {
    return (
        <div className="box-comunity" style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            {Icon}
        </div>
    );
}
