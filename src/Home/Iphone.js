import React from 'react';
import '../product/Product.css'
import '../navigate/Navigate';
import { Link } from 'react-router-dom';
export default function Iphone() {
  const iphones = [

    {
     
      'src': 'https://iphonebinhphuoc.vn/wp-content/uploads/2021/09/96D0F577-8FF1-424C-88F5-01B8F8F95AC3.png',
      'name': 'iPhone 13 Pro Max LL/A 128Gb',
      'price': '30.800.000 đ'
    },
    {

      'src': 'https://iphonebinhphuoc.vn/wp-content/uploads/2021/09/96D0F577-8FF1-424C-88F5-01B8F8F95AC3.png',
      'name': 'iPhone 13 Pro Max LL/A 512',
      'price': '33.100.000 đ'
    },
    {

      'src': 'https://iphonebinhphuoc.vn/wp-content/uploads/2021/09/96D0F577-8FF1-424C-88F5-01B8F8F95AC3.png',
      'name': 'iPhone 13 Pro LL/A 256Gb',
      'price': '38.500.000 đ'
    },
    {

      'src': 'https://tamducmobile.com/wp-content/uploads/2021/09/iphone-13-pro-graphite-select.png',
      'name': 'iPhone 13 Pro LL/A 512Gb',
      'price': '36.000.000 đ'
    },
    {

      'src': 'https://tiendung.vn/images/detailed/19/iphone-13-midnight-select-2021_eczz-49_mcv8-ya_v60f-fh_e7m8-s1.png',
      'name': 'iPhone 13 LL/A 128Gb',
      'price': '23.400.000 đ'
    },
    {
      'src': 'https://tiendung.vn/images/detailed/19/iphone-13-product-red-select-2021_3h93-ro_6u9y-kn.png',
      'name': 'iPhone 13 LL/A 256Gb',
      'price': '24.700.000 đ'
    },
    {

      'src': 'https://tiendung.vn/images/detailed/19/iphone-13-product-red-select-2021_3h93-ro_6u9y-kn.png',
      'name': 'iPhone 13 LL/A 256Gb',
      'price': '23.400.000 đ'
    },
    {

      'src': 'https://tiendung.vn/images/detailed/19/iphone-13-blue-select-2021_771b-mq_c2m2-s8_1cbx-a5.png',
      'name': 'iPhone 13 LL/A 512Gb',
      'price': '25.900.000 đ'
    },
    {

      'src': 'https://cdn.hoanghamobile.com/i/preview/Uploads/2020/11/06/apple-iphone-12-mini-5.png',
      'name': 'iPhone 12 LL/A 512Gb',
      'price': '18,190,000 ₫ '
    },
    {

      'src': 'https://www.xtmobile.vn/vnt_upload/product/11_2020/thumbs/600_iphone_12_pro_silver_xtmobile_5.jpg',
      'name': 'iPhone 12 Pro Max',
      'price': '25.900.000 đ'
    },
    {

      'src': 'https://vuatao.vn/wp-content/uploads/2020/12/MM1Q3.jpeg',
      'name': 'Ốp lưng iPhone 13 ProMax ITSKINS HYBRID kháng khuẩn và chống sốc (3M) | Clear',
      'price': '470.000 đ'
    },
    
    {

      'src': 'https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/An/mo-ta-san-pham-adapter-sac-nhanh-20w-powerport-iii-anker-a2633-1.jpg',
      'name': 'Sạc nhanh 20W Type-C | MHJE3ZA | Apple VN',
      'price': '470.000 đ'
    },
    {

      'src': 'https://bizweb.dktcdn.net/100/031/560/products/broshop-op-lung-switcheasy-iphone-13-pro-starfield-3-9dae81f2-703b-455c-8ace-a5b93d79e9bb.jpg?v=1634646850667',
      'name': 'Cáp Anker PowerLine III Flow USB-C to Lightning - 0.9m',
      'price': '360.000 đ'
    },

    {
      'src': 'https://product.hstatic.net/1000379731/product/starfield_stars_6.1_02_93c14e46d38443e6adc22de7c647a0b4_master.jpg',
      'name': '/Ốp lưng SwitchEasy Starfield Stars For iPhone 13 Pro Max',
      'price': '490.000 đ'
    }

  ]
  const iphonePanner = [

    {
      'panner': 'https://tiendung.vn/images/companies/1/iPhone%2013/iPhone-3-camera-system.png?1631725413015',

    }
  ]

  return <div>
    <div >
      {iphonePanner.map((panner, index) => (

        <div key={index}  >
          <img src={panner.panner} alt='' className="panner" />
        </div>

      ))}
    </div> <div className="row">
      {iphones.map((array, index) => (
        <Link to='/Detail' className="image-- " >
          <div key={index} >

            <img src={array.src} alt='' className="image" />
            <p className="title-phone">{array.name}</p>
            <p className="phone-price">{array.price}</p>


          </div>
        </Link>
      ))}
    </div></div>;
}
