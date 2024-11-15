import Image from 'next/image';
import React from 'react';
import Container from 'src/common/Container/Container';
import { LINK_DOCUMENTATION, LINK_WHITEPAPER } from 'src/Constants';
import { FooterDiscordIcon, FooterGithubIcon, FooterLinkedInIcon, FooterMediumIcon, FooterRedditIcon, FooterTeleIcon, FooterXIcon, FooterYoutubeIcon, TeleIcon } from 'src/Constants/icons/incons';
import { imagePath } from 'src/Constants/imagePath';

export default function Footer() {
    return (
        <div style={{ background: '#0E1713', padding: '71px 0px', minHeight: '287px' }}>
            <Container>
                <div style={{ display: 'flex', gap: '80px', flexWrap: 'wrap' }}>
                    <div>
                        <Image src={imagePath.LOGO_FULL_HORIZONTAL_WHITE} alt="logo orchai" title="logo orchai" width={120} height={50} className="header-logo" style={{ marginBottom: '30px' }} />
                        <span style={{ fontSize: '12px', color: '#4F6266' }}>
                            © 2022 Copyrights by <span style={{ fontWeight: 700 }}>ORCHAI </span>
                            <span>all rights reserved.</span>
                        </span>
                        <div style={{ marginTop: '30px', display: 'flex', placeItems: 'center', justifyContent: 'space-between' }}>
                            <a style={{ cursor: 'pointer' }}>
                                <FooterTeleIcon />
                            </a>
                            <a style={{ cursor: 'pointer' }}>
                                <FooterRedditIcon />
                            </a>
                            <a style={{ cursor: 'pointer' }}>
                                <FooterDiscordIcon />
                            </a>
                            <a style={{ cursor: 'pointer' }}>
                                <FooterGithubIcon />
                            </a>
                            <a style={{ cursor: 'pointer' }}>
                                <FooterMediumIcon />
                            </a>
                            <a style={{ cursor: 'pointer' }}>
                                <FooterXIcon />
                            </a>
                            <a style={{ cursor: 'pointer' }}>
                                <FooterYoutubeIcon />
                            </a>
                            <a style={{ cursor: 'pointer' }}>
                                <FooterLinkedInIcon />
                            </a>
                        </div>
                    </div>
                    <div>
                        <p style={{ color: '#4F6266', fontSize: '14px', marginBottom: '10px' }}>Resources</p>
                        <div style={{ marginBottom: '10px' }}>
                            <a className="link-hover" href={LINK_DOCUMENTATION} target="_blank" rel="noreferrer" style={{ color: '#95A7AC', fontSize: '14px', cursor: 'pointer' }}>
                                Documentation
                            </a>
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <a className="link-hover" href={LINK_WHITEPAPER} target="_blank" rel="noreferrer" style={{ color: '#95A7AC', fontSize: '14px', cursor: 'pointer' }}>
                                Whitepaper{' '}
                            </a>
                        </div>
                        <div>
                            <a style={{ color: '#95A7AC', fontSize: '14px' }}>Email: contact@orchai.io</a>
                        </div>
                    </div>
                    <div>
                        <p style={{ color: '#4F6266', fontSize: '14px', marginBottom: '10px' }}>Legal</p>
                        <div style={{ marginBottom: '10px' }}>
                            <a className="link-hover" href={'/cookies-policy'} target="_blank" rel="noreferrer" style={{ color: '#95A7AC', fontSize: '14px', cursor: 'pointer' }}>
                                Cookies Policy
                            </a>
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <a className="link-hover" href={'/privacy-policy'} target="_blank" rel="noreferrer" style={{ color: '#95A7AC', fontSize: '14px', cursor: 'pointer' }}>
                                Privacy Policy{' '}
                            </a>
                        </div>
                        <div>
                            <a className="link-hover" href={'/terms-of-service'} target="_blank" rel="noreferrer" style={{ color: '#95A7AC', fontSize: '14px', cursor: 'pointer' }}>
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

function BoxComu({ Icon }: { Icon: React.JSX.Element }) {
    return <div style={{ width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', background: '#4F6266' }}>{Icon}</div>;
}
