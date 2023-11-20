
import React ,{useState ,useEffect}from "react";
import http from "../http.common";
import { Link } from "react-router-dom";

const Read = () => {
    const [data,setdata]=useState([]);
  function getdata() {
    http.get(
        "https://652ae2294791d884f1fd76d0.mockapi.io/crud-react-practice/Employees"
    ).then((res)=>{
        console.log(res.data);
        setdata(res.data);
    });
  }
  
   const handleDelete=(id)=>{
http.delete(`https://652ae2294791d884f1fd76d0.mockapi.io/crud-react-practice/Employees/${id}`).then(()=>{
  getdata();
})
   }

   const setToLocalStorage=(id,firstName,lastName)=>{
    localStorage.setItem("id",id);
    localStorage.setItem("firstName",firstName);
    localStorage.setItem("lastName",lastName);


   }
  useEffect(()=>{
    getdata();
  },[]);
 
  return (
    <>
      <h2>Read</h2>
      <table class='table'>
        <thead>
          <tr>
            <th scope='col'>Id</th>
            <th scope='col'>First Name</th>
            <th scope='col'>Last Name</th>
            <th scope='col'></th>
            <th scope='col'></th>
          </tr>
        </thead>
        {
            data.map((eachData)=>{
                return(
                    <>
                    <tbody>
                    <tr>
                      <td>{eachData.id}</td>
                      <td>{eachData.firstName}</td>
                      <td>{eachData.LastName}</td>
                      <td>
                       <Link to="/update"> 
                       <button className='btn-success' onClick={()=>setToLocalStorage(eachData.id,eachData.firstName,eachData.LastName)}>Edit</button>
                       </Link>
                      </td>
                      <td>
                        <button className='btn-danger' onClick={()=>handleDelete(eachData.id)}>Delete</button>
                      </td>
                    </tr>
                  </tbody>
                    </>
                )
            })
           
        }
      </table>
    </>
  );
};

export default Read;
