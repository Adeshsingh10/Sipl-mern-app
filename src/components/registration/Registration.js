import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registerApi } from './registrationSlice';
import { toast } from 'react-toastify';

const Registration = () => {

    const dispatch = useDispatch();

    const [registrationData, setRegistrationData] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        password: ""
    })

    const registerHandleChange = (event) => {
        const { name, value } = event.target;
        setRegistrationData({
            ...registrationData,
            [name]: value
        })
    }

    const validateInputFields = () => {
        if (registrationData.name == "") {
            toast("Please Enter Name")
        }
        else if (registrationData.email == "") {
            toast.error("Please Enter Email")
        }
        else if (registrationData.phone == "") {
            toast.error("Please Enter Phone")
        }
        else if (registrationData.city == "") {
            toast.error("Please Enter City")
        }
        else if (registrationData.password == "") {
            toast.error("Please Enter Password")
        } else {
            dispatch(registerApi(registrationData))
        }
    }

    return (
        <>
            <div className='mt-4' style={{ display: "flex", justifyContent: "center" }}>
                <h1>Registration</h1>
            </div>

            <div className='container'>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Name</label>
                    <input type="text" className="form-control" id="Name" name="name" onChange={registerHandleChange} placeholder="Enter name" />
                </div>


                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" onChange={registerHandleChange} placeholder="Enter Email address" />
                </div>

                <div className="mb-3">
                    <label htmlFor="Phone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="Phone" name="phone" onChange={registerHandleChange} placeholder="Enter Phone" />
                </div>

                <div className="mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" id="city" name="city" onChange={registerHandleChange} placeholder="Enter city" />
                </div>


                <div className="mb-3">
                    <label htmlFor="Password" className="form-label">Password</label>
                    <input type="Password" className="form-control" name="password" id="password" onChange={registerHandleChange} placeholder="Enter password" />
                </div>

                <div className="mb-3">
                    <button onClick={() => { validateInputFields() }} className='btn btn-danger'>Register</button> <span>already registered <Link to="/">Login here</Link></span>
                </div>

            </div>
        </>
    );
};

export default Registration;