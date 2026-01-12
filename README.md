# High-Concurrency-Booking - Nền Tảng Du Lịch Tổng Hợp

## 📋 Tổng Quan Dự Án

Dự án **High-Concurrency-Booking** là một nền tảng du lịch tổng hợp, cho phép người dùng đặt vé xem phim, đặt phòng khách sạn, đặt vé khu vui chơi giải trí, đặt bàn nhà hàng và nhiều dịch vụ du lịch khác trong một hệ thống thống nhất. Hệ thống được thiết kế để xử lý lượng truy cập cao và đảm bảo tính nhất quán dữ liệu trong môi trường đa người dùng.

### 🎯 Trạng Thái Hiện Tại

**✅ Đã Hoàn Thành (MVP):**

- Hệ thống xác thực người dùng (JWT)
- Đặt vé xem phim (tìm kiếm, lịch chiếu, chọn ghế, booking)
- Đặt phòng khách sạn (tìm kiếm, xem phòng, booking)
- Quản lý thanh toán (payment processing, refund)
- Quản lý booking (xem lịch sử, hủy booking)
- Frontend hoàn chỉnh với UI/UX hiện đại

**🔄 Đang Phát Triển:**

- Restaurant booking service (UI đã có, backend chưa)
- Amusement park booking service (UI đã có, backend chưa)
- Reviews & ratings UI (Model đã có)
- Email notifications (Email service đã có, cần mở rộng)
- Password reset functionality
- Pagination cho list endpoints

**✅ Đã Cải Thiện (So với báo cáo ban đầu):**

- ✅ Global Exception Handler với ErrorResponse format thống nhất
- ✅ Custom Exception Classes (9 classes)
- ✅ Input Validation & Sanitization (XSS protection)
- ✅ Rate Limiting (Bucket4j với Redis)
- ✅ JWT Refresh Token mechanism
- ✅ Logging (SLF4J + Logback)
- ✅ Transaction Management
- ✅ API Client Layer (Frontend)
- ✅ Docker & Docker Compose setup
- ✅ Database Migrations (Flyway)
- ✅ Google OAuth authentication
- ✅ Partnership request feature

**📝 Kế Hoạch:**

- Combo & packages
- Recommendation engine
- Mobile apps
- Advanced caching & optimization

## 🚀 Quick Start

### Yêu Cầu Hệ Thống

- **Java**: JDK 21+
- **Node.js**: 18.x+
- **PostgreSQL**: 14.x+
- **Redis**: 6.x+ (tùy chọn, có thể chạy không có Redis)
- **Maven**: 3.8+ (hoặc dùng Maven Wrapper có sẵn)

### Cài Đặt và Chạy

#### 1. Setup Database

```bash
# Tạo database PostgreSQL
createdb booking_db

# Hoặc sử dụng psql
psql -U postgres
CREATE DATABASE booking_db;
```

#### 2. Cấu hình Backend

Cập nhật thông tin database trong `Booking-Hub-Backend/src/main/resources/application.properties` hoặc tốt hơn là sử dụng biến môi trường.

Dự án cung cấp file `.env.example`. Bạn có thể copy thành `.env` (nếu chạy với Docker Compose hoặc setup env local) hoặc set biến môi trường trực tiếp.

Các biến môi trường quan trọng:

| Biến | Mô tả | Mặc định/Ví dụ |
|------|-------|----------------|
| `DB_PASSWORD` | Mật khẩu PostgreSQL | `your_password` |
| `JWT_SECRET` | Secret key để ký JWT | `your_secure_secret` |
| `REDIS_PASSWORD` | Mật khẩu Redis (nếu có) | Để trống |
| `MAIL_USERNAME` | Gmail username để gửi mail | `email@gmail.com` |
| `MAIL_PASSWORD` | Gmail App Password (không phải pass đăng nhập) | `xxxx xxxx xxxx xxxx` |
| `PARTNERSHIP_RECIPIENT_EMAIL` | Email nhận yêu cầu đối tác | `admin@example.com` |

#### 3. Chạy Backend

```bash
cd Booking-Hub-Backend
./mvnw spring-boot:run
# Hoặc trên Windows: mvnw.cmd spring-boot:run
```

Backend sẽ chạy tại: `http://localhost:8080`

- Health check: `http://localhost:8080/api/health`
- Swagger UI: `http://localhost:8080/swagger-ui.html`
- API Docs: `http://localhost:8080/api-docs`

#### 4. Chạy Frontend

