"use client"
import React, {useState} from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";
import { FaHashnode } from "react-icons/fa6";
import { BsSubstack } from "react-icons/bs";
// import "@/css/my-links.css";
function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState('');

  const [msg, setMsg] = useState('');

  
  const sendEmail = () => {
    fetch("/api/mail/handleMailSend", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        msg: msg
      })
    })
  }
    const [isShow, setIsShow] = useState(false);
    const [showMessage, setShowMessage] = useState('');
  


    const [alertType, setAlertType] = useState('success');
    const sendMessage = () => {
        if (name == '' || email == '' || msg == '') {
            setShowMessage("Please Fill all the form");
            setAlertType("warning");
        }
        else {
          sendEmail();
            setShowMessage("Message sent successfully");
            setAlertType("success");
        }
    
        setIsShow(true);
        setTimeout(() => {
            setIsShow(false);
        }, 3000);
    }
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='my-10 text-3xl font-bold'>You can contact me by filling the form below</h1>

    <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Your Name: </span>
  </div>
  <input value={name} onChange={e=>setName(e.target.value)} type="text" placeholder="" className="input input-bordered w-full max-w-xs" />
</label>


    <label className="my-5 form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Your Email: </span>
  </div>
  <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="" className="input input-bordered w-full max-w-xs" />
</label>



<label className="form-control">
  <div className="label">
    <span className="label-text">Your Message: </span>
  </div>
  <textarea value={msg} onChange={e=>setMsg(e.target.value)} style={{
    width: "320px"
  }} className="textarea textarea-bordered h-50" placeholder=""></textarea>

</label>



<button onClick={sendMessage} className='my-10 btn btn-primary'>Send Message</button>
<div className="toast toast-end">
  
  <div style={{
    display: isShow? "block": "none"
  }} className={`alert alert-${alertType}`}>
    <span>{showMessage}</span>
  </div>


</div>


<div className='flex justify-center items-center flex-col' style={{
      minHeight: "50vh"
    }}>
      <p className='text-4xl font-bold'>Find me on</p>
      <div id='icons' className='my-10 flex justify-around items-center'>
      <a target='_blank' href='https://linkedin.com/in/Hussnain-Ahmad/'>
    <FaLinkedin className='text-5xl'/>
    </a>
    <a target='_blank' href='https://github.com/HussnainAhmad1606/'>
    <RxGithubLogo className='text-5xl'/>
    </a>
    <a target='_blank' href='https://twitter.com/PsychoTheCoder/'>
    <FaXTwitter className='text-5xl'/>
    </a>
    <a target='_blank' href='https://youtube.com/@DrThePsycho'>
    <FaYoutube className='text-5xl'/>
    </a>
    <a target='_blank' href='https://psychocoder.hashnode.dev/'>
    <FaHashnode className='text-5xl'/>
    </a>
    <a target='_blank' href='https://unfilteredpsycho.substack.com/'>
    <BsSubstack className='text-5xl'/>
    </a>
      </div>
  </div>
    </div>
  )
}

export default ContactMe