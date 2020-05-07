import React, { Component } from 'react'
import { Typography } from 'antd';
import { Row, Col } from 'antd';

const { Text } = Typography;
export class Card extends Component {
  constructor() {
    super()
    this.state = {
      isMoveIn: false
    }
  }
  handleMouseOver = () => {
    this.setState({
      isMoveIn: true
    })
  }
  handleonMouseOut = () => {
    this.setState({
      isMoveIn: false
    })
  }
  render() {
    return (
      <Row className="p-20 cursor-pointer bg-white" 
           ref={this.rowRef} 
           onMouseOver={this.handleMouseOver} 
           onMouseOut={this.handleonMouseOut}>
        <Col span={8} className="flex j-center a-center">
          <span className="fs-50 d-inline-block w-full text-center b-r-10 bg-transition"
            style={{
              color: this.state.isMoveIn ? '#fff' : this.props.color,
              background: this.state.isMoveIn ? this.props.color : '#fff',
            }}
          >
            {this.props.icon}
          </span>
        </Col>
        <Col span={16} className="text-right">
          <Text type="secondary" className="p-v-10 fs-18 d-block">
            {this.props.title}
          </Text>
          <Text >
            {this.props.describe}
          </Text>
        </Col>
      </Row>
    )
  }
}

export default Card
