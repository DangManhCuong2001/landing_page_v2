'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Container from 'src/common/Container/Container';
import { DiscordIcon, LinkedInIcon, MediumIcon, ZealyIcon1, TaskOnIcon, TeleIcon, TwitterIcon, YoutubeIcon } from 'src/Constants/icons/incons';
import { imagePath } from 'src/Constants/imagePath';

export default function Community() {
    return (
        <Container style={{ marginTop: '120px' }}>
            <div data-aos="fade-up" style={{ border: '2px solid #8BE4BE', background: '#0E1713', borderRadius: '20px', width: '100%', display: 'flex', position: 'relative' }}>
                <div style={{ width: '50%', overflow: 'hidden' }}>
                    <Image src={imagePath.COMMUNITY_BANNER} alt="community" width={412} height={347} className="community" style={{ position: 'absolute', left: 0, bottom: 0, borderRadius: '20px' }} />
                </div>
                <div style={{ width: '50%', padding: '88px 40px', position: 'relative', zIndex: 0, backdropFilter: 'blur(6px)', minWidth: '330px', borderRadius: '20px' }}>
                    <span style={{ fontSize: '40px', fontWeight: 700, color: 'white' }}>
                        Join our{' '}
                        <span style={{ background: 'linear-gradient(275deg, #58FF96 -11.3%, #00A178 101.19%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                            Community
                        </span>
                    </span>
                    <p style={{ color: '#95A7AC', maxWidth: '340px' }}>Engage with the community, ask questions, participate in AMAs and more!</p>
                    <div style={{ display: 'flex', placeItems: 'center', marginTop: '40px', gap: '10px', flexWrap: 'wrap' }}>
                        <a href={'https://x.com/orchai_protocol'} target="_blank" rel="noreferrer">
                            <BoxComunity Icon={TwitterIcon} />
                        </a>
                        <a href={'https://t.me/orchaiofficial'} target="_blank" rel="noreferrer">
                            <BoxComunity Icon={TeleIcon} />
                        </a>
                        <a href={'https://discord.gg/WjKEbQFBcP'} target="_blank" rel="noreferrer">
                            <BoxComunity Icon={DiscordIcon} />
                        </a>
                        <a href={'https://blog.orchai.io/'} target="_blank" rel="noreferrer">
                            <BoxComunity Icon={MediumIcon} />
                        </a>
                        <a href={'https://www.youtube.com/@orchaiofficialchannel'} target="_blank" rel="noreferrer">
                            <BoxComunity Icon={YoutubeIcon} />
                        </a>
                        <a href={'https://www.linkedin.com/company/orchai/'} target="_blank" rel="noreferrer">
                            <BoxComunity Icon={LinkedInIcon} />
                        </a>
                        <a href={'https://zealy.io/c/orchaiprotocol/questboard'} target="_blank" rel="noreferrer">
                            <BoxComunity Icon={TaskOnIcon} />
                        </a>
                        <a href={'https://taskon.xyz/space/604235'} target="_blank" rel="noreferrer">
                            <BoxComunity Icon={ZealyIcon1} />
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    );
}

function BoxComunity({ Icon }: { Icon: (props: React.CSSProperties, fill: string) => React.JSX.Element }) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            className="box-comunity"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
        >
            {<Icon fill={isHovered ? '#0E1713' : '#616161'} />}
        </div>
    );
}
