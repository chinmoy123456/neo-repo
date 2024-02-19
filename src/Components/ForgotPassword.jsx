import React from 'react'
import { sendPasswordResetEmail } from 'firebase/auth'
import { useNavigate } from "react-router-dom";
import { database } from "./config";
import Header from './Header';


function ForgotPassword() {
    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const emailVal = e.target.email.value;
        sendPasswordResetEmail(database, emailVal).then(data => {
            alert("Check your gmail")
            history("/")
        }).catch(err => {
            alert(err.code)
        })
    }
    return (
        // <div style={{ backgroundColor: "black" }}>
        //     <Header />
        <div className='pt-5' style={{ backgroundColor: 'black', minHeight: '100vh' }}>
            <Header />
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 text-light" style={{paddingLeft:'60px'}}>
                        <h1 className="pb-4 pt-5 mt-3" style={{color:'bisque'}}>RESET YOUR PASSWORD</h1>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="form-group mb-4">
                                <label className="form-label text-left fs-5 pt-3 pb-2">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email address"
                                    className="form-control inputField p-2"
                                    style={{ backgroundColor: 'transparent', color: 'white', borderColor: 'white', borderRadius:'4px', width:'90%' }}
                                />
                            </div>
                            <button type="submit" className="btn fs-4 reset-button">Reset</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        // </div >
    )
}

export default ForgotPassword
