import React, { useEffect, useState } from 'react';
import axios from 'axios';



const AmbulanceTable = () => {

  const [data,setData]=useState([]);
  const [name,setName]=useState('');
  const [address,setAddress]=useState('');
  const [phone,setPhone]=useState('');
  const [kind,setKind]=useState('');
  const [uname,usetName]=useState('');
  const [uaddress,usetAddress]=useState('');
  const [uphone,usetPhone]=useState('');
  const [ukind,usetKind]=useState('');
  const [editid,setEditId]=useState(-1);
  

  useEffect(()=>{
    axios.get('http://127.0.0.1:5000/api/ambulances')
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
    const id=data.length +1;
    console.log(id)
    axios.post('http://127.0.0.1:5000/api/ambulances',{id:id,name:name,address:address,phone:phone,kind:kind})
    .then(res=>{
      window.location.reload()
    })
    .catch((err)=>console.log(err))
  }

//----------------- This is edit  method -----------------------------

  const handleEdit=(id)=>{
    
    axios.get('http://127.0.0.1:5000/api/ambulances/'+id)
    .then(res=>{
      console.log(res.data)
    usetName(res.data.name);
    usetAddress(res.data.address);
    usetPhone(res.data.phone);
    usetKind(res.data.kind);
    })
    .catch((error)=>console.log(error))
    setEditId(id)
  }

  //----------------- This is Put  method -----------------------------
  const handleUpdate=()=>{
    axios.put('http://127.0.0.1:5000/api/ambulances/'+editid,{id:editid,name:uname,address:uaddress,phone:uphone,kind:ukind})
    .then(res =>{
      console.log(res);
      window.location.reload();
      setEditId(-1);
    })
    .catch((err)=>console.log(err))
  }


  //----------------- This is delete  method -----------------------------
 const  handleDelete = (id) => {
    fetch(`http://127.0.0.1:5000/api/ambulances/${id}`, {
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
          <div>
            <h4>Ambulance List</h4>
          </div>
          <form className='d-flex justify-content-between  mt-3' onSubmit={handleSubmit}>
          <input type="text" className='me-2 mt-2' placeholder='Enter Name' onChange={e=>setName(e.target.value)} />
          <input type="text" className='me-2 mt-2' placeholder='Enter Address' onChange={e=>setAddress(e.target.value)}/>
          <input type="text" className='me-2 mt-2' placeholder='Enter Contract' onChange={e=>setPhone(e.target.value)}/>
          <input type="text" className='me-2 mt-2' placeholder='Enter Type'onChange={e=>setKind(e.target.value)} />
          <button className='btn btn-success fw-bold  mt-1' style={{width:"10rem"}}>Add</button>
          </form>
        </div>


       <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Contract</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
           data.map((ambulance,index)=>{
              return(
                ambulance._id === editid ?
                <tr>
                
                <td><input type="text" value={uname} onChange={e=>usetName(e.target.value)}/></td>
                <td><input type="text" value={uaddress} onChange={e=>usetAddress(e.target.value)}/></td>
                <td><input type="text" value={uphone} onChange={e=>usetPhone(e.target.value)}/></td>
                <td><input type="text" value={ukind} onChange={e=>usetKind(e.target.value)}/></td>
                <td><button className='btn btn-primary' onClick={handleUpdate}>Update</button></td>
                </tr>
                :
                <tr key={index}>
                <td>{index+1}</td>
              <td>{ambulance.name}</td>
              <td>{ambulance.address}</td>
              <td>{ambulance.phone}</td>
              <td>{ambulance.kind}</td>
  
              <td>
                <span>
                  <button class="btn btn-warning m-2 fw-bold" style={{width:"4.5rem"}} onClick={()=>handleEdit(ambulance._id)}>Edit</button>
                </span>
                <span>
                  <button class="btn btn-danger fw-bold" onClick={()=>handleDelete(ambulance._id)} >Delete</button>
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

export default AmbulanceTable;