Trước khi chạy, hãy copy `.env.example` thành `.env.local` và cập nhật các giá trị cần thiết:

```bash
cp .env.example .env.local
```

Cài đặt dependencies và chạy:

```bash
cd Booking-Hub-Frontend
npm install
npm run dev
```

Frontend sẽ chạy tại: `http://localhost:3000`

### Cấu Trúc Dự Án Hiện Tại

```
Booking Hub/
├── Booking-Hub-Backend/        # Spring Boot Backend
│   ├── src/
│   │   └── main/
│   │       ├── java/com/example/booking/
│   │       │   ├── config/     # Security, Redis, JWT config
│   │       │   ├── controller/ # REST Controllers
│   │       │   │   ├── AuthController.java
│   │       │   │   ├── MovieController.java
│   │       │   │   ├── HotelController.java
│   │       │   │   ├── CinemaController.java
│   │       │   │   ├── PaymentController.java
│   │       │   │   └── HealthController.java
│   │       │   ├── dto/        # Data Transfer Objects
│   │       │   ├── model/      # Entity Models (14 models)
│   │       │   ├── repository/ # JPA Repositories (13 repositories)
│   │       │   ├── service/    # Business Logic
│   │       │   │   ├── AuthService.java
│   │       │   │   ├── MovieService.java
│   │       │   │   ├── HotelService.java
│   │       │   │   └── PaymentService.java
│   │       │   └── util/       # JWT Utilities
│   │       └── resources/
│   │           └── application.properties
│   └── pom.xml
│
└── Booking-Hub-Frontend/       # Next.js Frontend
    ├── src/
    │   ├── app/                # Next.js App Router
    │   │   ├── layout.tsx
    │   │   ├── page.tsx        # Home page
    │   │   ├── login/          # Login page
    │   │   ├── register/       # Register page
    │   │   ├── movies/         # Movies pages
    │   │   │   ├── page.tsx    # Movies list
    │   │   │   └── [id]/       # Movie detail & booking
    │   │   ├── hotels/         # Hotels pages
    │   │   │   ├── page.tsx    # Hotels list
    │   │   │   └── [id]/       # Hotel detail & booking
    │   │   ├── bookings/       # Bookings management
    │   │   │   ├── page.tsx    # Bookings history
    │   │   │   └── success/    # Booking success page
    │   │   └── payment/        # Payment page
    │   ├── contexts/          # React Contexts (Auth)
    │   └── lib/               # API client (api.ts)
    └── package.json
```

## 🎯 Mục Tiêu Dự Án

- Tạo một nền tảng "all-in-one" cho người dùng du lịch
- Xử lý được lượng truy cập cao (high concurrency)
- Cung cấp trải nghiệm đặt chỗ mượt mà, nhanh chóng
- Quản lý tổng hợp các dịch vụ du lịch khác nhau
- Tối ưu hóa doanh thu thông qua gói combo và cross-selling

## 🏗️ Kiến Trúc Hệ Thống

### 1. Kiến Trúc Tổng Thể

```
┌─────────────────────────────────────────────────────────┐
│                    Frontend Layer                        │
│  (Next.js 16 - Responsive Web + Mobile App)             │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────┴────────────────────────────────────┐
│                  API Gateway Layer                       │
│  (Spring Cloud Gateway / Kong / Nginx)                  │
│  - Authentication & Authorization                        │
│  - Rate Limiting                                         │
│  - Load Balancing                                        │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────┴────────────────────────────────────┐
│              Microservices Layer                         │
├─────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │ Movie Service│  │ Hotel Service│  │ Amusement    │  │
│  │              │  │              │  │ Park Service │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │ Restaurant   │  │ Booking      │  │ Payment      │  │
│  │ Service      │  │ Service      │  │ Service      │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │ User Service │  │ Notification │  │ Search       │  │
│  │              │  │ Service      │  │ Service      │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────┴────────────────────────────────────┐
│              Data Layer                                  │
│  - PostgreSQL (Main Database)                            │
│  - Redis (Caching & Session)                             │
│  - MongoDB (Logs & Analytics)                            │
│  - Elasticsearch (Search Engine)                         │
└─────────────────────────────────────────────────────────┘
```

### 2. Công Nghệ Đề Xuất

#### Backend

- **Framework**: Spring Boot 4.0.1 ✅
- **Database**:
  - PostgreSQL (Primary) ✅
  - Redis (Cache, Session) ✅
