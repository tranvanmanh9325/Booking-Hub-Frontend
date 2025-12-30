'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { paymentAPI } from '@/lib/api';
import { useAuth } from '@/contexts/AuthContext';

const PAYMENT_METHODS = [
  { value: 'VISA', label: 'Visa', icon: '💳' },
  { value: 'MASTERCARD', label: 'Mastercard', icon: '💳' },
  { value: 'MOMO', label: 'MoMo', icon: '📱' },
  { value: 'ZALOPAY', label: 'ZaloPay', icon: '📱' },
  { value: 'VNPAY', label: 'VNPay', icon: '💳' },
];

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [paymentMethod, setPaymentMethod] = useState('VISA');
  const [processing, setProcessing] = useState(false);

  const bookingId = Number(searchParams.get('bookingId'));
  const bookingType = searchParams.get('bookingType') || '';
  const amount = Number(searchParams.get('amount')) || 0;

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }
  }, [isAuthenticated, router]);

  const handlePayment = async () => {
    if (!bookingId || !bookingType || !amount) {
      alert('Thông tin thanh toán không hợp lệ');
      return;
    }

    try {
      setProcessing(true);
      const response = await paymentAPI.processPayment({
        bookingId,
        bookingType,
        amount,
        paymentMethod,
      });

      if (response.data.status === 'SUCCESS') {
        router.push(`/bookings/success?paymentId=${response.data.id}&transactionId=${response.data.transactionId}`);
      } else {
        alert('Thanh toán thất bại. Vui lòng thử lại.');
      }
    } catch (error: unknown) {
      const errorMessage = (error as { response?: { data?: { message?: string } } })?.response?.data?.message || 'Có lỗi xảy ra khi thanh toán';
      alert(errorMessage);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-teal-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Thanh Toán</h1>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <h2 className="text-xl font-bold mb-6">Thông Tin Thanh Toán</h2>
          
          <div className="mb-6">
            <p className="text-gray-600 mb-2">Số tiền cần thanh toán:</p>
            <p className="text-3xl font-bold text-blue-600">
              {amount.toLocaleString('vi-VN')} đ
            </p>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Phương thức thanh toán:
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {PAYMENT_METHODS.map((method) => (
                <button
                  key={method.value}
                  onClick={() => setPaymentMethod(method.value)}
                  className={`
                    p-4 border-2 rounded-lg transition-all
                    ${paymentMethod === method.value
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'}
                  `}
                >
                  <div className="text-2xl mb-2">{method.icon}</div>
                  <div className="text-sm font-medium">{method.label}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <button
            onClick={handlePayment}
            disabled={processing}
            className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
          >
            {processing ? 'Đang xử lý...' : 'Xác nhận thanh toán'}
          </button>
        </div>
      </div>
    </div>
  );
}

