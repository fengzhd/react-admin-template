import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd';
import { increase, decrease } from 'actions/counter'

export class Counter extends Component {
  render() {
    console.log(this.props.state)
    return (
      <div>
        <Button type="primary" onClick={this.props.decrease.bind(this, 2)}>-</Button>
        <span className="p-h-20">{ this.props.counter }</span>
        <Button type="primary" onClick={this.props.increase.bind(this, 5)}>+</Button>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}
const mapDispatchToProps = dispatch => {
  return {
    increase: num => {
      dispatch(increase(num))
    },
    decrease: num => {
      dispatch(decrease(num))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
