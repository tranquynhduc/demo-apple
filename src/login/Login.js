/* import md5 from 'md5'; */
import React from 'react';
import './login.css'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import md5 from 'md5';
/* import { validate } from 'uuid'; */




export default function Login() {

    //setState cho username, passwword
    const initalValue = { username: '', password: '' }
    const [formValue, setFormValue] = useState(initalValue);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValue({ ...formValue, [name]: value })
    }
    //xử lý sự kiện 
    const [formError, setFormError] = useState({});
    const [isOnclick, setIsOnclick] = useState(false);

    useEffect(() => {
        if (Object.keys(formError).length === 0 && isOnclick) {
            console.log(formValue)
        }
    }, [formError]);
    const handleClick = (event) => {
        event.preventDefault();
        setFormError(Validate(formValue));
        setIsOnclick(true);
        
        console.log( ' Username: ',formValue.username , '/',' Passworld: ',formValue.password,'/',' Passworld: ' ,md5(formValue.password).toString())

    }


    //hàm xét lỗi validate
    const Validate = (values) => {
        const error = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            error.username = 'Username is required!';
        }
        if (!values.password) {
            error.password = 'Password is required!'
        } else
            if (values.password.length < 8) {
                error.password = 'Password must be more than or equal to 8 characters'
            }
        return error;

    }


    /* constructor(props) {
        super(props)
        this.state = {
            username:'',
            passworld:'',
            isWrong: false,
            passwordLength:false,
        }   
    }
    handleChangeUsername = (event) => {
        this.setState({
            username:event.target.value
            
          
        })
    }
   
    handleChangePassworld =( event) => {
        {this.state.passworld.length >= 5 ? this.setState({passwordLength:false}) : this.setState({passwordLength:true})}
        this.setState({
            passworld: event.target.value,
            
        })  
    }
    handleClick = () => {
    {this.state.username === 'a' && this.state.passworld === '123456' ?  this.setState({isWrong: false }) :  this.setState({ isWrong: true })}  
    console.log('isWrong: ',this.state.isWrong ,'/',' Username: ',this.state.username , '/',' Passworld: ',this.state.passworld,'/',' Passworld: ' ,md5("value2").toString())
    }*/




    //jsx
    return (

        <div className='login-background'>
            <Link to='/' className="fas fa-home icon-back"></Link>
            <div className='login-container'>

                <div className='login-content'>
                  
                   
                    <i className="fas fa-user-circle login-header"></i>
                    <div >

                        <input type='text'
                            placeholder='Enter your username'
                            className='form-controll'
                            name='username'
                            value={formValue.username}
                            onChange={handleChange}
                        /* value={this.state.username}
                         onChange={(event) => this.handleChangeUsername(event)}  */

                        />
                    </div>
                    <div className='icon-username'>
                        <i className='fas fa-user icon-user' ></i>
                    </div>
                    <p className='show-error'>{formError.username}</p>
                    <div>

                        <input type='password'
                            placeholder='Enter your password'
                            className='form-controll'
                            name='password'
                            value={formValue.password}
                            onChange={handleChange}
                        /* value={this.state.passworld}
                       onChange={(event) => this.handleChangePassworld(event)} */

                        />


                          
                    </div>
                    <div className='icon-passworld'>
                        <i className="fas fa-key icon-passworld" ></i>
                    </div>
                    <p className='show-error'>{formError.password}</p>
                    {Object.keys(formError).length === 0 && isOnclick ? <p className='show-error-'>Singed in successfully</p> : []}
                    {/*    {this.state.passwordLength && <p className='show-error'> Password length is more than 6 characters</p>}
                            {this.state.isWrong && <p className='show-error'>User or password error</p>} */}

                    <input type='checkbox' value='remember me' className='login-checkbox'></input>
                    <span className='save-login'> Remember me</span>
                    <a href='#' className='forgot-passworld'>Forgot your passworld?</a>


                    <div className='login-btn'>
                        <button className='login-button'
                            onClick={handleClick}
                        /*  onClick={(event) =>this.handleClick(event)}                      */
                        >Login
                        </button>

                    </div>
                    <div className='text-or'>Or</div>

                    <div className='login-different'>
                        <a className='fab fa-google icon-google' href='#'></a>
                        <i className='fab fa-facebook icon-facebook' ></i>
                        <i className='fab fa-instagram  icon-ins'></i>
                    </div>
                    <div className='new-account'>
                        <Link className='text-newaccount' to='/Register'>Register a new account.</Link>
                    </div>
                </div>
            </div>
        </div>
    )

}
/* export default Login */