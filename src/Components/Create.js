import React, { useState } from "react";
import http from "../http.common";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const navigate =useNavigate();

  //const header = { "Access-Control-Allow-Origin": "*" };

  const handlesubmit = (e) => {
    
    console.log("clicked");
    http.post(
      "/crud-react-practice/Employees",
      {
        firstName: name,
        LastName: lastname        
      })
   .then(()=>{
    navigate("/read")
   })
  };
  return (
    <>
      <h2>create page</h2>
      
        <div className='mb-3'>
          <div className='mb-3'>
            <label className='form-label'>Name</label>
            <input
              type='text'
              className='form-control'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <label className='form-label'>Last Name</label>
          <input
           
            className='form-control'
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <button          
          className='btn btn-primary'
          onClick={handlesubmit}
        >
          Submit
        </button>
      
    </>
  );
};

export default Create;