- **API Documentation**: Swagger/OpenAPI 3.0 ✅
- **Security**: Spring Security, JWT ✅
- **ORM**: Spring Data JPA / Hibernate ✅
- **Microservices**: Spring Cloud (planned)
- **Message Queue**: RabbitMQ / Apache Kafka (planned)
- **Monitoring**: Prometheus, Grafana (planned)

#### Frontend

- **Web**: Next.js 16 với TypeScript ✅
- **State Management**: React Context API ✅
- **UI Framework**: Tailwind CSS ✅
- **API Client**: Axios ✅
- **Mobile**: React Native / Flutter (planned)

#### DevOps & Infrastructure

- **Containerization**: ✅ Docker, Docker Compose (đã có)
- **Orchestration**: Kubernetes (cho production - kế hoạch)
- **CI/CD**: Jenkins / GitLab CI / GitHub Actions (kế hoạch)
- **Cloud**: AWS / Azure / GCP (kế hoạch)
- **Database Migrations**: ✅ Flyway (đã có)

## 🎨 Tính Năng Chi Tiết

### 1. Đặt Vé Xem Phim (Movie Booking) ✅

#### Tính năng đã triển khai

- ✅ **Tìm kiếm phim**: Theo tên phim
- ✅ **Lọc phim**: Theo thể loại (genre), phim đang chiếu
- ✅ **Xem lịch chiếu**: Lịch chiếu theo phim
- ✅ **Chọn ghế**: Chọn nhiều ghế từ danh sách
- ✅ **Đặt vé**: Tạo booking với ghế đã chọn
- ✅ **Quản lý booking**: Xem lịch sử, hủy booking

#### Tính năng kế hoạch

- 📝 **Giữ chỗ tạm thời**: Giữ ghế trong 5-10 phút khi đang thanh toán (Redis distributed lock)
- 📝 **Sơ đồ ghế trực quan**: UI hiển thị sơ đồ rạp
- 📝 **Combo**: Vé + bắp nước, vé + đồ ăn
- 📝 **Đánh giá phim**: Rating và review sau khi xem

#### Database Schema (✅ Đã triển khai)

```sql
- movies (id, title, description, genre, duration, rating, poster_url, trailer_url, release_date, created_at, updated_at)
- cinemas (id, name, address, city, facilities, created_at, updated_at)
- screens (id, cinema_id, name, capacity, screen_type, created_at, updated_at)
- showtimes (id, movie_id, screen_id, start_time, end_time, price, created_at, updated_at)
- seats (id, screen_id, row, number, seat_type, is_available, created_at, updated_at)
- movie_bookings (id, user_id, showtime_id, booking_date, status, total_price, created_at, updated_at)
- booking_seats (id, booking_id, seat_id, price, created_at, updated_at)
```

### 2. Đặt Phòng Khách Sạn (Hotel Booking) ✅

#### Tính năng đã triển khai

- ✅ **Tìm kiếm khách sạn**: Theo tên, theo thành phố
- ✅ **Lọc phòng**: Theo ngày check-in/out, số khách
- ✅ **Xem danh sách phòng**: Thông tin phòng, giá, tiện ích
- ✅ **Đặt phòng**: Tạo booking với thông tin check-in/out
- ✅ **Quản lý booking**: Xem lịch sử, hủy booking

#### Tính năng kế hoạch

- 📝 **Lọc nâng cao**: Giá, sao, tiện ích (wifi, pool, gym, spa...)
- 📝 **Xem phòng trực quan**: 360° view, ảnh phòng, bản đồ
- 📝 **Chính sách hủy**: Free cancellation, non-refundable
- 📝 **Đánh giá**: Rating, review, ảnh từ khách hàng (model đã có)
- 📝 **Combo**: Phòng + bữa sáng, phòng + tour

#### Database Schema (✅ Đã triển khai)

```sql
- hotels (id, name, address, city, star_rating, description, facilities, phone_number, email, created_at, updated_at)
- rooms (id, hotel_id, room_type, max_guests, price_per_night, amenities, created_at, updated_at)
- room_images (id, room_id, image_url, is_primary, created_at, updated_at)
- hotel_bookings (id, user_id, hotel_id, room_id, check_in, check_out, guests, total_price, status, created_at, updated_at)
- hotel_reviews (id, hotel_id, user_id, rating, comment, created_at, updated_at)
```

### 3. Đặt Vé Khu Vui Chơi (Amusement Park Booking)

#### Tính năng chính

