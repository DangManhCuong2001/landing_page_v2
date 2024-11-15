import Image from 'next/image';
import React from 'react';
import Container from 'src/common/Container/Container';
import { LINK_APP_SMART_LIQUIDITY } from 'src/Constants';
import { ArrowRightIcon } from 'src/Constants/icons/incons';
import { imagePath } from 'src/Constants/imagePath';
import { compactNumber } from 'src/utils/format';

export interface LandingPageData {
    moneyMarketTVL: string;
    liquidStakingTVL: string;
    numberSmartWallet: string;
    totalXOCHClaim: string;
    totalXOCHHolder: string;
    compoundStakingTVL: string;
    totalOchStake: string;
    totalUserStakeOCH: string;
}

async function getData() {
    try {
        const res = await fetch('https://api.orchai.io/dashboard/lending-page', { cache: 'no-store' });
        // if (!res.ok) {
        //     throw new Error('Failed to fetch data');
        // }

        const response = await res.json();
        // console.log(response);

        const filterData: LandingPageData = {
            moneyMarketTVL: response.money_market_tvl,
            liquidStakingTVL: response.liquid_staking_tvl,
            numberSmartWallet: response.number_smart_wallet,
            totalXOCHClaim: response.total_XOCH_claim,
            totalXOCHHolder: response.total_XOCH_holder,
            compoundStakingTVL: response.total_compound_staking_in_usdt,
            totalOchStake: response.total_och_stake,
            totalUserStakeOCH: response.total_user_stake_och,
        };
        return filterData;
    } catch (err) {
        console.log(err);
    }
    return {
        moneyMarketTVL: '0',
        liquidStakingTVL: '0',
        numberSmartWallet: '0',
        totalXOCHClaim: '0',
        totalXOCHHolder: '0',
        compoundStakingTVL: '0',
        totalOchStake: '0',
    } as LandingPageData;
}

export default async function SubBanner() {
    const data = await getData();
    return (
        <div className="sub-banner" style={{ height: '145px' }}>
            <div
                className="item1"
                style={{
                    // minWidth: '62%',
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                    placeItems: 'center',
                    // order: 2,
                }}
            >
                <div className="trusted" style={{ paddingRight: '150px' }}>
                    <p style={{ fontWeight: 600, fontSize: '16px' }}>Trusted by</p>
                    <div style={{ display: 'flex', placeItems: 'center', gap: '20px', justifyContent: 'space-between', flexWrap: 'wrap', marginTop: '10px' }}>
                        <Image
                            data-aos="fade-right"
                            data-aos-easing="ease-in-sine"
                            data-aos-offset="0"
                            src={imagePath.ICON_ORAICHAIN}
                            alt="logo oraichain"
                            title="logo oraichain"
                            width={146}
                            height={30}
                            className="oraichain-logo"
                        />
                        <Image
                            data-aos-delay="600"
                            data-aos="fade-right"
                            data-aos-offset="0"
                            data-aos-easing="ease-in-sine"
                            src={imagePath.ICON_TRON}
                            alt="logo tron"
                            title="logo tron"
                            width={100}
                            height={30}
                            className="tron-logo"
                        />
                        <Image
                            data-aos="fade-right"
                            data-aos-easing="ease-in-sine"
                            data-aos-delay="1200"
                            data-aos-offset="0"
                            src={imagePath.ICON_ORAIDEX}
                            alt="logo oraidex"
                            title="logo oraidex"
                            width={82}
                            height={30}
                            className="oraidex-logo"
                        />
                        <Image
                            data-aos-delay="1800"
                            data-aos="fade-right"
                            data-aos-offset="0"
                            data-aos-easing="ease-in-sine"
                            src={imagePath.ICON_LEAP}
                            alt="logo leap"
                            title="logo leap"
                            width={97}
                            height={30}
                            className="leap-logo"
                        />
                    </div>
                </div>
            </div>
            <div className="item2" data-aos="zoom-out" data-aos-delay="900">
                <div
                    className="toltal-value"
                    style={{
                        display: 'flex',
                        gap: '10px',
                        justifyContent: 'space-between',
                        border: '1px solid #04B885',
                        borderRadius: '12px',
                        height: '115px',
                        placeItems: 'center',
                        width: '419px',
                        backdropFilter: 'blur(6px)',
                    }}
                >
                    <div
                        className="box1"
                        style={{
                            padding: '18px 28px',
                            textAlign: 'center',
                        }}
                    >
                        <p className="title-box-1" style={{ color: 'white', fontSize: '14px', lineHeight: '19px' }}>
                            Total TVL
                        </p>
                        <p
                            className="value-box-1"
                            style={{
                                fontWeight: 700,
                                fontSize: '42px',
                                background: 'linear-gradient(275deg, #58FF96 -11.3%, #00A178 101.19%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                lineHeight: '57px',
                            }}
                        >
                            ${compactNumber(Number(data?.moneyMarketTVL) + Number(data?.liquidStakingTVL))}
                        </p>
                    </div>
                    <div style={{ width: '1px', height: '59px', background: 'linear-gradient(270deg, #04B885 0%, #00946E 103.1%)' }}></div>
                    <div
                        className="box2"
                        style={{
                            padding: '18px 28px',

                            textAlign: 'center',
                        }}
                    >
                        <a href={LINK_APP_SMART_LIQUIDITY} target="_blank" rel="noreferrer" style={{ display: 'flex', placeItems: 'center', gap: '5px', justifyContent: 'center', cursor: 'pointer' }}>
                            <p className="title-box-2" style={{ color: 'white', fontSize: '14px', lineHeight: '19px' }}>
                                Smart Liquidity APR
                            </p>
                            <ArrowRightIcon />
                        </a>
                        <p
                            className="value-box-2"
                            style={{
                                fontWeight: 700,
                                fontSize: '42px',
                                background: 'linear-gradient(275deg, #58FF96 -11.3%, #00A178 101.19%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                lineHeight: '57px',
                            }}
                        >
                            89%
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
