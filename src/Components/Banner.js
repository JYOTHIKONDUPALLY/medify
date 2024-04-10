import React from 'react'

const Banner = () => {
    const bannerStyle={
        color: 'white',
        fontSize: '14px',
        backgroundColor: '#2AA7FF',
        height:"auto",
        width:"100vw",
        minHeight: '40px',
        textAlign: 'center',
        lineHeight: '40px',
       wordWrap:"break-word"
          }
  return (
    <div style={bannerStyle}>The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</div>
  )
}

export default Banner