- **Danh sách khu vui chơi**: Theme park, water park, adventure park
- **Loại vé**: 1 ngày, nhiều ngày, vé gia đình, vé nhóm
- **Fast Pass**: Vé ưu tiên không xếp hàng
- **Combo**: Vé + đồ ăn, vé + khách sạn gần đó
- **Lịch hoạt động**: Show, parade, event đặc biệt
- **Bản đồ khu vui chơi**: Tương tác, tìm đường

#### Database Schema

```sql
- amusement_parks (id, name, address, city, description, opening_hours)
- park_tickets (id, park_id, ticket_type, price, validity_days, includes)
- park_bookings (id, user_id, park_id, ticket_id, visit_date, quantity, total_price, status)
- park_attractions (id, park_id, name, type, min_height, wait_time)
```

### 4. Đặt Bàn Nhà Hàng (Restaurant Booking)

#### Tính năng chính

- **Tìm kiếm nhà hàng**: Theo món ăn, địa điểm, giá, rating
- **Đặt bàn**: Chọn ngày, giờ, số người
- **Menu trực tuyến**: Xem menu, giá, ảnh món
- **Đặt món trước**: Pre-order khi đặt bàn
- **Đánh giá**: Rating món ăn, dịch vụ
- **Combo**: Bàn + set menu, bàn + đồ uống

#### Database Schema

```sql
- restaurants (id, name, address, city, cuisine_type, price_range, rating, opening_hours)
- restaurant_tables (id, restaurant_id, table_number, capacity, location_type)
- restaurant_bookings (id, user_id, restaurant_id, table_id, booking_date, booking_time, guests, special_requests, status)
- menus (id, restaurant_id, name, description, price, image_url, category)
- restaurant_reviews (id, restaurant_id, user_id, rating, comment, food_rating, service_rating)
```

### 5. Tính Năng Chung

#### User Management

- ✅ **Đăng ký/Đăng nhập**: Email, password (JWT authentication)
- 📝 **Hồ sơ người dùng**: Thông tin cá nhân, sở thích (kế hoạch)
- ✅ **Lịch sử đặt chỗ**: Xem tất cả booking đã thực hiện (movies & hotels)
- 📝 **Yêu thích**: Lưu phim, khách sạn, nhà hàng yêu thích (kế hoạch)
- 📝 **OAuth**: Đăng nhập bằng Google, Facebook (kế hoạch)
- 📝 **Thông báo**: Email, SMS, Push notification (kế hoạch)

#### Booking Management

- ✅ **Thanh toán**: Payment service với nhiều phương thức (Visa, Mastercard, MoMo, ZaloPay, VNPay)
- ✅ **Hủy booking**: Hủy đặt chỗ cho movies & hotels
- ✅ **Xem booking**: Chi tiết booking, lịch sử booking
- 📝 **Giỏ hàng**: Thêm nhiều dịch vụ vào giỏ (kế hoạch)
- 📝 **Xác nhận**: Email/SMS xác nhận booking (kế hoạch)
- 📝 **Hoàn tiền**: Tự động hoàn tiền khi hủy (kế hoạch)

#### Search & Discovery

- ✅ **Tìm kiếm cơ bản**: Tìm kiếm phim và khách sạn theo tên
- 📝 **Tìm kiếm thông minh**: Full-text search với Elasticsearch (kế hoạch)
- 📝 **Gợi ý**: AI/ML gợi ý dựa trên lịch sử (kế hoạch)
- 📝 **Bộ lọc nâng cao**: Nhiều tiêu chí lọc (kế hoạch)
- 📝 **Sắp xếp**: Theo giá, rating, phổ biến, mới nhất (kế hoạch)

#### Combo & Packages

- 📝 **Gói du lịch**: Khách sạn + vé máy bay + tour (kế hoạch)
- 📝 **Combo tiết kiệm**: Giảm giá khi mua nhiều dịch vụ (kế hoạch)
- 📝 **Flash sale**: Khuyến mãi giới hạn thời gian (kế hoạch)
- 📝 **Loyalty program**: Tích điểm, đổi quà (kế hoạch)

#### Reviews & Ratings

- 📝 **Đánh giá**: Rating 1-5 sao (model HotelReview đã có, chưa có UI)
- 📝 **Review**: Viết review chi tiết, đăng ảnh (kế hoạch)
- 📝 **Xác thực**: Chỉ khách đã sử dụng mới được review (kế hoạch)
- 📝 **Phản hồi**: Chủ cửa hàng có thể phản hồi (kế hoạch)

