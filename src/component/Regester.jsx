import React, { useState } from 'react';
import image2 from "../image/img2.jpeg";
import { Link, NavLink } from 'react-router-dom';
import axios from "axios";

const Regester = () => {
  const [post, setPost] = useState({
    name: "",
    pass: "",
    email: ""
  });

  const handleClick = async () => {
    try {
      const response = await axios.post('http://localhost:3001/regester', post);
      console.log(response.data); 
    } catch (err) {
      console.error("Error registering:", err);
    }
  };

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    });
  };

  return (
    // <div>
    //   <img src={image2} className='imag' alt='not v' />
    //   <main className='logmain'>
    //     <center className='logcent'>
    //       <h1>Register</h1>
    //       <input type="text" placeholder="Name" name="name" value={post.name} onChange={handleChange} required /><br /><br />
    //       <input type="password" placeholder="Password" name="pass" value={post.pass} onChange={handleChange} required /><br /><br />
    //       <input type="email" placeholder="Email" name="email" value={post.email} onChange={handleChange} required /><br /><br />
    //       <button onClick={handleClick}>Register</button><br />
    //       <NavLink to='/' className='crt'>Go to Login</NavLink>
    //     </center>
    //   </main>
    // </div>

   
<div>
<div className='sign_mainbox'>

  <div className='sign_centerbox'>
    <div className='boxhead'>
      <h1>Sign Up</h1>
    </div>
    <div className='sign_logobox'>
      <div className='sign_logo'>
        <i className="fa-solid fa-user fa-2xl" style={{ fontSize: '65px' }}></i>
      </div>
    </div>
    <div className='sign_inputcontainer'>
      <input type="text" className='sign_input' placeholder='user id' name='name' value={post.name} onChange={handleChange} />
      <input type="password" className='sign_input' placeholder='password' name='pass' value={post.pass} onChange={handleChange} />
      <input type="email" className='sign_input' placeholder='email' name='email' value={post.email} onChange={handleChange} />
      <button className='sign_button' onClick={handleClick}>Sign Up</button>
    </div>
    <div className='sign_footer'>
      <p>Already a member? <NavLink to="/">Login</NavLink></p>
    </div>
  </div>
</div>
</div>  
  );
};

export default Regester;



