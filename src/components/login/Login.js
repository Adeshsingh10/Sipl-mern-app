import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { login } from './loginSlice';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const globalState = useSelector((state) => { return state });

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const loginHandleChange = (event) => {
        const { name, value } = event.target;
        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    // const arr = [2, 6, 6, [1], [7], [2, 3], [4, 5], [6, 7], 10, 9, 8, 7];
    // const simplifyArray = (arr = []) => {
    //     const res = [];
    //     arr.forEach(element => {
    //         if (typeof(element) == "number") {
    //             let temp = []
    //             temp.push(element)
    //             temp.forEach(el => {
    //                 res.push(el);
    //             });
    //             return temp
    //         }
    //         element.forEach(el => {
    //             res.push(el);
    //         });
    //     });
    //     return res;
    // };
    // console.log(simplifyArray(arr));




    const validation = () => {
        if (loginData.email == "") {
            toast.error("Enter Email");
        }
        else if (loginData.password == "") {
            toast.error("Enter password");
        }
        else {
            dispatch(login(loginData)).then((res) => {
                if (res.payload?.res.message == "Login successful") {
                    navigate('/dashboard')
                }
            });
        }
    }

    return (
        <>

            <div className='mt-4' style={{ display: "flex", justifyContent: "center" }}>
                <h1>Login</h1>
            </div>

            <div className='container'>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" onChange={loginHandleChange} placeholder="Enter Email address" />
                </div>

                <div className="mb-3">
                    <label htmlFor="Password" className="form-label">Password</label>
                    <input type="Password" className="form-control" name="password" id="Password" onChange={loginHandleChange} placeholder="Enter password" />
                </div>

                <div className="mb-3">
                    <button onClick={() => { validation() }} className='btn btn-danger'>Login</button><span>Not Registered <Link to="/registration">Register here</Link></span>
                </div>

            </div>

        </>
    );
};

export default Login;