## 🔒 Xử Lý High Concurrency

### 1. Database Level

- **Connection Pooling**: HikariCP với cấu hình tối ưu
- **Read Replicas**: Tách read/write operations
- **Database Sharding**: Chia dữ liệu theo địa lý hoặc loại dịch vụ
- **Indexing**: Tối ưu indexes cho các query thường dùng

### 2. Caching Strategy

- **Redis Cache**:
  - Cache danh sách phim, khách sạn, nhà hàng (TTL: 1-5 phút)
  - Cache thông tin booking đang xử lý
  - Cache session và authentication tokens
  - Distributed locks cho việc giữ chỗ

### 3. Distributed Locking

- **Redis Distributed Lock**:
  - Giữ ghế xem phim (5-10 phút)
  - Giữ phòng khách sạn (15-30 phút)
  - Tránh double booking

### 4. Message Queue

- **Event-Driven Architecture**:
  - Booking events → Payment processing
  - Payment success → Notification service
  - Booking confirmation → Email/SMS service
  - Analytics events → Data warehouse

### 5. Rate Limiting

- **API Rate Limiting**:
  - User level: 100 requests/minute
  - IP level: 1000 requests/minute
  - Sử dụng Redis + Token Bucket algorithm

### 6. Load Balancing

- **Horizontal Scaling**:
  - Multiple instances của mỗi service
  - Load balancer phân phối request
  - Health checks và auto-scaling

### 7. Database Transactions

- **Optimistic Locking**: Version field trong database
- **Pessimistic Locking**: SELECT FOR UPDATE cho critical operations
- **Saga Pattern**: Quản lý distributed transactions

## 📊 Database Design

### Core Tables

#### ✅ Đã Triển Khai

```sql
-- Users
users (
    id BIGINT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(255) UNIQUE,
    password VARCHAR(255) NOT NULL,
    full_name VARCHAR(255),
    avatar_url VARCHAR(255),
    created_at TIMESTAMP,
    updated_at TIMESTAMP
)

-- Movies & Cinemas
movies (
    id, title, description, genre, duration, rating,
    poster_url, trailer_url, release_date, created_at, updated_at
)
cinemas (
    id, name, address, city, facilities, created_at, updated_at
)
screens (
    id, cinema_id, name, capacity, screen_type, created_at, updated_at
)
showtimes (
    id, movie_id, screen_id, start_time, end_time, price, created_at, updated_at
)
seats (
    id, screen_id, row, number, seat_type, is_available, created_at, updated_at
)
movie_bookings (
    id, user_id, showtime_id, booking_date, status, total_price, created_at, updated_at
)
booking_seats (
    id, booking_id, seat_id, price, created_at, updated_at
)

-- Hotels
hotels (
    id, name, address, city, star_rating, description, facilities,
    phone_number, email, created_at, updated_at
)
rooms (
    id, hotel_id, room_type, max_guests, price_per_night, amenities, created_at, updated_at
)
room_images (
    id, room_id, image_url, is_primary, created_at, updated_at
)
hotel_bookings (
    id, user_id, hotel_id, room_id, check_in, check_out, guests,
    total_price, status, created_at, updated_at
)
hotel_reviews (
    id, hotel_id, user_id, rating, comment, created_at, updated_at
)

-- Payments
payments (
    id, booking_id, booking_type, amount, payment_method,
    transaction_id, status, paid_at, created_at, updated_at
)
```

#### 📝 Kế Hoạch

```sql
-- Restaurants
restaurants (
    id, name, address, city, cuisine_type, price_range, rating, opening_hours
)
restaurant_tables (
    id, restaurant_id, table_number, capacity, location_type
)
restaurant_bookings (
    id, user_id, restaurant_id, table_id, booking_date, booking_time,
    guests, special_requests, status
)
menus (
    id, restaurant_id, name, description, price, image_url, category
)
restaurant_reviews (
    id, restaurant_id, user_id, rating, comment, food_rating, service_rating
)

-- Amusement Parks
amusement_parks (
    id, name, address, city, description, opening_hours
)
park_tickets (
    id, park_id, ticket_type, price, validity_days, includes
)
park_bookings (
    id, user_id, park_id, ticket_id, visit_date, quantity, total_price, status
)
park_attractions (
    id, park_id, name, type, min_height, wait_time
)

-- Notifications
notifications (
    id, user_id, type, title, content, is_read, created_at
)
```

## 🔐 Security

