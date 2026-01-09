import { z } from 'zod';

// Regex for phone number (10-11 digits)
const phoneRegex = /^[0-9]{10,11}$/;

export const loginSchema = z.object({
    email: z
        .string()
        .min(1, { message: 'Email là bắt buộc' })
        .email({ message: 'Email không hợp lệ' }),
    password: z
        .string()
        .min(1, { message: 'Mật khẩu là bắt buộc' })
        .min(6, { message: 'Mật khẩu phải có ít nhất 6 ký tự' }),
    rememberMe: z.boolean().optional(),
});

export type LoginValues = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
    fullName: z
        .string()
        .min(1, { message: 'Họ và tên là bắt buộc' })
        .min(2, { message: 'Họ và tên phải có ít nhất 2 ký tự' }),
    email: z
        .string()
        .min(1, { message: 'Email là bắt buộc' })
        .email({ message: 'Email không hợp lệ' }),
    phone: z
        .string()
        .optional()
        .refine((val) => !val || phoneRegex.test(val.replace(/\s/g, '')), {
            message: 'Số điện thoại không hợp lệ (10-11 số)',
        }),
    password: z
        .string()
        .min(1, { message: 'Mật khẩu là bắt buộc' })
        .min(6, { message: 'Mật khẩu phải có ít nhất 6 ký tự' }),
    confirmPassword: z
        .string()
        .min(1, { message: 'Vui lòng xác nhận mật khẩu' }),
    agreeToTerms: z
        .boolean()
        .refine((val) => val === true, {
            message: 'Vui lòng đồng ý với điều khoản sử dụng',
        }),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Mật khẩu xác nhận không khớp',
    path: ['confirmPassword'],
});

export type RegisterValues = z.infer<typeof registerSchema>;
