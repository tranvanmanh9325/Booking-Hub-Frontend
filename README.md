# Booking Hub Frontend 🌏✈️

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

## 📖 Giới Thiệu

**Booking Hub Frontend** là giao diện người dùng hiện đại, hiệu năng cao dành cho nền tảng đặt vé và du lịch tổng hợp Booking Hub. Dự án được xây dựng với mục tiêu cung cấp trải nghiệm mượt mà, tốc độ phản hồi nhanh và giao diện thân thiện cho người dùng cuối.

Hệ thống cho phép người dùng thực hiện các tác vụ như:
- 🎬 Đặt vé xem phim.
- 🏨 Đặt phòng khách sạn.
- 🎡 Đặt vé khu vui chơi (đang phát triển).
- 🍽️ Đặt bàn nhà hàng (đang phát triển).

## 🛠️ Công Nghệ Sử Dụng

Dự án sử dụng các công nghệ tiên tiến nhất trong hệ sinh thái React:

- **Core**: [Next.js 16](https://nextjs.org/) (Framework)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Static Type Checking)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) (Utility-first CSS)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) (Bearbones state management)
- **Data Fetching**: [TanStack Query v5](https://tanstack.com/query/latest) (Async state management)
- **Forms**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) (Form validation)
- **Testing**:
  - [Jest](https://jestjs.io/) (Unit Testing)
  - [Playwright](https://playwright.dev/) (E2E Testing)
- **Linting**: ESLint, Prettier

## 📂 Cấu Trúc Dự Án

```
Booking-Hub-Frontend/
├── components/        # Các UI component tái sử dụng (Buttons, Inputs, Cards...)
├── hooks/             # Custom React Hooks
├── lib/               # Các thư viện tiện ích, cấu hình API (axios instance...)
├── pages/             # Next.js Pages Router (Routing của ứng dụng)
├── public/            # Static assets (images, icons)
├── store/             # Global Store (Zustand)
├── styles/            # Global styles, Tailwind directives
├── types/             # TypeScript type definitions
├── utils/             # Các hàm tiện ích nhỏ (helpers, formatters)
├── __tests__/         # Unit tests directory
├── e2e/               # End-to-end tests
└── .env.example       # Mẫu cấu hình biến môi trường
```

## 🚀 Bắt Đầu

### 1. Yêu Cầu Hệ Thống

Đảm bảo bạn đã cài đặt các công cụ sau:
- **Node.js**: >= 20.9.0
- **npm** hoặc **yarn**

### 2. Cài Đặt

Clone repository và cài đặt các dependencies:

```bash
git clone https://github.com/your-username/booking-hub.git
cd Booking-Hub-Frontend
npm install
```

### 3. Cấu Hình Môi Trường

Tạo file `.env.local` từ file mẫu `.env.example`:

```bash
cp .env.example .env.local
```

Cập nhật các giá trị môi trường trong file `.env.local`:

```env
# URL của Backend API
NEXT_PUBLIC_API_URL=http://localhost:8080

# Google OAuth Client ID (cho chức năng đăng nhập Google)
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_actual_google_client_id_here
```

### 4. Chạy Ứng Dụng (Development)

Khởi chạy server development tại `http://localhost:3000`:

```bash
npm run dev
```

### 5. Build cho Production

```bash
npm run build
npm start
```

## 🧪 Testing

Dự án chú trọng vào chất lượng mã nguồn thông qua kiểm thử tự động.

**Chạy Unit Tests (Jest):**
```bash
npm test
# Chế độ watch
npm run test:watch
```

**Chạy E2E Tests (Playwright):**
```bash
npm run test:e2e
```

**Kiểm tra Linting & Type:**
```bash
npm run lint
npm run type-check
```

## 🤝 Backend API

Frontend này được thiết kế để kết nối với **Booking Hub Backend** (Spring Boot). Đảm bảo rằng backend services đang chạy tại địa chỉ được cấu hình trong `NEXT_PUBLIC_API_URL`.

Để biết thêm chi tiết về API và cấu trúc Backend, vui lòng tham khảo README trong thư mục `Booking-Hub-Backend`.

## 📝 License

Dự án này được phân phối dưới giấy phép [MIT](LICENSE).

---
*Được phát triển bởi đội ngũ Booking Hub.*