- **Authentication**: JWT tokens với refresh token
- **Authorization**: Role-based access control (RBAC)
- **Data Encryption**: Encrypt sensitive data (payment info, personal data)
- **HTTPS**: SSL/TLS cho tất cả communications
- **Input Validation**: Validate và sanitize tất cả inputs
- **SQL Injection Prevention**: Prepared statements, ORM
- **XSS Prevention**: Content Security Policy, input sanitization
- **CSRF Protection**: CSRF tokens

## 📱 API Design

### RESTful API Structure

#### ✅ Đã Triển Khai

```
/api/
├── auth/
│   ├── POST /register              ✅ Đăng ký tài khoản mới
│   └── POST /login                 ✅ Đăng nhập
├── health                          ✅ Health check endpoint
├── api-docs/                       ✅ Swagger API documentation
│
├── movies/
│   ├── GET /movies                 ✅ Lấy danh sách phim
│   ├── GET /movies/{id}            ✅ Lấy chi tiết phim
│   ├── GET /movies/search?q={q}    ✅ Tìm kiếm phim
│   ├── GET /movies/genre/{genre}   ✅ Lấy phim theo thể loại
│   ├── GET /movies/now-showing     ✅ Lấy phim đang chiếu
│   ├── GET /movies/{movieId}/showtimes ✅ Lấy lịch chiếu
│   ├── GET /movies/showtimes/{showtimeId}/seats?screenId={id} ✅ Lấy ghế
│   ├── POST /movies/book           ✅ Đặt vé phim
│   ├── GET /movies/bookings        ✅ Lấy lịch sử đặt vé
│   ├── GET /movies/bookings/{id}   ✅ Lấy chi tiết đặt vé
│   └── PUT /movies/bookings/{id}/cancel ✅ Hủy đặt vé
│
├── cinemas/
│   ├── GET /cinemas                ✅ Lấy danh sách rạp
│   └── GET /cinemas/{id}           ✅ Lấy chi tiết rạp
│
├── hotels/
│   ├── GET /hotels                 ✅ Lấy danh sách khách sạn
│   ├── GET /hotels/{id}            ✅ Lấy chi tiết khách sạn
│   ├── GET /hotels/search?q={q}     ✅ Tìm kiếm khách sạn
│   ├── GET /hotels/city/{city}     ✅ Lấy khách sạn theo thành phố
│   ├── GET /hotels/{hotelId}/rooms ✅ Lấy danh sách phòng
│   ├── POST /hotels/book           ✅ Đặt phòng khách sạn
│   ├── GET /hotels/bookings        ✅ Lấy lịch sử đặt phòng
│   ├── GET /hotels/bookings/{id}   ✅ Lấy chi tiết đặt phòng
│   └── PUT /hotels/bookings/{id}/cancel ✅ Hủy đặt phòng
│
└── payments/
    ├── POST /payments               ✅ Xử lý thanh toán
    ├── GET /payments/{id}           ✅ Lấy chi tiết thanh toán
    ├── GET /payments/transaction/{transactionId} ✅ Lấy theo transaction ID
    ├── GET /payments/booking/{bookingId}?bookingType={type} ✅ Lấy theo booking
    └── POST /payments/{id}/refund   ✅ Hoàn tiền
```

#### 📝 Kế Hoạch Phát Triển

```
/api/
├── restaurants/
│   ├── GET /restaurants
│   ├── GET /restaurants/{id}
│   ├── GET /restaurants/{id}/menu
│   ├── POST /restaurants/{id}/book
│   └── GET /restaurants/{id}/reviews
├── parks/
│   ├── GET /parks
│   ├── GET /parks/{id}
│   ├── GET /parks/{id}/tickets
│   └── POST /parks/{id}/book
└── search/
    └── GET /search?q={query}&type={type}
```

### API Examples

#### Register User

```bash
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123",
  "fullName": "Nguyễn Văn A",
  "phone": "0123456789"
}
```

#### Login

```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

#### Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "type": "Bearer",
  "userId": 1,
  "email": "user@example.com",
  "fullName": "Nguyễn Văn A"
}
```

## 🚀 Roadmap Phát Triển

### Phase 1: MVP (Minimum Viable Product) - ✅ Hoàn thành

