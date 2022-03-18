import React from 'react';
import '../product/Product.css'
import '../navigate/Navigate';
import { Link } from 'react-router-dom';

import '.././homePage/HomePage.css'

export default function Ipad() {
   
    const ipads = [
        {


            src: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-pro-11-select-wifi-silver-202104_GEO_MY_FMT_WHH?wid=1945&hei=2000&fmt=jpeg&qlt=95&.v=1617927148000',
            'name': 'iPad Pro 11-inch M1-2021 Wifi 512GB - LL/A',
            'price': '27.000.000 ₫'
        },
        {

            'src': 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-pro-11-select-202104_GEO_HK_FMT_WHH?wid=2000&hei=2000&fmt=png-alpha&.v=1617900315000',

            'name': 'iPad Pro 11-inch M1-2021 5G 128GB - LL/A',
            'price': 'Liên hệ 0937345567 để biết giá'
        },
        {

            'src': 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-pro-11-select-wifi-silver-202104_GEO_MY_FMT_WHH?wid=1945&hei=2000&fmt=jpeg&qlt=95&.v=1617927148000',
            'name': 'iPad Pro 12.9-inch (M1-2021) Wifi | 256Gb | LL/A',
            'price': '38.500.000 đ'
        },
        {

            'src': 'https://zshop.vn/images/thumbnails/679/500/detailed/56/ipad-pro-12-select-202104_u3af-5b_76cl-di_sg7l-3v_0bi1-qu_bwfh-zt.png',
            'name': 'Magic Keyboard for iPad Pro 12.9‑inch (5th generation)',
            'price': '9.300.000 ₫'
        },
        {

            'src': 'https://zshop.vn/images/thumbnails/679/500/detailed/56/ipad-pro-12-select-202104_u3af-5b_76cl-di_sg7l-3v_0bi1-qu_bwfh-zt.png',
            'name': 'iPad Pro 12.9-inch (M1-2021) Wifi | 128Gb | LL/A',
            'price': '27.000.000 ₫'
        },
        {

            'src': 'https://zshop.vn/images/thumbnails/679/500/detailed/56/ipad-pro-12-select-202104_u3af-5b_76cl-di_sg7l-3v_0bi1-qu_bwfh-zt.png',
            'name': 'iPad Pro 12.9-inch (M1-2021) 5G | 128Gb | LL/A',
            'price': '23.400.000 đ'
        },
        {

            'src': 'https://media.ldlc.com/r1600/ld/products/00/05/82/41/LD0005824197_1.jpg',
            'name': 'Magic Keyboard for iPad Pro 12.9‑inch (5th generation)',
            'price': '28.000.000 ₫'
        },
        {

            'src': 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-pro-11-select-202104_GEO_HK_FMT_WHH?wid=2000&hei=2000&fmt=png-alpha&.v=1617900315000',
            'name': 'iPad Pro 11-inch M1-2021 5G 256GB - (Apple VN)',
            'price': '28.000.000 ₫'
        },
        {

            'src': 'https://tiendung.vn/images/detailed/19/magic-keyboard-iPad_Pro_12_9_2021-1.jpg',
            'name': 'Magic Keyboard for iPad Pro 12.9‑inch (5th generation)',
            'price': '27.000.000 ₫'
        },
        {
          
            'src': 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-pro-11-select-202104_GEO_HK_FMT_WHH?wid=2000&hei=2000&fmt=png-alpha&.v=1617900315000',
            'name': 'iPad Pro 12.9 inch M1 (2021) 5G | 256Gb | LL/A',
            'price': '39.500.000 ₫'
        },


    ]
    const ipadPanner = [
        {
            panner: 'https://tiendung.vn/images/promo/20/2021-Banner-iPad-pro.jpg'
        }
    ]

    return (
        <div>
            <div >
                {ipadPanner.map((panner, index) => (

                    <div key={index}  >
                        <img src={panner.panner} alt='panner' className="panner"  />
                    </div>

                ))}
            </div>
            <div className="row">
                {ipads.map((array, index) => (
                    <Link to='/Detail' className="image-- ">
                        <div key={index}  >

                            <img src={array.src} alt='Ipad' className="image"  />
                            <p className="title-phone">{array.name}</p>
                            <p className="phone-price">{array.price}</p>


                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
