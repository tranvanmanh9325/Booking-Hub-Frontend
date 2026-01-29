import React from 'react'

interface TermsSectionsPart1Props {
  sectionRefs: React.MutableRefObject<{ [key: string]: HTMLElement | null }>
}

const TermsSectionsPart1: React.FC<TermsSectionsPart1Props> = ({ sectionRefs }) => {
  return (
    <>
      <div
        id="section-1"
        ref={(el) => { sectionRefs.current['section-1'] = el }}
        className="terms-section"
      >
        <h2 className="terms-section-title">1. Chấp Nhận Điều Khoản</h2>
        <p className="terms-text">
          Chào mừng bạn đến với Booking Hub! Bằng việc truy cập, sử dụng, duyệt, hoặc đăng ký tài khoản trên trang web Booking Hub (sau đây gọi là &quot;Trang web&quot;, &quot;Dịch vụ&quot;, &quot;Nền tảng&quot; hoặc &quot;Chúng tôi&quot;), bạn xác nhận rằng bạn đã đọc, hiểu, và đồng ý tuân thủ tất cả các điều khoản và điều kiện được nêu trong tài liệu này, cũng như tất cả các chính sách liên quan, bao gồm nhưng không giới hạn ở Chính Sách Bảo Mật và Chính Sách Cookie của chúng tôi.
        </p>
        <p className="terms-text">
          Các điều khoản này tạo thành một thỏa thuận pháp lý ràng buộc giữa bạn và Booking Hub. Nếu bạn không đồng ý với bất kỳ phần nào của các điều khoản này, bạn không được phép truy cập, sử dụng, hoặc đăng ký tài khoản trên dịch vụ của chúng tôi. Việc bạn tiếp tục sử dụng dịch vụ sau khi các điều khoản này được cập nhật, sửa đổi, hoặc thay đổi được coi là bạn đã đọc, hiểu, và chấp nhận các thay đổi đó.
        </p>
        <p className="terms-text">
          Các điều khoản này áp dụng cho tất cả người dùng của dịch vụ, bao gồm nhưng không giới hạn ở:
        </p>
        <ul className="terms-list">
          <li>Khách truy cập trang web mà không đăng ký tài khoản</li>
          <li>Người dùng đã đăng ký và tạo tài khoản trên nền tảng</li>
          <li>Các nhà cung cấp dịch vụ đối tác của Booking Hub</li>
          <li>Người dùng truy cập thông qua ứng dụng di động, ứng dụng web, hoặc bất kỳ phương tiện nào khác</li>
          <li>Bất kỳ cá nhân hoặc tổ chức nào tương tác với dịch vụ của chúng tôi</li>
        </ul>
        <p className="terms-text">
          Bằng việc sử dụng dịch vụ, bạn xác nhận rằng bạn có đủ năng lực pháp lý để tham gia vào thỏa thuận này. Nếu bạn đang sử dụng dịch vụ thay mặt cho một tổ chức, bạn xác nhận rằng bạn có quyền ràng buộc tổ chức đó với các điều khoản này.
        </p>
        <p className="terms-text">
          Chúng tôi khuyến khích bạn in hoặc lưu trữ một bản sao của các điều khoản này để tham khảo trong tương lai. Nếu bạn có bất kỳ câu hỏi nào về các điều khoản này, vui lòng liên hệ với chúng tôi trước khi sử dụng dịch vụ.
        </p>
      </div>

      <div
        id="section-2"
        ref={(el) => { sectionRefs.current['section-2'] = el }}
        className="terms-section"
      >
        <h2 className="terms-section-title">2. Mô Tả Dịch Vụ</h2>
        <p className="terms-text">
          Booking Hub là một nền tảng trực tuyến tích hợp và toàn diện, được thiết kế để cung cấp các dịch vụ đặt chỗ và đặt vé cho nhiều loại hình dịch vụ du lịch, giải trí, và ẩm thực. Chúng tôi cung cấp một giải pháp một cửa cho tất cả nhu cầu đặt chỗ của bạn, giúp bạn tiết kiệm thời gian và công sức trong việc tìm kiếm và đặt các dịch vụ khác nhau.
        </p>
        <h3 className="terms-subtitle">2.1. Các Dịch Vụ Chính</h3>
        <p className="terms-text">
          Booking Hub cung cấp các dịch vụ sau đây:
        </p>
        <ul className="terms-list">
          <li><strong>Đặt vé xem phim:</strong> Cho phép người dùng tìm kiếm, xem thông tin chi tiết về phim, rạp chiếu, suất chiếu, và đặt vé xem phim tại các rạp chiếu phim đối tác trên toàn quốc. Bạn có thể xem trailer, đánh giá, chọn ghế ngồi, và thanh toán trực tuyến một cách tiện lợi.</li>
          <li><strong>Đặt phòng khách sạn:</strong> Cung cấp dịch vụ đặt phòng tại các khách sạn, resort, homestay, và các cơ sở lưu trú khác trên toàn quốc. Bạn có thể so sánh giá cả, xem đánh giá từ khách hàng, xem hình ảnh và tiện nghi, và đặt phòng với giá tốt nhất.</li>
          <li><strong>Đặt bàn nhà hàng:</strong> Cho phép người dùng đặt bàn trước tại các nhà hàng, quán ăn, quán cà phê đối tác. Bạn có thể xem menu, giá cả, đánh giá, và chọn thời gian phù hợp cho bữa ăn của mình.</li>
          <li><strong>Vé khu vui chơi:</strong> Cung cấp dịch vụ đặt vé cho các khu vui chơi, công viên giải trí, công viên nước, khu du lịch sinh thái, và các điểm tham quan du lịch. Bạn có thể mua vé trước để tránh xếp hàng và nhận được nhiều ưu đãi hấp dẫn.</li>
          <li><strong>Đặt tour du lịch:</strong> Cung cấp các gói tour du lịch trong nước và quốc tế với nhiều lựa chọn đa dạng phù hợp với mọi nhu cầu và ngân sách.</li>
          <li><strong>Đặt phương tiện di chuyển:</strong> Hỗ trợ đặt vé máy bay, vé tàu hỏa, vé xe khách, và thuê xe tự lái.</li>
        </ul>
        <h3 className="terms-subtitle">2.2. Vai Trò của Booking Hub</h3>
        <p className="terms-text">
          Booking Hub hoạt động như một trung gian kết nối giữa người dùng (bạn) và các nhà cung cấp dịch vụ (các đối tác của chúng tôi). Chúng tôi cung cấp nền tảng công nghệ, giao diện người dùng, hệ thống thanh toán, và các công cụ hỗ trợ để tạo điều kiện cho việc đặt chỗ diễn ra thuận tiện và an toàn.
        </p>
        <p className="terms-text">
          <strong>Quan trọng:</strong> Booking Hub không phải là nhà cung cấp dịch vụ trực tiếp. Chúng tôi không sở hữu, vận hành, hoặc quản lý các rạp chiếu phim, khách sạn, nhà hàng, hoặc các điểm tham quan. Do đó, chúng tôi không chịu trách nhiệm về:
        </p>
        <ul className="terms-list">
          <li>Chất lượng, tính an toàn, hoặc tính hợp pháp của các dịch vụ được cung cấp bởi các đối tác</li>
          <li>Độ chính xác của thông tin được cung cấp bởi các đối tác về dịch vụ của họ</li>
          <li>Khả năng của các đối tác trong việc thực hiện các cam kết đặt chỗ</li>
          <li>Bất kỳ thiệt hại, tổn thất, hoặc thương tích nào phát sinh từ việc sử dụng dịch vụ của các đối tác</li>
        </ul>
        <h3 className="terms-subtitle">2.3. Thay Đổi và Cập Nhật Dịch Vụ</h3>
        <p className="terms-text">
          Chúng tôi bảo lưu quyền thay đổi, cập nhật, tạm ngưng, hoặc chấm dứt bất kỳ phần nào của dịch vụ, bao gồm nhưng không giới hạn ở các tính năng, giao diện, nội dung, hoặc điều kiện truy cập, mà không cần thông báo trước hoặc chịu trách nhiệm pháp lý. Chúng tôi có thể thực hiện các thay đổi này để cải thiện dịch vụ, tuân thủ pháp luật, hoặc vì bất kỳ lý do nào khác mà chúng tôi cho là cần thiết.
        </p>
        <p className="terms-text">
          Chúng tôi cũng có quyền giới hạn, tạm ngưng, hoặc chấm dứt quyền truy cập của bạn vào dịch vụ hoặc bất kỳ phần nào của dịch vụ mà không cần thông báo trước, vì bất kỳ lý do nào, bao gồm nhưng không giới hạn ở vi phạm các điều khoản này.
        </p>
      </div>

      <div
        id="section-3"
        ref={(el) => { sectionRefs.current['section-3'] = el }}
        className="terms-section"
      >
        <h2 className="terms-section-title">3. Đăng Ký Tài Khoản</h2>
        <h3 className="terms-subtitle">3.1. Yêu Cầu Đăng Ký</h3>
        <p className="terms-text">
          Để sử dụng đầy đủ các tính năng của dịch vụ Booking Hub, bao gồm đặt chỗ, thanh toán, quản lý đặt chỗ, và nhận các ưu đãi đặc biệt, bạn cần đăng ký và tạo một tài khoản. Một số tính năng cơ bản như duyệt và xem thông tin có thể được truy cập mà không cần đăng ký tài khoản.
        </p>
        <p className="terms-text">
          Khi đăng ký tài khoản, bạn phải:
        </p>
        <ul className="terms-list">
          <li>Cung cấp thông tin chính xác, đầy đủ, và cập nhật, bao gồm nhưng không giới hạn ở tên, địa chỉ email, số điện thoại, và các thông tin cá nhân khác được yêu cầu</li>
          <li>Đảm bảo rằng bạn có quyền sử dụng địa chỉ email và số điện thoại mà bạn cung cấp</li>
          <li>Đủ 18 tuổi hoặc có sự đồng ý và giám sát của người giám hộ hợp pháp (cha mẹ hoặc người giám hộ) để sử dụng dịch vụ</li>
          <li>Tuân thủ tất cả các luật và quy định hiện hành liên quan đến việc sử dụng dịch vụ</li>
          <li>Không tạo nhiều tài khoản để lạm dụng các chương trình khuyến mãi hoặc ưu đãi</li>
        </ul>
        <p className="terms-text">
          Chúng tôi có quyền từ chối đăng ký hoặc đình chỉ, chấm dứt tài khoản của bạn nếu bạn cung cấp thông tin sai lệch, vi phạm các điều khoản này, hoặc vì bất kỳ lý do nào khác mà chúng tôi cho là phù hợp.
        </p>
        <h3 className="terms-subtitle">3.2. Bảo Mật Tài Khoản</h3>
        <p className="terms-text">
          Bạn chịu trách nhiệm hoàn toàn và duy nhất trong việc duy trì tính bảo mật và bảo vệ thông tin đăng nhập tài khoản của bạn, bao gồm nhưng không giới hạn ở tên người dùng, mật khẩu, mã PIN, và các thông tin xác thực khác. Bạn đồng ý:
        </p>
        <ul className="terms-list">
          <li>Không tiết lộ, chia sẻ, hoặc cho phép bất kỳ bên thứ ba nào sử dụng thông tin đăng nhập của bạn</li>
          <li>Tạo mật khẩu mạnh, độc đáo và không sử dụng mật khẩu đã được sử dụng cho các tài khoản khác</li>
          <li>Thay đổi mật khẩu định kỳ và ngay lập tức nếu bạn nghi ngờ tài khoản của mình đã bị xâm phạm</li>
          <li>Đăng xuất khỏi tài khoản của bạn sau mỗi lần sử dụng, đặc biệt khi sử dụng trên các thiết bị công cộng hoặc chia sẻ</li>
          <li>Chịu trách nhiệm cho tất cả các hoạt động, giao dịch, và hành vi diễn ra dưới tài khoản của bạn, bất kể bạn có biết hay không</li>
        </ul>
        <p className="terms-text">
          Bạn phải thông báo ngay lập tức cho Booking Hub nếu phát hiện bất kỳ hoạt động trái phép, đáng ngờ, hoặc không được ủy quyền nào liên quan đến tài khoản của bạn, bao gồm nhưng không giới hạn ở việc truy cập trái phép, thay đổi thông tin không được phép, hoặc các giao dịch bất thường. Chúng tôi sẽ không chịu trách nhiệm cho bất kỳ thiệt hại nào phát sinh từ việc bạn không tuân thủ các yêu cầu bảo mật này.
        </p>
        <h3 className="terms-subtitle">3.3. Quyền Sở Hữu và Chuyển Nhượng Tài Khoản</h3>
        <p className="terms-text">
          Tài khoản của bạn là cá nhân, không thể chuyển nhượng, và chỉ dành cho việc sử dụng của bạn. Bạn không được phép:
        </p>
        <ul className="terms-list">
          <li>Chia sẻ, cho mượn, cho thuê, bán, chuyển nhượng, hoặc chuyển giao tài khoản của bạn cho bất kỳ bên thứ ba nào mà không có sự đồng ý bằng văn bản trước của Booking Hub</li>
          <li>Cho phép bất kỳ người nào khác sử dụng tài khoản của bạn</li>
          <li>Tạo tài khoản thay mặt cho người khác hoặc sử dụng tài khoản của người khác</li>
          <li>Sử dụng tài khoản cho mục đích thương mại, bán lại, hoặc bất kỳ mục đích nào khác ngoài mục đích cá nhân mà không có sự cho phép của chúng tôi</li>
        </ul>
        <p className="terms-text">
          Trong trường hợp bạn vi phạm các quy định này, chúng tôi có quyền đình chỉ hoặc chấm dứt tài khoản của bạn ngay lập tức mà không cần thông báo trước và không cần hoàn lại bất kỳ khoản phí nào đã thanh toán.
        </p>
        <h3 className="terms-subtitle">3.4. Cập Nhật Thông Tin Tài Khoản</h3>
        <p className="terms-text">
          Bạn có trách nhiệm cập nhật thông tin tài khoản của mình để đảm bảo tính chính xác và đầy đủ. Bạn phải thông báo cho chúng tôi ngay lập tức về bất kỳ thay đổi nào trong thông tin của bạn, bao gồm nhưng không giới hạn ở địa chỉ email, số điện thoại, địa chỉ, hoặc các thông tin liên hệ khác. Chúng tôi sẽ không chịu trách nhiệm cho bất kỳ thiệt hại nào phát sinh từ việc bạn không cập nhật thông tin của mình.
        </p>
      </div>

      <div
        id="section-4"
        ref={(el) => { sectionRefs.current['section-4'] = el }}
        className="terms-section"
      >
        <h2 className="terms-section-title">4. Thanh Toán</h2>
        <h3 className="terms-subtitle">4.1. Phương Thức Thanh Toán</h3>
        <p className="terms-text">
          Booking Hub chấp nhận các phương thức thanh toán sau đây để tạo điều kiện thuận tiện cho bạn:
        </p>
        <ul className="terms-list">
          <li><strong>Thẻ tín dụng:</strong> Visa, Mastercard, JCB, và các loại thẻ tín dụng quốc tế khác được chấp nhận</li>
          <li><strong>Thẻ ghi nợ:</strong> Các thẻ ghi nợ nội địa và quốc tế được liên kết với tài khoản ngân hàng</li>
          <li><strong>Ví điện tử:</strong> MoMo, ZaloPay, VNPay, ShopeePay, và các ví điện tử khác được hỗ trợ</li>
          <li><strong>Chuyển khoản ngân hàng:</strong> Chuyển khoản trực tiếp từ tài khoản ngân hàng của bạn</li>
          <li><strong>Thanh toán qua Internet Banking:</strong> Các ngân hàng đối tác hỗ trợ thanh toán trực tuyến</li>
          <li><strong>Thẻ ATM nội địa:</strong> Các thẻ ATM của các ngân hàng trong nước</li>
          <li><strong>Tiền mặt:</strong> Một số dịch vụ có thể hỗ trợ thanh toán bằng tiền mặt tại điểm nhận (tùy thuộc vào nhà cung cấp)</li>
        </ul>
        <p className="terms-text">
          Chúng tôi có quyền thay đổi, thêm, hoặc loại bỏ bất kỳ phương thức thanh toán nào mà không cần thông báo trước. Một số phương thức thanh toán có thể không khả dụng cho một số loại dịch vụ hoặc trong một số khu vực địa lý nhất định.
        </p>
        <h3 className="terms-subtitle">4.2. Thông Tin Thanh Toán</h3>
        <p className="terms-text">
          Bạn đồng ý cung cấp thông tin thanh toán chính xác, đầy đủ, hợp lệ, và cập nhật tại thời điểm đặt chỗ. Bạn xác nhận và đảm bảo rằng:
        </p>
        <ul className="terms-list">
          <li>Bạn có quyền hợp pháp để sử dụng phương thức thanh toán mà bạn cung cấp</li>
          <li>Tất cả thông tin thanh toán mà bạn cung cấp là chính xác và thuộc về bạn hoặc bạn có quyền sử dụng</li>
          <li>Phương thức thanh toán của bạn có đủ số dư hoặc hạn mức để thực hiện giao dịch</li>
          <li>Bạn sẽ cập nhật thông tin thanh toán của mình ngay lập tức nếu có bất kỳ thay đổi nào</li>
        </ul>
        <p className="terms-text">
          Nếu phương thức thanh toán của bạn bị từ chối hoặc không thể xử lý, chúng tôi có quyền từ chối hoặc hủy đặt chỗ của bạn. Chúng tôi không chịu trách nhiệm cho bất kỳ thiệt hại nào phát sinh từ việc bạn cung cấp thông tin thanh toán không chính xác hoặc không hợp lệ.
        </p>
        <h3 className="terms-subtitle">4.3. Xử Lý Thanh Toán và Bảo Mật</h3>
        <p className="terms-text">
          Tất cả các giao dịch thanh toán được xử lý thông qua các cổng thanh toán an toàn và được chứng nhận của bên thứ ba, tuân thủ các tiêu chuẩn bảo mật quốc tế như PCI DSS (Payment Card Industry Data Security Standard). Booking Hub không lưu trữ, xử lý, hoặc có quyền truy cập vào thông tin thẻ tín dụng đầy đủ của bạn.
        </p>
        <p className="terms-text">
          Chúng tôi sử dụng công nghệ mã hóa SSL (Secure Socket Layer) và TLS (Transport Layer Security) để bảo vệ thông tin thanh toán của bạn trong quá trình truyền tải. Tuy nhiên, không có phương thức truyền tải qua Internet hoặc phương thức lưu trữ điện tử nào là 100% an toàn. Mặc dù chúng tôi nỗ lực sử dụng các biện pháp bảo mật thương mại hợp lý, chúng tôi không thể đảm bảo tính bảo mật tuyệt đối của thông tin của bạn.
        </p>
        <p className="terms-text">
          Bằng việc sử dụng dịch vụ thanh toán của chúng tôi, bạn đồng ý rằng chúng tôi có quyền chia sẻ thông tin cần thiết với các nhà cung cấp dịch vụ thanh toán của bên thứ ba để xử lý giao dịch của bạn.
        </p>
        <h3 className="terms-subtitle">4.4. Giá Cả, Phí và Thuế</h3>
        <p className="terms-text">
          Tất cả giá cả được hiển thị trên trang web có thể bao gồm hoặc không bao gồm thuế giá trị gia tăng (VAT), thuế tiêu thụ đặc biệt, phí dịch vụ, phí phục vụ, và các loại thuế, phí khác tùy thuộc vào loại dịch vụ và quy định của từng địa phương. Bạn sẽ được thông báo rõ ràng về tổng số tiền phải thanh toán, bao gồm tất cả các loại thuế và phí, trước khi bạn xác nhận đặt chỗ.
        </p>
        <p className="terms-text">
          Một số giao dịch có thể phải chịu các loại phí sau:
        </p>
        <ul className="terms-list">
          <li><strong>Phí xử lý thanh toán:</strong> Một số phương thức thanh toán có thể phải chịu phí xử lý do ngân hàng hoặc nhà cung cấp dịch vụ thanh toán quy định</li>
          <li><strong>Phí dịch vụ:</strong> Một số dịch vụ có thể có phí dịch vụ được tính riêng, sẽ được hiển thị rõ ràng trước khi bạn xác nhận</li>
          <li><strong>Phí chuyển đổi ngoại tệ:</strong> Nếu bạn thanh toán bằng ngoại tệ, có thể có phí chuyển đổi ngoại tệ được áp dụng theo tỷ giá của ngân hàng hoặc nhà cung cấp dịch vụ thanh toán</li>
        </ul>
        <p className="terms-text">
          Tất cả giá cả được hiển thị bằng đồng Việt Nam (VND) trừ khi có quy định khác. Chúng tôi bảo lưu quyền thay đổi giá cả bất cứ lúc nào mà không cần thông báo trước, tuy nhiên, giá cả đã được xác nhận tại thời điểm đặt chỗ sẽ được áp dụng cho giao dịch đó.
        </p>
        <h3 className="terms-subtitle">4.5. Xác Nhận Thanh Toán và Hóa Đơn</h3>
        <p className="terms-text">
          Sau khi thanh toán thành công, bạn sẽ nhận được email xác nhận đặt chỗ ngay lập tức tại địa chỉ email mà bạn đã đăng ký. Email xác nhận sẽ bao gồm:
        </p>
        <ul className="terms-list">
          <li>Thông tin chi tiết về đặt chỗ của bạn (mã đặt chỗ, loại dịch vụ, ngày giờ, địa điểm)</li>
          <li>Thông tin thanh toán (số tiền đã thanh toán, phương thức thanh toán, ngày giờ thanh toán)</li>
          <li>Hướng dẫn sử dụng dịch vụ và các thông tin quan trọng khác</li>
          <li>Thông tin liên hệ trong trường hợp cần hỗ trợ</li>
        </ul>
        <p className="terms-text">
          Nếu bạn không nhận được email xác nhận trong vòng 24 giờ kể từ thời điểm thanh toán, vui lòng kiểm tra thư mục spam hoặc thùng rác của bạn. Nếu vẫn không tìm thấy, vui lòng liên hệ ngay với bộ phận hỗ trợ khách hàng của chúng tôi. Chúng tôi sẽ cung cấp hóa đơn điện tử hoặc hóa đơn giấy (nếu được yêu cầu) theo quy định của pháp luật hiện hành.
        </p>
        <h3 className="terms-subtitle">4.6. Hoàn Tiền và Xử Lý Giao Dịch</h3>
        <p className="terms-text">
          Trong trường hợp giao dịch của bạn bị từ chối, hủy bỏ, hoặc cần được hoàn tiền, chúng tôi sẽ xử lý theo chính sách hoàn tiền được quy định trong phần &quot;Hủy và Hoàn Tiền&quot; của các điều khoản này. Thời gian xử lý hoàn tiền có thể mất từ 7 đến 30 ngày làm việc tùy thuộc vào phương thức thanh toán và ngân hàng của bạn.
        </p>
      </div>

      <div
        id="section-5"
        ref={(el) => { sectionRefs.current['section-5'] = el }}
        className="terms-section"
      >
        <h2 className="terms-section-title">5. Hủy và Hoàn Tiền</h2>
        <h3 className="terms-subtitle">5.1. Chính Sách Hủy Chung</h3>
        <p className="terms-text">
          Chính sách hủy và hoàn tiền được quy định riêng cho từng loại dịch vụ và nhà cung cấp, phụ thuộc vào nhiều yếu tố như loại dịch vụ, thời điểm hủy, chính sách của nhà cung cấp, và các điều kiện đặc biệt khác. Thông tin chi tiết về chính sách hủy cụ thể sẽ được hiển thị rõ ràng, dễ hiểu tại trang đặt chỗ của từng dịch vụ trước khi bạn xác nhận đặt chỗ.
        </p>
        <p className="terms-text">
          Bạn có trách nhiệm đọc và hiểu rõ chính sách hủy trước khi xác nhận đặt chỗ. Việc bạn xác nhận đặt chỗ được coi là bạn đã đọc, hiểu, và đồng ý với chính sách hủy được áp dụng cho đặt chỗ đó.
        </p>
        <h3 className="terms-subtitle">5.2. Yêu Cầu Hủy Đặt Chỗ</h3>
        <p className="terms-text">
          Để hủy đặt chỗ, bạn có thể thực hiện theo các cách sau:
        </p>
        <ul className="terms-list">
          <li><strong>Hủy trực tuyến:</strong> Đăng nhập vào tài khoản của bạn trên trang web, truy cập phần &quot;Đặt chỗ của tôi&quot; hoặc &quot;Quản lý đặt chỗ&quot;, chọn đặt chỗ cần hủy, và làm theo hướng dẫn để hủy</li>
          <li><strong>Hủy qua ứng dụng di động:</strong> Sử dụng ứng dụng Booking Hub (nếu có) để hủy đặt chỗ một cách nhanh chóng và tiện lợi</li>
          <li><strong>Hủy qua email:</strong> Gửi email yêu cầu hủy đến địa chỉ hỗ trợ khách hàng của chúng tôi, bao gồm mã đặt chỗ và thông tin cần thiết</li>
          <li><strong>Hủy qua điện thoại:</strong> Liên hệ trực tiếp với bộ phận hỗ trợ khách hàng của chúng tôi qua số hotline được cung cấp trên trang web</li>
        </ul>
        <p className="terms-text">
          Yêu cầu hủy phải được thực hiện trong thời hạn quy định theo chính sách của từng dịch vụ. Thời hạn này có thể khác nhau tùy thuộc vào loại dịch vụ và nhà cung cấp. Ví dụ, một số dịch vụ có thể cho phép hủy miễn phí nếu hủy trước 24-48 giờ, trong khi một số dịch vụ khác có thể không cho phép hủy hoặc chỉ cho phép hủy với phí sau khi đã xác nhận.
        </p>
        <p className="terms-text">
          Yêu cầu hủy chỉ được coi là hợp lệ khi chúng tôi đã xác nhận nhận được yêu cầu của bạn. Bạn sẽ nhận được email xác nhận hủy sau khi yêu cầu của bạn được xử lý.
        </p>
        <h3 className="terms-subtitle">5.3. Chính Sách Hoàn Tiền</h3>
        <p className="terms-text">
          Nếu đơn đặt chỗ của bạn đủ điều kiện để được hoàn tiền theo chính sách hủy được áp dụng, số tiền hoàn lại sẽ được xử lý như sau:
        </p>
        <ul className="terms-list">
          <li><strong>Thời gian xử lý:</strong> Số tiền hoàn lại sẽ được xử lý trong vòng 7-30 ngày làm việc (không bao gồm ngày lễ, ngày nghỉ) kể từ ngày yêu cầu hủy được chấp nhận. Thời gian cụ thể phụ thuộc vào phương thức thanh toán ban đầu và ngân hàng của bạn</li>
          <li><strong>Phương thức hoàn tiền:</strong> Số tiền hoàn lại sẽ được trả về phương thức thanh toán ban đầu mà bạn đã sử dụng để thanh toán. Ví dụ, nếu bạn thanh toán bằng thẻ tín dụng, tiền sẽ được hoàn lại vào thẻ tín dụng của bạn</li>
          <li><strong>Số tiền hoàn lại:</strong> Số tiền hoàn lại có thể bằng hoặc ít hơn số tiền bạn đã thanh toán, tùy thuộc vào phí hủy (nếu có) và chính sách hoàn tiền được áp dụng</li>
          <li><strong>Phí xử lý hoàn tiền:</strong> Một số ngân hàng hoặc nhà cung cấp dịch vụ thanh toán có thể tính phí xử lý hoàn tiền. Phí này (nếu có) sẽ được trừ vào số tiền hoàn lại</li>
        </ul>
        <p className="terms-text">
          Trong một số trường hợp đặc biệt, chúng tôi có thể đề xuất hoàn tiền dưới dạng tín dụng hoặc voucher để sử dụng cho các đặt chỗ trong tương lai, với giá trị tương đương hoặc cao hơn số tiền đã thanh toán. Bạn có quyền chấp nhận hoặc từ chối đề xuất này.
        </p>
        <h3 className="terms-subtitle">5.4. Phí Hủy và Điều Kiện</h3>
        <p className="terms-text">
          Tùy thuộc vào thời điểm hủy, loại dịch vụ, và chính sách của nhà cung cấp, bạn có thể phải chịu phí hủy. Phí hủy có thể được tính như sau:
        </p>
        <ul className="terms-list">
          <li><strong>Hủy miễn phí:</strong> Một số dịch vụ cho phép hủy miễn phí nếu hủy trước một khoảng thời gian nhất định (ví dụ: 24 giờ, 48 giờ, hoặc 7 ngày trước thời điểm sử dụng dịch vụ)</li>
          <li><strong>Phí hủy cố định:</strong> Một số dịch vụ có phí hủy cố định được quy định rõ ràng trong chính sách</li>
          <li><strong>Phí hủy theo phần trăm:</strong> Một số dịch vụ tính phí hủy theo phần trăm của tổng giá trị đặt chỗ, tùy thuộc vào thời điểm hủy</li>
          <li><strong>Không hoàn tiền:</strong> Một số dịch vụ có thể không cho phép hủy hoặc hoàn tiền sau một thời điểm nhất định (ví dụ: sau khi đã check-in hoặc sau khi dịch vụ đã bắt đầu)</li>
        </ul>
        <p className="terms-text">
          Phí hủy (nếu có) sẽ được tính và hiển thị rõ ràng, minh bạch khi bạn thực hiện yêu cầu hủy, trước khi bạn xác nhận hủy. Bạn có quyền từ chối hủy nếu không đồng ý với phí hủy được áp dụng.
        </p>
        <h3 className="terms-subtitle">5.5. Hủy Bởi Nhà Cung Cấp</h3>
        <p className="terms-text">
          Trong trường hợp dịch vụ bị hủy bởi nhà cung cấp do lỗi của họ, không có khả năng cung cấp dịch vụ, hoặc các lý do bất khả kháng (bao gồm nhưng không giới hạn ở thiên tai, dịch bệnh, chiến tranh, đình công, hoặc các sự kiện ngoài tầm kiểm soát), bạn sẽ được:
        </p>
        <ul className="terms-list">
          <li>Hoàn lại toàn bộ số tiền đã thanh toán (100% giá trị đặt chỗ)</li>
          <li>Nhận thông báo về lý do hủy và các lựa chọn thay thế (nếu có)</li>
          <li>Được hỗ trợ tìm kiếm các lựa chọn thay thế tương tự (nếu có sẵn và bạn yêu cầu)</li>
        </ul>
        <p className="terms-text">
          Trong trường hợp này, bạn sẽ không phải chịu bất kỳ phí hủy nào và sẽ nhận được email thông báo chi tiết về việc hủy và hoàn tiền.
        </p>
        <h3 className="terms-subtitle">5.6. Hủy Bởi Booking Hub</h3>
        <p className="terms-text">
          Booking Hub bảo lưu quyền hủy đặt chỗ của bạn trong các trường hợp sau:
        </p>
        <ul className="terms-list">
          <li>Bạn vi phạm các điều khoản sử dụng hoặc chính sách của chúng tôi</li>
          <li>Phát hiện gian lận, lừa đảo, hoặc hành vi đáng ngờ trong giao dịch</li>
          <li>Thông tin thanh toán không hợp lệ hoặc thanh toán bị từ chối</li>
          <li>Lỗi kỹ thuật hoặc lỗi hệ thống dẫn đến đặt chỗ không hợp lệ</li>
          <li>Bất kỳ lý do nào khác mà chúng tôi cho là cần thiết để bảo vệ quyền lợi của người dùng khác hoặc tính toàn vẹn của dịch vụ</li>
        </ul>
        <p className="terms-text">
          Trong trường hợp này, chúng tôi sẽ thông báo cho bạn và hoàn lại toàn bộ số tiền đã thanh toán (nếu có) trong vòng 14 ngày làm việc.
        </p>
      </div>

      <div
        id="section-6"
        ref={(el) => { sectionRefs.current['section-6'] = el }}
        className="terms-section"
      >
        <h2 className="terms-section-title">6. Quyền Sở Hữu Trí Tuệ</h2>
        <h3 className="terms-subtitle">6.1. Quyền Sở Hữu của Booking Hub</h3>
        <p className="terms-text">
          Tất cả nội dung trên trang web Booking Hub, bao gồm nhưng không giới hạn ở văn bản, đồ họa, logo, hình ảnh, biểu tượng, phần mềm, mã nguồn, giao diện người dùng, thiết kế, bố cục, cấu trúc, dữ liệu, thông tin, và các tài liệu khác (sau đây gọi chung là &quot;Nội dung&quot;), là tài sản độc quyền của Booking Hub, các đối tác của chúng tôi, hoặc các bên cấp phép của chúng tôi, và được bảo vệ bởi luật bản quyền, nhãn hiệu, bằng sáng chế, bí mật thương mại, và các luật sở hữu trí tuệ khác của Việt Nam và quốc tế.
        </p>
        <p className="terms-text">
          Tên &quot;Booking Hub&quot;, logo, và tất cả các nhãn hiệu, nhãn hiệu dịch vụ, và tên thương mại khác được sử dụng trên trang web là tài sản của Booking Hub hoặc các bên cấp phép của chúng tôi. Bạn không được sử dụng bất kỳ nhãn hiệu, logo, hoặc tên thương mại nào của Booking Hub mà không có sự đồng ý bằng văn bản trước của chúng tôi.
        </p>
        <h3 className="terms-subtitle">6.2. Giấy Phép Sử Dụng Hạn Chế</h3>
        <p className="terms-text">
          Chủ đề điều kiện tuân thủ các điều khoản này, Booking Hub cấp cho bạn một giấy phép hạn chế, không độc quyền, không thể chuyển nhượng, có thể thu hồi, và không thể cấp lại để truy cập và sử dụng trang web và dịch vụ cho mục đích cá nhân, phi thương mại, và hợp pháp của bạn. Giấy phép này không bao gồm bất kỳ quyền nào khác.
        </p>
        <p className="terms-text">
          Bạn không được phép, và bạn đồng ý không:
        </p>
        <ul className="terms-list">
          <li>Sao chép, tái tạo, hoặc nhân bản bất kỳ phần nào của trang web hoặc nội dung mà không có sự đồng ý bằng văn bản của chúng tôi</li>
          <li>Sửa đổi, tạo tác phẩm phái sinh, hoặc tạo ra các phiên bản khác của trang web hoặc nội dung</li>
          <li>Phân phối, xuất bản, truyền tải, hoặc phát tán bất kỳ phần nào của trang web hoặc nội dung</li>
          <li>Bán, cho thuê, cấp phép lại, hoặc khai thác thương mại bất kỳ phần nào của trang web hoặc nội dung</li>
          <li>Sử dụng bất kỳ robot, spider, scraper, hoặc các công cụ tự động khác để truy cập, thu thập, hoặc sử dụng nội dung từ trang web</li>
          <li>Reverse engineer, decompile, hoặc disassemble bất kỳ phần mềm nào được sử dụng trong dịch vụ</li>
          <li>Xóa hoặc thay đổi bất kỳ thông báo về bản quyền, nhãn hiệu, hoặc các thông báo sở hữu khác</li>
          <li>Sử dụng nội dung của trang web cho bất kỳ mục đích thương mại nào mà không có sự đồng ý bằng văn bản của chúng tôi</li>
        </ul>
        <p className="terms-text">
          Vi phạm bất kỳ quy định nào trong phần này có thể dẫn đến việc chấm dứt ngay lập tức giấy phép của bạn và có thể dẫn đến các hậu quả pháp lý nghiêm trọng, bao gồm nhưng không giới hạn ở các khoản bồi thường thiệt hại và chi phí pháp lý.
        </p>
        <h3 className="terms-subtitle">6.3. Nội Dung Người Dùng</h3>
        <p className="terms-text">
          Bằng việc đăng tải, gửi, chia sẻ, hoặc cung cấp bất kỳ nội dung nào trên hoặc thông qua trang web (bao gồm nhưng không giới hạn ở đánh giá, bình luận, hình ảnh, video, âm thanh, văn bản, dữ liệu, hoặc các tài liệu khác, sau đây gọi là &quot;Nội dung Người dùng&quot;), bạn:
        </p>
        <ul className="terms-list">
          <li>Xác nhận và đảm bảo rằng bạn sở hữu hoặc có quyền hợp pháp để cấp phép cho Nội dung Người dùng đó</li>
          <li>Xác nhận rằng Nội dung Người dùng không vi phạm bất kỳ quyền nào của bên thứ ba, bao gồm nhưng không giới hạn ở quyền bản quyền, quyền nhãn hiệu, quyền riêng tư, hoặc quyền công khai</li>
          <li>Cấp cho Booking Hub và các đối tác của chúng tôi một giấy phép không độc quyền, toàn cầu, miễn phí, có thể cấp lại, không thể thu hồi, và vĩnh viễn để sử dụng, sao chép, sửa đổi, tạo tác phẩm phái sinh, phân phối, xuất bản, truyền tải, hiển thị, và thực hiện Nội dung Người dùng đó trong bất kỳ phương tiện, định dạng, hoặc công nghệ nào, cho bất kỳ mục đích nào, bao gồm nhưng không giới hạn ở mục đích thương mại, quảng cáo, và tiếp thị</li>
          <li>Đồng ý rằng Booking Hub có quyền nhưng không có nghĩa vụ xem xét, chỉnh sửa, hoặc xóa bất kỳ Nội dung Người dùng nào mà chúng tôi cho là vi phạm các điều khoản này hoặc không phù hợp</li>
        </ul>
        <p className="terms-text">
          Bạn giữ lại quyền sở hữu đối với Nội dung Người dùng của bạn, nhưng bạn hiểu và đồng ý rằng Booking Hub và các đối tác của chúng tôi có quyền sử dụng Nội dung Người dùng đó theo giấy phép được cấp ở trên mà không cần phải trả bất kỳ khoản phí hoặc bồi thường nào cho bạn.
        </p>
        <h3 className="terms-subtitle">6.4. Báo Cáo Vi Phạm Bản Quyền</h3>
        <p className="terms-text">
          Booking Hub tôn trọng quyền sở hữu trí tuệ của người khác và yêu cầu người dùng của chúng tôi cũng làm như vậy. Nếu bạn tin rằng nội dung trên trang web của chúng tôi vi phạm bản quyền của bạn, vui lòng gửi thông báo vi phạm bản quyền cho chúng tôi theo quy định của pháp luật hiện hành, bao gồm các thông tin cần thiết theo quy định.
        </p>
      </div>

      <div
        id="section-7"
        ref={(el) => { sectionRefs.current['section-7'] = el }}
        className="terms-section"
      >
        <h2 className="terms-section-title">7. Bảo Mật Thông Tin</h2>
        <h3 className="terms-subtitle">7.1. Thu Thập Thông Tin</h3>
        <p className="terms-text">
          Booking Hub thu thập và xử lý thông tin cá nhân của bạn theo Chính Sách Bảo Mật của chúng tôi, được đăng tải trên trang web và có thể được cập nhật định kỳ. Bằng việc sử dụng dịch vụ, bạn đồng ý với việc thu thập, sử dụng, lưu trữ, và chia sẻ thông tin của bạn theo Chính Sách Bảo Mật và các điều khoản này.
        </p>
        <p className="terms-text">
          Thông tin mà chúng tôi có thể thu thập bao gồm nhưng không giới hạn ở:
        </p>
        <ul className="terms-list">
          <li><strong>Thông tin cá nhân:</strong> Tên, địa chỉ email, số điện thoại, địa chỉ, ngày sinh, giới tính, và các thông tin nhận dạng khác</li>
          <li><strong>Thông tin thanh toán:</strong> Thông tin thẻ tín dụng, thẻ ghi nợ, hoặc các phương thức thanh toán khác (được xử lý bởi các nhà cung cấp dịch vụ thanh toán của bên thứ ba)</li>
          <li><strong>Thông tin đặt chỗ:</strong> Lịch sử đặt chỗ, sở thích, và các thông tin liên quan đến việc sử dụng dịch vụ của bạn</li>
          <li><strong>Thông tin kỹ thuật:</strong> Địa chỉ IP, loại trình duyệt, hệ điều hành, thông tin thiết bị, và dữ liệu sử dụng trang web</li>
          <li><strong>Thông tin từ các nguồn khác:</strong> Thông tin từ các mạng xã hội (nếu bạn đăng nhập qua mạng xã hội), các đối tác của chúng tôi, hoặc các nguồn công khai khác</li>
        </ul>
        <p className="terms-text">
          Chúng tôi thu thập thông tin này để cung cấp, cải thiện, và cá nhân hóa dịch vụ của chúng tôi, xử lý các giao dịch của bạn, gửi thông báo và cập nhật, và tuân thủ các nghĩa vụ pháp lý.
        </p>
        <h3 className="terms-subtitle">7.2. Bảo Vệ Thông Tin</h3>
        <p className="terms-text">
          Chúng tôi hiểu tầm quan trọng của việc bảo vệ thông tin cá nhân của bạn và cam kết sử dụng các biện pháp bảo mật kỹ thuật, vật lý, và tổ chức phù hợp để bảo vệ thông tin của bạn khỏi truy cập trái phép, sử dụng, tiết lộ, thay đổi, hoặc phá hủy.
        </p>
        <p className="terms-text">
          Các biện pháp bảo mật mà chúng tôi sử dụng bao gồm nhưng không giới hạn ở:
        </p>
        <ul className="terms-list">
          <li><strong>Mã hóa dữ liệu:</strong> Sử dụng công nghệ mã hóa SSL/TLS để bảo vệ thông tin trong quá trình truyền tải</li>
          <li><strong>Bảo mật máy chủ:</strong> Sử dụng các biện pháp bảo mật vật lý và kỹ thuật để bảo vệ máy chủ và cơ sở dữ liệu</li>
          <li><strong>Kiểm soát truy cập:</strong> Giới hạn quyền truy cập vào thông tin cá nhân chỉ cho những nhân viên, đối tác, và nhà thầu có nhu cầu hợp pháp để biết thông tin đó</li>
          <li><strong>Giám sát và phát hiện:</strong> Sử dụng các công cụ giám sát và phát hiện để phát hiện và ngăn chặn các hoạt động đáng ngờ hoặc vi phạm bảo mật</li>
          <li><strong>Đánh giá bảo mật định kỳ:</strong> Thực hiện các đánh giá bảo mật định kỳ để xác định và khắc phục các lỗ hổng bảo mật</li>
          <li><strong>Đào tạo nhân viên:</strong> Đào tạo nhân viên về các thực hành bảo mật tốt nhất và quy định bảo vệ dữ liệu</li>
        </ul>
        <p className="terms-text">
          Tuy nhiên, không có phương thức truyền tải qua Internet hoặc phương thức lưu trữ điện tử nào là 100% an toàn. Mặc dù chúng tôi nỗ lực sử dụng các biện pháp bảo mật thương mại hợp lý, chúng tôi không thể đảm bảo tính bảo mật tuyệt đối của thông tin của bạn. Bạn sử dụng dịch vụ và cung cấp thông tin với rủi ro của chính bạn.
        </p>
        <h3 className="terms-subtitle">7.3. Chia Sẻ Thông Tin</h3>
        <p className="terms-text">
          Chúng tôi có thể chia sẻ thông tin của bạn trong các trường hợp sau:
        </p>
        <ul className="terms-list">
          <li><strong>Với các nhà cung cấp dịch vụ:</strong> Chúng tôi chia sẻ thông tin cần thiết với các nhà cung cấp dịch vụ (rạp chiếu phim, khách sạn, nhà hàng, v.v.) để thực hiện đặt chỗ của bạn và cung cấp dịch vụ cho bạn</li>
          <li><strong>Với các nhà cung cấp dịch vụ của chúng tôi:</strong> Chúng tôi có thể chia sẻ thông tin với các nhà cung cấp dịch vụ của bên thứ ba giúp chúng tôi vận hành trang web, xử lý thanh toán, gửi email, phân tích dữ liệu, hoặc cung cấp các dịch vụ khác</li>
          <li><strong>Vì lý do pháp lý:</strong> Chúng tôi có thể tiết lộ thông tin nếu được yêu cầu bởi pháp luật, quy định, lệnh của tòa án, hoặc cơ quan chính phủ, hoặc để bảo vệ quyền, tài sản, hoặc an toàn của Booking Hub, người dùng, hoặc người khác</li>
          <li><strong>Trong trường hợp chuyển giao kinh doanh:</strong> Nếu Booking Hub tham gia vào một vụ sáp nhập, mua lại, hoặc bán tài sản, thông tin của bạn có thể được chuyển giao như một phần của giao dịch đó</li>
          <li><strong>Với sự đồng ý của bạn:</strong> Chúng tôi có thể chia sẻ thông tin với bất kỳ bên thứ ba nào khác với sự đồng ý rõ ràng của bạn</li>
        </ul>
        <p className="terms-text">
          <strong>Quan trọng:</strong> Chúng tôi không bán, cho thuê, hoặc trao đổi thông tin cá nhân của bạn cho bất kỳ bên thứ ba nào vì mục đích tiếp thị của họ mà không có sự đồng ý rõ ràng của bạn. Chi tiết đầy đủ về việc thu thập, sử dụng, và chia sẻ thông tin được mô tả trong Chính Sách Bảo Mật của chúng tôi, mà chúng tôi khuyến khích bạn đọc kỹ.
        </p>
        <h3 className="terms-subtitle">7.4. Quyền của Người Dùng Đối Với Thông Tin Cá Nhân</h3>
        <p className="terms-text">
          Bạn có các quyền sau đây đối với thông tin cá nhân của mình:
        </p>
        <ul className="terms-list">
          <li><strong>Quyền truy cập:</strong> Bạn có quyền yêu cầu truy cập vào thông tin cá nhân mà chúng tôi lưu trữ về bạn</li>
          <li><strong>Quyền chỉnh sửa:</strong> Bạn có quyền yêu cầu chỉnh sửa hoặc cập nhật thông tin cá nhân không chính xác hoặc không đầy đủ</li>
          <li><strong>Quyền xóa:</strong> Bạn có quyền yêu cầu xóa thông tin cá nhân của bạn, với điều kiện chúng tôi không có nghĩa vụ pháp lý hoặc lý do hợp pháp khác để giữ lại thông tin đó</li>
          <li><strong>Quyền phản đối:</strong> Bạn có quyền phản đối việc xử lý thông tin cá nhân của bạn cho một số mục đích nhất định</li>
          <li><strong>Quyền rút lại đồng ý:</strong> Nếu việc xử lý thông tin của bạn dựa trên sự đồng ý, bạn có quyền rút lại đồng ý đó bất cứ lúc nào</li>
        </ul>
        <p className="terms-text">
          Để thực hiện các quyền này, vui lòng liên hệ với chúng tôi thông qua thông tin liên hệ được cung cấp trong phần &quot;Liên Hệ&quot; của các điều khoản này. Chúng tôi sẽ phản hồi yêu cầu của bạn trong thời gian hợp lý và theo quy định của pháp luật hiện hành.
        </p>
      </div>
      <style jsx>{`
        .terms-section {
          margin-bottom: var(--spacing-4xl, 64px);
          scroll-margin-top: 100px;
        }

        .terms-section-title {
          font-family: var(--font-family-heading, 'Inter', sans-serif);
          font-size: var(--font-size-2xl, 24px);
          font-weight: var(--font-weight-semibold, 600);
          color: var(--color-on-surface, #1a1a1a);
          margin-bottom: var(--spacing-xl, 24px);
          padding-bottom: var(--spacing-sm, 8px);
          border-bottom: 2px solid var(--color-border, #e5e5e5);
        }

        .terms-subtitle {
          font-family: var(--font-family-heading, 'Inter', sans-serif);
          font-size: var(--font-size-lg, 18px);
          font-weight: var(--font-weight-semibold, 600);
          color: var(--color-on-surface, #1a1a1a);
          margin-top: var(--spacing-xl, 24px);
          margin-bottom: var(--spacing-md, 12px);
        }

        .terms-text {
          font-size: var(--font-size-base, 16px);
          line-height: 1.8;
          color: var(--color-on-surface-secondary, #666666);
          margin-bottom: var(--spacing-md, 12px);
        }

        .terms-list {
          margin: var(--spacing-lg, 16px) 0;
          padding-left: var(--spacing-2xl, 32px);
          color: var(--color-on-surface-secondary, #666666);
        }

        .terms-list li {
          margin-bottom: var(--spacing-md, 12px);
          line-height: 1.8;
          font-size: var(--font-size-base, 16px);
        }
      `}</style>
    </>
  )
}

export default TermsSectionsPart1