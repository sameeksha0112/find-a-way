import React, { useEffect, useState } from 'react';
import axios from 'axios';



const DoctorDataTable = () => {

  const [data,setData]=useState([]);
  const [name,setName]=useState('');
  const [degree,setDegree]=useState('');
  const [specialty,setSpecialty]=useState('');
  const [workplace,setWorkplace]=useState('');
  const [chamber,setChamber]=useState('');
  const [contract,setContract]=useState('');

  const [uname,usetName]=useState('');
  const [udegree,usetDegree]=useState('');
  const [uspecialty,usetSpecialty]=useState('');
  const [uworkplace,usetWorkplace]=useState('');
  const [uchamber,usetChamber]=useState('');
  const [ucontract,usetContract]=useState('');
  const [editid,setEditId]=useState(-1);
  

  useEffect(()=>{
    axios.get('http://127.0.0.1:5000/api/doctors')
    .then(res=>{
      console.log(res)
      setData(res.data.data)
    })
    .catch((error)=>console.log(error))
  },[])

//----------------- This is post method -----------------------------
  const handleSubmit=(event)=>{
    event.preventDefault();
    alert('Add Successfully')
    axios.post('http://127.0.0.1:5000/api/doctors',{name:name,degree:degree,specialty:specialty,
    workplace:workplace,chamber:chamber,contract:contract})
    .then(res=>{
      window.location.reload()
    })
    .catch((err)=>console.log(err))
  }

//----------------- This is edit  method -----------------------------

  const handleEdit=(id)=>{
    
    axios.get('http://127.0.0.1:5000/api/doctors/'+id)
    .then(res=>{
      console.log(res.data)
    usetName(res.data.name);
    usetDegree(res.data.degree);
    usetSpecialty(res.data.specialty);
    usetWorkplace(res.data.workplace);
    usetChamber(res.data.chamber);
    usetContract(res.data.contract);
    })
    .catch((error)=>console.log(error))
    setEditId(id)
  }

  //----------------- This is Put  method -----------------------------
  const handleUpdate=()=>{
    axios.put('http://127.0.0.1:5000/api/doctors/'+editid,{id:editid,name:uname,degree:udegree,specialty:uspecialty,
    workplace:uworkplace,chamber:uchamber,contract:ucontract})
    .then(res =>{
      console.log(res);
      window.location.reload();
      setEditId(-1);
    })
    .catch((err)=>console.log(err))
  }


  //----------------- This is delete  method -----------------------------
 const  handleDelete = (id) => {
    fetch(`http://127.0.0.1:5000/api/doctors/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        window.location.reload();
        if (response) {
         
        } else {
         response.status(404);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  

  return (
    <div>
       {/* --------------------------This is data table start here ---------------------------- */}

       <div class="container table-responsive">
        <div className=' mt-3'>
          <h4>Doctors List</h4>
          <form className=' mt-3 border border-secondary' onSubmit={handleSubmit}>
           
          <div className='d-flex justify-content-between  mt-3'>
          <input  type="text" className='m-2' placeholder='Enter Name' onChange={e=>setName(e.target.value)} />
          <input type="text" className='m-2' placeholder='Enter Degree' onChange={e=>setDegree(e.target.value)}/>
          <input type="text" className='m-2' placeholder='Enter Specialty'onChange={e=>setSpecialty(e.target.value)} />
          </div>
          <div className='d-flex justify-content-between  mt-3'>
          <input type="text" className='m-2' placeholder='Enter Workplace'onChange={e=>setWorkplace(e.target.value)} />
          <input type="text" className='m-2' placeholder='Enter Chamber'onChange={e=>setChamber(e.target.value)} />
          <input type="text" className='m-2' placeholder='Enter Contract'onChange={e=>setContract(e.target.value)} />
          <button className='btn btn-success fw-bold m-2' style={{width:"10rem"}}>Add</button>
          </div>
          </form>
        </div>


       <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Degree</th>
            <th>Specialty</th>
            <th>Workplace</th>
            <th>Chamber</th>
            <th>Contract</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
           data.map((doctor,index)=>{
              return(
                doctor._id === editid ?
                <tr>
                <td><input type="text" value={uname} onChange={e=>usetName(e.target.value)}/></td>
                <td><input type="text" value={udegree} onChange={e=>usetDegree(e.target.value)}/></td>
                <td><input type="text" value={uspecialty} onChange={e=>usetSpecialty(e.target.value)}/></td>
                <td><input type="text" value={uworkplace} onChange={e=>usetWorkplace(e.target.value)}/></td>
                <td><input type="text" value={uchamber} onChange={e=>usetChamber(e.target.value)}/></td>
                <td><input type="text" value={ucontract} onChange={e=>usetContract(e.target.value)}/></td>
                <td><button className='btn btn-primary' onClick={handleUpdate}>Update</button></td>
                </tr>
                :
                <tr key={index}>
                <td>{index+1}</td>
              <td>{doctor.name}</td>
              <td>{doctor.degree}</td>
              <td>{doctor.specialty}</td>
              <td>{doctor.workplace}</td>
              <td>{doctor.chamber}</td>
              <td>{doctor.contract}</td>
  
              <td>
                <span>
                  <button class="btn btn-warning m-2 fw-bold" style={{width:"4.5rem"}} onClick={()=>handleEdit(doctor._id)}>Edit</button>
                </span>
                <span>
                  <button class="btn btn-danger fw-bold" onClick={()=>handleDelete(doctor._id)} >Delete</button>
                </span>
                
              </td>
            </tr>
              )
            })
          }
         
        </tbody>
      </table>
       </div>
    </div>
  );
};

export default DoctorDataTable;