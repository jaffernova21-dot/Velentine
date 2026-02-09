'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import CreatorFlow from './CreatorFlow';
import ReceiverView from './ReceiverView';
import { decodeData, ShareData } from '../utils/encode';

export default function HomeClient() {
    const searchParams = useSearchParams();
    const dataParam = searchParams.get('data');
    const [receiverData, setReceiverData] = useState<ShareData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (dataParam) {
            const decoded = decodeData(dataParam);
            if (decoded) {
                setReceiverData(decoded);
            }
        }
        setLoading(false);
    }, [dataParam]);

    if (loading) return null;

    // Receiver View (when opening a shared link)
    if (receiverData) {
        return <ReceiverView data={receiverData} />;
    }

    // Creator Flow (Gallery is now accessed via Navbar button)
    return <CreatorFlow />;
}
