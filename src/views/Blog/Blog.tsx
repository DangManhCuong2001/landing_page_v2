'use client';
import dynamic from 'next/dynamic';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Container from 'src/common/Container/Container';
import { blogConfig } from 'src/Constants/blogConfig';
import { imagePath } from 'src/Constants/imagePath';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

export default function Blog() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        // speed: 3000,
        autoplaySpeed: 4000,
        cssEase: 'linear',
        pauseOnHover: true,
        centerMode: true,
        centerPadding: '60px',
        className: 'center',
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 940,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
        ],

        // customPaging: (i: any) => (
        //     <div
        //         style={{
        //             width: '12px',
        //             height: '12px',
        //             backgroundColor: blogConfig[0].title == blogConfig[i].title ? '#26FB97' : '#CCCCCC',
        //             borderRadius: '50%',
        //             marginTop: '10px',
        //         }}
        //     >
        //         {i}
        //     </div>
        // ),
    };
    return (
        <Container style={{ marginTop: '120px' }}>
            <div data-aos="fade-up" style={{ textAlign: 'center', marginBottom: '20px' }}>
                <span style={{ fontSize: '45px', fontWeight: 700, color: '#0E1713' }}>
                    From the{' '}
                    <span style={{ background: 'linear-gradient(275deg, #58FF96 -11.3%, #00A178 101.19%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>Blog</span>
                </span>
            </div>
            <div data-aos="fade-up" className="slider-container">
                <Slider {...settings}>
                    {blogConfig.map((item, index) => {
                        return (
                            <div key={'blog' + index}>
                                <BoxPreviewBlog img={item.banner} date={item.date} title={item.title} link={item.link} />
                                {/* {index + 1} */}
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </Container>
    );
}

function BoxPreviewBlog({ img, date, title, link }: { img: StaticImageData; date: string; title: string; link: string }) {
    return (
        <div style={{ width: 'calc(100% - 16px)', height: 'auto' }}>
            <Image src={img} alt="blog" className="blog" style={{ width: '100%', aspectRatio: '344/189', borderRadius: '16px' }} />

            <p style={{ color: '#838383', fontSize: '12px', marginTop: '15px' }}>{date}</p>
            <a href={link} target="_blank" rel="noreferrer">
                <p
                    title={title}
                    style={{
                        color: '#57645E',
                        cursor: 'pointer',
                        fontSize: '20px',
                        marginTop: '5px',
                        fontWeight: 700,
                        display: '-webkit-box',
                        textOverflow: 'ellipsis',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                    }}
                >
                    {title}
                </p>
            </a>
        </div>
    );
}
