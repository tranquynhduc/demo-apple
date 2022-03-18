import React from 'react';
import './detail.css'
import { useState } from 'react';




export default function Detail() {
    //mở rộng and thu gọn
    const [clamped, SetClamped] = useState(true)
    const [showButton, setShowButton] = useState(true)
    const handleClick = () => { SetClamped(!clamped) }
    //update quantily prouduct
    const [count ,setCount] =useState(1)
    function decrement(){
        if(count > 1)
        setCount(count -1)
    }
    function increment(){
        setCount(count + 1 )
    }
    const DetailsIp13pr = [
        {
            
            head: 'iPhone 13 Pro Max LL/A 128Gb',
            version: '128GB',
            price: '30.800.000 đ',
            version1: '256GB',
            price1: '33.490.000 đ',
            version2: '512GB',
            price2: '40.990.000 đ',
            background: 'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/09/15/image-removebg-preview-15.png',
            imageColorYellow: 'https://images.fpt.shop/unsafe/fit-in/40x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673230231791121_iphone-13-mini-den-1.jpg',
            imageColorBlue: 'https://images.fpt.shop/unsafe/fit-in/40x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673230236166189_iphone-13-mini-hong-1.jpg',
            imageColorGray: 'https://images.fpt.shop/unsafe/fit-in/40x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673230232103636_iphone-13-mini-do-1.jpg',
            imageColorWhite: 'https://images.fpt.shop/unsafe/fit-in/40x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673230236322511_iphone-13-mini-trang-1.jpg',
            imageColorGreen: 'https://images.fpt.shop/unsafe/fit-in/40x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673230237572519_iphone-13-mini-xanh-1.jpg',

        },


    ]
    const ParameterIphone = [
        {   
            screen:'Màn hình',
            screenDetail: '6.7", Super Retina XDR, OLED, 2778 x 1284 Pixel',
            rearCamera:'Camera Sau',
            rearCameraDetail:'	12.0 MP + 12.0 MP + 12.0 MP',
            CameraSelfie:'Camera Selfie',
            CameraSelfieDetail:'	12.0 MP',
            RAM:'RAM',
            RAMDetail:'	6 GB',
            InternalMemory:'Bộ nhớ trong'       ,   
            InternalMemoryDetail:'128GB',
            CPU:'CPU',
            CPUDetail:'A15 Bionic',
            GPU:'GPU',
            GPUDetail:'Apple GPU 5 nhân',
            Battery:'Dung lượng pin',
            BatteryDetail:'4352 mAh',
            Sim:'Sim',
            SimDetail:'2, 1 eSIM, 1 Nano SIM',
            system:'Hệ điều hành',
            systemDetail:'iOS 15',
            origin:'Xuất xứ',
            originDetail:'Trung Quốc',
            Release:'Thời gian ra mắt',
            ReleaseDetail:'09/2021'
        }
    ]
    const DescriptionsIphone = [
        {
            image: 'https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-13-pro-max-1.jpg',
            image1: 'https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-13-pro-7.jpg',
            image2: 'https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-13-pro-29.jpg',
            head: 'Thiết kế sang trọng với phần notch nhỏ hơn',
            span: 'Vốn là một thương hiệu hướng đến sự tinh tế, đẳng cấp nên thiết kế của sản phẩm nhà Apple rất được trau chuốt kỹ lưỡng. Thế hệ iPhone 13 Series năm nay cũng không ngoại lệ. Chúng vẫn sở hữu kiểu dáng vuông vắn, mạnh mẽ và cho cảm giác cầm nắm chắc tay như thế hệ tiền nhiệm là iPhone 12. Tuy nhiên, iPhone mới sẽ có độ dày tăng thêm khoảng 0,26 mm và nặng hơn vì sở hữu viên pin lớn hơn.Cả 2 mặt kính cả trước và sau của iPhone 13 Pro đều được tăng cường độ bền bởi chất liệu Ceramic Shield, không chỉ hạn chế chống xước gấp 4 lần mà còn toát lên sự sang trọng, đầm tay.  Về phần notch năm nay sẽ được thu gọn lại 20%, giúp tăng diện tích màn hình. Apple đã di chuyển vị trí loa lên cạnh trên của notch thay vì ngay ở giữa, còn bộ thu của máy ảnh TrueDepth cũng được di chuyển sang cạnh để “tai thỏ nhỏ “ lại. Máy có tổng cộng 4 màu gồm Gold (vàng), Silver (bạc), Graphite (Xám đen) và Sierra Blue (xanh dương nhạt) ',
            head1: 'Màn hình tốc độ làm tươi 120Hz ấn tượng ',
            span1: 'iPhone 13 Pro sẽ được trang bị màn hình OLED 6,1 inch tần số làm tươi 120Hz tối đa 1000 nits. Đây được xem là một trong những cải tiến kỳ vọng mang lại sự khác biệt lớn đối với các dòng iPhone trước đó, đem lại trải nghiệm đã mắt cho người dùng và giúp tiết kiệm pin tối đa trong quá trình sử dụng. Mặt khác, điều này cũng sẽ cho phép công ty phân loại tốt hơn các phiên bản Pro của mình so với dòng còn lại.  Ngoài ra, màn hình iPhone 13 Pro còn có tính năng Always-On display, cho phép người dùng hiển thị nhiều tính năng hữu ích như đồng hồ, thông báo,... Ngay cả khi điện thoại tắt vẫn có thể nhận được thông báo giúp quản lý thời gian, tiện lợi hơn cho người dùng nhưng chúng không hoàn toàn sáng lên.   Camera được hoàn thiện hơn, zoom quang học 3X So với thế hệ cũ, cụm camera sau của iPhone 13 Pro cũng tân tiến hơn.  Máy được trang bị ba ống kính bao gồm: camera siêu rộng 12MP, khẩu độ F1.8. Ngoài ra còn có camera góc rộng 12MP, khẩu độ F1.6 và camera marco 12MP. ',
            span2: 'Đặc biệt, Apple đã mang tới ống kính tele 77mm mới cho khả năng zoom quang học 3X, đồng thời bổ sung thêm các tính năng quay video ProRes, quay video chân dung hay chế độ chụp thiên văn, tự động lấy nét để cho phép chụp ảnh macro....  Hơn thế nữa, độ phân giải lớn mang đến những hình ảnh có chất lượng không kém so với những máy ảnh chuyên nghiệp. Hình ảnh rõ ràng, chi tiết, màu sắc sống động và khả năng chụp hình đêm tốt hơn.',
            head2: 'Chip Apple A15 Bionic giúp tối ưu hiệu năng sử dụng',
            span3: 'Thế hệ iPhone 13 năm nay vẫn sử dụng chip quen thuộc đó là chip Apple A15 Boinoic. Con chip được xây dựng dựa trên thế hệ thứ hai của TSMC giúp tối ưu điện năng và nâng cao năng suất của 5G, có khả năng chiến mọi tựa game đồ họa hot nhất hiện nay một cách mượt mà. So với iPhone 12 Pro thì trên iPhone 13 Pro dung lượng bộ nhớ được mở rộng hơn rất nhiều. Thấp nhất là 128 GB và dung lượng bộ nhớ cao nhất có thể lên tới 1T. Như vậy, người dùng có thể thoải mái thực hiện nhu cầu lưu trữ hình ảnh, dữ liệu của mình ngay trên điện thoại.'
        }
    ]
    /* ============================================================================================================================= */
   
    const DetailsIpad = [
        {
           
            head:'Máy tính bảng Apple iPad Pro M1 11',
            version: '128GB',
            price: '19.990.000 đ',
            version1: '256GB',
            price1: '22.490.000 đ',
            version2: '512GB',
            price2: '28.990.000 đ',
            background: 'https://shopdunk.com/wp-content/uploads/2021/12/ipad-11inch-M1.png',
            imageColorGray: 'https://images.fpt.shop/unsafe/fit-in/40x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/4/21/637546013884494743_ipad-pro-11-wifi-xam-1.jpg',
            imageColorWhite: 'https://images.fpt.shop/unsafe/fit-in/40x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/4/21/637546013883713567_ipad-pro-11-wifi-bac-1.jpg',
        },
    ]

    const ParameterIpad = [
        {   
            screen:'Màn hình',
            screenDetail: '11.0" , Liquid Retina HD , IPS LCD , 2388 x 1668 Pixel',
            rearCamera:'Camera Sau',
            rearCameraDetail:'	10.0 MP + 12.0 MP',
            CameraSelfie:'Camera Selfie',
            CameraSelfieDetail:'12.0 MP',
            RAM:'RAM',
            RAMDetail:'	8 GB',
            InternalMemory:'Bộ nhớ trong'       ,   
            InternalMemoryDetail:'128GB',
            CPU:'CPU',
            CPUDetail:'Apple M1',
            GPU:'GPU',
            GPUDetail:'Apple M1',
            Battery:'Dung lượng pin',
            BatteryDetail:'updating',
            Sim:'Sim',
            SimDetail:'0',
            system:'Hệ điều hành',
            systemDetail:'iPadOS',
            origin:'Xuất xứ',
            originDetail:'Trung Quốc',
            Release:'Thời gian ra mắt',
            ReleaseDetail:'04/2021'
        }
    ]
    
    const DescriptionsIpad = [
        {
            image: 'https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/ipad-pro-2021-26.jpg',
            image1: 'https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/ipad-pro-2021-25.jpg',
            image2: 'https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/ipad-pro-2021-9.jpg',
            head: 'Kết nối bàn phím, tương thích bút cảm ứng Apple Pencil',
            span: 'Với bộ vi xử lý M1, iPad Pro 11 2021 chính là chiếc máy tính bảng nhanh nhất từ trước đến nay. Sức mạnh từ 8 nhân CPU và 8 nhân GPU của Apple M1 giúp iPad Pro 11 2021 nhanh hơn tới 50%, đồng thời xử lý đồ họa tốt hơn 40% so với thế hệ trước. Giờ đây bạn có thể dựng các mô hình AR phức tạp, hay chơi game đồ họa cao với tay cầm Xbox hay PlayStation. iPad Pro 11 2021 mạnh mẽ và chuyên nghiệp hơn bao giờ hết với sức mạnh kế thừa từ dòng MacBook Pro., Những phụ kiện của iPad Pro 11 2021 sẽ đưa khả năng của máy vượt khỏi giới hạn. Bút cảm ứng Apple Pencil biến iPad Pro thành một bảng vẽ và là thiết bị ghi chú tốt nhất thế giới. Bên cạnh đó bàn phím Magic Keyboard sẽ giúp trải nghiệm iPad Pro 11 2021 không kém gì những chiếc MacBook hiện tại với tốc độ đánh máy cực nhanh và tích hợp bàn di chuột TouchPad.',
            head1: 'Mạng Wi-Fi 6 thế hệ mới ',
            span1: 'Kết nối Wi-Fi trên iPad Pro 11 2021 được nâng cấp với chuẩn Wi-Fi 6, tăng cường sự ổn định và chất lượng mạng Wi-Fi. Kể cả ở những nơi công cộng với nguồn phát Wi-Fi yếu và đông người truy cập, iPad Pro 11 2021 vẫn mang đến cho bạn kết nối mạng nhanh, khả năng thu sóng khỏe.',
            head2: 'Màn hình chuyên nghiệp cho công việc chuyên nghiệp',
            span3: 'Là một thiết bị đề cao tính di động nhưng iPad Pro 11 2021 vẫn mang đến cho bạn trải nghiệm hình ảnh cao cấp hàng đầu hiện nay. Màn hình Liquid Retina không chỉ hiển thị tuyệt đẹp, sắc nét đáng kinh ngạc mà còn trang bị những công nghệ vô cùng tiên tiến. Bạn sẽ được tận hưởng những màu sắc chính xác, chân thực như trong cuộc sống thường ngày với các công nghệ True Tone, dải màu rộng P3. Màn hình tần số quét 120Hz công nghệ ProMotion cho mọi thao tác, chuyển cảnh trên màn hình nhạy hơn bao giờ hết, mọi thứ đều diễn ra mượt mà và hấp dẫn.'
        }
    ]
    /* ============================================================================================================================= */

    const DetailsAppleWatch = [
        {
           
            head: 'Đồng hồ thông minh Apple Watch Series 7 GPS',
            version: '41 mm',
            price: '30.800.000 đ',
            version1: '45mm',
            price1: '33.490.000 đ',
            version2: 'updating',
            price2: '',
            background: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ML753_VW_PF+watch-41-stainless-silver-cell-7s_VW_PF_WF_SI?wid=2000&hei=2000&fmt=png-alpha&.v=1630042277000,1631661430000',       
            imageColorYellow: 'https://images.fpt.shop/unsafe/fit-in/40x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/9/637693821701452071_apple-watch-series-7-gps-41mm-bac-1.jpg',
            imageColorBlue: 'https://images.fpt.shop/unsafe/fit-in/40x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/9/637693812530137101_apple-watch-series-7-gps-41mm-do-1.jpg',
            imageColorGray: 'https://images.fpt.shop/unsafe/fit-in/40x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/9/637693818416271298_apple-watch-series-7-gps-41mm-xreu-1.jpg',
            imageColorWhite: 'https://images.fpt.shop/unsafe/fit-in/40x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/9/637693814517337010_apple-watch-series-7-gps-41mm-xanh-1.jpg',
            imageColorBlack: 'https://images.fpt.shop/unsafe/fit-in/40x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/9/637693813582643297_apple-watch-series-7-gps-41mm-den-1.jpg',
        },


    ]

     
    const ParameterApple = [
        {   
            screen:'Công nghệ màn hình',
            screenDetail: 'LTPO OLED display (1000 nits)',
            rearCamera:'Kích thước màn hình',
            rearCameraDetail:'41mm',
            CameraSelfie:'CPU',
            CameraSelfieDetail:'Apple S7',
            RAM:'Bộ nhớ trong',
            RAMDetail:'	32GB',
            InternalMemory:'Hệ điều hành'       ,   
            InternalMemoryDetail:'watchOS 8',
            CPU:'Kết nối được với hệ điều hành',
            CPUDetail:'iPhone 6s trở lên dùng iOS mới nhất',
            GPU:'Chất liệu mặt',
            GPUDetail:'Ion-X strengthened glass',
            Battery:'Chất liệu dây',
            BatteryDetail:'Cao su',
            Sim:'Chống nước',
            SimDetail:'Có, độ sâu dưới 50m',
            system:'Thời gian sử dụng pin',
            systemDetail:'Sử dụng đến 18h',
            origin:'Kết nối',
            originDetail:'Wi-Fi, Cellular, Bluetooth',
            Release:'Thời gian ra mắt',
            ReleaseDetail:'2021'
        }
    ]
    const DescriptionsApple = [
        {
            image: 'https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/apple-watch-7-14.jpg',
            image1: 'https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/apple-watch-7-1.jpg',
            image2: 'https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/apple-watch-7-11.jpg',
            head: 'Bền bỉ, cao cấp và tinh tế',
            span: 'Kiểu dáng sang trọng của dòng Apple Watch đã mang tính thương hiệu trong suốt nhiều năm qua. Giờ đây mọi thứ còn hoàn hảo hơn khi Apple tập trung về độ bền và những thay đổi đầy tinh tế. Phần màn hình được làm cong nhẹ với hiệu ứng ánh sáng khúc xạ rìa màn hình, tạo kết nối liền mạch với khung kim loại sắc sảo. Hơn nữa, đồng hồ Apple Watch Series 7 còn có khả năng chống bụi, chống nước và màn hình cứng cáp nhất từ trước đến nay với tinh thể pha lê dày gấp đôi Series 6. Sẽ có 5 màu sắc mới tươi trẻ thời thượng dành cho bạn lựa chọn trên phiên bản Apple Watch 7. ',
            head1: 'Màn hình lớn cho bạn làm được nhiều việc hơn',
            span1: 'Không chỉ hiển thị được nhiều nội dung hơn, màn hình lớn của Apple Watch Series 7 còn cho bạn một trải nghiệm hoàn toàn mới, ngay từ các ứng dụng cơ bản. Apple đã thiết kế lại giao diện của máy tính, đồng hồ bấm giờ, bàn phím Qwerty và nhiều ứng dụng khác để tận dụng lợi thế của màn hình lớn, giúp bạn sử dụng đồng hồ trực quan và dễ dàng hơn bao giờ hết.',
            head2: 'Màn hình Retina Always-On tuyệt đẹp',
            span3: 'Bạn không cần phải đưa tay lên hay chạm vào màn hình để xem giờ hoặc các thông tin khác nữa, đơn giản vì màn hình Apple Watch Series 7 luôn bật. Màn hình Retina Always-On của Apple Watch 7 giờ đây còn sáng hơn tới 70%, cho hình ảnh luôn hiển thị sáng đẹp và nổi bật. Apple Watch Series 7 sở hữu màn hình lớn hơn tới 20% so với thế hệ Series 6, hơn 50% so với Series 3, nhưng điều đặc biệt là kích thước tổng thể của đồng hồ không hề thay đổi. Để có được kết quả này, đội ngũ kỹ sư của Apple đã thiết kế lại hoàn toàn màn hình giúp giảm tới 40% diện tích phần viền, tạo thành một màn hình tràn viền đầy quyến rũ, nơi bạn xem được nhiều nội dung hơn, hình ảnh hấp dẫn hơn.'
        }
    ]

    /* ============================================================================================================================= */

    const DetailsAppleAir=[
        {
            head: 'Tai nghe AirPods Max',
            version: 'Updating',
            price: 'Tạm thời hết hàng',
            version1: 'Updating',          
            version2: 'updating',
            background: 'https://product.hstatic.net/1000300544/product/airpods-max-select-silver-202011_a2c021a6c3aa4a11902b928361e8f819.png',       
            imageColorPink: 'https://images.fpt.shop/unsafe/fit-in/40x40/filters:quality(90):fill(white)/https://fptshop.com.vn/Uploads/Originals/2020/12/9/637431118704995434_tai-nghe-airpods-max-blue-4.png',
            imageColorBlue: 'https://images.fpt.shop/unsafe/fit-in/40x40/filters:quality(90):fill(white)/https://fptshop.com.vn/Uploads/Originals/2020/12/9/637431121325358324_tai-nghe-airpods-max-gray-3.png',
            imageColorGray: 'https://images.fpt.shop/unsafe/fit-in/40x40/filters:quality(90):fill(white)/https://fptshop.com.vn/Uploads/Originals/2020/12/9/637431119080785607_tai-nghe-airpods-max-silver-2.png',
            imageColorWhite: 'https://images.fpt.shop/unsafe/fit-in/40x40/filters:quality(90):fill(white)/https://fptshop.com.vn/Uploads/Originals/2020/12/9/637431117638415667_tai-nghe-airpods-max-green-3.png',
            imageColorBlack: 'https://images.fpt.shop/unsafe/fit-in/40x40/filters:quality(90):fill(white)/https://fptshop.com.vn/Uploads/Originals/2020/12/9/637431091109782209_tai-nghe-airpods-max-pink-2.png',
        }
    ]

    const ParameterAir = [
        {   
            screen:'Chất liệu',
            screenDetail: 'Khung kim loại, đệm vải',
            rearCamera:'Dòng hàng',
            rearCameraDetail:'	AirPods Max',
            CameraSelfie:'Dòng máy tương thích ',
            CameraSelfieDetail:'iPhone, iPad, iPod, Apple Watch, Apple TV, Mac',
            RAM:'Dung lượng pin',
            RAMDetail:'Lên đến 20 giờ',
            InternalMemory:'Hệ điều hành tương thích'       ,   
            InternalMemoryDetail:'iOS, iPadOS, watchOS, tvOS, macOS mới nhất',
            CPU:'Loại kết nối',
            CPUDetail:'Bluetooth',
            GPU:'phụ kiện đi kèm',
            GPUDetail:'Smart Case, Cáp USB-C to Lightning, Sách HDSD',
            Battery:'Thời gian bảo hành',
            BatteryDetail:'	12 Tháng',
            Sim:'Thời gian sạc',
            SimDetail:'5 phút sử dụng lên đến 1.5 giờ',
            system:'Thương hiệu',
            systemDetail:'Apple',
            origin:'Tính năng',
            originDetail:'Thiết kế sang trọng, âm thanh đỉnh cao., Trang bị tính năng chống ồn chủ động (NFC), điều chỉnh âm thanh (Adaptive EQ), chế độ xuyên âm (Transparency Mode) và âm thanh vòm (Spatial Audio)., Điều khiển thông minh với nút Digital Crown',
            Release:'Trọng lượng',
            ReleaseDetail:'Tai nghe: 384.8 g, Smart Case: 134.5 g'
        }
    ]

    const DescriptionsAir=[
        {
            image: 'https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/An/Tai-nghe-apple-airpods-max-2.jpg',
            image1: 'https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/An/Tai-nghe-apple-airpods-max-5.jpg',
            image2: 'https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/An/Tai-nghe-apple-airpods-max-d.JPG',
            head: 'Chiếc tai nghe over-ear tinh tế nhất',
            span: 'Với AirPods Max, Apple đã định nghĩa lại phong cách over-ear khi đem tới thiết kế tối giản từ chụp tai tới quai đeo headband. Mọi chi tiết trên AirPods Max đều có kích cỡ nhỏ gọn vừa đủ, hướng tới cảm giác thoải mái nhất cho mọi đối tượng khách hàng dù đeo liên tục hàng giờ.Apple đã bọc một lớp chất liệu mềm bên ngoài khung thép không gỉ để tạo cảm giác linh hoạt, mềm mại mà vẫn đảm bảo tính bền bỉ cứng cáp trong thiết kế tổng thể chung. Ngoài ra, chủ nhân của AirPods Max có thể điều chỉnh độ dài hai bên headband cho tới khi ưng ý và phù hợp với kích cỡ riêng của bản thân.',
            head1: 'Đệm tai êm ái và thoáng khí tối đa ',
            span1: 'Như mọi sản phẩm tai nghe Apple khác, AirPods Max được hoàn thiện tỉ mỉ đến từng chi tiết nhỏ nhất. Nếu những model AirPods tiền nhiệm ghi điểm ở phần driver bám tai mà vẫn thoải mái thì AirPods Max chọn hướng sử dụng đệm tai êm ái nhất. Apple đã ứng dụng chất liệu bọt hoạt tính chuyên dụng cho các thiết bị âm thanh làm thành phần chính để sản xuất đệm tai. Bọc bên ngoài là một lớp vải lưới đặc biệt, được thiết kế riêng nhằm tạo cảm giác mềm mại mà vẫn thoáng khí.',
            head2: 'Âm thanh cao cấp chưa từng có trên AirPods',
             span3: 'Hướng tới việc tạo nên một chiếc tai nghe cho chất âm cao cấp vượt qua cả AirPods Pro, Apple không chỉ tối ưu thiết kế AirPods Max mà còn tích hợp công nghệ chống ồn chủ động ANC vào sản phẩm này. Mỗi thành phần cấu tạo nên trình điều khiển âm thanh đều được tinh chỉnh nhằm đem tới chất lượng âm thanh đầu ra có độ trung thực cao nhất. Bạn sẽ hài lòng với âm bass trầm ấm, dải mid rõ ràng và âm treble sắc sảo mà sản phẩm đem lại. Dù gu của bạn là nhạc trẻ sôi động hay nhạc không lời nhẹ nhàng, AirPods Max cũng sẽ đáp ứng tốt nhu cầu của bạn. AirPods Max sở hữu không chỉ một mà tới hai bộ vi xử lý H1 - phân bố ở hai bên tai nghe. Sự góp mặt của chip H1 giúp xử lý tín hiệu âm thanh truyền tới và tạo nên chất âm đầu ra tối ưu nhất. Phần mềm mà các kỹ sư Táo khuyết đưa vào tận dụng hiệu quả cả 10 lõi xử lý âm thanh trong mỗi chip H1, từ đó gia tăng khả năng chống ồn chủ động tối đa. Không chỉ vậy, H1 còn là trái tim công nghệ Apple, vừa đảm bảo khả năng tương tác Siri nhanh nhạy, vừa giúp tiết kiệm năng lượng tốt hơn.'
        }
    ]
    /* ============================================================================================================================= */

    
   
  
    return (
        <div>
            <div >
                <div className='detailCommit'>
                    <p className='commitP'>SHOP CÔNG NGHỆ CAM KẾT</p>
                    <ul>
                        <li className='commitLi'><i className="fas fa-box-open commitLiI "></i> Bộ sản phẩm gồm:<a href='/'> Hộp, Sạc, Tai nghe, Sách hướng dẫn, Bút cảm ứng, Cáp, Cây lấy sim</a></li>
                        <li className='commitLi'><i className="fas fa-medal commitLiI"></i>Bảo hành chính hãng 12 tháng.</li>
                        <li className='commitLi'> <i className="fas fa-undo-alt commitLiI"></i>Lỗi là đổi mới trong vòng 1 tháng trên toàn quốc.</li>
                    </ul>
                    <p className='commitP'>ƯU ĐÃI MUA HÀNG TRẢ GÓP</p>
                    <ul>
                        <li className='commitLi'><i className="fas fa-medal commitLiI"></i> Trả góp bằng CMT và bằng lái xe, không cần chứng minh thu nhập.</li>
                        <li className='commitLi'><i className="fas fa-undo-alt commitLiI"></i>Chỉ cần trả trước 30% nhận máy sau 15 phút</li>

                    </ul>
                    <p className='commitP'>ƯU ĐÃI MUA HÀNG TRẢ GÓP</p>
                    <ul>
                        <li className='commitLi'><i className="fas fa-map-marker-alt commitLiI"></i> Hà Nội: Số 2 Ngõ 161 Thái Hà, Quận Đống Đa, Hà Nội.</li>
                        <li className='commitLi'><i className="fas fa-map-marker-alt commitLiI"></i>Thái Nguyên: Số 131 Phạm Văn Đồng, Phổ Yên, Thái Nguyên.</li>

                    </ul>

                </div>

                <div className='detail'>
                    <div className='detail-body'>
                        {DetailsIp13pr.map((detail, index) => (
                            <div key={index}  >
                               <div className='detail-'>
                               <h3 className='detailHead'>{detail.head}</h3>
                               </div>
                              <div className='detaildiv'>
                              <img src={detail.background} className='detailImage'    alt='' />
                              </div>
                                <div className='detail-detail'>
                                   
                                 {/*    <p className='detailPrice'>{detail.price}</p> */}
                                    <p className='detailP'>
                                        <i className="fas fa-shipping-fast detailIcon"></i>
                                        MIỄN PHÍ VẬN CHUYỂN TOÀN QUỐC
                                    </p>
                                    <div className='detailVersoin'>
                                        <p className='versionP' > Lựa chọn phiên bản</p>
                                        <div className='detailLink'>
                                            <div className='detailLinkA active'>
                                                <a >
                                                    <input type='radio' name='version'  ></input>

                                                    <span className='detailSpan'>{detail.version}<br /></span>
                                                    <strong className='priceDetail'>{detail.price}</strong>
                                                </a>
                                            </div>
                                            <div className='detailLinkA'>
                                                <a >
                                                    <input type='radio' name='version'></input>
                                                    <span className='detailSpan'>{detail.version1}<br /></span>
                                                    <strong className='priceDetail'>{detail.price1}</strong>
                                                </a>
                                            </div>
                                            <div className='detailLinkA'> <a >
                                                <input type='radio' name='version'></input>
                                                <span className='detailSpan'>{detail.version2}<br /></span>
                                                <strong className='priceDetail'>{detail.price2}</strong>
                                            </a>
                                            </div>
                                            

                                        </div>
                                        <p className='versionP' >Lựa chọn màu và xem địa chỉ còn hàng</p>
                                        <div className='detailLink'>
                                            <div >
                                                <div  >
                                                    <img  alt=''
                                                   /*  onClick={()=>handleSubmit()} */
                                                        className='imgeColor'
                                                        src={detail. imageColorGreen} />
                                                         
                                                    <img  alt=''
                                                 /*    onClick={()=>handleSubmit()} */
                                                        className='imgeColor'
                                                        src={detail. imageColorWhite} />
                                                    <img  alt=''
                                                    /*  onClick={()=>handleSubmit()} */
                                                        className='imgeColor'
                                                        src={detail. imageColorGray} />
                                                    <img  alt=''
                                                 /*     onClick={()=>handleSubmit()} */
                                                        className='imgeColor'
                                                        src={detail. imageColorBlue} />
                                                        <img
                                                  /*    onClick={()=>handleSubmit()} */
                                                        className='imgeColor'  alt=''
                                                        src={detail.imageColorYellow} />
                                                </div>
                                              <div className='buttonUpDown'>
                                              <label>Số lượng:</label>
                                                <button onClick={decrement} className='btnUpDown' >-</button>
                                                <label>{count}</label>
                                                <button onClick={increment} className='btnUpDown'>+</button>
                                              </div>

                                            </div>
                                          
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <button className='detailBuy'>MUA NGAY
                            <p className='detailBuyP'>Giao hàng miễn phí hoặc nhận tại shop</p>
                        </button>
                        <button className='detailTragop'>MUA TRẢ GÓP
                            <p className='detailTragopP'>Thủ tục đơn giản</p>
                        </button>
                        <button className='detailThe'>TRẢ GÓP QUA THẺ
                            <p className='detailTheP'>Visa, Master, JCB</p>
                        </button>



                    </div>

                   {ParameterApple.map((detail, index) => (
                        <div key={index} className='Promotion '  >

                            <div className='parameter'>

                                <tbody className='parameterTr'>
                                    <h4 className='parameterHead'>Thông số kỹ thuật</h4>
                                    <tr className='parameterTr'>
                                        <td>{detail.screen}</td>
                                        <td>{detail.screenDetail}</td>
                                    </tr>
                                    <tr className='parameterTr'>
                                        <td>{detail.rearCamera}</td>
                                        <td>{detail.rearCameraDetail}</td>
                                    </tr>
                                    <tr className='parameterTr'>
                                        <td>{detail.CameraSelfie}</td>
                                        <td>{detail.CameraSelfieDetail}</td>
                                    </tr>
                                    <tr className='parameterTr'>
                                        <td>{detail.RAM}</td>
                                        <td>{detail.RAMDetail}</td>
                                    </tr>
                                    <tr className='parameterTr'>
                                        <td>{detail.InternalMemory}</td>
                                        <td>{detail.InternalMemoryDetail}</td>
                                    </tr>
                                    <tr className='parameterTr'>
                                        <td>{detail.CPU}</td>
                                        <td>{detail.CPUDetail}</td>
                                    </tr>
                                    <tr className='parameterTr'>
                                        <td>{detail.GPU}</td>
                                        <td>{detail.GPUDetail}</td>
                                    </tr>
                                    <tr className='parameterTr'>
                                        <td>{detail.Battery}</td>
                                        <td>{detail.BatteryDetail}</td>
                                    </tr>
                                    <tr className='parameterTr'>
                                        <td>{detail.Sim}</td>
                                        <td>{detail.SimDetail}</td>
                                    </tr>
                                    <tr className='parameterTr'>
                                        <td>{detail.system}</td>
                                        <td>{detail.systemDetail}</td>
                                    </tr>
                                    <tr className='parameterTr'>
                                        <td>{detail.origin}</td>
                                        <td>{detail.originDetail}</td>
                                    </tr>
                                    <tr className='parameterTr'>
                                        <td>{detail.Release}</td>
                                        <td>{detail.ReleaseDetail}</td>
                                    </tr>
                                </tbody>
                                <a className='parameterLink' href='/'>Xem cấu hình chi tiết </a>
                            </div>
                            {DescriptionsIphone.map((Description, index) => (
                                <div className='description' key={index}>
                                    <p className='descriptionMota' >MÔ TẢ <hr></hr></p>
                                    <div>
                                        <p className='descriptionHead'>{Description.head}</p>
                                        <p className='descriptionSpan'>{Description.span}</p>
                                        <img className='imgDescription' src={Description.image2}  alt='' />
                                    </div>
                                    <div>
                                        <p className='descriptionHead'>{Description.head1}</p>
                                        <p className='descriptionSpan'>{Description.span1}</p>
                                        <img className='imgDescription' src={Description.image} alt='' />
                                        <p className='descriptionSpan'>{Description.span2}</p>
                                    </div>
                                    <div>
                                        <p className='descriptionHead'>{Description.head2}</p>
                                        <p className='descriptionSpan'>{Description.span3}</p>
                                        <img className='imgDescription' src={Description.image1}  alt='' />
                                    </div>
                                </div>
                            ))}


                            {showButton && (
                                <button className='btnHide' onClick={handleClick}> {clamped ? "Xem thêm" : "Thu gọn"}</button>
                            )}

                        </div>

                    ))}


                </div>

            </div>

        </div>
    );
}
