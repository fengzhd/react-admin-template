import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { TeamOutlined, MailOutlined, LikeOutlined, RedEnvelopeOutlined } from '@ant-design/icons';
import Card from 'components/index/Card'
import LineChart from 'components/index/LineChart'
import TodoList from 'components/index/TodoList'
import Player from 'components/index/Player'

export class Index extends Component {
  constructor() {
    super()
    this.state = {
      cardsList: [
        {
          icon: <TeamOutlined />,
          color: '#40c9c6',
          title: '访客量',
          describe: 2000,
          data: [2, 3, 5, 6, 3, 8, 9]
        },
        {
          icon: <MailOutlined />,
          color: '#36a3f7',
          title: '消息量',
          describe: 2000,
          data: [4, 2, 7, 8, 2, 5, 7]
        },
        {
          icon: <LikeOutlined />,
          color: '#f3ed05',
          title: '获赞数',
          describe: 2000,
          data: [3, 5, 7, 8, 2, 6, 7]
        },
        {
          icon: <RedEnvelopeOutlined />,
          color: '#f4516c',
          title: '红包数',
          describe: 2000,
          data: [2, 3, 4, 2, 8, 6, 4]
        }
      ],
      selectedCard: 0
    }
  }
  handleCardClick(item, index) {
    this.setState({
      selectedCard: index
    })
  }
  render() {
    return (
      <div>
        <Row gutter={16}>
          {
            this.state.cardsList.map((item, index) => {
              return (
                <Col span={6} key={index} onClick={this.handleCardClick.bind(this, item, index)}>
                  <Card {...item} />
                </Col>
              )
            })
          }
        </Row>
        <div className="p-v-20">
          <LineChart data={this.state.cardsList[this.state.selectedCard]} />
        </div>
        <Row gutter={16}>
          <Col className="gutter-row" span={16}>
            <Player />
          </Col>
          <Col className="gutter-row" span={8}>
            <TodoList />
          </Col>
        </Row>
        <div className="h-500"></div>
      </div>
    )
  }
}

export default Index
