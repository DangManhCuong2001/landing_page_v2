import Image from 'next/image';
import React from 'react';
import Container from 'src/common/Container/Container';
import { imagePath } from 'src/Constants/imagePath';

export default function ContactUs() {
    return (
        <div
            className="contact-us"
            style={{
                width: '100%',
                marginTop: '160px',
                // position: 'relative',
                height: '70svh',
                backgroundImage: 'url(/img/contactus.png)',
                backgroundSize: '100% 100%',
                display: 'flex',
                placeItems: 'center',
                marginBottom: '-1px',
            }}
        >
            {/* <Image src={imagePath.CONTACT_US} alt="contactUS" width={100} height={100} layout="responsive" className="contactUS" /> */}
            <div className="container-contactus" style={{ display: 'flex', placeItems: 'center', justifyContent: 'space-between', maxWidth: '1096px', margin: '0 auto', gap: '40px', height: '400px' }}>
                <div style={{ maxWidth: '410px' }}>
                    <p style={{ color: 'white', fontWeight: 700, fontSize: '45px' }}>Contact Us</p>
                    <p style={{ color: '#95A7AC', marginTop: '10px' }}>We always want to hear from you! Let us know if there is anything that we can help you with.</p>
                    <div
                        style={{
                            width: '328px',
                            height: '52px',
                            border: '1px solid #1B2626',
                            borderRadius: '99px',
                            marginTop: '50px',
                            background: 'rgba(38, 53, 53, 0.50)',
                            display: 'flex',
                            placeItems: 'center',
                            padding: '20px 12px',
                        }}
                    >
                        <input placeholder="Enter your email..." type="email" style={{ background: '#1B2626', color: 'white', border: '0px solid', outline: 'none' }}></input>
                        <button style={{ background: 'linear-gradient(276deg, #69F59D -12.14%, #00A178 53.02%, #02513D 100%)', width: '141px', height: '37px', borderRadius: '22px' }}>
                            <a style={{ color: 'white', fontWeight: 600, fontSize: '15px' }}>Send</a>
                        </button>
                    </div>
                </div>
                <div className="img_email" style={{ height: '100%', width: '36%', display: 'flex', placeItems: 'center' }}>
                    <Image
                        src={imagePath.IMAGE_CONTACTUS_5}
                        alt="contactUSSS"
                        width={10}
                        height={10}
                        layout="responsive"
                        style={{ width: '100px !ipmportant', height: 'auto' }}
                        className="contactUSSS"
                    />
                </div>
            </div>
        </div>
    );
}
