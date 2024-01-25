import React from 'react'
import { useState } from 'react';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        date: '',
        email: '',
        contactNumber: '',
        selectedService: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = '';
            valid = false;
        }

        if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = '';
            valid = false;
        }

        if (!formData.contactNumber.trim() || !/^\d{10}$/.test(formData.contactNumber)) {
            newErrors.contactNumber = '';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleBookNow = () => {
        if (validateForm()) {
            // Implement booking logic here or send the data to the server
            console.log('Booking confirmed:', formData);
            // Reset form fields
            setFormData({
                name: '',
                date: '',
                email: '',
                contactNumber: '',
                selectedService: '',
                message: '',
            });
            alert(`Booking confirmed!`);
            setErrors({});
        }
    };

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
                            // required
                            type="text"
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-2 p-1 inputField bg-transparent border border-light text-light"
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>
                </div>
                <div className='form-group row mx-1 mb-4 col-md-10 fs-5'>
                    Date
                    <input
                        // required
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className=" mt-2 p-1 inputField bg-transparent border border-light text-light"
                        style={{ colorScheme: 'dark' }}
                    />
                </div>
                <div className='form-group row col-md-10 mx-1 mb-4 fs-5'>
                    Email
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className=" mt-2 p-1 inputField bg-transparent border border-light text-light"
                        required
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className=' form-group row col-md-10 mx-1 mb-4 fs-5'>
                    Contact No.
                    <input
                        // required
                        type="text"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        className=" mt-2 p-1 inputField bg-transparent border border-light text-light"
                    />
                    {errors.contactNumber && <p className="error">{errors.contactNumber}</p>}
                </div>
                <div className="row mx-1 col-md-10 mx-1 mb-4 fs-5">
                    Select a Service
                    <select
                        name="selectedService"
                        value={formData.selectedService}
                        onChange={handleChange}
                        className="form-select mt-2 p-1 inputField bg-transparent border border-light text-light"
                    >
                        <option className='text-dark' value="Photography">Photography</option>
                        <option className='text-dark'value="Videography">Videography</option>
                        <option className='text-dark'value="Commercial Shoot">Commercial Shoot</option>
                    </select>
                </div>


                <div className='row col-md-10 mx-1 fs-5'>
                    Message
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-control mt-2 pt-0 inputField bg-transparent border border-light text-light"
                        style={{ height: '153px' }} />
                </div>
                <div className='pt-4 button-wrapper'>
                    <button className='contact-button rounded-4 border-0' type="button" onClick={() => handleBookNow()}>
                        <label className=' fs-5'>
                            Send
                        </label>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Contact
