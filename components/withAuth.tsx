import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export function withAuth<P extends object>(WrappedComponent: React.ComponentType<P>) {
    const ComponentWithAuth = (props: P) => {
        const { isAuthenticated, loading } = useAuth();
        const router = useRouter();

        useEffect(() => {
            if (!loading && !isAuthenticated) {
                router.replace('/auth/login');
            }
        }, [isAuthenticated, loading, router]);

        if (loading) {
            // You can replace this with a proper Loading Spinner component
            return (
                <div className="flex items-center justify-center min-h-screen">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
            );
        }

        if (!isAuthenticated) {
            return null; // Will redirect in useEffect
        }

        return <WrappedComponent {...props} />;
    };

    return ComponentWithAuth;
}
