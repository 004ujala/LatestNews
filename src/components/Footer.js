import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    const myStyle={
        color:'white',
        height:'56px',
        overflowY:'hidden',
        overflowX:'hidden'
        
    }
    return (
      <div className='d-flex align-items-center justify-content-center container-fluid bg-dark ' style={myStyle}>
            © 2023 Copyright:<strong>LatestNews.com</strong>
      </div>
    )
  }
}

export default Footer