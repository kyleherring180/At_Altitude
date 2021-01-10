import React, { useState } from 'react';
import { Axios, db } from '../../firebase/firebaseConfig';

const ContactForm = () => {
  const [formData, setFormData] = useState({})

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    sendEmail()
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }
  const sendEmail = () => {
    Axios.post(
      'https://us-central1-at-altitude.cloudfunctions.net/submit',
      formData
    )
      .then(res => {
        db.collection('emails').add({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            name="name"
            placeholder="Name"
            onChange={updateInput}
            value={formData.name || ''}
            />
        </div>
        <div class="form-group">
            <input
                class="form-control"
                type="email"
                name="email"
                placeholder="Email"
                onChange={updateInput}
                value={formData.email || ''}
            />
        </div>
        <div class="form-group">
            <textarea
                class="form-control"
                type="text"
                name="message"
                placeholder="Message"
                onChange={updateInput}
                value={formData.message || ''}
                ></textarea>
        </div>
            
            <button class="btn btn-outline-secondary" type="submit">Submit</button>
        
      </form>
    </>
  )
}

export default ContactForm