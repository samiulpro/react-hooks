import React, { Component } from 'react'

export class ClassCounter extends Component {
 constructor(props) {
  super(props);
  this.state = {
   count: 0
  }
 }

 incrementCount = () => {
  this.setState({
   count: this.state.count + 1
  })
 }

 render() {
  return (
   <div>
    <p>Using Class Component</p>
    <h1>{this.state.count}</h1>
    <button onClick={this.incrementCount}>
     Click To make {this.state.count + 1}
    </button>
   </div>
  )
 }
}

export default ClassCounter
