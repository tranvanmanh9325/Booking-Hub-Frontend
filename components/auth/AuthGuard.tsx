import { useRouter } from 'next/router';
import { useAuth } from '../../hooks/use-auth';
import { useEffect, useState } from 'react';
import { LoadingSpinner } from '../ui/LoadingSpinner';

interface AuthGuardProps {
    children: React.ReactNode;
}

export const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
    const { user, loading } = useAuth();
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        if (!loading) {
            // Logic:
            // 1. ADMIN cannot access non-admin pages (specifically root '/') -> redirect to /admin/dashboard
            // 2. USER cannot access admin pages (/admin/*) -> redirect to /

            const isAdminRoute = router.pathname.startsWith('/admin');
            const isRoot = router.pathname === '/';

            // Allow auth pages (login/register) to be accessible always, or handle redirect if logged in
            const isAuthPage = router.pathname.startsWith('/auth');
            if (isAuthPage) {
                setAuthorized(true);
                return;
            }

            if (user) {
                if (user.role === 'ADMIN') {
                    // If Admin tries to access root, redirect to dashboard
                    if (isRoot) {
                        router.replace('/admin/dashboard');
                        return;
                    }
                } else if (user.role === 'PARTNER') {
                    // PARTNER cannot access root -> redirect to partner dashboard
                    if (isRoot) {
                        router.replace('/partner/dashboard');
                        return;
                    }
                } else {
                    // Non-admin (User)
                    if (isAdminRoute) {
                        router.replace('/');
                        return;
                    }
                }
            } else {
                // Not logged in
                // If trying to access admin route, redirect to login.
                if (isAdminRoute) {
                    router.replace('/auth/login');
                    return;
                }
            }

            setAuthorized(true);
        }
    }, [user, loading, router.pathname]);

    if (loading) {
        return (
            <div className="flex h-screen w-screen items-center justify-center">
                <LoadingSpinner size={40} className="text-blue-600" />
            </div>
        );
    }

    // Prevent flashing content before redirect
    if (!authorized) {
        return null;
    }

    return <>{children}</>;
};