import React from 'react'

function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '18px 12px',
      borderTop: '1px solid rgba(31,41,55,0.06)',
      background: '#fff'
    }}>
      <small>© {new Date().getFullYear()} My Company. All rights reserved.</small>
    </footer>
  )
}

export default Footer
