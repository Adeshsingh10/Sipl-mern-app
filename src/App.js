import './App.css';
import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from './incdec/IncDecSlice';
import { useState } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from './components/login/Login';
import Registration from './components/registration/Registration';
import Dashboard from './components/dashboard/Dashboard';
import Gaming from './components/independent/Gaming';

function App() {

  // const globalState = useSelector((state) => { return state });
  // console.log(globalState, "77");
  // const dispatch = useDispatch();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/gaming" element={<Gaming />} />
        </Routes>
      </BrowserRouter>

      {/* <center>
        <div>
          <h1> Increment - Decrement </h1>
        </div>

        <div style={{ display: "flex", justifyContent: 'center', marginTop : '5%' }}>

          <button className='btn btn-primary me-3' onClick={() => dispatch(increment())}> + </button>
          <div style={{ width: "20%" }}>
            <input className='form-control' type="text" value={globalState.counter.value > 0 ? globalState.counter.value : 0} />
          </div>
          <button className='btn btn-primary ms-3' onClick={() => dispatch(decrement())}> - </button>
        </div>



      </center> */}
    </>
  );
}

export default App;
