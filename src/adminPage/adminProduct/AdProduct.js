import './AdProduct.css';
import SideBar from '../sidebar/SideBar';
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import {ProductRows} from'../../dummyData'
import { useState } from 'react';

export default function AdProduct() {
  
    const [data, setData] = useState(ProductRows)
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
                return (
                    <div className='ProductListItem'>
                        <img className='ProductListImage' src={params.row.img} alt='' />
                        {params.row.Name}
                    </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 100,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,

        },
        {
            field: 'action',
            headerName: 'Action',
            with: 200,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={'/AdProduct/' + params.row.id}>
                            <button className='ProductListEdit'>Edit</button></Link>
                        <i class="fas fa-trash-alt ProductListEditDelete " onClick={() => handleDelete(params.row.id)}></i>
                    </>
                )
            }

        }

    ];
    return (
        <div>
            <div className='topbar'>
                <div className='topbarwapper'>
                    <Link to='/' className="fas fa-arrow-alt-circle-left backHome"></Link>
                    <div className='topleft'>

                        <Link to='/Admin' className='logo'>ADMIN</Link>
                    </div>
                    <div className='topright'>
                        <div className='topIconContainer' >
                            <i className="far fa-bell"></i>
                            <span className='topIconBadge'>2</span>
                        </div>
                        <div className='topIconContainer' >
                            <i className="fas fa-globe"></i>
                            <span className='topIconBadge'>2</span>
                        </div>
                        <div className='topIconContainer' >
                            <i className="fas fa-cog   "></i>
                        </div>
                        <img src='data:image/jpeg;base64,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' className='topAvatar' alt='abc' />
                    </div>
                </div>
            </div>
            <SideBar />
            {/* <div className='product'> */}
            <div style={{ height: 600, width: '80%' }} className='UserList'>
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={6}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                />

            </div>
            {/* </div> */}
        </div>
    );
}
