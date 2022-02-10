import React, { Component } from 'react'
import Class from "./Component/Class";
import Function from "./Component/Function";
import './Component/style.css'




 class App extends Component {
   constructor() {
     super()
   
     this.state = {
        isFunction:false,
        isClass:false
     }
   }
   updateFun=()=>{
     this.setState({
     isFunction:!this.state.isFunction
     })
   }
   updateCls=()=>{
    this.setState({
    isClass:!this.state.isClass
    })
  }
  render() {
    return (
      <div>
        <div>
        <h1 className='heading'>Styling Using Functional And Class Components</h1>
        <button className='click' onClick={this.updateFun}>Click To see Functional Components</button>
        <button className='click1' onClick={this.updateCls}>Click To see Class Components</button>
        </div>
        <div>
          {this.state.isFunction?<Function/>:null}
          {this.state.isClass?<Class/>:null}
        </div>

      </div>
    )
  }
}


export default App;
