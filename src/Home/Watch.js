import React from 'react';
import '../product/Product.css'
import '../navigate/Navigate';
import { Link } from 'react-router-dom';

export default function Watch() {
    const watchs = [
        {
          'src': 'https://static.digiworldhanoi.vn/cache/catalog/%20Kardon%20ONYX%20STUDIO%20%205%20/BeoPlay/aaaaaaaa/series%207/637693812530137101_apple-watch-series-7-gps-41mm-do-1-600x600.jpg',
          'name': 'Apple Watch S7 GPS 45mm Viền nhôm | Apple VN',
          'price': '10.350.000 đ'
        },
        {
          'src': 'https://cdn.hoanghamobile.com/i/preview/Uploads/2022/01/04/image-removebg-preview-5.png',
          'name': 'Apple Watch S7 GPS 45mm Viền nhôm | Apple VN',
          'price': '8.350.000 đ'
        },
        {
          'src': 'https://cf.shopee.vn/file/e2b1e2e45abd9d3c2dcd5ccc9f2fa15f',
          'name': 'Apple Watch S7 GPS 45mm Viền nhôm | Apple VN',
          'price': '8.350.000 đ'
        }, {
          'src': 'https://tiendung.vn/images/thumbnails/250/250/detailed/17/Apple-watch-40-vien-nhom-silver-day-cau-su-trang-1_zct5-cg.jpg',
          'name': 'Apple Watch S7 GPS 45mm Viền nhôm | Apple VN',
          'price': '8.350.000 đ'
        }, {
          'src': 'https://static.digiworldhanoi.vn/cache/catalog/%20Kardon%20ONYX%20STUDIO%20%205%20/BeoPlay/aaaaaaaa/series%207/637693812530137101_apple-watch-series-7-gps-41mm-do-1-600x600.jpg',
          'name': 'Apple Watch S7 GPS 45mm Viền nhôm | Apple VN',
          'price': '3.350.000 đ'
        }, {
          'src': 'https://tiendung.vn/images/thumbnails/250/250/detailed/17/Apple-watch-40-4G-SL-vien-nhom-grey-day-charcoal-1.jpg',
          'name': 'Apple Watch S7 GPS 45mm Viền nhôm | Apple VN',
          'price': '10.350.000 đ'
        }, {
          'src': 'https://tiendung.vn/images/thumbnails/250/250/detailed/17/Apple_watch_vien_nhom_Gold_day_cao_su_hong_1.jpg',
          'name': 'Apple Watch S7 GPS 45mm Viền nhôm | Apple VN',
          'price': '8.350.000 đ'
        },
      ]
      const watchPanner = [
        {
          'panner': 'https://br.atsit.in/vi/wp-content/uploads/2021/10/cac-don-dat-hang-apple-watch-series-7-bat-dau-tu-ngay-8-thang-10-truoc-khi-co-hang-ban-le-vao-ngay-15-thang-10.jpg'
    
        }
      ]
  return <div>
      <div >
        {watchPanner.map((panner, index) => (

          <div key={index}  >
            <img src={panner.panner} alt='' className="panner" />
          </div>

        ))}
      </div>
      <div className="row">
                {watchs.map((array, index) => (
                   <Link to='/Detail ' className="image-- ">
                    <div key={index}  >
                       
                            <img src={array.src} alt='' className="image" />
                            <p className="title-phone">{array.name}</p>
                            <p className="phone-price">{array.price}</p>
                       

                    </div>
                    </Link>
                ))}
            </div>
  </div>;
}
