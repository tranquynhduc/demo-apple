import './Product.css'
import '../homePage/HomePage.css'
import '../navigate/Navigate';
import { Link } from 'react-router-dom';


const Product = (props) => {

  // const [profileState, setProfileState] = useState(props);
  // console.log(profileState, props);

  let arrays = [


  ]
  let panners = [

  ]


  const iphones = [

    {
      'panner': '/icon/slide/iPhone-3-camera-system.png',
      'panner1': '/icon/slide/2021-Banner-iPhone-13-Pro.jpg',
      'src': '/icon/product/hero_iphone_13_pro_max__dj0qo41ipv8m_large.jpg',
      'name': 'iPhone 13 Pro Max LL/A 128Gb',
      'price': '30.800.000 đ'
    },
    {

      'src': '/icon/product/hero_iphone_13_pro_max__dj0qo41ipv8m_large.jpg',
      'name': 'iPhone 13 Pro Max LL/A 512',
      'price': '33.100.000 đ'
    },
    {

      'src': '/icon/product/hero_iphone_13_pro_max__dj0qo41ipv8m_large.jpg',
      'name': 'iPhone 13 Pro LL/A 256Gb',
      'price': '38.500.000 đ'
    },
    {

      'src': '/icon/product/hero_iphone_13_pro_max__dj0qo41ipv8m_large.jpg',
      'name': 'iPhone 13 Pro LL/A 512Gb',
      'price': '36.000.000 đ'
    },
    {

      'src': '/icon/product/iphone-13-select-2021_pblo-ut.jpg',
      'name': 'iPhone 13 LL/A 128Gb',
      'price': '23.400.000 đ'
    },
    {
      'src': '/icon/product/iphone-13-select-2021_pblo-ut.jpg',
      'name': 'iPhone 13 LL/A 256Gb',
      'price': '24.700.000 đ'
    },
    {

      'src': '/icon/product/iphone-13-select-2021_pblo-ut.jpg',
      'name': 'iPhone 13 LL/A 256Gb',
      'price': '23.400.000 đ'
    },
    {

      'src': '/icon/product/iphone-13-select-2021_pblo-ut.jpg',
      'name': 'iPhone 13 LL/A 512Gb',
      'price': '25.900.000 đ'
    },
    {

      'src': '/icon/product/oplung.jpeg',
      'name': 'Ốp lưng iPhone 13 ProMax ITSKINS HYBRID kháng khuẩn và chống sốc (3M) | Clear',
      'price': '470.000 đ'
    },
    {

      'src': '/icon/product/oplung.jpeg',
      'name': 'Ốp lưng iPhone 13 ProMax ITSKINS HYBRID kháng khuẩn và chống sốc (3M) | Gray',
      'price': '470.000 đ'
    },
    {

      'src': '/icon/product/oplung.jpeg',
      'name': 'Ốp lưng iPhone 13 ProMax ITSKINS HYBRID kháng khuẩn và chống sốc (3M) | Pink',
      'price': '470.000 đ'
    },
    {

      'src': '/icon/product/anker-a2633-sac-nhanh-20w-powerport-iii-1.jpg',
      'name': 'Sạc nhanh 20W Type-C | MHJE3ZA | Apple VN',
      'price': '470.000 đ'
    },
    {

      'src': '/icon/product/cap-anker-powerline-iii-flow-lightning-to-usb-c-0-9m-a8662-white-b.jpg',
      'name': 'Cáp Anker PowerLine III Flow USB-C to Lightning - 0.9m',
      'price': '360.000 đ'
    },
    {
      'src': '/icon/product/op-switcheasy-starfield-HappyPark-for-iphone-13-pro-max-6.jpg',
      'name': 'Ốp lưng SwitchEasy Starfield Stars For iPhone 13 Pro Max',
      'price': '490.000 đ'
    },
    {
      'src': '/src/icon/product/op-switcheasy-starfield-stars-for-iphone-13-pro-max-5.jpg',
      'name': '/Ốp lưng SwitchEasy Starfield Stars For iPhone 13 Pro Max',
      'price': '490.000 đ'
    }

  ]

  const ipads = [
    {


      src: '/src/icon/ipad/ipad-pro-11-select-cell-silver-202104_igyj-38_to6w-8z_esud-tt_wnq6-pt.jpg',
      'name': 'iPad Pro 11-inch M1-2021 Wifi 512GB - LL/A',
      'price': '27.000.000 ₫'
    },
    {

      'src': '/icon/ipad/ipad-pro-12-select-202104.png',
      'name': 'iPad Pro 11-inch M1-2021 5G 128GB - LL/A',
      'price': 'Liên hệ 0937345567 để biết giá'
    },
    {

      'src': '/icon/ipad/ipad-pro-12-select-202104.png',
      'name': 'iPad Pro 12.9-inch (M1-2021) Wifi | 256Gb | LL/A',
      'price': '38.500.000 đ'
    },
    {

      'src': '/icon/ipad/magic-keyboard-iPad_Pro_12_9_2021-5.jpg',
      'name': 'Magic Keyboard for iPad Pro 12.9‑inch (5th generation)',
      'price': '9.300.000 ₫'
    },
    {

      'src': '/icon/ipad/ipad-pro-12-select-202104.png',
      'name': 'iPad Pro 12.9-inch (M1-2021) Wifi | 128Gb | LL/A',
      'price': '27.000.000 ₫'
    },
    {

      'src': '/icon/ipad/ipad-pro-12-select-202104.png',
      'name': 'iPad Pro 12.9-inch (M1-2021) 5G | 128Gb | LL/A',
      'price': '23.400.000 đ'
    },
    {

      'src': '/icon/ipad/magic-keyboard-iPad_Pro_12_9_2021-5.jpg',
      'name': 'Magic Keyboard for iPad Pro 12.9‑inch (5th generation)',
      'price': '28.000.000 ₫'
    },
    {

      'src': '/icon/ipad/12_9_in_ipad_pro__large_ijxy-fd.jpg',
      'name': 'iPad Pro 11-inch M1-2021 5G 256GB - (Apple VN)',
      'price': '28.000.000 ₫'
    },
    {

      'src': '/icon/ipad/magic-keyboard-iPad_Pro_12_9_2021-5.jpg',
      'name': 'Magic Keyboard for iPad Pro 12.9‑inch (5th generation)',
      'price': '27.000.000 ₫'
    },
    {

      'src': '/icon/ipad/ipad-pro-12-select-202104.png',
      'name': 'iPad Pro 12.9 inch M1 (2021) 5G | 256Gb | LL/A',
      'price': '39.500.000 ₫'
    },


  ]
  const airpods = [
    {

      'src': '/icon/ipad/airxanh.png',
      'name': 'Apple AirPods Max | Xanh Dương',
      'price': '10.600.000 đ'
    },
    {

      'src': '/icon/ipad/airxam.png',
      'name': 'Apple AirPods Max | Xanh Lá',
      'price': '10.600.000 đ'
    },
    {

      'src': '/icon/ipad/airpink.png',
      'name': 'Apple AirPods Max | Đỏ Hồng',
      'price': '10.600.000 đ'
    },
    {

      'src': '/icon/ipad/airblack.png',
      'name': 'Apple AirPods Max |  Đen',
      'price': '10.600.000 đ'
    },
    {

      'src': '/icon/ipad/airpods_2_1.jpeg',
      'name': 'Tai nghe Apple | AirPods Pro (Magsafe 2021) Chính Hãng',
      'price': '4.900.000 đ'
    },
    {
      'src': '/icon/ipad/airpods_3gen__er2vzgadkpiu_large_2x.jpg',
      'name': 'Tai nghe Apple AirPods 3rd',
      'price': '5.350.000 đ'
    },
    {

      'src': '/icon/ipad/airpods_pro_1.jpeg',
      'name': 'Tai nghe Bluetooth | Apple | AirPods 2 | Sạc thường | Chính Hãng',
      'price': '3.350.000 đ'
    }

  ]
  const watchs = [
    {
      'src': '/icon/ipad/Apple-watch-40-4G-SL-vien-nhom-grey-day-charcoal-1.jpg',
      'name': 'Apple Watch S7 GPS 45mm Viền nhôm | Apple VN',
      'price': '10.350.000 đ'
    },
    {
      'src': '/icon/ipad/Apple-watch-40-vien-nhom-silver-day-cau-su-trang-1_zct5-cg.jpg',
      'name': 'Apple Watch S7 GPS 45mm Viền nhôm | Apple VN',
      'price': '8.350.000 đ'
    },
    {
      'src': '/icon/ipad/apple-watch-s7-lte-41mm-den-650x650_6ush-pu.png',
      'name': 'Apple Watch S7 GPS 45mm Viền nhôm | Apple VN',
      'price': '8.350.000 đ'
    }, {
      'src': '/icon/ipad/Apple_watch_vien_nhom_Gold_day_cao_su_hong_1.jpg',
      'name': 'Apple Watch S7 GPS 45mm Viền nhôm | Apple VN',
      'price': '8.350.000 đ'
    }, {
      'src': '/icon/ipad/Apple-watch-40-vien-nhom-silver-day-cau-su-trang-1_zct5-cg.jpg',
      'name': 'Apple Watch S7 GPS 45mm Viền nhôm | Apple VN',
      'price': '3.350.000 đ'
    }, {
      'src': '/icon/ipad/Apple-watch-40-4G-SL-vien-nhom-grey-day-charcoal-1.jpg',
      'name': 'Apple Watch S7 GPS 45mm Viền nhôm | Apple VN',
      'price': '10.350.000 đ'
    }, {
      'src': '/icon/ipad/Apple_watch_vien_nhom_Gold_day_cao_su_hong_1.jpg',
      'name': 'Apple Watch S7 GPS 45mm Viền nhôm | Apple VN',
      'price': '8.350.000 đ'
    },
  ]


  const iphonePanner = [

    {
      'panner': '/icon/slide/iPhone-3-camera-system.png',

    }
  ]
  const ipadPanner = [
    {
      'panner': '/icon/slide/2021-Banner-iPad-pro.jpg'
    }
  ]

  const airpodPanner = [
    {
      'panner': '/icon/slide/panner.jpg'
    }
  ]

  const watchPanner = [
    {
      'panner': '/icon/slide/pannerWatch.jpg'

    }
  ]
  const slides = [
    {
      'slide': 'https://thepixel.vn/wp-content/uploads/Camera-iPhone-13-co-the-dung-de-kiem-tra-suc-khoe-cua-mat-the-pixel-5-.jpg',
      'span': ' iPhone 13 Pro',
      'osho': '  Oh.So.Pro.   ',
      'Learnmore': 'Learn more'
    },
  ]
  let HomePage = []
  const productHome = [
    {

      'src': 'http://www.maccenter.vn/MacFamily/Thumnail-MacBookAir-M1.jpg',
      'name': 'MacBook Air M1',
      'p': 'Mỏng, nhẹ và hoàn toàn yên tĩnh   với thiết kế "No Fan, No Noise" từ Apple',

    },
    {

      'src': 'http://www.maccenter.vn/MacFamily/Thumnail-MacBookPro-2021.jpg',
      'name': 'MacBook Pro 2021',
      'p': 'Nhanh và mạnh mẽ với nền tảng ARM Tối ưu cho xử lý từ văn phòng đến đồ họa',

    },
    {

      'src': 'http://www.maccenter.vn/MacFamily/Thumnail-MacMini-M1.jpg',
      'name': 'Mac Mini M1',
      'p': 'Thiết kế nhỏ gọn nhưng hoàn toàn mạnh mẽ Một cách tiếp cận Mac OS với chi phí không thế tốt hơn.',

    }, {

      'src': 'http://www.maccenter.vn/App_Images/iMac-M1.jpg',
      'name': 'iMac M1',
      'p': 'Đơn giản với thiết kế All-in-One từ Apple 2 lựa chọn với màn hình 4K và 5K tuyệt đẹp.',


    }
  ]
  let productfooters = []
  const productFooters = [
    {

      'src': 'http://www.maccenter.vn/MacFamily/Thumnail-iPhone.jpg',
      'name': 'iPhone 13',
      'p': 'iPhone 12, iPhone 12 Pro và Pro Max. Đã sẵn sàng cho bạn trải nghiệm tại Mac Center',


    },
    {

      'src': 'http://www.maccenter.vn/MacFamily/Thumnail-iPad.jpg',
      'name': 'iPad Pro',
      'p': 'Nhiều phiên bản về kích thước và dung lượng iPad 10.2", iPad Air 10.9", iPad Pro 11" và iPad Pro 12.9"',


    },
    {

      'src': 'http://www.maccenter.vn/MacFamily/Thumnail-AppleWatch-Series6.jpg',
      'name': 'Apple Watch',
      'p': 'Series 6, nhanh hơn, mỏng hơn, pin lâu hơn Chống nước 50m, màn hình cảm ứng OLED mượt mà.',


    },
    {

      'src': 'http://www.maccenter.vn/MacFamily/Thumnail-Airpods2.jpg',
      'name': 'AirPods 2',
      'p': 'Chip xử lý Apple H1, kết nối Bluetooth 2 phiên bản sạc có dây và sạc không dây',


    },
    {

      'src': 'http://www.maccenter.vn/App_Images/AirTag-1pack.jpg',
      'name': 'Air Tag',
      'p': 'Chip xử lý Apple H1, kết nối Bluetooth 2 phiên bản sạc có dây và sạc không dây',


    },
    {

      'src': 'http://www.maccenter.vn/App_Images/HomePod-Mini-White.jpg',
      'name': 'HomePod Mini',
      'p': 'Âm thanh 360 độ, tích hợp 4 Microphones Tương tác hoàn hảo với Touch Control hay Siri',


    },
  ]
  let imgefooter = []
  const imgeFooters = [
    {
      src: 'http://www.maccenter.vn/MacFamily/Thumnail-AirPodsMax-1.jpg',
    },
    {
      src: 'http://www.maccenter.vn/MacFamily/Thumnail-AirPodsMax-2.jpg',
    },
    {
      src: 'http://www.maccenter.vn/MacFamily/Thumnail-AirPodsMax-3.jpg',
    },
  ]
 /*  let helpss = [] */
  /* const helps = [
    {
      'imge': '/icon/homepage/Apple_logo_black.svg.png',
      'head': 'APPle',
      'title': 'Tại đây, chúng tôi cung cấp cho bạn đầy đủ về thế giới Mac từ những chiếc máy tính Apple tuyệt vời cho đến những món phụ kiện chất lượng như ổ cứng, cáp sạc...Tất cả đều sẵn sàng cho bạn lựa chọn! ',
      'title1': 'Hơn thế nữa, các thương hiệu Âm thanh hàng đầu như Bose, JBL, Harman Kardon, Marshall... cũng đều được trưng bày sẵn sàng giúp bạn nghe thử một cách tuyệt vời nhất cho thế giới âm thanh của riêng bạn.',
      'diachi': 'Showroom: 96A Tôn Thất Tùng, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh, Việt Nam',
      'phone': 'Phone: (84-028) 3925.2980 | Mobile: 090909.4641 - 090909.7396',
      'wed': 'Website: www.maccenter.vn - www.maccenter.com.vn',
      'email': 'Email: contact@maccenter.vn',
      'giaohang': 'GIAO HÀNG NHANH',
      'h1': 'CALL 035.793.8767',
      'ghichu': 'Giờ làm việc: 9h sáng đến 9h tối Từ thứ Hai đến Chủ Nhật (kể cả ngày lễ).',
      'head1': 'LIÊN HỆ',
      'Vanchuyen': 'Cần hỏi về sản phẩm, Email ngay cho Apple:',
    }
  ] */
  console.log('name: ', props.name)
  switch (props.name) {
    case 'icon':
      panners = slides
      HomePage = productHome
      productfooters = productFooters
      imgefooter = imgeFooters
      break;
    case '':
      panners = slides
      HomePage = productHome
      productfooters = productFooters
      imgefooter = imgeFooters
      break;
    case 'iphone':
      arrays = iphones
      panners = iphonePanner
      break;
    case 'ipad':
      arrays = ipads
      panners = ipadPanner
      break;
    case 'watch':
      arrays = watchs
      panners = watchPanner
      break;
    case 'airpod':
       arrays = airpods 
      panners = airpodPanner
      break;
   /*  case 'help':
      helpss = helps 
      break
 */
    default:
      break;
  }



  return (
    <div>

      <div>
        {panners.map((slide, index) => (
          <div key={index}>
            <span className='span-title'>{slide.span} </span>
            <span className='span-title-head'>{slide.osho} </span>
            <span>
              <Link className='span-title-head-Learnmore' to='/Iphone'>{slide.Learnmore} </Link>
            </span>
            <div><img src={slide.slide} alt='' className="panner-iphone" /> </div>

          </div>
        ))}
      </div>
      <div>
        {HomePage.map((slide, index) => (
          <div key={index} >
            <div className="imagePage-">
              <Link className="link-product" to="/Ipad">
              <img src={slide.src} alt='' className="image-homepage" />
              {slide.name}
              <p className="product-p">{slide.p}</p>
              </Link>
              {/*  </a> */}
            </div>
          </div>
        ))}
      </div>
      <div className="poniter">
        {productfooters.map((productfooter, index) => (
          <div key={index}  >
            <div className="image-footer">
              <img src={productfooter.src} alt='' className="image-homepage-" />
              <Link className="link-product" to="/Iphone  ">{productfooter.name}</Link>
              <p className="product-p">{productfooter.p}</p>
            </div>
          </div>
        ))}
      </div>
      <div >
        {imgefooter.map((imgeFooter, index) => (
          <div key={index}  >
            <img src={imgeFooter.src} alt='footer-imge' className="image-footer-" />
          </div>

        ))}
      </div>
      <div >
        {panners.map((panner, index) => (

          <div key={index}  >
            <img src={panner.panner} alt='' className="panner" />
         
          </div>

        ))}
      </div>
     {/*  <div className="row">
        {arrays.map((array, index) => (
          <div key={index} className="image-- " >
            <Link to='/Detail'>
              <img src={array.src} alt='' className="image" />
              <p className="title-phone">{array.name}</p>
              <p className="phone-price">{array.price}</p>
            </Link>

          </div>
        ))}
      </div> */}
     {/*  <div>
        {helpss.map((help, index) => (
          <div key={index} className="help">
            <div>
              <img src={help.imge} alt='' className="image-help" />

              <div className="help-title">
                <h1 className="head">{help.head}</h1>
                <div className="help-p">
                  <p >{help.title}</p>
                  <p >{help.title1}</p>
                  <p>{help.diachi}</p>
                  <p >{help.phone}</p>
                  <p >{help.wed}</p>
                  <p >{help.email}</p>
                </div>
              </div>
              <div className="help-ship">
                <div className="lienhe">
                  <p className='headd'>{help.giaohang}</p>
                  <h2>{help.h1}</h2>
                  <p className="p-help">{help.ghichu}</p>
                </div>
                <div className="giaohang-input">
                  <p className='headd'>{help.head1}</p>
                  <p className="p-help">{help.Vanchuyen}</p>
                  <div >
                    <p className="input-p">Tên của bạn(*):</p>
                    <input className="input-giaohang" /><br />
                    <p className="input-p">Địa chỉ:</p>
                    <input className="input-giaohang" /><br />
                    <p className="input-p">Phone  :</p>
                    <input className="input-giaohang" /><br />
                    <p className="input-p">Email(*):</p>
                    <input className="input-giaohang" /><br />
                    <p className="input-p">Nội dung:(*):</p>
                    <input className="input-giaohang" /><br />
                    <button className="btn-ship">Gửi đăng kí</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div> */}
      <div >
        {/*   {panners.map((panner, index) => (
          <div key={index}  > */}
        <div className="footer--">

          <div className="loiket" >
            <i className="far fa-check-circle check-chinhang"></i>
            <p>sản phẩm </p>
            <p className="doitra">CHÍNH HÃNG</p>
          </div>
          <div className="loiket" >
            <i className="fas fa-dolly check-chinhang"></i>
            <p>Miễn phí vận chuyển </p>
            <p className="doitra" > TOÀN QUỐC</p>
          </div>
          <div className="loiket" >
            <i className="fas fa-headset check-chinhang"></i>
            <p>Hotline hỗ trợ </p>
            <p className="doitra">1900.2091</p>
          </div>
          <div className="loiket" >
            <i className="fas fa-sync check-chinhang"></i>
            <p>Thủ tục đổi trã</p>
            <p className="doitra">DỄ DÀNG</p>
          </div>
        </div>
      </div>

    </div>
  );


}

export default Product;
