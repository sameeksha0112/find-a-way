import React, { useEffect, useState } from 'react';
import axios from 'axios';



const UsersTableList = () => {

  const [data,setData]=useState([]);
  const [name,setName]=useState('');
  const [userName,setUserName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [role,setRole]=useState('');


  const [uname,usetName]=useState('');
  const [uuserName,usetUserName]=useState('');
  const [uemail,usetEmail]=useState('');
  const [upassword,usetPassword]=useState('');
  const [urole,usetRole]=useState('');
  const [editid,setEditId]=useState(-1);
  

  useEffect(()=>{
    axios.get('http://127.0.0.1:5000/api/users')
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
    axios.post('http://127.0.0.1:5000/api/users',{id:id,name:name,userName:userName,email:email,password:password ,role:role})
    .then(res=>{
      window.location.reload()
    })
    .catch((err)=>console.log(err))
  }

//----------------- This is edit  method -----------------------------

  const handleEdit=(id)=>{
    
    axios.get('http://127.0.0.1:5000/api/users/'+id)
    .then(res=>{
      console.log(res.data)
      usetName(res.data.name);
      usetUserName(res.data.userName);
      usetEmail(res.data.email);
      usetPassword(res.data.password);
      usetRole(res.data.role);
    })
    .catch((error)=>console.log(error))
    setEditId(id)
  }

  //----------------- This is Put  method -----------------------------
  const handleUpdate=()=>{
    axios.put('http://127.0.0.1:5000/api/users/'+editid,{id:editid,name:uname,userName:uuserName,email:uemail,password:upassword,role:urole})
    .then(res =>{
      console.log(res);
      window.location.reload();
      setEditId(-1);
    })
    .catch((err)=>console.log(err))
  }


  //----------------- This is delete  method -----------------------------
 const  handleDelete = (id) => {
    fetch(`http://127.0.0.1:5000/api/users/${id}`, {
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
            <h4>Users  List</h4>
          </div>
          <form className='d-flex justify-content-between  mt-3' onSubmit={handleSubmit}>
          <input type="text" className='me-2 mt-2' placeholder='Enter Name' onChange={e=>setName(e.target.value)} />
          <input type="text" className='me-2 mt-2' placeholder='Enter User Name' onChange={e=>setUserName(e.target.value)}/>
          <input type="text" className='me-2 mt-2' placeholder='Enter Email' onChange={e=>setEmail(e.target.value)}/>
          <input type="text" className='me-2 mt-2' placeholder='Enter Password'onChange={e=>setPassword(e.target.value)} />
          <input type="text" className='me-2 mt-2' placeholder='Enter Role'onChange={e=>setRole(e.target.value)} />
          <button className='btn btn-success fw-bold  mt-1' style={{width:"10rem"}}>Add</button>
          </form>
        </div>


       <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {
           data.map((user,index)=>{
              return(
                user._id === editid ?
                <tr>
                <td>{user.id}</td>
                <td><input type="text" value={uname} onChange={e=>usetName(e.target.value)}/></td>
                <td><input type="text" value={uuserName} onChange={e=>usetUserName(e.target.value)}/></td>
                <td><input type="text" value={uemail} onChange={e=>usetEmail(e.target.value)}/></td>
                <td><input type="text" value={upassword} onChange={e=>usetPassword(e.target.value)}/></td>
                <td><input type="text" value={urole} onChange={e=>usetRole(e.target.value)}/></td>
                <td><button className='btn btn-primary' onClick={handleUpdate}>Update</button></td>
                </tr>
                :
                <tr key={index}>
                <td>{index+1}</td>
              <td>{user.name}</td>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.role}</td>
  
              <td>
                <span>
                  <button class="btn btn-warning m-2 fw-bold" style={{width:"4.5rem"}} onClick={()=>handleEdit(user._id)}>Edit</button>
                </span>
                <span>
                  <button class="btn btn-danger fw-bold" onClick={()=>handleDelete(user._id)} >Delete</button>
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

export default UsersTableList;