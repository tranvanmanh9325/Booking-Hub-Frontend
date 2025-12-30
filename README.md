# High-Concurrency-Booking - Nền Tảng Du Lịch Tổng Hợp

## 📋 Tổng Quan Dự Án

Dự án **High-Concurrency-Booking** là một nền tảng du lịch tổng hợp, cho phép người dùng đặt vé xem phim, đặt phòng khách sạn, đặt vé khu vui chơi giải trí, đặt bàn nhà hàng và nhiều dịch vụ du lịch khác trong một hệ thống thống nhất. Hệ thống được thiết kế để xử lý lượng truy cập cao và đảm bảo tính nhất quán dữ liệu trong môi trường đa người dùng.

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

Cập nhật thông tin database trong `backend/src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/booking_db
spring.datasource.username=postgres
spring.datasource.password=your_password
```

#### 3. Chạy Backend

```bash
cd backend
./mvnw spring-boot:run
# Hoặc trên Windows: mvnw.cmd spring-boot:run
```

Backend sẽ chạy tại: `http://localhost:8080`

- Health check: `http://localhost:8080/api/health`
- Swagger UI: `http://localhost:8080/swagger-ui.html`
- API Docs: `http://localhost:8080/api-docs`

#### 4. Chạy Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend sẽ chạy tại: `http://localhost:3000`

### Cấu Trúc Dự Án Hiện Tại

