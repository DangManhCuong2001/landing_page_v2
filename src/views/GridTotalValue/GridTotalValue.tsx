import CardData from 'src/common/CardData/CardData';
import Container from 'src/common/Container/Container';
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
    // try {
    //     const res = await fetch('https://api.orchai.io/dashboard/lending-page', { cache: 'no-store' });
    //     // if (!res.ok) {
    //     //     throw new Error('Failed to fetch data');
    //     // }

    //     const response = await res.json();
    //     // console.log(response);

    //     const filterData: LandingPageData = {
    //         moneyMarketTVL: response.money_market_tvl,
    //         liquidStakingTVL: response.liquid_staking_tvl,
    //         numberSmartWallet: response.number_smart_wallet,
    //         totalXOCHClaim: response.total_XOCH_claim,
    //         totalXOCHHolder: response.total_XOCH_holder,
    //         compoundStakingTVL: response.total_compound_staking_in_usdt,
    //         totalOchStake: response.total_och_stake,
    //         totalUserStakeOCH: response.total_user_stake_och,
    //     };
    //     return filterData;
    // } catch (err) {
    //     console.log(err);
    // }
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

export default async function GridTotalValue() {
    const data = await getData();

    return (
        <Container style={{ paddingTop: '100px', display: 'flex', justifyContent: 'space-between', zIndex: 2, position: 'relative', backgroundColor: 'white' }}>
            <CardData>
                <p style={{ fontWeight: '600', minHeight: '30px', fontSize: '14px', color: '#494949' }}>Money Market TVL</p>

                <p
                    style={{
                        fontSize: '28px',
                        fontWeight: '700',
                        background: 'linear-gradient(275deg, #58FF96 -11.3%, #00A178 101.19%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                    }}
                >
                    ${compactNumber(data?.moneyMarketTVL)}
                </p>
            </CardData>

            <CardData>
                <p style={{ fontWeight: '600', minHeight: '30px', fontSize: '14px', color: '#494949' }}>Liquid Staking TVL</p>
                <p
                    style={{
                        fontSize: '28px',
                        fontWeight: '700',
                        background: 'linear-gradient(275deg, #58FF96 -11.3%, #00A178 101.19%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                    }}
                >
                    ${compactNumber(data?.liquidStakingTVL)}
                </p>
            </CardData>

            <CardData>
                <p style={{ fontWeight: '600', minHeight: '30px', fontSize: '14px', color: '#494949' }}>Total OCH Staked</p>
                <p
                    style={{
                        fontSize: '28px',
                        fontWeight: '700',
                        background: 'linear-gradient(275deg, #58FF96 -11.3%, #00A178 101.19%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                    }}
                >
                    {compactNumber(data?.totalOchStake)}
                </p>
            </CardData>

            <CardData>
                <p style={{ fontWeight: '600', minHeight: '30px', fontSize: '14px', color: '#494949' }}>Number of Smart Wallet</p>
                <p
                    style={{
                        fontSize: '28px',
                        fontWeight: '700',
                        background: 'linear-gradient(275deg, #58FF96 -11.3%, #00A178 101.19%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                    }}
                >
                    {data?.numberSmartWallet}
                </p>
            </CardData>
        </Container>
    );
}
