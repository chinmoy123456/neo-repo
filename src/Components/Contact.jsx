import React from 'react'
import { useState } from 'react';

const Contact = () => {

    const [user, setUser] = useState({
        name: "",
        date: "",
        email: "",
        contact: "",
        service: "",
        message: "",

    });

    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUser({ ...user, [name]: value });
    };

    const handleSend = () => {
        console.log(user);
    }

    return (
        <div className='row mx-0 px-3 pt-5 pb-3' style={{ backgroundColor: 'black' }}>
            <div class="col-md-5 col-sm-12 pt-3 p-5 text-light">
                <div className='fs-1 pb-3'>
                    CONTACT US
                </div>
                <div className='fs-6'>
                    I'd love to hear from you! Please contact me using this form for any inquiries or questions.
                </div>
                <div className='mt-3 fs-5 mx-0'>
                    Email: abcdefghij123@gmail.com
                </div>
                <div className='mt-3 fs-5'>
                    Phone: 9XXXXXX321
                </div>
            </div>
            <form class="col-md-7 col-sm-12 px-2 text-light">
                <div className='form-group row mt-4 mb-4'>
                    <div className='row col-md-10 mx-1 fs-5'>
                        Name
                        <input
                            required
                            value={user.name}
                            onChange={getUserData}
                            type="text"
                            name='name'
                            placeholder='Enter your name'
                            className="mt-2 p-1 inputField bg-transparent border border-light text-light"
                        />
                    </div>
                </div>
                <div className='form-group row mx-1 mb-4 col-md-10 fs-5'>
                    Date
                    <input
                        required
                        value={user.date}
                        onChange={getUserData}
                        type="date"
                        name="date"
                        className=" mt-2 p-1 inputField bg-transparent border border-light text-light"
                        style={{ colorScheme: 'dark' }}
                    />
                </div>
                <div className='form-group row col-md-10 mx-1 mb-4 fs-5'>
                    Email
                    <input
                        required
                        value={user.email}
                        onChange={getUserData}
                        type="email"
                        name="email"
                        placeholder='Enter your email address'
                        className=" mt-2 p-1 inputField bg-transparent border border-light text-light"
                    />
                </div>
                <div className=' form-group row col-md-10 mx-1 mb-4 fs-5'>
                    Contact No.
                    <input
                        required
                        value={user.contact}
                        onChange={getUserData}
                        type="text"
                        name="contact"
                        placeholder='Enter your phone number'
                        className=" mt-2 p-1 inputField bg-transparent border border-light text-light"
                    />
                </div>
                <div className="row mx-1 col-md-10 mx-1 mb-4 fs-5">
                    Select a Service
                    <select
                        required
                        value={user.service}
                        onChange={getUserData}
                        name="service"
                        placeholder='Select service'
                        className="form-select mt-2 p-1 inputField bg-transparent border border-light text-light"
                    >
                        <option disabled selected value="">Select service</option>
                        <option className='text-dark' value="Photography">Photography</option>
                        <option className='text-dark' value="Videography">Videography</option>
                        <option className='text-dark' value="Commercial Shoot">Commercial Shoot</option>
                    </select>
                </div>
                <div className='row col-md-10 mx-1 fs-5'>
                    Message
                    <textarea
                        name="message"
                        value={user.message}
                        onChange={getUserData}
                        placeholder='Your message here...'
                        className="form-control mt-2 pt-0 inputField bg-transparent border border-light text-light"
                        style={{ height: '153px' }} />
                </div>
                <div className='pt-4 button-wrapper' onClick={handleSend}>
                    <button className='contact-button rounded-4 border-0' type="button">
                        <label className=' fs-5'> Send </label>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Contact
