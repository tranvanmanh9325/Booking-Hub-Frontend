import { useEffect } from 'react';
import { useRouter } from 'next/router';

const PartnerIndex = () => {
    const router = useRouter();

    useEffect(() => {
        router.replace('/partner/dashboard');
    }, [router]);

    return null;
};

export default PartnerIndex;
