import React from 'react';
import './SideBar.css';
import { Link } from "react-router-dom"

export default function SideBar() {
    return (
        <div className='sidebar'>
            <div className='sidebarWapper'>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className='sidebarList'>

                        <Link class="fas fa-home sidebarIcon" className='sidebarListItem active' to='/Admin'>
                            Home
                        </Link>
                        <li className='sidebarListItem'>
                            <i class="fas fa-chart-line sidebarIcon"></i>
                            Analytics
                        </li>
                        <li className='sidebarListItem'>
                            <i class="fas fa-chart-bar sidebarIcon"></i>
                            Sales
                        </li>
                    </ul>
                </div>
            </div>
            <div className='sidebarWapper'>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Quick Menu</h3>
                    <ul className='sidebarList'>
                        <Link to='/UserList' className='link'><li className='sidebarListItem '><i class="fas fa-user sidebarIcon"></i>User</li></Link>
                        <Link to='/AdProduct' className='link'>
                            <li className='sidebarListItem'>
                                <i class="fas fa-store-alt sidebarIconProduct"></i>
                                Products
                            </li>
                        </Link>
                        <li className='sidebarListItem'>
                            <i class="fas fa-dollar-sign sidebarIcon"></i>
                            Transactions
                        </li>
                        <li className='sidebarListItem'>
                            <i class="fas fa-chart-bar sidebarIcon"></i>
                            Report
                        </li>
                    </ul>
                </div>
            </div>
            <div className='sidebarWapper'>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Notifications</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem '>
                            <i class="fas fa-envelope sidebarIcon"></i>
                            Mail
                        </li>
                        <li className='sidebarListItem'>
                            <i class="fas fa-comments sidebarIcon"></i>
                            Feedback
                        </li>
                        <li className='sidebarListItem'>
                            <i class="fab fa-facebook-messenger sidebarIcon"></i>
                            Messages
                        </li>
                    </ul>
                </div>
            </div>
            <div className='sidebarWapper'>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Staff</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem '>
                            <i class="fas fa-tasks sidebarIcon"></i>
                            Manage
                        </li>
                        <li className='sidebarListItem'>
                            <i class="fas fa-chart-line sidebarIcon"></i>
                            Analytics
                        </li>
                        <li className='sidebarListItem'>
                            <i class="fas fa-info-circle sidebarIcon"></i>
                            Reports
                        </li>
                    </ul>
                </div>
            </div>


        </div>
    )
}