- [x] User authentication & authorization ✅
- [x] JWT token-based authentication với refresh token ✅
- [x] Google OAuth authentication ✅
- [x] User registration & login ✅
- [x] Basic frontend web app với Next.js ✅
- [x] API documentation với Swagger ✅
- [x] Movie booking service ✅
- [x] Hotel booking service ✅
- [x] Basic payment integration ✅
- [x] Cinema management ✅
- [x] Booking history & management ✅
- [x] Search functionality (movies & hotels) ✅
- [x] Global exception handling ✅
- [x] Input validation & sanitization ✅
- [x] Rate limiting ✅
- [x] Logging ✅
- [x] Docker setup ✅
- [x] Database migrations với Flyway ✅
- [x] Partnership request feature ✅

### Phase 2: Core Features - 🔄 Đang phát triển

- [ ] Restaurant booking service (UI đã có, backend chưa)
- [ ] Amusement park booking service (UI đã có, backend chưa)
- [ ] Advanced search & filtering
- [ ] Reviews & ratings (UI & functionality) - Model đã có
- [ ] Email notifications (Email service đã có, cần mở rộng)
- [ ] Password reset functionality
- [ ] Mobile responsive design improvements
- [ ] Image upload & management
- [ ] User profile management
- [ ] Pagination cho list endpoints

### Phase 3: Advanced Features - 📝 Kế hoạch

- [ ] Combo & packages
- [ ] Recommendation engine
- [ ] Loyalty program
- [ ] Advanced analytics dashboard
- [ ] Mobile apps (iOS & Android)
- [ ] Real-time seat availability updates
- [ ] Booking confirmation emails
- [ ] Payment gateway integration (VNPay, MoMo)

### Phase 4: Scale & Optimize - 📝 Kế hoạch

- [ ] Performance optimization
- [ ] Load testing & scaling
- [ ] Advanced caching strategies (Redis implementation)
- [ ] Distributed locking for seat/room reservation
- [ ] Machine learning recommendations
- [ ] Multi-language support
- [ ] Microservices architecture migration

## 🧪 Testing Strategy

**Trạng thái hiện tại:**

- ✅ Backend: Đã có `AuthControllerTest` với MockMvc
- ✅ Frontend: Jest setup với React Testing Library
- ⚠️ Cần mở rộng test coverage

**Kế hoạch:**

- **Unit Tests**: JUnit 5, Mockito cho business logic (Backend)
- **Integration Tests**: Spring Boot Test, TestContainers (Backend)
- **Component Tests**: React Testing Library (Frontend)
- **API Tests**: REST Assured, Postman
- **Load Tests**: JMeter, Gatling
- **E2E Tests**: Playwright, Cypress
- **Coverage**: Aim for >80% code coverage

## 📈 Monitoring & Logging

- **Application Monitoring**: Spring Boot Actuator, Micrometer
- **Logging**: Logback, ELK Stack (Elasticsearch, Logstash, Kibana)
- **APM**: New Relic / Datadog / Application Insights
- **Error Tracking**: Sentry
- **Metrics**: Prometheus + Grafana
- **Alerts**: PagerDuty / Opsgenie

## 🛠️ Tính Năng Đã Triển Khai

### Backend ✅

- [x] Spring Boot 4.0.1 với Java 21
- [x] PostgreSQL database integration
- [x] Redis caching configuration (được sử dụng cho rate limiting)
- [x] JWT authentication & authorization
- [x] JWT Refresh Token mechanism
- [x] Spring Security với CORS support
- [x] User registration & login API
- [x] Google OAuth authentication
- [x] Password encryption (BCrypt)
- [x] Swagger/OpenAPI documentation
- [x] Health check endpoint
- [x] **Global Exception Handler** với ErrorResponse format thống nhất
- [x] **Custom Exception Classes**: ResourceNotFoundException, ValidationException, BadRequestException, ConflictException, ForbiddenException, UnauthorizedException, TokenRefreshException
- [x] **Input Validation**: @Valid và @Validated đã được sử dụng
- [x] **Input Sanitization**: XSS protection với Jsoup
- [x] **Rate Limiting**: Bucket4j với Redis cho auth endpoints
- [x] **Logging**: SLF4J + Logback với structured logging
- [x] **Transaction Management**: @Transactional cho write operations
- [x] **Database Migrations**: Flyway với versioned migrations
- [x] **Movie Service**: CRUD operations, search, showtimes, seat selection, booking
- [x] **Hotel Service**: CRUD operations, search, room management, booking
- [x] **Cinema Service**: Cinema & screen management
- [x] **Payment Service**: Payment processing, refund, transaction tracking
- [x] **Partnership Service**: Partnership request với email notification
- [x] **Email Service**: Email sending với Spring Mail
- [x] **Booking Management**: View, cancel bookings for movies & hotels
- [x] **15 Entity Models**: User, Movie, Cinema, Screen, Showtime, Seat, MovieBooking, BookingSeat, Hotel, Room, RoomImage, HotelBooking, HotelReview, Payment, RefreshToken
- [x] **14 Repositories**: Full JPA repository support
- [x] **8 Services**: AuthService, MovieService, HotelService, PaymentService, EmailService, RefreshTokenService, RateLimitingService, XssSanitizerService
- [x] **7 Controllers**: AuthController, MovieController, HotelController, CinemaController, PaymentController, PartnershipController, HealthController

