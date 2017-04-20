import React from 'react'
import { placeHolderAction } from '../dux/placeholder'

export default class Swapper extends React.Component {
  constructor() {
    super()
    this.state = { counter: 0 }
    this.choices = [
      'Placeholder',
      'Value !',
      'Foo',
      'Bar',
      'Lorem Ipsum'
    ]
    // this.onTick = this.onTick.bind(this)
  }
  onTick = () => {
    this.setState({ counter: (this.state.counter + 1) % this.choices.length })
    placeHolderAction(this.choices[this.state.counter])
    console.log(this.choices[this.state.counter])
  }
  render() {
    return (
      <button onClick={this.onTick}>Click me !</button>
    )
  }
}
