import React from 'react'

function Contact() {
    return (
            <div className='row mx-0 pb-3' style={{ backgroundColor: 'black' }}>
                <div class="col-md-5 col-sm-12 mt-5 p-5 text-light">
                    <div className='fs-1 pb-3'>
                        CONTACT ME
                    </div>
                    <div className='fs-6'>
                        I'd love to hear from you! Please contact me using this form for any inquiries or questions.
                    </div>
                </div>
                <div class="col-md-7 col-sm-12 mt-5 text-light">
                    <div className='row mt-4 mb-4'>
                        <div className='row col-md-5 mx-1 fs-5'>
                            First Name
                            <input type="text" className="mt-2 p-1 inputField bg-transparent border border-light text-light" />
                        </div>
                        <div className='row mx-1 col-md-5 fs-5'>
                            Last Name
                            <input type="text" className=" mt-2 p-1 inputField bg-transparent border border-light text-light" />
                        </div>
                    </div>
                    <div className='row mx-1 col-md-10 fs-5'>
                        Email
                        <input type="text" className=" mt-2 p-1 inputField bg-transparent border border-light text-light" required></input>
                    </div>
                    <div className='row col-md-10 mx-1 pt-4 fs-5'>
                        Message
                        <textarea type="text" className="form-control mt-2 pt-0 inputField bg-transparent border border-light text-light" style={{ height: '153px' }} />
                    </div>
                    <div className='pt-4 button-wrapper'>
                        <button class="btn btn-lg text-bold" type="submit"><label className=' fs-5'>Send</label></button>
                    </div>
                </div>
            </div>
    )
}

export default Contact
