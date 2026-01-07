import React from 'react'

interface TermsSectionsPart2Props {
  sectionRefs: React.MutableRefObject<{ [key: string]: HTMLElement | null }>
}

const TermsSectionsPart2: React.FC<TermsSectionsPart2Props> = ({ sectionRefs }) => {
  return (
    <>
      <div
        id="section-8"
        ref={(el) => { sectionRefs.current['section-8'] = el }}
        className="terms-section"
      >
        <h2 className="terms-section-title">8. Hành Vi Người Dùng</h2>
        <h3 className="terms-subtitle">8.1. Hành Vi Bị Cấm</h3>
        <p className="terms-text">
          Để đảm bảo một môi trường an toàn, công bằng, và tôn trọng cho tất cả người dùng, bạn đồng ý không sử dụng dịch vụ để thực hiện bất kỳ hành vi nào sau đây:
        </p>
        <ul className="terms-list">
          <li><strong>Vi phạm pháp luật:</strong> Vi phạm bất kỳ luật pháp, quy định, quy tắc, hoặc quy chuẩn nào có hiệu lực tại Việt Nam hoặc quốc tế, bao gồm nhưng không giới hạn ở luật dân sự, hình sự, thương mại, thuế, và các quy định về bảo vệ người tiêu dùng</li>
          <li><strong>Nội dung bất hợp pháp hoặc có hại:</strong> Gửi, truyền, đăng tải, hoặc chia sẻ bất kỳ nội dung nào bất hợp pháp, có hại, đe dọa, lạm dụng, quấy rối, phân biệt đối xử, kỳ thị, xúc phạm, bôi nhọ, hoặc vi phạm quyền của người khác, bao gồm quyền riêng tư, quyền công khai, quyền bản quyền, hoặc các quyền sở hữu trí tuệ khác</li>
          <li><strong>Gian lận và lừa đảo:</strong> Giả mạo danh tính, cung cấp thông tin sai lệch, gian lận, lừa đảo, hoặc cố gắng đánh lừa người khác hoặc Booking Hub</li>
          <li><strong>Can thiệp hệ thống:</strong> Can thiệp, phá vỡ, làm gián đoạn, hoặc cố gắng làm gián đoạn hoạt động bình thường của trang web, máy chủ, mạng, hoặc dịch vụ, bao gồm nhưng không giới hạn ở việc tấn công từ chối dịch vụ (DDoS), tấn công brute force, hoặc các hình thức tấn công mạng khác</li>
          <li><strong>Truy cập trái phép:</strong> Sử dụng robot, spider, crawler, scraper, hoặc các công cụ tự động, phần mềm, hoặc phương thức khác để truy cập, thu thập, hoặc khai thác dữ liệu từ trang web mà không có sự cho phép bằng văn bản rõ ràng của Booking Hub</li>
          <li><strong>Thu thập thông tin trái phép:</strong> Thu thập, lưu trữ, hoặc sử dụng thông tin cá nhân của người dùng khác mà không có sự đồng ý của họ hoặc vi phạm quy định về bảo vệ dữ liệu</li>
          <li><strong>Spam và quảng cáo:</strong> Gửi spam, email rác, tin nhắn quảng cáo không được yêu cầu, hoặc thực hiện bất kỳ hình thức tiếp thị không được phép nào</li>
          <li><strong>Lạm dụng hệ thống:</strong> Tạo nhiều tài khoản để lạm dụng các chương trình khuyến mãi, ưu đãi, hoặc tính năng của dịch vụ</li>
          <li><strong>Bán lại dịch vụ:</strong> Bán lại, cho thuê, hoặc khai thác thương mại dịch vụ hoặc quyền truy cập vào dịch vụ mà không có sự đồng ý bằng văn bản của Booking Hub</li>
          <li><strong>Phát tán mã độc:</strong> Phát tán virus, malware, trojan, hoặc bất kỳ mã độc hại nào khác</li>
          <li><strong>Xâm phạm quyền riêng tư:</strong> Xâm phạm quyền riêng tư của người khác, bao gồm việc theo dõi, quấy rối, hoặc thu thập thông tin về người khác mà không có sự đồng ý</li>
        </ul>
        <h3 className="terms-subtitle">8.2. Hậu Quả Vi Phạm</h3>
        <p className="terms-text">
          Vi phạm bất kỳ điều khoản nào trong phần này, hoặc bất kỳ phần nào khác của các điều khoản này, có thể dẫn đến một hoặc nhiều hậu quả sau đây, tùy thuộc vào mức độ nghiêm trọng của vi phạm:
        </p>
        <ul className="terms-list">
          <li><strong>Cảnh báo:</strong> Chúng tôi có thể gửi cảnh báo bằng văn bản cho bạn về hành vi vi phạm</li>
          <li><strong>Đình chỉ tạm thời:</strong> Chúng tôi có quyền đình chỉ tạm thời quyền truy cập của bạn vào dịch vụ hoặc một phần của dịch vụ trong một khoảng thời gian nhất định</li>
          <li><strong>Chấm dứt tài khoản:</strong> Chúng tôi có quyền chấm dứt ngay lập tức và vĩnh viễn tài khoản của bạn và quyền truy cập vào dịch vụ mà không cần thông báo trước hoặc hoàn lại bất kỳ khoản phí nào</li>
          <li><strong>Hủy đặt chỗ:</strong> Chúng tôi có quyền hủy bỏ tất cả các đặt chỗ hiện tại và tương lai của bạn mà không cần hoàn tiền</li>
          <li><strong>Khởi kiện pháp lý:</strong> Chúng tôi có quyền khởi kiện pháp lý chống lại bạn để yêu cầu bồi thường thiệt hại, cấm hành vi vi phạm, hoặc các biện pháp pháp lý khác theo quy định của pháp luật</li>
          <li><strong>Báo cáo cơ quan chức năng:</strong> Chúng tôi có quyền báo cáo hành vi vi phạm của bạn cho các cơ quan chức năng có thẩm quyền nếu hành vi đó vi phạm pháp luật</li>
        </ul>
        <p className="terms-text">
          Chúng tôi bảo lưu quyền áp dụng bất kỳ biện pháp nào mà chúng tôi cho là phù hợp để bảo vệ dịch vụ, người dùng khác, và quyền lợi của chúng tôi. Bạn hiểu và đồng ý rằng chúng tôi không có nghĩa vụ phải cảnh báo bạn trước khi áp dụng các biện pháp này.
        </p>
        <h3 className="terms-subtitle">8.3. Báo Cáo Hành Vi Vi Phạm</h3>
        <p className="terms-text">
          Nếu bạn phát hiện bất kỳ hành vi vi phạm nào từ người dùng khác, vui lòng báo cáo cho chúng tôi ngay lập tức thông qua các kênh liên hệ được cung cấp. Chúng tôi sẽ điều tra và xử lý các báo cáo một cách nghiêm túc và kịp thời.
        </p>
      </div>

      <div
        id="section-9"
        ref={(el) => { sectionRefs.current['section-9'] = el }}
        className="terms-section"
      >
        <h2 className="terms-section-title">9. Giới Hạn Trách Nhiệm</h2>
        <h3 className="terms-subtitle">9.1. Dịch Vụ "Như Hiện Có"</h3>
        <p className="terms-text">
          Dịch vụ được cung cấp "như hiện có" (AS IS) và "như có sẵn" (AS AVAILABLE) mà không có bất kỳ bảo đảm, tuyên bố, hoặc cam kết nào, dù là rõ ràng hay ngụ ý, bao gồm nhưng không giới hạn ở các bảo đảm về tính thương mại, tính phù hợp cho một mục đích cụ thể, tính không vi phạm, tính chính xác, tính đầy đủ, hoặc tính liên tục của dịch vụ.
        </p>
        <p className="terms-text">
          Booking Hub không đảm bảo, cam kết, hoặc tuyên bố rằng:
        </p>
        <ul className="terms-list">
          <li>Dịch vụ sẽ không bị gián đoạn, không có lỗi, hoặc hoàn toàn an toàn</li>
          <li>Dịch vụ sẽ đáp ứng yêu cầu hoặc kỳ vọng của bạn</li>
          <li>Dịch vụ sẽ có sẵn tại mọi thời điểm hoặc tại mọi địa điểm</li>
          <li>Bất kỳ lỗi hoặc khiếm khuyết nào trong dịch vụ sẽ được sửa chữa</li>
          <li>Dịch vụ không chứa virus, malware, hoặc các thành phần độc hại khác</li>
          <li>Thông tin trên trang web là chính xác, đầy đủ, hoặc cập nhật</li>
        </ul>
        <h3 className="terms-subtitle">9.2. Giới Hạn Trách Nhiệm</h3>
        <p className="terms-text">
          Trong phạm vi tối đa được phép bởi pháp luật hiện hành, Booking Hub, các công ty liên kết, đối tác, giám đốc, nhân viên, đại lý, nhà thầu, hoặc các bên liên quan khác của chúng tôi (sau đây gọi chung là "Các Bên Liên Quan") không chịu trách nhiệm, và bạn đồng ý miễn trừ Các Bên Liên Quan khỏi bất kỳ trách nhiệm nào, cho bất kỳ thiệt hại trực tiếp, gián tiếp, ngẫu nhiên, đặc biệt, hậu quả, hoặc hình phạt nào, bao gồm nhưng không giới hạn ở:
        </p>
        <ul className="terms-list">
          <li><strong>Thiệt hại do sử dụng dịch vụ:</strong> Thiệt hại phát sinh từ việc sử dụng hoặc không thể sử dụng dịch vụ, bao gồm mất lợi nhuận, mất cơ hội kinh doanh, mất dữ liệu, hoặc thiệt hại khác</li>
          <li><strong>Thiệt hại do chất lượng dịch vụ:</strong> Thiệt hại phát sinh từ chất lượng, tính an toàn, tính hợp pháp, hoặc tính phù hợp của các dịch vụ được cung cấp bởi các nhà cung cấp đối tác, bao gồm nhưng không giới hạn ở dịch vụ không đúng như mô tả, dịch vụ không đạt chất lượng mong đợi, hoặc dịch vụ gây thương tích hoặc thiệt hại</li>
          <li><strong>Thiệt hại do lỗi kỹ thuật:</strong> Thiệt hại phát sinh từ bất kỳ lỗi, thiếu sót, gián đoạn, trì hoãn, hoặc hỏng hóc nào trong dịch vụ, hệ thống, hoặc mạng, bao gồm lỗi phần mềm, lỗi phần cứng, lỗi mạng, hoặc lỗi của bên thứ ba</li>
          <li><strong>Mất mát dữ liệu:</strong> Mất mát, hỏng hóc, hoặc không thể truy cập dữ liệu, thông tin, hoặc nội dung của bạn, bao gồm đặt chỗ, lịch sử giao dịch, hoặc thông tin cá nhân</li>
          <li><strong>Thiệt hại do virus:</strong> Thiệt hại do virus, malware, trojan, hoặc các thành phần độc hại khác, dù có nguồn gốc từ trang web của chúng tôi hay từ các nguồn khác</li>
          <li><strong>Thiệt hại do hành vi của người khác:</strong> Thiệt hại phát sinh từ hành vi, nội dung, hoặc thông tin của người dùng khác hoặc bên thứ ba</li>
          <li><strong>Thiệt hại do thông tin không chính xác:</strong> Thiệt hại phát sinh từ thông tin không chính xác, không đầy đủ, hoặc lỗi thời trên trang web, bao gồm thông tin về giá cả, tính khả dụng, hoặc đặc điểm của dịch vụ</li>
          <li><strong>Thiệt hại do thay đổi dịch vụ:</strong> Thiệt hại phát sinh từ việc chúng tôi thay đổi, tạm ngưng, hoặc chấm dứt dịch vụ hoặc bất kỳ phần nào của dịch vụ</li>
        </ul>
        <p className="terms-text">
          Trong mọi trường hợp, tổng trách nhiệm của Booking Hub và Các Bên Liên Quan đối với bạn, dù dưới bất kỳ lý thuyết trách nhiệm nào, sẽ không vượt quá số tiền mà bạn đã thanh toán cho Booking Hub trong 12 tháng trước khi phát sinh thiệt hại, hoặc 1.000.000 VND, tùy theo số nào lớn hơn.
        </p>
        <h3 className="terms-subtitle">9.3. Trách Nhiệm Của Nhà Cung Cấp</h3>
        <p className="terms-text">
          Booking Hub hoạt động như một trung gian kết nối giữa bạn và các nhà cung cấp dịch vụ. Chúng tôi không sở hữu, vận hành, hoặc quản lý các dịch vụ thực tế được cung cấp bởi các nhà cung cấp đối tác. Do đó:
        </p>
        <ul className="terms-list">
          <li>Booking Hub không chịu trách nhiệm về chất lượng, tính an toàn, tính hợp pháp, tính phù hợp, hoặc tính chính xác của các dịch vụ được cung cấp bởi các nhà cung cấp đối tác</li>
          <li>Booking Hub không chịu trách nhiệm về khả năng của các nhà cung cấp trong việc thực hiện các cam kết đặt chỗ hoặc cung cấp dịch vụ như đã mô tả</li>
          <li>Booking Hub không chịu trách nhiệm về bất kỳ thiệt hại, thương tích, hoặc tổn thất nào phát sinh từ việc sử dụng dịch vụ của các nhà cung cấp, bao gồm nhưng không giới hạn ở thương tích cá nhân, thiệt hại tài sản, hoặc thiệt hại tài chính</li>
          <li>Bất kỳ tranh chấp, khiếu nại, hoặc vấn đề nào liên quan đến dịch vụ thực tế (chất lượng, an toàn, tính hợp pháp, v.v.) phải được giải quyết trực tiếp giữa bạn và nhà cung cấp dịch vụ đó</li>
        </ul>
        <p className="terms-text">
          Chúng tôi khuyến khích bạn đọc kỹ các đánh giá, điều khoản, và chính sách của các nhà cung cấp trước khi đặt chỗ. Chúng tôi cũng khuyến khích bạn liên hệ trực tiếp với nhà cung cấp nếu bạn có bất kỳ câu hỏi hoặc thắc mắc nào về dịch vụ của họ.
        </p>
        <h3 className="terms-subtitle">9.4. Các Trường Hợp Ngoại Lệ</h3>
        <p className="terms-text">
          Một số quyền tài phán không cho phép loại trừ hoặc giới hạn các bảo đảm ngụ ý hoặc loại trừ hoặc giới hạn trách nhiệm đối với thiệt hại ngẫu nhiên hoặc hậu quả. Do đó, một số giới hạn ở trên có thể không áp dụng cho bạn. Trong các trường hợp này, trách nhiệm của chúng tôi sẽ bị giới hạn ở mức tối đa được phép bởi pháp luật hiện hành.
        </p>
      </div>

      <div
        id="section-10"
        ref={(el) => { sectionRefs.current['section-10'] = el }}
        className="terms-section"
      >
        <h2 className="terms-section-title">10. Bồi Thường</h2>
        <p className="terms-text">
          Bạn đồng ý bồi thường, bảo vệ, và giữ cho Booking Hub, các công ty mẹ, công ty con, công ty liên kết, đối tác, giám đốc, nhân viên, đại lý, nhà thầu, nhà cung cấp dịch vụ, và các bên được cấp phép của chúng tôi (sau đây gọi chung là "Các Bên Được Bảo Vệ") không bị thiệt hại khỏi bất kỳ khiếu nại, yêu cầu, kiện tụng, thủ tục, thiệt hại, nghĩa vụ, tổn thất, chi phí, và chi phí pháp lý (bao gồm nhưng không giới hạn ở phí luật sư, phí tư vấn pháp lý, và các chi phí liên quan khác) phát sinh từ hoặc liên quan đến:
        </p>
        <ul className="terms-list">
          <li><strong>Sử dụng dịch vụ:</strong> Việc bạn sử dụng, lạm dụng, hoặc không thể sử dụng dịch vụ, bao gồm việc bạn truy cập hoặc sử dụng dịch vụ một cách trái phép hoặc vi phạm các điều khoản này</li>
          <li><strong>Vi phạm điều khoản:</strong> Vi phạm bất kỳ điều khoản, điều kiện, hoặc quy định nào trong các điều khoản này, Chính Sách Bảo Mật, hoặc bất kỳ chính sách nào khác của Booking Hub</li>
          <li><strong>Vi phạm quyền của bên thứ ba:</strong> Vi phạm bất kỳ quyền nào của bên thứ ba, bao gồm nhưng không giới hạn ở quyền bản quyền, quyền nhãn hiệu, quyền riêng tư, quyền công khai, quyền sở hữu trí tuệ, hoặc các quyền khác</li>
          <li><strong>Nội dung người dùng:</strong> Nội dung bạn đăng tải, gửi, truyền, hoặc chia sẻ qua dịch vụ, bao gồm nhưng không giới hạn ở đánh giá, bình luận, hình ảnh, video, hoặc các tài liệu khác</li>
          <li><strong>Hành vi vi phạm pháp luật:</strong> Bất kỳ hành vi nào của bạn vi phạm pháp luật, quy định, hoặc quy tắc hiện hành</li>
          <li><strong>Thiệt hại gây ra:</strong> Bất kỳ thiệt hại, thương tích, hoặc tổn thất nào mà bạn gây ra cho người khác hoặc tài sản của người khác thông qua việc sử dụng dịch vụ</li>
          <li><strong>Gian lận hoặc lừa đảo:</strong> Bất kỳ hành vi gian lận, lừa đảo, hoặc đánh lừa nào của bạn liên quan đến việc sử dụng dịch vụ</li>
        </ul>
        <p className="terms-text">
          Nghĩa vụ bồi thường này sẽ tiếp tục có hiệu lực ngay cả sau khi bạn ngừng sử dụng dịch vụ hoặc sau khi tài khoản của bạn bị chấm dứt. Bạn đồng ý hợp tác đầy đủ với chúng tôi trong việc bảo vệ chống lại bất kỳ khiếu nại nào như vậy. Chúng tôi bảo lưu quyền, nhưng không có nghĩa vụ, tham gia vào việc bảo vệ chống lại bất kỳ khiếu nại nào như vậy.
        </p>
        <h3 className="terms-subtitle">10.1. Quyền Kiểm Soát</h3>
        <p className="terms-text">
          Trong trường hợp phát sinh bất kỳ khiếu nại nào mà bạn có nghĩa vụ bồi thường, chúng tôi có quyền, nhưng không có nghĩa vụ, tham gia vào việc bảo vệ chống lại khiếu nại đó. Bạn không được phép giải quyết bất kỳ khiếu nại nào mà không có sự đồng ý bằng văn bản trước của chúng tôi. Chúng tôi có quyền kiểm soát việc bảo vệ và giải quyết bất kỳ khiếu nại nào mà bạn có nghĩa vụ bồi thường.
        </p>
      </div>

      <div
        id="section-11"
        ref={(el) => { sectionRefs.current['section-11'] = el }}
        className="terms-section"
      >
        <h2 className="terms-section-title">11. Giải Quyết Tranh Chấp</h2>
        <h3 className="terms-subtitle">11.1. Nguyên Tắc Giải Quyết Tranh Chấp</h3>
        <p className="terms-text">
          Chúng tôi cam kết giải quyết mọi tranh chấp một cách công bằng, nhanh chóng, và hiệu quả. Trong trường hợp phát sinh bất kỳ tranh chấp, khiếu nại, hoặc bất đồng nào giữa bạn và Booking Hub liên quan đến các điều khoản này, dịch vụ, hoặc bất kỳ vấn đề nào khác, các bên đồng ý sẽ cố gắng giải quyết thông qua các phương thức sau đây theo thứ tự ưu tiên.
        </p>
        <h3 className="terms-subtitle">11.2. Thương Lượng Trực Tiếp</h3>
        <p className="terms-text">
          Bước đầu tiên trong việc giải quyết tranh chấp là thương lượng trực tiếp giữa các bên. Trong trường hợp phát sinh tranh chấp, bạn hoặc chúng tôi phải thông báo bằng văn bản cho bên kia về tranh chấp, bao gồm mô tả chi tiết về vấn đề và các yêu cầu cụ thể. Các bên đồng ý cố gắng giải quyết tranh chấp thông qua thương lượng thiện chí trong vòng 30 ngày kể từ ngày nhận được thông báo về tranh chấp.
        </p>
        <p className="terms-text">
          Trong quá trình thương lượng, các bên sẽ:
        </p>
        <ul className="terms-list">
          <li>Cung cấp đầy đủ thông tin và tài liệu liên quan đến tranh chấp</li>
          <li>Tham gia các cuộc họp hoặc trao đổi (trực tiếp, qua điện thoại, hoặc qua email) để thảo luận và tìm giải pháp</li>
          <li>Thể hiện thiện chí và sẵn sàng hợp tác để đạt được giải pháp công bằng cho cả hai bên</li>
          <li>Ghi nhận mọi thỏa thuận đạt được bằng văn bản</li>
        </ul>
        <h3 className="terms-subtitle">11.3. Hòa Giải</h3>
        <p className="terms-text">
          Nếu không thể giải quyết tranh chấp thông qua thương lượng trực tiếp trong thời hạn 30 ngày, các bên có thể đồng ý đưa tranh chấp ra hòa giải bởi một bên thứ ba trung lập, độc lập, và có kinh nghiệm trong lĩnh vực liên quan. Hòa giải viên sẽ được lựa chọn bởi sự đồng ý của cả hai bên hoặc được chỉ định bởi một tổ chức hòa giải có uy tín.
        </p>
        <p className="terms-text">
          Quá trình hòa giải sẽ được tiến hành theo các nguyên tắc sau:
        </p>
        <ul className="terms-list">
          <li>Hòa giải viên sẽ giúp các bên tìm ra giải pháp thỏa đáng cho cả hai bên</li>
          <li>Quá trình hòa giải sẽ được giữ bí mật và không được sử dụng làm bằng chứng trong bất kỳ thủ tục pháp lý nào sau này</li>
          <li>Chi phí hòa giải sẽ được chia đều giữa các bên, trừ khi có thỏa thuận khác</li>
          <li>Nếu hòa giải thành công, các bên sẽ ký một thỏa thuận hòa giải có giá trị ràng buộc pháp lý</li>
        </ul>
        <h3 className="terms-subtitle">11.4. Trọng Tài</h3>
        <p className="terms-text">
          Nếu tranh chấp không thể giải quyết thông qua thương lượng hoặc hòa giải trong vòng 60 ngày kể từ ngày phát sinh tranh chấp, tranh chấp sẽ được giải quyết bằng trọng tài theo Quy tắc Trọng tài của Trung tâm Trọng tài Quốc tế Việt Nam (VIAC) hoặc bất kỳ tổ chức trọng tài nào khác được các bên đồng ý.
        </p>
        <p className="terms-text">
          Các quy định về trọng tài:
        </p>
        <ul className="terms-list">
          <li><strong>Số lượng trọng tài viên:</strong> Tranh chấp sẽ được giải quyết bởi một trọng tài viên duy nhất, trừ khi giá trị tranh chấp vượt quá một ngưỡng nhất định hoặc các bên đồng ý sử dụng hội đồng trọng tài gồm ba trọng tài viên</li>
          <li><strong>Ngôn ngữ:</strong> Quy trình trọng tài sẽ được tiến hành bằng tiếng Việt</li>
          <li><strong>Địa điểm:</strong> Quy trình trọng tài sẽ được tiến hành tại Hà Nội, Việt Nam</li>
          <li><strong>Phán quyết:</strong> Phán quyết của trọng tài là cuối cùng và ràng buộc đối với cả hai bên</li>
          <li><strong>Chi phí:</strong> Chi phí trọng tài sẽ được phân bổ theo quyết định của trọng tài viên hoặc hội đồng trọng tài</li>
        </ul>
        <h3 className="terms-subtitle">11.5. Loại Trừ Một Số Tranh Chấp</h3>
        <p className="terms-text">
          Một số loại tranh chấp có thể không phù hợp với giải quyết bằng trọng tài, bao gồm nhưng không giới hạn ở các tranh chấp liên quan đến quyền sở hữu trí tuệ, bí mật thương mại, hoặc các vấn đề khác mà pháp luật quy định phải được giải quyết bởi tòa án. Trong các trường hợp này, tranh chấp sẽ được giải quyết bởi tòa án có thẩm quyền tại Việt Nam.
        </p>
        <h3 className="terms-subtitle">11.6. Giới Hạn Thời Gian Khởi Kiện</h3>
        <p className="terms-text">
          Bạn đồng ý rằng bất kỳ khiếu nại hoặc nguyên nhân hành động nào phát sinh từ hoặc liên quan đến việc sử dụng dịch vụ hoặc các điều khoản này phải được đệ trình trong vòng một (1) năm kể từ ngày phát sinh khiếu nại hoặc nguyên nhân hành động đó, nếu không sẽ bị cấm vĩnh viễn.
        </p>
      </div>

      <div
        id="section-12"
        ref={(el) => { sectionRefs.current['section-12'] = el }}
        className="terms-section"
      >
        <h2 className="terms-section-title">12. Thay Đổi Điều Khoản</h2>
        <h3 className="terms-subtitle">12.1. Quyền Thay Đổi</h3>
        <p className="terms-text">
          Booking Hub bảo lưu quyền, theo quyết định riêng của mình, sửa đổi, cập nhật, bổ sung, hoặc thay thế các điều khoản này, hoặc bất kỳ phần nào của các điều khoản này, bất cứ lúc nào, vì bất kỳ lý do nào, bao gồm nhưng không giới hạn ở việc phản ánh các thay đổi trong dịch vụ, pháp luật, quy định, công nghệ, hoặc thực tiễn kinh doanh.
        </p>
        <p className="terms-text">
          Chúng tôi có thể thực hiện các thay đổi này để:
        </p>
        <ul className="terms-list">
          <li>Cải thiện hoặc nâng cấp dịch vụ của chúng tôi</li>
          <li>Tuân thủ các yêu cầu pháp lý, quy định, hoặc tiêu chuẩn mới</li>
          <li>Phản ánh các thay đổi trong công nghệ hoặc thực tiễn ngành</li>
          <li>Bảo vệ quyền lợi của người dùng và Booking Hub</li>
          <li>Sửa lỗi hoặc làm rõ các điều khoản hiện có</li>
        </ul>
        <h3 className="terms-subtitle">12.2. Thông Báo Thay Đổi</h3>
        <p className="terms-text">
          Khi chúng tôi thực hiện các thay đổi quan trọng đối với các điều khoản này, chúng tôi sẽ cố gắng thông báo cho bạn bằng một hoặc nhiều phương thức sau:
        </p>
        <ul className="terms-list">
          <li>Gửi email thông báo đến địa chỉ email mà bạn đã đăng ký</li>
          <li>Hiển thị thông báo nổi bật trên trang web hoặc trong ứng dụng</li>
          <li>Đăng thông báo trên trang chủ hoặc trang điều khoản</li>
          <li>Gửi thông báo qua SMS hoặc các phương thức liên lạc khác (nếu có)</li>
        </ul>
        <p className="terms-text">
          Tuy nhiên, bạn hiểu và đồng ý rằng chúng tôi không có nghĩa vụ pháp lý phải thông báo trước về mọi thay đổi, và một số thay đổi có thể được thực hiện mà không cần thông báo trước. Các thay đổi sẽ có hiệu lực ngay sau khi được đăng tải trên trang web, trừ khi có quy định khác trong thông báo về thay đổi.
        </p>
        <h3 className="terms-subtitle">12.3. Chấp Nhận Thay Đổi</h3>
        <p className="terms-text">
          Việc bạn tiếp tục truy cập hoặc sử dụng dịch vụ sau khi các điều khoản được cập nhật, sửa đổi, hoặc thay thế được coi là bạn đã đọc, hiểu, và chấp nhận các điều khoản mới. Nếu bạn không đồng ý với các thay đổi, bạn phải ngừng sử dụng dịch vụ ngay lập tức và có thể yêu cầu chấm dứt tài khoản của bạn.
        </p>
        <p className="terms-text">
          Nếu bạn không đồng ý với các thay đổi và yêu cầu chấm dứt tài khoản, các điều khoản cũ sẽ tiếp tục áp dụng cho các giao dịch và đặt chỗ đã được thực hiện trước khi thay đổi có hiệu lực, nhưng bạn sẽ không thể thực hiện các giao dịch mới hoặc sử dụng các tính năng mới của dịch vụ.
        </p>
        <h3 className="terms-subtitle">12.4. Trách Nhiệm của Người Dùng</h3>
        <p className="terms-text">
          Bạn có trách nhiệm:
        </p>
        <ul className="terms-list">
          <li>Xem xét các điều khoản này định kỳ để cập nhật về bất kỳ thay đổi nào</li>
          <li>Đọc kỹ các thông báo về thay đổi mà chúng tôi gửi cho bạn</li>
          <li>Liên hệ với chúng tôi nếu bạn có bất kỳ câu hỏi hoặc thắc mắc nào về các thay đổi</li>
          <li>Ngừng sử dụng dịch vụ nếu bạn không đồng ý với các thay đổi</li>
        </ul>
        <p className="terms-text">
          Chúng tôi khuyến khích bạn đánh dấu trang này và xem xét các điều khoản này thường xuyên để đảm bảo bạn luôn nhận thức được các quyền và nghĩa vụ của mình.
        </p>
        <h3 className="terms-subtitle">12.5. Lưu Trữ Phiên Bản Cũ</h3>
        <p className="terms-text">
          Chúng tôi có thể, nhưng không có nghĩa vụ, lưu trữ các phiên bản cũ của các điều khoản này để bạn tham khảo. Tuy nhiên, phiên bản hiện tại được đăng tải trên trang web là phiên bản có hiệu lực và ràng buộc đối với bạn.
        </p>
      </div>

      <div
        id="section-13"
        ref={(el) => { sectionRefs.current['section-13'] = el }}
        className="terms-section"
      >
        <h2 className="terms-section-title">13. Luật Áp Dụng</h2>
        <h3 className="terms-subtitle">13.1. Pháp Luật Điều Chỉnh</h3>
        <p className="terms-text">
          Các điều khoản này được điều chỉnh, giải thích, và thực thi theo pháp luật của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam, mà không tham chiếu đến các nguyên tắc xung đột pháp luật. Bất kỳ tranh chấp, khiếu nại, hoặc vấn đề nào phát sinh từ hoặc liên quan đến các điều khoản này, dịch vụ, hoặc mối quan hệ giữa bạn và Booking Hub sẽ được giải quyết theo pháp luật Việt Nam.
        </p>
        <p className="terms-text">
          Điều này bao gồm nhưng không giới hạn ở:
        </p>
        <ul className="terms-list">
          <li>Luật Dân sự Việt Nam</li>
          <li>Luật Thương mại Việt Nam</li>
          <li>Luật Bảo vệ Người tiêu dùng Việt Nam</li>
          <li>Luật An ninh mạng Việt Nam</li>
          <li>Luật Bảo vệ Dữ liệu Cá nhân và các quy định liên quan</li>
          <li>Các luật, nghị định, thông tư, và quy định khác có hiệu lực tại Việt Nam</li>
        </ul>
        <h3 className="terms-subtitle">13.2. Thẩm Quyền Tòa Án</h3>
        <p className="terms-text">
          Trong trường hợp tranh chấp không thể được giải quyết thông qua thương lượng, hòa giải, hoặc trọng tài (theo quy định trong phần "Giải Quyết Tranh Chấp"), hoặc trong các trường hợp mà pháp luật quy định phải được giải quyết bởi tòa án, bạn và Booking Hub đồng ý rằng bất kỳ vụ kiện, thủ tục pháp lý, hoặc hành động nào phát sinh từ hoặc liên quan đến các điều khoản này hoặc dịch vụ sẽ được đệ trình và giải quyết độc quyền bởi các tòa án có thẩm quyền tại Hà Nội, Việt Nam.
        </p>
        <p className="terms-text">
          Bạn đồng ý từ bỏ bất kỳ phản đối nào về thẩm quyền hoặc địa điểm của các tòa án này và đồng ý không khởi kiện hoặc tham gia vào bất kỳ vụ kiện tập thể nào chống lại Booking Hub.
        </p>
        <h3 className="terms-subtitle">13.3. Điều Khoản Có Thể Tách Rời</h3>
        <p className="terms-text">
          Nếu bất kỳ điều khoản, quy định, hoặc phần nào trong các điều khoản này được coi là không hợp lệ, bất hợp pháp, hoặc không thể thực thi bởi bất kỳ tòa án hoặc cơ quan có thẩm quyền nào, điều khoản, quy định, hoặc phần đó sẽ được coi là có thể tách rời và sẽ không ảnh hưởng đến tính hợp lệ, tính hợp pháp, hoặc khả năng thực thi của các điều khoản, quy định, hoặc phần còn lại.
        </p>
        <p className="terms-text">
          Trong trường hợp này, điều khoản, quy định, hoặc phần không hợp lệ sẽ được sửa đổi và giải thích theo cách phù hợp nhất với ý định ban đầu của các bên, trong phạm vi được phép bởi pháp luật hiện hành, và các điều khoản, quy định, hoặc phần còn lại sẽ vẫn có hiệu lực đầy đủ và ràng buộc đối với các bên.
        </p>
        <h3 className="terms-subtitle">13.4. Toàn Bộ Thỏa Thuận</h3>
        <p className="terms-text">
          Các điều khoản này, cùng với Chính Sách Bảo Mật, Chính Sách Cookie, và bất kỳ chính sách nào khác được tham chiếu trong các điều khoản này, tạo thành toàn bộ thỏa thuận giữa bạn và Booking Hub liên quan đến việc sử dụng dịch vụ và thay thế tất cả các thỏa thuận, thảo luận, trao đổi, hoặc hiểu biết trước đó giữa các bên liên quan đến chủ đề này.
        </p>
        <p className="terms-text">
          Không có sự từ bỏ nào của bất kỳ điều khoản nào trong các điều khoản này sẽ có hiệu lực trừ khi được thực hiện bằng văn bản và được ký bởi bên có quyền thực hiện sự từ bỏ đó. Việc chúng tôi không thực thi hoặc trì hoãn việc thực thi bất kỳ quyền hoặc biện pháp khắc phục nào theo các điều khoản này sẽ không được coi là từ bỏ quyền hoặc biện pháp khắc phục đó.
        </p>
      </div>

      <div
        id="section-14"
        ref={(el) => { sectionRefs.current['section-14'] = el }}
        className="terms-section"
      >
        <h2 className="terms-section-title">14. Liên Hệ</h2>
        <p className="terms-text">
          Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Nếu bạn có bất kỳ câu hỏi, thắc mắc, đề xuất, phản hồi, hoặc khiếu nại nào về các điều khoản này, dịch vụ của chúng tôi, hoặc bất kỳ vấn đề nào khác, vui lòng liên hệ với chúng tôi thông qua các kênh sau:
        </p>
        <div className="contact-info">
          <p className="terms-text"><strong>Email hỗ trợ:</strong> manhtrana1k45tl@gmail.com</p>
          <p className="terms-text"><strong>Hotline:</strong> +84389891942 (Từ 8:00 - 22:00 hàng ngày, tất cả các ngày trong tuần)</p>
          <p className="terms-text"><strong>Địa chỉ trụ sở:</strong> Mộ Lao, Hà Đông, Hà Nội, Việt Nam</p>
          <p className="terms-text"><strong>Thời gian làm việc:</strong> Thứ Hai - Chủ Nhật: 8:00 - 22:00 (Giờ Việt Nam)</p>
        </div>
        <h3 className="terms-subtitle">14.1. Các Kênh Liên Hệ Khác</h3>
        <p className="terms-text">
          Ngoài các kênh liên hệ chính ở trên, bạn cũng có thể liên hệ với chúng tôi thông qua:
        </p>
        <ul className="terms-list">
          <li><strong>Hộp thư phản hồi trên trang web:</strong> Sử dụng biểu mẫu liên hệ trên trang web của chúng tôi để gửi câu hỏi hoặc phản hồi</li>
          <li><strong>Ứng dụng di động:</strong> Nếu bạn sử dụng ứng dụng di động của Booking Hub, bạn có thể sử dụng tính năng hỗ trợ trong ứng dụng</li>
          <li><strong>Mạng xã hội:</strong> Theo dõi và liên hệ với chúng tôi qua các trang mạng xã hội chính thức của Booking Hub (nếu có)</li>
          <li><strong>Trung tâm hỗ trợ:</strong> Truy cập phần "Trung tâm Trợ giúp" hoặc "FAQ" trên trang web để tìm câu trả lời cho các câu hỏi thường gặp</li>
        </ul>
        <h3 className="terms-subtitle">14.2. Thời Gian Phản Hồi</h3>
        <p className="terms-text">
          Chúng tôi cam kết phản hồi các yêu cầu của bạn một cách nhanh chóng và hiệu quả:
        </p>
        <ul className="terms-list">
          <li><strong>Email:</strong> Chúng tôi sẽ phản hồi email của bạn trong vòng 24-48 giờ làm việc (không bao gồm ngày lễ, ngày nghỉ)</li>
          <li><strong>Hotline:</strong> Đội ngũ hỗ trợ của chúng tôi sẵn sàng trả lời cuộc gọi của bạn trong giờ làm việc</li>
          <li><strong>Khiếu nại khẩn cấp:</strong> Đối với các khiếu nại khẩn cấp liên quan đến đặt chỗ đang diễn ra, chúng tôi sẽ ưu tiên xử lý và phản hồi trong vòng 2-4 giờ</li>
        </ul>
        <h3 className="terms-subtitle">14.3. Thông Tin Cần Cung Cấp Khi Liên Hệ</h3>
        <p className="terms-text">
          Để chúng tôi có thể hỗ trợ bạn một cách hiệu quả nhất, vui lòng cung cấp các thông tin sau khi liên hệ:
        </p>
        <ul className="terms-list">
          <li>Tên và thông tin liên hệ của bạn (email, số điện thoại)</li>
          <li>Mã đặt chỗ hoặc số giao dịch (nếu liên quan đến đặt chỗ cụ thể)</li>
          <li>Mô tả chi tiết về vấn đề, câu hỏi, hoặc khiếu nại của bạn</li>
          <li>Bất kỳ tài liệu, hình ảnh, hoặc bằng chứng nào liên quan (nếu có)</li>
          <li>Ngày và giờ xảy ra vấn đề (nếu có)</li>
        </ul>
        <h3 className="terms-subtitle">14.4. Xử Lý Khiếu Nại</h3>
        <p className="terms-text">
          Chúng tôi coi trọng mọi khiếu nại và phản hồi của bạn. Khi nhận được khiếu nại, chúng tôi sẽ:
        </p>
        <ul className="terms-list">
          <li>Xác nhận đã nhận được khiếu nại của bạn trong vòng 24 giờ</li>
          <li>Điều tra và xem xét khiếu nại một cách nghiêm túc và công bằng</li>
          <li>Phản hồi kết quả điều tra và các biện pháp khắc phục (nếu có) trong vòng 7-14 ngày làm việc</li>
          <li>Thực hiện các biện pháp khắc phục phù hợp và công bằng</li>
        </ul>
        <p className="terms-text">
          Chúng tôi cam kết xử lý mọi khiếu nại một cách minh bạch, công bằng, và tuân thủ các quy định của pháp luật về bảo vệ người tiêu dùng.
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

        .contact-info {
          background-color: var(--color-surface-secondary, #f9fafb);
          padding: var(--spacing-xl, 24px);
          border-radius: var(--border-radius-md, 8px);
          margin: var(--spacing-xl, 24px) 0;
          border-left: 4px solid var(--color-primary, #3b82f6);
        }
      `}</style>
    </>
  )
}

export default TermsSectionsPart2