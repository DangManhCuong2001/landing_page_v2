'use client';
import React, { useEffect, useState } from 'react';
import { GoToTopIcon } from 'src/Constants/icons/incons';

export default function GoToTopBtn() {
    const [showBtn, setShowBtn] = useState(false);
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    function toggleTopButton() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            setShowBtn(true);
        } else {
            setShowBtn(false);
        }
    }
    useEffect(() => {
        window.onscroll = () => {
            // console.log("aloo");
            toggleTopButton();
        };
        return () => {
            window.onscroll = null;
        };
    }, []);
    return (
        <div
            onClick={scrollToTop}
            title="Go to top"
            style={{
                display: showBtn ? 'flex' : 'none',
                // border: '2px solid',
                // borderColor: 'red',
                borderRadius: '50%',
                cursor: 'pointer',
                position: 'fixed',
                right: '29px',
                bottom: '30px',
                width: '30px',
                height: '30px',
                alignItems: 'center',
                justifyContent: 'center',
                // '&:hover': {
                //     color: 'primary.main',
                //     borderColor: 'primary.main',
                // },
            }}
        >
            <GoToTopIcon />
        </div>
    );
}
