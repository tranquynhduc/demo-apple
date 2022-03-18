/* import md5 from 'md5' */
import React from 'react'
import './Register.css'
import '../login/login.css'
import { useState, useEffect } from 'react'
import { validate } from 'uuid';
import { Link } from 'react-router-dom';
import md5 from 'md5';


/* class Register extends React.Component { */
export default function Register() {
    //setSate cho user passwword name
    const initalValue = { name: '', username: '', password: '', testPassword: '', Email: '' }
    const [formValue, setFormValue] = useState(initalValue);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValue({ ...formValue, [name]: value })
    }
    //Xử lý sự kiện
    const [formError, setFormError] = useState({});
    const [isOnClick, setIsOnClick] = useState(false);

    useEffect(() => {
        if (Object.keys(formError).length === 0 && isOnClick) {
            console.log(formValue)
        }
    }, [formError])

    const handleClick = (event) => {
        event.preventDefault();
        setFormError(validate(formValue));
        setIsOnClick(true);
        console.log( ' Name: ',formValue.name , '/', ' Username: ',formValue.username ,'/',' Email: ',formValue.Email, '/',' Passworld: ',formValue.password,'/',' Passworld: ' ,md5(formValue.password).toString())
    }

    //Hàm xử lý lỗi validate
    const validate = (values) => {
        const error = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;


        if (!values.username) {
            error.username = 'Username is required!';
        }
        if (!values.password) {
            error.password = 'Password is required!';
        } else if (values.password.length < 8) {
            error.password = 'Password must be more than or equal to 8 characters';
        }
        if (values.password !== values.testPassword) {
            error.testPassword = "Password does not match";
        }
        if(!values.Email){
            error.Email="Email is required!";
        }else if(!regex.test(values.Email)){
            error.Email="This is not a valid email format!(...@gmail.com)";
        }
        return error;


    }



    /*    constructor(props) {
           super(props)
           this.state = {
               name:'',
               username:'',
               password:'',
               checkPassword:'',
               testPassword:false,
               checkPhone:false,
               phone:'',
           }  
       }
       handleChangeName =(event) => {
           this.setState({
               name:event.target.value
           })
       }
       handleChangeUsername = (event) => {
           this.setState({
               username:event.target.value
           }) 
       }
       handleChangePassword =( event) => {
           this.setState({
               password: event.target.value
           }) 
       }
       handleChangeCheckPassworld = (event) => {
           this.setState({
               checkPassword: event.target.value
           })
           {this.state.password !== this.state.checkPassword ? this.setState({testPassword:true}) : this.setState({testPassword:false})}
       }
       handleChangePhone = (event) => {
           {this.state.phone.length > 10 || this.state.phone.length < 9 ? this.setState({checkPhone:true}) : this.setState({checkPhone:false})}
          
           this.setState({
               phone: event.target.value
           })
       }
       handleClick = () => {
               console.log('Name :' ,this.state.name, 'UserName Account: ',this.state.username, 'Passwword: ' ,md5("value").toString(),'Phone: ',this.state.phone)
       } */  /* render() { */
    return (


        <div className='register-background'>
            <Link to='/' className="fas fa-home icon-back"></Link>

            <div className='register-container'>

                <div >

                    <div className='register-header'>
                        Register a new account
                    </div>

                    {/*   <span className='register-span'>Enter your Name</span> */}
                    <div>
                        <input type='text'
                        
                            placeholder='Enter your Name'
                            className='form-control-register'
                            name='name'
                            value={formValue.name}
                            onChange={handleChange}
                        /*      value={this.state.name}
                             onChange={(event) => this.handleChangeName(event)} */

                        />
                    </div>
                    <span className='show-error'>{formError.name}</span>


                    {/*     <span className='register-span'>Enter your Username</span> */}
                    <div>
                        <input type='text'
                            placeholder='Enter your username'
                            className='form-control-register'
                            name='username'
                            value={formValue.username}
                            onChange={handleChange}
                        /*  value={this.state.username}
                         onChange={(event) => this.handleChangeUsername(event)} */

                        />
                    </div>
                    <span className='show-error'>{formError.username}</span>

                    {/*  <span className='register-span'>Enter your Password</span> */}
                    <div>

                        <input type='password'
                            placeholder='Enter your password'
                            className='form-control-register'
                            name='password'
                            value={formValue.password}
                            onChange={handleChange}
                        /*   value={this.state.password}
                          onChange={(event) => this.handleChangePassword(event)} */
                        />
                    </div>
                    <span className='show-error'>{formError.password}</span>
                    {/*   <span className='register-span'>Confirm Password</span> */}
                    <div>
                        <input type='password'
                            placeholder='Enter your password'
                            className='form-control-register'
                            name='testPassword'
                            value={formValue.testPassword}
                            onChange={handleChange}
                        /*     value={this.state.checkPassword}
                            onChange={(event) => this.handleChangeCheckPassworld(event)} */

                        />
                    </div>
                    <span className='show-error'>{formError.testPassword}</span>
                    {/*   {this.state.testPassword && <p className='show-error'> Password does not match</p>} */}
                    {/*    <span className='register-span'>Enter your Phone</span> */}
                    <div>
                        <input type='Email'
                            placeholder='Enter your Email'
                            className='form-control-register'
                            name='Email'
                            value={formValue.Email}
                            onChange={handleChange}
                        /*   value={this.state.phone}
                          onChange={(event) => this.handleChangePhone(event)} */
                        />
                    </div>
                    <div className='show-error'>{formError.Email}</div>
                    {Object.keys(formError).length === 0 && isOnClick ? <p className='show-error-'>New account registration successful</p> : []}
                    {/*    {this.state.checkPhone && <p className='show-error'> 10 digit phone number</p>} */}


                    <input type='checkbox'
                        value='term-conditions'
                        className='register-checkbox'

                    ></input>
                    <span className='term-register'> I have read the <a className='link_' href='#'> terms</a> and <a className='link_' href='#'>conditions carefully</a> </span>

                    <div className='login-btn'>
                        <button className='register-button'
                            onClick={handleClick}
                        /*    onClick={(event) =>this.handleClick(event)} */
                        > Register
                        </button>
                    </div>
                    <div className='text-or'>Or</div>

                    <div className='login-different'>
                        <i className='fab fa-google icon-google' ></i>
                        <i className='fab fa-facebook icon-facebook' ></i>
                        <i className='fab fa-instagram  icon-ins'></i>
                    </div>


                </div>
            </div>
        </div>
    )
    /* } */
}
/* export default Register */