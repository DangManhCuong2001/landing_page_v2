import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/styles/**/*.{js,ts,jsx,tsx,mdx,css,scss}',
        './src/pages/**/*.{js,ts,jsx,tsx,mdx,css,scss}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx,css,scss}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx,css,scss}',
        './src/Layout/**/*.{js,ts,jsx,tsx,mdx,css,scss}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                bgBanner: '#0E1713',
                bgButton: 'linear-gradient(275deg,_#5BF193_4.05%,_#00A178_50.05%,_#015640_100%)',
            },
            transitionProperty: {
                left: 'left',
                'margin-left': 'margin-left',
            },
        },
    },
    plugins: [],
};
export default config;
