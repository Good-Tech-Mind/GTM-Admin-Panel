import React, { useState } from 'react'
import "../styles/registerAuth.css"
import axios from "axios"
import toast from 'react-hot-toast';
import Layout from '../Layout/Layout';

const ForgotPassword = () => {
    const [forgotPassForm, setForgotPassForm] = useState({
        email: "",
        newPassword: "",
        answer: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setForgotPassForm({ ...forgotPassForm, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/user/forgot-password`, forgotPassForm);
            if (res && res.data.success) {
                toast.success(res.data.message)
            }
            else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.error("Error submitting login:", error);
        }
    }
    return (
        <Layout>
            <div className='formContainer'>
                <form className='inputFormContainer' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <h2 style={{ color: "green" }}>Login Here</h2>
                    </div>
                    <div className="mb-3">
                        <input value={forgotPassForm.email} onChange={handleChange} name='email' type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder='Enter Your Email' />
                    </div>
                    <div className="mb-3">
                        <input value={forgotPassForm.newPassword} onChange={handleChange} name='newPassword' type="password" className="form-control" id="exampleInputPassword" aria-describedby="emailHelp" placeholder='Enter Your New Password' />
                    </div>
                    <div className="mb-3">
                        <input value={forgotPassForm.answer} onChange={handleChange} name='answer' type="text" className="form-control" id="exampleInputPassword" aria-describedby="emailHelp" placeholder='Enter Your Answer' />
                    </div>
                    <div className="mb-3">
                        <button type='submit' className="btn btn-success mx-2">Reset Password</button>
                    </div>
                </form>

            </div>
        </Layout>
    )
}

export default ForgotPassword
