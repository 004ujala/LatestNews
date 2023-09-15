import React, { Component } from 'react'
import spiner from '../spiner.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-5'>
        <img src={spiner} alt=""></img>
      </div>
    )
  }
}

export default Spinner