import React, { ReactNode } from 'react';

export default function CardData({ children }: { children: ReactNode }) {
    return <div style={{ width: '280px', height: '150px', borderRadius: '12px', border: '1px solid #8BE4BE', backgroundColor: '#F5FFFB', paddingTop: '40px', paddingLeft: '24px' }}>{children}</div>;
}
