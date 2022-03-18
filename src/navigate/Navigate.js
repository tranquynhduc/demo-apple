import React from "react"
import { Link } from "react-router-dom"
import '../homePage/HomePage.css'
import './navigate.css'



class Navigate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           /*  search: '', */

        }

    }
    handleChangeSearch = (event) => {

        this.setState({
            search: event.target.value
        })
        console.log('inputChange:', this.state.search)

    }
    handleClick = () => {
        console.log('inputSubmit:', this.state.search)
    }

    handleChange = (name) => {
         console.log(name); 
        if (this.props.onChange) {
            this.props.onChange(name)
        }

    }


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light navigate-link">
                <div className="container-fluid nav-link">

                    <div className="collapse navbar-collapse navigate-link" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0   ">
                            <li className="nav-item">
                                <Link className="fab fa-apple logo-apple"
                                    to='/'
                                  /*   value='icon' */
                                  /*   name="icon" */
                                    onClick={() => this.handleChange('icon')}></Link>

                            </li>
                            <form className="d-flex">
                                <div>
                                    <i className="fas fa-search icon-search"></i>
                                    <input
                                        className="nav-search"
                                        placeholder="search..."
                                        type='text'
                                        name="search"
                                        value={this.state.search}
                                        onChange={(event) => this.handleChangeSearch(event)}
                                    />
                                </div>

                            </form>
                            <div   > <button className='search-btn'
                                onClick={() => this.handleClick()}
                            >Search
                            </button> </div>

                            <li className="nav-item">
                                <Link value='ipad'
                                to='/Ipad'
                                    className="nav-link nav-link-css "
                                    name="ipad"
                                    onClick={() => this.handleChange('ipad')}
                                >iPad</Link>

                            </li>


                            <li className="nav-item">
                                <Link value='iphone'
                                to='/Iphone'
                                    name="iphone"
                                    className="nav-link nav-link-css"
                                    onClick={() => this.handleChange('iphone')} >iPhone</Link>
                            </li>


                            <li className="nav-item">
                                <Link value='watch'
                                  to='/Watch'
                                    className="nav-link nav-link-css"
                                    name="watch"
                                    onClick={() => this.handleChange('watch')} >Watch</Link>
                            </li>


                            <li className="nav-item">
                                <Link value='airpod'
                                  to='/Airpods'
                                    className="nav-link nav-link-css"
                                    name="airpod"
                                    onClick={() => this.handleChange('airpod')} >AirPods</Link>

                            </li>
                            <li className="nav-item">

                                <Link value='help'
                                to='Help'
                                    className="nav-link nav-link-css"
                                    name='help'
                                    onClick={() => this.handleChange('help')}>help</Link>
                            </li>

                        </ul>
                        <Link   to="/Admin"><i className="fas fa-user-shield icon-user-nav"></i></Link> 
                        <Link className="fas fa-user-circle icon-user-nav"
                           to="/Login"
                        ></Link>
                  
                        {/*  <div>
                                <div>
                                    <ul className="product-account">
                                    <li className="product-login">{account.btn1}</li>
                                    <li className="product-login">{account.btn2}</li>
                                    <li className="product-login">{account.btn3}</li>
                                    </ul>
                                </div>
                                ))}
                            </div> */}
                        <i className="fas fa-shopping-cart icon-shop-nav"></i>
                    </div>
                </div>




            </nav>


        )
    }

}
export default Navigate