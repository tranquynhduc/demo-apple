import React from 'react';
import { useState, useEffect } from "react";

export default function Helps() {
  const initalValue = { name: '', diachi: '',phone: '',email: '',noidung: '' }
  const [formValue, setFormValue] = useState(initalValue);
  const handleChange = (event) => {
      const { name, value } = event.target;
      setFormValue({ ...formValue, [name]: value })
  }
  const [isOnclick, setIsOnclick] = useState(false);
  const handleClick = (event) => {
    event.preventDefault();
    console.log( ' name: ',formValue.name , '/',' diachi: ',formValue.diachi,'/',' phone: ',formValue.phone,'/',' email: ',formValue.email,'/','content', formValue.noidung)

}
    const helps = [
        {
          'imge': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png',
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
      ]
  return <div> <div>
  {helps.map((help, index) => (
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
              <input className="input-giaohang" type='text'
                            name='name'
                            value={formValue.name}
                            onChange={handleChange} /><br />
              <p className="input-p">Địa chỉ:</p>
              <input className="input-giaohang" type='text'
                            name='diachi'
                            value={formValue.diachi}
                            onChange={handleChange} /><br />
              <p className="input-p">Phone  :</p>
              <input className="input-giaohang" type='text'
                            name='phone'
                            value={formValue.phone}
                            onChange={handleChange} /><br />
              <p className="input-p">Email(*):</p>
              <input className="input-giaohang" type='text'
                            name='email'
                            value={formValue.email}
                            onChange={handleChange}/><br />
              <p className="input-p">Nội dung:(*):</p>
              <input className="input-giaohang"  type='text'
                            name='noidung'
                            value={formValue.noidung}
                            onChange={handleChange}/><br />
              <button className="btn-ship"
                       onClick={handleClick}          
                  >Gửi đăng kí</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  ))}
</div></div>;
}
