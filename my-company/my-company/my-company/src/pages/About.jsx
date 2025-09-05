import React from 'react'

function About() {
  return (
    <div style={{ padding: '20px' }}>
      <div style={{
        background: '#fff',
        padding: '22px',
        borderRadius: 12,
        boxShadow: '0 6px 18px rgba(31,41,55,0.06)'
      }}>
        <h1 style={{ marginTop: 0 }}>About Us</h1>
        <p style={{ lineHeight: 1.6 }}>
          Our company has been providing top-notch services since 1990. We specialize
          in various fields including technology, marketing, and consultancy.
          We pride ourselves on delivering measurable results and long-term partnerships.
        </p>
      </div>
    </div>
  )
}

export default About