### Frontend ✅

- [x] Next.js 16 với TypeScript
- [x] Tailwind CSS styling
- [x] **Authentication context** (React Context API) với useAuth hook
- [x] **API Client Layer**: Centralized API client với axios
  - Auto token injection
  - Auto token refresh khi 401
  - Centralized error handling
- [x] **API Configuration**: Environment-based API URLs (không còn hardcoded)
- [x] Login & Register pages
- [x] Home page với UI hiện đại và animations
- [x] Token management (localStorage) với refresh token support
- [x] Responsive design
- [x] **Movies Pages**:
  - Movies list với search
  - Movie detail page
  - Movie booking page với seat selection
- [x] **Hotels Pages**:
  - Hotels list với search
  - Hotel detail page
  - Hotel booking page với room selection
- [x] **Bookings Pages**:
  - Movie tickets booking page
  - Hotels booking page
  - Restaurant reservations page
  - Attractions booking page
- [x] **Info Pages**:
  - Booking guide
  - Help center
  - Partnership page
  - Privacy policy
  - Terms of service
- [x] **Payment Page**: Payment processing interface
- [x] **Booking Success Page**: Confirmation page after successful booking
- [x] **Error Boundary**: ErrorBoundary component cho error handling
- [x] **Jest Setup**: Testing framework đã được cấu hình

## 📝 Lưu Ý Khi Phát Triển

### Backend

- JWT secret key trong `application.properties` cần được thay đổi trong production (sử dụng environment variables)
- Database migrations được quản lý bởi Flyway (không còn auto-create)
- Redis được sử dụng cho rate limiting (bắt buộc cho auth endpoints)
- Environment variables cần thiết:
  - `DB_PASSWORD`: PostgreSQL password
  - `JWT_SECRET`: JWT secret key
  - `REDIS_PASSWORD`: Redis password (optional)
  - `MAIL_USERNAME`, `MAIL_PASSWORD`: Email credentials
  - `PARTNERSHIP_RECIPIENT_EMAIL`: Email nhận partnership requests

### Frontend

- Sử dụng file `.env.local` để cấu hình biến môi trường (không commit file này).
- Tham khảo `.env.example` để biết các biến cần thiết.

| Biến | Mô tả | Mặc định/Ví dụ |
|------|-------|----------------|
| `NEXT_PUBLIC_API_URL` | Địa chỉ Backend API | `http://localhost:8080` |
| `NEXT_PUBLIC_GOOGLE_CLIENT_ID` | Client ID cho Google Login | `your_client_id` |

- Token và refresh token được lưu trong localStorage
- API client tự động thêm token và refresh khi cần
- Cần đảm bảo backend đang chạy trước khi test frontend
- Tạo file `.env.local` với nội dung: `NEXT_PUBLIC_API_URL=http://localhost:8080`

## 🐛 Troubleshooting

### Backend không kết nối được database

- Kiểm tra PostgreSQL đã chạy chưa
- Kiểm tra username/password trong `application.properties`
- Kiểm tra database `booking_db` đã được tạo chưa

### Frontend không kết nối được API

- Kiểm tra backend đã chạy tại port 8080 chưa
- Kiểm tra `NEXT_PUBLIC_API_URL` trong `.env.local`
- Kiểm tra CORS configuration trong backend

### Redis connection error

- Redis bắt buộc cho rate limiting (auth endpoints)
- Kiểm tra Redis đã chạy chưa
- Kiểm tra port 6379 có bị chiếm không
- Có thể dùng Docker Compose để chạy Redis tự động

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👥 Team & Contact

- **Project Lead**: [Your Name]
- **Email**: [Your Email]
- **GitHub**: [Your GitHub]

---

**Lưu ý**: Dự án đang trong giai đoạn phát triển. Các tính năng sẽ được cập nhật và mở rộng theo roadmap.
