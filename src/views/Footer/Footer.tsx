import Image from 'next/image';
import React from 'react';
import Container from 'src/common/Container/Container';
import { LINK_DOCUMENTATION, LINK_WHITEPAPER } from 'src/Constants';
import {
    DiscordIcon,
    FooterDiscordIcon,
    FooterGithubIcon,
    FooterLinkedInIcon,
    FooterMediumIcon,
    FooterRedditIcon,
    FooterTeleIcon,
    FooterXIcon,
    FooterYoutubeIcon,
    LinkedInIcon,
    MediumIcon,
    TaskOnIcon,
    TeleIcon,
    TwitterIcon,
    YoutubeIcon,
    ZealyIcon1,
} from 'src/Constants/icons/incons';
import { imagePath } from 'src/Constants/imagePath';

export default function Footer() {
    return (
        <div style={{ background: '#0E1713', padding: '71px 0px', minHeight: '287px' }}>
            <Container>
                <div style={{ display: 'flex', columnGap: '200px', rowGap: '80px', flexWrap: 'wrap' }}>
                    <div>
                        <Image src={imagePath.LOGO_FULL_HORIZONTAL_WHITE} alt="logo orchai" title="logo orchai" width={120} height={50} className="header-logo" style={{ marginBottom: '30px' }} />
                        <span style={{ fontSize: '12px', color: '#4F6266' }}>
                            © 2022 Copyrights by <span style={{ fontWeight: 700 }}>ORCHAI </span>
                            <span>all rights reserved.</span>
                        </span>
                        <div style={{ marginTop: '30px', display: 'flex', placeItems: 'center', justifyContent: 'space-between' }}>
                            <a href={'https://x.com/orchai_protocol'} target="_blank" rel="noreferrer">
                                <BoxComunityFooter Icon={TwitterIcon} />
                            </a>
                            <a href={'https://t.me/orchaiofficial'} target="_blank" rel="noreferrer">
                                <BoxComunityFooter Icon={TeleIcon} />
                            </a>
                            <a href={'https://discord.gg/WjKEbQFBcP'} target="_blank" rel="noreferrer">
                                <BoxComunityFooter Icon={DiscordIcon} />
                            </a>
                            <a href={'https://blog.orchai.io/'} target="_blank" rel="noreferrer">
                                <BoxComunityFooter Icon={MediumIcon} />
                            </a>
                            <a href={'https://www.youtube.com/@orchaiofficialchannel'} target="_blank" rel="noreferrer">
                                <BoxComunityFooter Icon={YoutubeIcon} />
                            </a>
                            <a href={'https://www.linkedin.com/company/orchai/'} target="_blank" rel="noreferrer">
                                <BoxComunityFooter Icon={LinkedInIcon} />
                            </a>
                            <a href={'https://zealy.io/c/orchaiprotocol/questboard'} target="_blank" rel="noreferrer">
                                <BoxComunityFooter Icon={TaskOnIcon} />
                            </a>
                            <a href={'https://taskon.xyz/space/604235'} target="_blank" rel="noreferrer">
                                <BoxComunityFooter Icon={ZealyIcon1} />
                            </a>
                            {/* <a style={{ cursor: 'pointer' }}>
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
                            </a> */}
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', columnGap: '200px', rowGap: '80px' }}>
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
                                <a className="link-hover" href={'https://orchai.io/cookies-policy'} target="_blank" rel="noreferrer" style={{ color: '#95A7AC', fontSize: '14px', cursor: 'pointer' }}>
                                    Cookies Policy
                                </a>
                            </div>
                            <div style={{ marginBottom: '10px' }}>
                                <a className="link-hover" href={'https://orchai.io/privacy-policy'} target="_blank" rel="noreferrer" style={{ color: '#95A7AC', fontSize: '14px', cursor: 'pointer' }}>
                                    Privacy Policy{' '}
                                </a>
                            </div>

                            <div>
                                <a
                                    className="link-hover"
                                    href={'https://orchai.io/terms-of-service'}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ color: '#95A7AC', fontSize: '14px', cursor: 'pointer' }}
                                >
                                    Terms of Service
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

function BoxComunityFooter({ Icon }: { Icon: (props: React.CSSProperties, fill: string) => React.JSX.Element }) {
    return (
        <div className="box-comunity" style={{ width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            {<Icon fill={'#616161'} width={'14px'} height={'14px'} />}
        </div>
    );
}
