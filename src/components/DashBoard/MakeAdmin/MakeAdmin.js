import React, { useRef } from 'react';

const MakeAdmin = () => {
    const emailRef = useRef();
    const handleSubmit = (e) => {
        const email = emailRef.current.value;
        const adminMail = { email };
        fetch('https://phones-world-server-site.onrender.com/users', {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adminMail)
        })
            .then(res => res.json())
            .then(res => {
                if (res.modifiedCount === 1 || res.upsertedCount === 1) {
                    alert('admin added')
                    emailRef.current.value = '';
                }
            });
        e.preventDefault();
    }
    return (
        <div className='body-banner'>
            <div className="d-flex justify-content-center align-items-center flex-column body-banner-text-container">
                <div>
                    <h1 className='text-center fs-1 p-3 fw-bold text-dark' style={{
                        textShadow: " 0px 1px 7px #6f7070"
                    }}>Make Another Admin</h1>
                    <form className='mt-4 text-center d-flex' onSubmit={handleSubmit}>
                        <input className="form-control" type="email" ref={emailRef} style={{ background: '#dbdbdb', border: '1px solid gray', height: '55px' }} placeholder='E-mail Please' required />
                        <input className='btn btn-success ms-1 p-3' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;