import React, { useState } from 'react'
import './Admin.css'
import swal from 'sweetalert'
import axios from 'axios'


function Admin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    async function loginUser() {
        try {
            const response = await axios.post('/login', {
                email: email,
                password: password,
            });
            console.log(response.data);
            if (response.data.success) {
                swal({
                    title: "Success",
                    text: response.data.message,
                    icon: "success",
                    button: "okk ",
                });
                localStorage.setItem('currentUser', JSON.stringify(response.data.data));
                window.location.href = "/adminview";
            } else {
                swal({
                    title: "Error",
                    text: response.data.message,
                    icon: "error",
                    button: "Try Again!",
                });
                setEmail('');
                setPassword('');
                localStorage.removeItem('currentUser');
            }
        } catch (error) {
            console.error("Error:", error);
            // Handle error display or logging here
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='admin'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className="container">
                        <marquee><h2 className='login-page-text'>Login Here To continue</h2></marquee>
                    </div>
                </div>
            </div>
            <hr />
            <div className='row m-1 login-container'>
                <div className='col-md-7'>
                    <div className='login-form-container'>
                        <div className='size-form-container main-form-container mt-3'>
                            <div className='form-title clr'>
                                Admin Login
                                <hr />
                            </div>
                            <div>
                                <label htmlFor='email' className='clr'>Email: </label>
                                <input
                                    type='email'
                                    id='email'
                                    placeholder='Email'
                                    className='user-input'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="input-container">
                                <label htmlFor="password" className='clr'>Password:</label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='user-input'
                                    placeholder=' Password'
                                    id="password"
                                    name="password"
                                />
                                <button
                                    type="button"
                                    className="btn text-pass"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                            <div>
                                <hr />
                                <button
                                    type='submit'
                                    className='login-button'
                                    onClick={loginUser}
                                >
                                    Login
                                </button>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
