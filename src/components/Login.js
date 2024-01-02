import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footers from './Footer'
import background from '../Assets/bgimage.png.jpg'
import SIgn_img from './SIgn_img';



const Login = () => {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = async (e) => {
        e.preventDefault();
        try {
            if (email === 'admin@admin.com' && password === 'admin123') {
                toast.success('Logged in successfully', {
                    position: 'top-center',
                });
                history('/dashboard'); // Navigate to payment page after successful login
            } else if (email !== 'admin@admin.com') {
                toast.error('Please enter a valid email address', {
                    position: 'top-center',
                });
            } else if (password !== 'admin123') {
                toast.error('Please enter a valid password', {
                    position: 'top-center',
                });
            }
        } catch (error) {
            toast.warning('Error occurred. Please try again.');
           
        }
    };


    return (
        <>
            <div className='bgimg'  style={{ backgroundImage: `url(${background})` }}   >
                <div className='clblog' >
                  <SIgn_img/>
                </div>
                           <div className='log-container' >
                    <div className="container mt-3">
                        <section className='d-flex justify-content-between'>
                            <div className="left_data mt-3 p-3" style={{ width: "100%" }}>

                                <Form className='txtfields'  >

                                    <Form.Group className="mb-3 col-lg-12" controlId="formBasicEmail">

                                        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address or phone number" />
                                    </Form.Group>

                                    <Form.Group className="mb-3 col-lg-12" controlId="formBasicPassword">

                                        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                    </Form.Group>
                                    <Button variant="primary" className='lgbtn  col-lg-12' onClick={submit} style={{ fontWeight: "500", fontSize: "20px", borderColor: "rgb(226 232 240)" }} type="submit">
                                        Sign In
                                    </Button>

                                      
                                    
                                </Form>
                            </div>

                            {/* <span><NavLink to="/" style={{fontWeight:"600"}} >SignUp</NavLink></span>  */}
                        </section>
                        <ToastContainer />
                    </div>
                </div>
                <br />
                <br />
                <br />
                <Footers />
            </div>
           
        </>

    )
}

export default Login