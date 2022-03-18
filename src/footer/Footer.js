 import React from "react";
 import '../homePage/HomePage.css'


class Footer extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render () {
        return (
<div> 
        {/* Footer  */}
    <footer className="mainfooter footer-text footer" role="contentinfo">
        <div className="footer-middle ">
        <div className="container ">
            <hr></hr>
            <i className="fab fa-apple  icon-apple-footer"></i>
           <div className="row"> 
            <div className="col-md-3 col-sm-6  ">

                {/*Column1*/}     
                    <div className="footer-pad ">
                        <p>Shop and learn</p>
                        <ul className="list-unstyled  ">
                        
                            <li><a  className='container-footer' href="#">iPad</a></li>
                            <li><a  className='container-footer' href="#">iPhone</a></li> 
                            <li><a  className='container-footer' href="#">Watch</a></li> 
                            <li><a  className='container-footer' href="#">AirPods</a></li>
                        
                        
                        </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                {/*Column1*/}
                    <div className="footer-pad">
                        <p>Services</p>
                        <ul className="list-unstyled ">
                        <li><a href="#"  className='container-footer'>Apple Music</a></li>
                        <li><a href="#"  className='container-footer'>Apple TV+</a></li>
                        <li><a href="#" className='container-footer'>Apple Arcade</a></li>
                        <li><a href="#" className='container-footer'>iClound</a></li>
                        <li><a href="#" className='container-footer'>Apple Books</a></li>
                        <li><a href="#" className='container-footer'>Apple Podcasts</a></li>
                        <li><a href="#" className='container-footer'>Apple Store</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    {/*Column1*/}
                    <div className="footer-pad">
                    {/*  {/   <h4>For Business</h4> /} */}
                        <ul className="list-unstyled">
                        <li>
                            <p>For Business</p>
                            <a href="#" className='container-footer'>Apple and Business</a>
                        </li>
                        </ul>
                        <ul className="list-unstyled">
                            <p>For Education</p>
                        <li><a href="#" className='container-footer'>Apple and Business</a></li>
                        </ul>
                        <ul className="list-unstyled">
                            <p>For Healthcare</p>
                            <li><a href="#" className='container-footer'>Apple in Healthcares</a></li>
                            <li><a href="#" className='container-footer'>Healthcares on  Apple Watch</a></li>
                        </ul>
                    </div>      
                    </div>
                    <div className="col-md-3">
                    <ul className="social-network social-circle ">
                            <p>Apple Values</p>
                            <li><a href="#" className='container-footer'>Accesssibility</a></li>
                            <li><a href="#" className='container-footer'>Environment</a></li>
                            <li><a href="#" className='container-footer'>Privacy</a></li>
                            <li><a href="#" className='container-footer'>Supplire Responsibility</a></li>
                    </ul>	
                    <ul className="social-network  social-circle  ">
                            <p>About Apple</p>
                            <li><a href="#" className='container-footer'>Investors</a></li>
                            <li><a href="#" className='container-footer'>Enthics & Compliance </a></li>
                            <li><a href="#" className='container-footer'>Events</a></li>
                            <li><a href="#" className='container-footer'>Contact Apple</a></li>
                    </ul>				
                    </div>
                    </div>
                    <div className="row row-footer">
                        <div className="col-md-12 copy">
                            <hr></hr>
                            <p className="text-center footer-">© Copyright 2022 - Apple Inc.  All rights reserved.</p>
                        </div>
                    </div>
            </div>
       </div> 
    </footer>
</div>
        )
    }
}
export default Footer