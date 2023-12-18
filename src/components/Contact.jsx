import React, { useState } from 'react'
import vg from "../assets/vg.png"
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { addDoc,collection } from 'firebase/firestore';
import { db } from '../firebase';

const animations = {
    form: {
        initial:{x:"-100%",opacity:0}, whileInView:{x:0,opacity:1}
    },
    button: {
        initial:{y:"-100%",opacity:0}, whileInView:{y:0,opacity:1}, transition:{delay:0.5}
    },
}


const Contact = () => {
    // const [inputs,setInputs] = useState({name:"",email:"",message:""});
    const [name,setName] =useState("");
    const [email,setEmail] =useState("");
    const [message,setMessage] =useState("");
    const [disableBtn,setDisableBtn] = useState(false);
    // const changeHandler = (e) =>{
    //     setInputs({...inputs,[e.target.name]:e.target.value});
    // };
    const submitHandler = async(e) =>{
        e.preventDefault();
        setDisableBtn(true);
        try {
            await addDoc(collection(db,"contacts"),{name,email,message});
            setName("");
            setEmail("");
            setMessage("");
            toast.success("Message Sent");
            setDisableBtn(false);
        } catch (error) {
            toast.error("Something Went Wrong");
            setDisableBtn(false);
        }
    };
  return (
    <div id='contact'>
        <section>
            <motion.form onSubmit={submitHandler} {...animations.form}>
                <h2>Contact Me</h2>
                <input type="text" placeholder='Enter your Name' required name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="email" placeholder='Enter your Email' required name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="text" placeholder='Your Message' required name='message' value={message} onChange={(e)=>setMessage(e.target.value)}/>
                <motion.button disabled={disableBtn} className={disableBtn?"disableBtn":""} type="submit" {...animations.button}>Send</motion.button>
            </motion.form>
        </section>
        <aside>
            <img src={vg} alt="Graphics" />
        </aside>
    </div>
  )
}

export default Contact