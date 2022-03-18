import React from 'react';
import './Content.css'
import Widget from '../widget/Widget';
import Chart from '../chart/Chart'
import { Routes, Route } from 'react-router-dom'
import UserList from '../UserList/UserList';

export default function Content() {
  return (
    <div className='content'>
      <div className='featured'>
        <div className=' feauturedItem'>
          <span className='feauturedTitle'>Revanue</span>
          <div className='feautureMoneyContainer' >
            <span className=' feautureMoney'>$2,415</span>
            <span className='feautureMoneyRate'>-11,4
              <i class="fas fa-arrow-down featuredIcon negative"></i></span>
          </div>
          <span className='featureSub'>Compared to last month</span>
        </div>
        <div className=' feauturedItem'>
          <span className='feauturedTitle'>Sale</span>
          <div className='feautureMoneyContainer' >
            <span className=' feautureMoney'>$4,45</span>
            <span className='feautureMoneyRate'>-1,4
              <i class="fas fa-arrow-up featuredIcon"></i></span>
          </div>
          <span className='featureSub'>Compared to last month</span>
        </div>
        <div className=' feauturedItem'>
          <span className='feauturedTitle'>Cost</span>
          <div className='feautureMoneyContainer' >
            <span className=' feautureMoney'>$2,225</span>
            <span className='feautureMoneyRate'>+2,4
              <i class="fas fa-arrow-up featuredIcon"></i></span>
          </div>
          <span className='featureSub'>Compared to last month</span>
        </div>
      </div>
      <div >

        <Chart />
        <Widget />
      </div>
    {/*   <Routes>
        <Route path='/Userlist' element={<UserList />} />
      </Routes> */}

    </div>
  )
}
