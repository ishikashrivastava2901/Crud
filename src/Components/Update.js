import React, { useEffect, useState } from 'react'
import http from "../http.common";
import { useNavigate } from 'react-router-dom';

const Update = () => {
    const [id,setid]=useState(0);
    const [firstName,setfirstName]=useState("");
    const[lastName,setlastName]=useState("");

    const navigate=useNavigate();

    useEffect(()=>{
       setid(localStorage.getItem("id"));
       setfirstName(localStorage.getItem("firstName"));
       setlastName(localStorage.getItem("lastName"));
    },[]);

    const handleUpdate=()=>{
        http.put(`/crud-react-practice/Employees/${id}`,
        {
            firstName:firstName,
            lastName:lastName,
        }
        ).then(()=>{
            navigate("/read");
        })

    }
  return (
    <>
    <h2>
        Update
    </h2>
    <div className='mb-3'>
          <div className='mb-3'>
            <label className='form-label'> First Name</label>
            <input
              type='text'
              value={firstName}
              className='form-control'
              onChange={(e) => setfirstName(e.target.value)}
            />
          </div>
          <label className='form-label'>Last Name</label>
          <input
           type='text'
           value={lastName}
            className='form-control'
            onChange={(e) => setlastName(e.target.value)}
          />
        </div>
        <button          
          className='btn btn-primary'
         onClick={handleUpdate}
        >
          Update
        </button>
      
    </>
  )
}

export default Update