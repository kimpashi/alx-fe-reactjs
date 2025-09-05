import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // simple demo of form working - replace with API call in real app
    alert('Form submitted!\\n' + JSON.stringify(formData, null, 2))
    setFormData({ name: '', email: '', message: '' })
  }

  const inputStyle = {
    width: '100%',
    padding: '10px 12px',
    margin: '8px 0',
    borderRadius: 8,
    border: '1px solid #e6e9ee',
    boxSizing: 'border-box'
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={{
        background: '#fff',
        padding: '22px',
        borderRadius: 12,
        boxShadow: '0 6px 18px rgba(31,41,55,0.06)'
      }}>
        <h1 style={{ marginTop: 0 }}>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <input
            style={inputStyle}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            style={inputStyle}
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            style={{ ...inputStyle, minHeight: 120 }}
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" style={{
            background: '#0f172a',
            color: '#fff',
            padding: '10px 16px',
            border: 'none',
            borderRadius: 8,
            cursor: 'pointer'
          }}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
