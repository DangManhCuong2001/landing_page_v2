import React from 'react';
import { LINK_APP_ORCHAI } from 'src/Constants';

export default function ButtonLaunchDapps() {
    return (
        <button className="button-gardient">
            <a href={LINK_APP_ORCHAI} target="_blank" rel="noreferrer" style={{ fontWeight: 600, marginLeft: 'auto', fontSize: '15px' }}>
                Launch DApps
            </a>
        </button>
    );
}
