export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
};

export const formatDateForInput = (dateString: string | undefined): string => {
    if (!dateString) return '';
    // Create a date object. If the string is ISO, it handles it.
    const date = new Date(dateString);
    // Check if valid date
    if (isNaN(date.getTime())) return '';

    // Format to YYYY-MM-DD
    return date.toISOString().split('T')[0];
};

export const formatDateForSubmit = (dateString: string | undefined): string | undefined => {
    if (!dateString) return undefined;
    // If it's already a full ISO string, return it.
    if (dateString.includes('T')) return dateString;
    // If it's YYYY-MM-DD, append time.
    return `${dateString}T00:00:00`;
};