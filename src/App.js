import { useState } from 'react';
import Login from "./login/Login";
import { Routes, Route } from 'react-router-dom'
import Register from './register/Register.js'
import Product from './product/Product';
import Navigate from './navigate/Navigate.js'
import Footer from "./footer/Footer";
import Detail from './detial/Detail';
import Ipad from './Home/Ipad';
import Watch from './Home/Watch';
import Iphone from './Home/Iphone'
import Airpods from './Home/Airpods';
import Helps from './Home/Helps';
import Topbar from './adminPage/topbar/Topbar';
import UserList from './adminPage/UserList/UserList';
import User from './adminPage/user/User';
import NewUser from './adminPage/newUser/NewUser';
import AdProduct from './adminPage/adminProduct/AdProduct';
import AdProductId from './adminPage/adminProduct/AdProductId';
import NewAdProduct from './adminPage/adminProduct/NewAdProduct';
import HomePage from './Home/HomePage';



function App() {
  const [name, setName] = useState('')
  const onChange = (name) => {
    setName(name)
  }

  return (
    <div className="App">

      {/*   <Topbar/> */}
      <Navigate onChange={onChange} />

      <Routes>
      
        <Route path='/' element={<Product name={name} />} />
        <Route path='/Admin' element={<Topbar />} />
        <Route path='UserList' element={<UserList />} />
        <Route path='/user/:userId' element={<User />} />
        <Route path='/newUser' element={<NewUser />} />
        <Route path='/AdProduct' element={<AdProduct />} />
        <Route path='/AdProduct/:AdProductId' element={<AdProductId />} />
        <Route path='/newProduct' element={<NewAdProduct />} />



        <Route path='/Ipad' element={<Ipad />} />
        <Route path='/Watch' element={<Watch />} />
        <Route path='/Iphone' element={<Iphone />} />
        <Route path='/Airpods' element={<Airpods />} />
        <Route path='/Help' element={<Helps />} />
        <Route path='/Login' element={<Login />} />

        <Route path='/Register' element={<Register />} />
        <Route path='/Detail' element={<Detail />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
