'use client';
import Aos from 'aos';
import React, { useEffect } from 'react';

export default function InitAos() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);
    return <></>;
}
