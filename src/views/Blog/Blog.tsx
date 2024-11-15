'use client';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';
import Container from 'src/common/Container/Container';
import { imagePath } from 'src/Constants/imagePath';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

export default function Blog() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 4000,
        cssEase: 'linear',
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 940,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            // {
            //     breakpoint: 480,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1,
            //     },
            // },
        ],
    };
    return (
        <Container style={{ marginTop: '120px' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <span style={{ fontSize: '45px', fontWeight: 700 }}>
                    From the{' '}
                    <span style={{ background: 'linear-gradient(275deg, #58FF96 -11.3%, #00A178 101.19%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>Blog</span>
                </span>
            </div>
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <BoxPreviewBlog img={imagePath.BLOG_1} date="Dec 07 2022" title="Orchainians Gathering Recap - Before the Big launch" />
                    </div>
                    <div>
                        <BoxPreviewBlog img={imagePath.BLOG_2} date="Dec 07 2022" title="Orchainians Gathering Recap - Before the Big launch" />
                    </div>
                    <div>
                        <BoxPreviewBlog img={imagePath.BLOG_3} date="Dec 07 2022" title="Orchainians Gathering Recap - Before the Big launch" />
                    </div>
                    <div>
                        <BoxPreviewBlog img={imagePath.BLOG_1} date="Dec 07 2022" title="Orchainians Gathering Recap - Before the Big launch" />
                    </div>
                    <div>
                        <BoxPreviewBlog img={imagePath.BLOG_2} date="Dec 07 2022" title="Orchainians Gathering Recap - Before the Big launch" />
                    </div>
                    <div>
                        <BoxPreviewBlog img={imagePath.BLOG_3} date="Dec 07 2022" title="Orchainians Gathering Recap - Before the Big launch" />
                    </div>
                </Slider>
            </div>
        </Container>
    );
}

function BoxPreviewBlog({ img, date, title }: { img: string; date: string; title: string }) {
    return (
        <div style={{ width: '344px', height: '280px', cursor: 'pointer' }}>
            <div style={{ width: '100%', height: '188px', borderRadius: '16px', overflow: 'hidden' }}>
                <Image src={img} alt="blog" width={100} height={100} layout="responsive" className="blog" />
            </div>
            <p style={{ color: '#838383', fontSize: '12px', marginTop: '15px' }}>{date}</p>
            <p style={{ color: '#57645E', fontSize: '20px', marginTop: '5px', fontWeight: 700 }}>{title}</p>
        </div>
    );
}
