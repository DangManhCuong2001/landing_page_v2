import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../styles/globals.scss';
import Layout from 'src/Layout/Layout';
import { Open_Sans } from 'next/font/google';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from 'src/Constants';
import { imagePath } from 'src/Constants/imagePath';
import Script from 'next/script';

export const fontOpenSans = Open_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    keywords: [
        'DeFi Orchestrator',
        'orchai',
        'lend',
        'borrow',
        'crypto',
        'Oraichain',
        'Blockchain',
        'marketplace',
        'loans',
        'best profit',
        'AI',
        'Lending Platform',
        'ecosystem',
        'AI Oracle',
        'ORAI',
        'Token',
    ],
    publisher: 'Orchai',
    robots: {
        follow: true,
        index: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        url: SITE_URL,
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        siteName: SITE_TITLE,
        countryName: 'Vietnam',
        images: {
            url: SITE_URL + imagePath.THUMBNAIL.src,
            secureUrl: imagePath.THUMBNAIL.src,
            type: 'image/png',
            width: imagePath.THUMBNAIL.width,
            height: imagePath.THUMBNAIL.height,
        },
    },
    twitter: {
        card: 'summary_large_image',
        site: '@site',
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        images: {
            url: SITE_URL + imagePath.THUMBNAIL.src,
            secureUrl: imagePath.THUMBNAIL.src,
            type: 'image/png',
            width: imagePath.THUMBNAIL.width,
            height: imagePath.THUMBNAIL.height,
        },
    },
    appleWebApp: {
        capable: true,
        title: 'Airdrop OCH',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-REZRZ3HTG8" />

                <Script
                    id="google-analytics"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-REZRZ3HTG8', {
                    page_path: window.location.pathname,
                  });
                `,
                    }}
                />
            </head>
            <body className={`${fontOpenSans.className}`}>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
