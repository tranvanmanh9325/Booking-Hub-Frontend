export const getErrorMessage = (status: number | undefined, code?: string): string => {
    if (!status) {
        return 'Không thể kết nối đến máy chủ. Vui lòng kiểm tra kết nối mạng của bạn.';
    }

    // Mapping based on common HTTP status codes
    switch (status) {
        case 400:
            return 'Yêu cầu không hợp lệ. Vui lòng kiểm tra lại thông tin.';
        case 401:
            return 'Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.';
        case 403:
            return 'Bạn không có quyền thực hiện thao tác này.';
        case 404:
            return 'Không tìm thấy dữ liệu yêu cầu.';
        case 409:
            return 'Dữ liệu bị trùng lặp hoặc xung đột. Vui lòng kiểm tra lại.';
        case 422:
            return 'Dữ liệu không hợp lệ. Vui lòng kiểm tra các trường đã nhập.';
        case 429:
            return 'Bạn đã gửi quá nhiều yêu cầu. Vui lòng thử lại sau giây lát.';
        case 500:
        case 502:
        case 503:
        case 504:
            return 'Lỗi hệ thống. Chúng tôi đang khắc phục, vui lòng quay lại sau.';
        default:
            return `Đã xảy ra lỗi không xác định (${status}). Vui lòng thử lại.`;
    }
};

export const getSpecificErrorMessage = (error: any): string => {
    if (typeof error === 'string') return error;

    // Ưu tiên message từ backend nếu có
    if (error?.response?.data?.message) {
        return error.response.data.message;
    }

    // Nếu backend trả về errors list (validation fields)
    if (error?.response?.data?.errors && Array.isArray(error.response.data.errors)) {
        return error.response.data.errors.join(', ');
    }

    return getErrorMessage(error?.response?.status);
};
