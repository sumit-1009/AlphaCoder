import React from 'react'
import { useState } from 'react'
import styles from '../styles/Contact.module.css'

const Contact = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [desc, setDesc] = useState()
  const handleSubmit = (e)=>{
    e.preventDefault()
    const data = {phone, email, name, desc};
    fetch('http://localhost:3000/api/postcontact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.text())
    .then(data => {
      alert("Thanks for Contacting us!");
      setDesc('')
      setName('')
      setEmail('')
      setPhone('')
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  const handleChange = (e)=>{
    if(e.target.name == 'phone'){
      setPhone(e.target.value)
    }
    else if(e.target.name == 'email'){
      setEmail(e.target.value)
    }
    else if(e.target.name == 'desc'){
      setDesc(e.target.value)
    }
    else if(e.target.name == 'name'){
      setName(e.target.value)
    }
    console.log(e, "change")
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>Enter Your Name</label>
          <input type="text" value={name} onChange={handleChange} className={styles.input} id="name" name="name" aria-describedby="emailHelp" required />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>Email address</label>
          <input type="email" value={email} onChange={handleChange} className={styles.input} id="email" name="email" aria-describedby="emailHelp" required />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>Enter Your Mobile Number</label>
          <input type="phone" value={phone} onChange={handleChange} className={styles.input} id="phone" name="phone" required />
        </div>
        <div className={styles.mb3}>
          <label htmlFor='desc'>Elaborate Your Concern</label>
          <textarea value={desc} onChange={handleChange} className={styles.input} placeholder='Write your concern here' id='desc' name='desc' required />
        </div>
        <button type="submit" className={styles.btn}>Submit</button>
      </form>
    </div>
  )
}

export default Contact