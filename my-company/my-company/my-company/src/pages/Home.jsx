import React from 'react'

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <div style={{
        background: '#fff',
        padding: '28px',
        borderRadius: 12,
        boxShadow: '0 8px 20px rgba(31,41,55,0.06)'
      }}>
        <h1 style={{ marginTop: 0 }}>Welcome to Our Company</h1>
        <p style={{ lineHeight: 1.6 }}>
          We are dedicated to delivering excellence in all our services.
          Our team brings together years of experience in technology, marketing,
          and consultancy to help your business grow.
        </p>
      </div>
    </div>
  )
}

export default Home
