import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ButtonLaunchDapps from 'src/common/ButtonLaunchDapps/ButtonLaunchDapps';
import Container from 'src/common/Container/Container';
// import { Container } from 'src/common/Container';
import { LINK_APP_ORCHAI } from 'src/Constants';
import { imagePath } from 'src/Constants/imagePath';
import 'src/styles/header.scss';

type Props = {};

export default function Header({}: Props) {
    return (
        <div style={{ zIndex: 999, position: 'relative', width: '100%' }}>
            {/* <Container sx={{ display: 'flex', alignItems: 'center', py: 2 }}> */}
            <div style={{ display: 'flex', placeItems: 'center', justifyContent: 'space-between', paddingTop: '20px' }}>
                <Link href={'/'} passHref>
                    <Image src={imagePath.LOGO_FULL_HORIZONTAL_WHITE} alt="logo orchai" title="logo orchai" width={120} height={50} className="header-logo" />
                </Link>
                <ButtonLaunchDapps />
            </div>
        </div>
    );
}
