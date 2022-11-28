import React, { useState } from 'react'
import './form.css'
import emailjs from 'emailjs-com'
import { useRef } from 'react';


export default function Form() {
    const [enterName,setName]=useState('');
    const [enterEmail,setEmail]=useState('');
    const [enterMessage,setMessage]=useState('');

    const formm=useRef();

    const submitHandler=(e)=>{
        e.preventDefault()

        emailjs.sendForm('service_ltaubxg', 'template_sza1t6u', formm.current, 'H-25kEEOKV5ZPt-9U')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
      

        console.log('submitted successfully')
    }


  return (
        <form className='form' ref={formm} onSubmit={submitHandler}>
            <div className="form_input">
                <input type='text' name='user_name' placeholder='Your Name' value={enterName} onChange={
                    e=>setName(e.target.value)
                }/>
            </div>
            <div className="form_input">
                <input type='email' name='user_email' placeholder='Your Email' value={enterEmail} onChange={
                    e=>setEmail(e.target.value)
                }/>
            </div>
            <div className="form_input">
                <textarea placeholder='Write Message' name='message' value={enterMessage} onChange={
                    e=>setMessage(e.target.value)
                }></textarea>
            </div>

            <button className='submit_btn' type='submit'>Submit</button>
        </form>
  )
}
