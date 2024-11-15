// 'use client';
import React, { ReactNode } from 'react';
import Header from './Header/Header';
import Banner from 'src/views/Banner/Banner';
import InitAos from 'src/common/InitAos/InitAos';
import Footer from 'src/views/Footer/Footer';
import ContactUs from 'src/views/ContactUs/ContactUs';
import GoToTopBtn from './GotoTopButton/GotoTopButton';

// import Aos from "aos";

type Props = {
    children: ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <div style={{ overflowX: 'hidden' }}>
            <InitAos />
            {/* <Banner /> */}
            {children}
            {/* <ContactUs />
            <Footer /> */}
            <GoToTopBtn />
            {/* <ChatBotWidget
                urlBot={LINK_BOT_TELEGRAM}
                button={{ bgcolor: "rgb(78, 184, 214)" }}
                boxChat={{ name: "Orchai Alert Hub", desc: "", headerBgColor: "rgb(78, 184, 214)", avatarUrl: imagePath.LOGO_SHORT_BLACK }}
            /> */}
        </div>
    );
}
