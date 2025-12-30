'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function BookingSuccessPage() {
  const searchParams = useSearchParams();

  const transactionId = searchParams.get('transactionId');

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-teal-50 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-6xl mb-4">✅</div>
          <h1 className="text-3xl font-bold mb-4 text-gray-900">Thanh Toán Thành Công!</h1>
          <p className="text-gray-600 mb-6">
            Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi.
          </p>
          {transactionId && (
            <p className="text-sm text-gray-500 mb-6">
              Mã giao dịch: {transactionId}
            </p>
          )}
          <div className="flex gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all"
            >
              Về trang chủ
            </Link>
            <Link
              href="/bookings"
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all"
            >
              Xem đặt chỗ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

