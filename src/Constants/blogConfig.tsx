import { imagePath } from './imagePath';

type TBlogConfig = {
    title: string;
    link: string;
    banner: string;
    date: string;
};

export const blogConfig: TBlogConfig[] = [
    {
        title: 'ORCHAI SMART LIQUIDITY INTRODUCTION',
        banner: imagePath.BLOG_1,
        date: 'Sep 19, 2024',
        link: 'https://blog.orchai.io/orchai-smart-liquidity-introduction-742ae452d0b6',
    },
    {
        title: 'Orchai officially supports OraiDEX AMM V3 in our products!',
        banner: imagePath.BLOG_2,
        date: 'Aug 29, 2024',
        link: 'https://blog.orchai.io/orchai-officially-supports-oraidex-amm-v3-in-our-products-d7bc2d5eace3',
    },
    {
        title: 'The Future of Finance: Smart Wallet and why you need it',
        banner: imagePath.BLOG_3,
        date: 'Jun 28, 2023',
        link: 'https://blog.orchai.io/the-future-of-finance-smart-wallet-and-why-you-need-it-48d1a819b3b3',
    },
    {
        title: 'Combinator Series #03: Connections to DeFi — Why is Combinator a good fit for DeFi?',
        banner: imagePath.BLOG_4,
        date: 'Sep 19, 2024',
        link: 'https://blog.orchai.io/combinator-series-03-connections-to-defi-why-is-combinator-a-good-fit-for-defi-15dfe7b398a1',
    },
    {
        title: 'Chain Abstraction — Orchai’s goals and execution',
        banner: imagePath.BLOG_5,
        date: 'Jul 9, 2024',
        link: 'https://blog.orchai.io/chain-abstraction-orchais-goals-and-execution-1df21a7a4378',
    },
    {
        title: 'An Introduction to Orchai Token — Tokenomics and Distribution',
        banner: imagePath.BLOG_6,
        date: 'May 10, 2023',
        link: 'https://blog.orchai.io/an-introduction-to-orchai-token-tokenomics-and-distribution-f0e42cef32a4',
    },
];
