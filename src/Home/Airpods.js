import React from 'react';
import '../product/Product.css'
import '../navigate/Navigate';
import { Link } from 'react-router-dom';



export default function Airpods() {
  const airpods = [
    {

      'src': 'https://cdn.tgdd.vn/Products/Images/54/236331/bluetooth-airpods-max-apple-1-org.jpg',
      'name': 'Apple AirPods Max | Xanh Dương',
      'price': '10.600.000 đ'
    },
    {

      'src': 'https://dienmay.vatbau.com/Products/Images/54/233617/chup-tai-bluetooth-airpods-max-apple-1-2-org.jpg ',
      'name': 'Apple AirPods Max | Xanh Dương',
      'price': '10.600.000 đ'
    },
    {

      'src': 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-green-202011?wid=491&hei=400&fmt=jpeg&qlt=95&.v=1604022364000',
      'name': 'Apple AirPods Max | Xanh Dương',
      'price': '10.600.000 đ'
    },
    {

      'src': 'https://ben.com.vn/Content/Images/Products/988294b0-aab8-4a91-a890-48827a00457b.png',
      'name': 'Apple AirPods Max | Xanh Lá',
      'price': '10.600.000 đ'
    },
    {

      'src': 'https://i5.walmartimages.com/asr/decf72ea-5fe0-4073-9b15-fbc9eeb57dea_1.962b31761dd240cdf18db7668722704c.jpeg',
      'name': 'Apple AirPods Max | Đỏ Hồng',
      'price': '10.600.000 đ'
    },
    {

      'src': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxTvPeWWRxJPTVkSpDcCADrmoNTniKGvsbJk-51DAPQWe_bA_34ib1osBDD6Uuyl7lCM&usqp=CAU',
      'name': 'Apple AirPods Max |  Đen',
      'price': '10.600.000 đ'
    },
    {

      'src': 'http://tiendung.vn/images/detailed/16/airpods_2_1.jpeg',
      'name': 'Tai nghe Apple | AirPods Pro (Magsafe 2021) Chính Hãng',
      'price': '4.900.000 đ'
    },
    {
      'src': 'https://as-images.apple.com/is/MWP22?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1591634795000',
      'name': 'Tai nghe Apple AirPods 3rd',
      'price': '5.350.000 đ'
    },
    {

      'src': 'https://hoanghamobile.com/Uploads/2020/09/22/Tai%20nghe%20Apple%20AirPods%20Pro.png',
      'name': 'Tai nghe Bluetooth | Apple | AirPods 2 | Sạc thường | Chính Hãng',
      'price': '3.350.000 đ'
    }

  ]
  const airpodPanner = [
    {
      'panner': 'https://www.techgenesis.net/wp-content/uploads/2019/11/AirPods-Pro-ColorWare-banner.png'
    }
  ]

  return (
    <div>
      <div >
        {airpodPanner.map((panner, index) => (

          <div key={index}  >
            <img src={panner.panner} alt='' className="panner" />
          </div>

        ))}
      </div> <div className="row">
        {airpods.map((array, index) => (
          <Link to='/Detail' className="image-- " >
            <div key={index} >

              <img src={array.src} alt='' className="image" />
              <p className="title-phone">{array.name}</p>
              <p className="phone-price">{array.price}</p>

            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
