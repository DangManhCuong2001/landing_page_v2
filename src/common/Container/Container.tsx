import React, { ReactNode } from 'react';

export default function Container({ children, style }: { children: ReactNode; style?: React.CSSProperties }) {
    return (
        <div className="container" style={{ ...style }}>
            <div style={{ maxWidth: '1096px', padding: '0 16px', margin: '0 auto' }}>{children}</div>
        </div>
    );
}
