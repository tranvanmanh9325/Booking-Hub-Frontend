import { useMutation } from '@tanstack/react-query';
import { apiClient } from '../lib/api-client';
import { PartnershipRequest, PartnershipResponse } from '../types/partnership';
import { toast } from 'react-toastify';

/**
 * Hook để gửi yêu cầu hợp tác (Partnership).
 * Sử dụng `useMutation` để gọi API.
 */
export function useSubmitPartnership() {
    return useMutation({
        mutationFn: (data: PartnershipRequest) => {
            return apiClient.post<PartnershipResponse>('/api/partnership/submit', data);
        },
        onSuccess: (data) => {
            if (data.success) {
                toast.success('Gửi yêu cầu hợp tác thành công!');
            } else {
                toast.error(data.message || 'Có lỗi xảy ra.');
            }
        },
        onError: (error: any) => {
            console.error('Submission error', error);
            // Toast is handled globally by api-client interceptor usually, but we can add specific one here if needed
            // However, since we have global error handling, we might just want to let it be.
            // But for specific UI feedback (like form error message), we can use the isError state in component.
        }
    });
}