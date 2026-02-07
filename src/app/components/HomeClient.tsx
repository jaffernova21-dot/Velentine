'use client';

import { useState } from 'react';
import Navbar from './Navbar';
import DrawCanvas from './DrawCanvas';

export default function HomeClient() {
    const [showDraw, setShowDraw] = useState(false);

    return (
        <>
            <Navbar onDrawClick={() => setShowDraw(prev => !prev)} isDrawOpen={showDraw} />
            {showDraw && <DrawCanvas onClose={() => setShowDraw(false)} />}
        </>
    );
}
