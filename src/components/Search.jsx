 import React, { useState } from 'react'
 import styled from 'styled-components'
 import {FaSearch} from 'react-icons/fa';
 import {useNavigate} from 'react-router-dom';

 function Search() {

    const [inputText, setInputText]=useState('');
    const navigate=useNavigate();

  const submitHandler=(e)=>
  {
    e.preventDefault()
    navigate('/searched/'+inputText);
  }

  return(
   <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        {/* //to-do:: Insert Search Button */}
    <input onChange={(e)=>{setInputText(e.target.value)}} type='text' value={inputText} />
    </div>
   </FormStyle>
   );
 }

 export default Search


 const FormStyle=styled.form`
 
 margin: 0rem 20rem;

div{
    position: realtive;
    width: 100%;
   
}

 input{
    border:none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
 }

 svg{
    position: absolute;
    top:50%;
    left: 0%;
    transform: translate(100%, -50%); 
    color: white;
 }
 
 
 `;