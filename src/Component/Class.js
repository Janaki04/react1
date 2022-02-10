import React, { Component } from 'react'
import './style.css'

 class Class extends Component {
  render() {
    return (
      <div className='box2'>
          <h4>This is created using Class Components</h4>
          <p style={{color:"red"}} >This is created using Inline styling</p>
          <p>This is created using External styling</p>
      </div>
    )
  }
}
export default Class