```
High-Concurrency-Booking/
├── backend/                    # Spring Boot Backend
│   ├── src/
│   │   └── main/
│   │       ├── java/com/example/booking/
│   │       │   ├── config/     # Security, Redis config
│   │       │   ├── controller/ # REST Controllers
│   │       │   ├── dto/        # Data Transfer Objects
│   │       │   ├── model/      # Entity Models
│   │       │   ├── repository/ # JPA Repositories
│   │       │   ├── service/    # Business Logic
│   │       │   └── util/       # JWT Utilities
│   │       └── resources/
│   │           └── application.properties
│   └── pom.xml
│
└── frontend/                   # Next.js Frontend
    ├── src/
    │   ├── app/                # Next.js App Router
    │   │   ├── layout.tsx
    │   │   ├── page.tsx        # Home page
    │   │   ├── login/          # Login page
    │   │   └── register/       # Register page
    │   ├── contexts/          # React Contexts (Auth)
    │   └── lib/               # API client
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
- **Containerization**: Docker, Docker Compose
- **Orchestration**: Kubernetes (cho production)
- **CI/CD**: Jenkins / GitLab CI / GitHub Actions
- **Cloud**: AWS / Azure / GCP

## 🎨 Tính Năng Chi Tiết

### 1. Đặt Vé Xem Phim (Movie Booking)

#### Tính năng chính:
- **Tìm kiếm phim**: Theo tên, thể loại, rạp, ngày chiếu
- **Xem lịch chiếu**: Lịch chiếu theo rạp, theo phim
- **Chọn ghế**: Sơ đồ ghế trực quan, chọn nhiều ghế
- **Giữ chỗ tạm thời**: Giữ ghế trong 5-10 phút khi đang thanh toán
- **Combo**: Vé + bắp nước, vé + đồ ăn
- **Đánh giá phim**: Rating và review sau khi xem

#### Database Schema:
```sql
- movies (id, title, genre, duration, rating, poster_url, trailer_url)
- cinemas (id, name, address, city, facilities)
- screens (id, cinema_id, name, capacity, screen_type)
- showtimes (id, movie_id, screen_id, start_time, end_time, price)
- seats (id, screen_id, row, number, seat_type, is_available)
- movie_bookings (id, user_id, showtime_id, booking_date, status)
- booking_seats (booking_id, seat_id, price)
```

### 2. Đặt Phòng Khách Sạn (Hotel Booking)

#### Tính năng chính:
- **Tìm kiếm khách sạn**: Theo địa điểm, ngày check-in/out, số khách
- **Lọc nâng cao**: Giá, sao, tiện ích (wifi, pool, gym, spa...)
- **Xem phòng trực quan**: 360° view, ảnh phòng, bản đồ
- **Chính sách hủy**: Free cancellation, non-refundable
- **Đánh giá**: Rating, review, ảnh từ khách hàng
- **Combo**: Phòng + bữa sáng, phòng + tour

#### Database Schema:
```sql
- hotels (id, name, address, city, star_rating, description, facilities)
- rooms (id, hotel_id, room_type, max_guests, price_per_night, amenities)
- room_images (id, room_id, image_url, is_primary)
- hotel_bookings (id, user_id, hotel_id, room_id, check_in, check_out, guests, total_price, status)
- hotel_reviews (id, hotel_id, user_id, rating, comment, created_at)
```

### 3. Đặt Vé Khu Vui Chơi (Amusement Park Booking)

#### Tính năng chính:
- **Danh sách khu vui chơi**: Theme park, water park, adventure park
- **Loại vé**: 1 ngày, nhiều ngày, vé gia đình, vé nhóm
- **Fast Pass**: Vé ưu tiên không xếp hàng
- **Combo**: Vé + đồ ăn, vé + khách sạn gần đó
- **Lịch hoạt động**: Show, parade, event đặc biệt
- **Bản đồ khu vui chơi**: Tương tác, tìm đường

#### Database Schema:
```sql
- amusement_parks (id, name, address, city, description, opening_hours)
- park_tickets (id, park_id, ticket_type, price, validity_days, includes)
- park_bookings (id, user_id, park_id, ticket_id, visit_date, quantity, total_price, status)
- park_attractions (id, park_id, name, type, min_height, wait_time)
```

### 4. Đặt Bàn Nhà Hàng (Restaurant Booking)

#### Tính năng chính:
- **Tìm kiếm nhà hàng**: Theo món ăn, địa điểm, giá, rating
- **Đặt bàn**: Chọn ngày, giờ, số người
- **Menu trực tuyến**: Xem menu, giá, ảnh món
- **Đặt món trước**: Pre-order khi đặt bàn
- **Đánh giá**: Rating món ăn, dịch vụ
- **Combo**: Bàn + set menu, bàn + đồ uống

#### Database Schema:
```sql
- restaurants (id, name, address, city, cuisine_type, price_range, rating, opening_hours)
- restaurant_tables (id, restaurant_id, table_number, capacity, location_type)
- restaurant_bookings (id, user_id, restaurant_id, table_id, booking_date, booking_time, guests, special_requests, status)
- menus (id, restaurant_id, name, description, price, image_url, category)
- restaurant_reviews (id, restaurant_id, user_id, rating, comment, food_rating, service_rating)
```

### 5. Tính Năng Chung

#### User Management
- **Đăng ký/Đăng nhập**: Email, SĐT, OAuth (Google, Facebook)
- **Hồ sơ người dùng**: Thông tin cá nhân, sở thích
- **Lịch sử đặt chỗ**: Xem tất cả booking đã thực hiện
- **Yêu thích**: Lưu phim, khách sạn, nhà hàng yêu thích
- **Thông báo**: Email, SMS, Push notification

#### Booking Management
- **Giỏ hàng**: Thêm nhiều dịch vụ vào giỏ
- **Thanh toán**: Nhiều phương thức (Visa, Mastercard, MoMo, ZaloPay, VNPay)
- **Xác nhận**: Email/SMS xác nhận booking
- **Hủy/Đổi**: Chính sách hủy, đổi linh hoạt
- **Hoàn tiền**: Tự động hoàn tiền khi hủy

#### Search & Discovery
- **Tìm kiếm thông minh**: Full-text search với Elasticsearch
- **Gợi ý**: AI/ML gợi ý dựa trên lịch sử
- **Bộ lọc**: Nhiều tiêu chí lọc
- **Sắp xếp**: Theo giá, rating, phổ biến, mới nhất

#### Combo & Packages
- **Gói du lịch**: Khách sạn + vé máy bay + tour
- **Combo tiết kiệm**: Giảm giá khi mua nhiều dịch vụ
- **Flash sale**: Khuyến mãi giới hạn thời gian
- **Loyalty program**: Tích điểm, đổi quà

#### Reviews & Ratings
- **Đánh giá**: Rating 1-5 sao
- **Review**: Viết review chi tiết, đăng ảnh
- **Xác thực**: Chỉ khách đã sử dụng mới được review
- **Phản hồi**: Chủ cửa hàng có thể phản hồi

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
```

#### 📝 Kế Hoạch

```sql
-- Bookings (Polymorphic)
bookings (
    id, user_id, booking_type, 
    service_id, status, total_price, 
    booking_date, created_at, updated_at
)

-- Payments
payments (
    id, booking_id, amount, payment_method, 
    transaction_id, status, paid_at, created_at
)

-- Notifications
notifications (
    id, user_id, type, title, content, 
    is_read, created_at
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
│   ├── POST /register      ✅ Đăng ký tài khoản mới
│   └── POST /login         ✅ Đăng nhập
├── health                  ✅ Health check endpoint
└── api-docs/               ✅ Swagger API documentation
```

#### 📝 Đang Phát Triển

```
/api/
├── movies/
│   ├── GET /movies
│   ├── GET /movies/{id}
│   ├── GET /movies/{id}/showtimes
│   ├── POST /movies/{id}/book
│   └── GET /cinemas
├── hotels/
│   ├── GET /hotels
│   ├── GET /hotels/{id}
│   ├── GET /hotels/{id}/rooms
│   ├── POST /hotels/{id}/book
│   └── GET /hotels/{id}/reviews
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
├── bookings/
│   ├── GET /bookings
│   ├── GET /bookings/{id}
│   ├── PUT /bookings/{id}/cancel
│   └── GET /bookings/{id}/invoice
├── payments/
│   ├── POST /payments
│   ├── GET /payments/{id}
│   └── POST /payments/{id}/refund
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

### Phase 1: MVP (Minimum Viable Product) - Đang phát triển
- [x] User authentication & authorization ✅
- [x] JWT token-based authentication ✅
- [x] User registration & login ✅
- [x] Basic frontend web app với Next.js ✅
- [x] API documentation với Swagger ✅
- [ ] Movie booking service
- [ ] Hotel booking service
- [ ] Basic payment integration

### Phase 2: Core Features - Kế hoạch
- [ ] Restaurant booking service
- [ ] Amusement park booking service
- [ ] Search & filtering
- [ ] Reviews & ratings
- [ ] Email/SMS notifications
- [ ] Mobile responsive design improvements

### Phase 3: Advanced Features - Kế hoạch
- [ ] Combo & packages
- [ ] Recommendation engine
- [ ] Loyalty program
- [ ] Advanced analytics dashboard
- [ ] Mobile apps (iOS & Android)

### Phase 4: Scale & Optimize - Kế hoạch
- [ ] Performance optimization
- [ ] Load testing & scaling
- [ ] Advanced caching strategies
- [ ] Machine learning recommendations
- [ ] Multi-language support

## 🧪 Testing Strategy

- **Unit Tests**: JUnit, Mockito cho business logic
- **Integration Tests**: Spring Boot Test, TestContainers
- **API Tests**: REST Assured, Postman
- **Load Tests**: JMeter, Gatling
- **E2E Tests**: Selenium, Cypress
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
- [x] Redis caching configuration
- [x] JWT authentication & authorization
- [x] Spring Security với CORS support
- [x] User registration & login API
- [x] Password encryption (BCrypt)
- [x] Swagger/OpenAPI documentation
- [x] Health check endpoint

### Frontend ✅
- [x] Next.js 16 với TypeScript
- [x] Tailwind CSS styling
- [x] Authentication context (React Context API)
- [x] Login & Register pages
- [x] Home page với UI hiện đại
- [x] API client với axios
- [x] Token management (localStorage)
- [x] Responsive design

## 📝 Lưu Ý Khi Phát Triển

### Backend
- JWT secret key trong `application.properties` cần được thay đổi trong production
- Database sẽ tự động tạo tables khi chạy lần đầu (ddl-auto=update)
- Redis hiện tại chưa bắt buộc, có thể chạy backend mà không có Redis

### Frontend
- API URL được cấu hình trong `.env.local`
- Token được lưu trong localStorage
- Cần đảm bảo backend đang chạy trước khi test frontend

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
- Kiểm tra Redis đã chạy chưa (hoặc có thể bỏ qua nếu chưa cần)
- Kiểm tra port 6379 có bị chiếm không

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
