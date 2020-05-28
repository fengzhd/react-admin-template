import React, { Component } from 'react'
import { List, Radio, Input } from 'antd';

export class TodoList extends Component {
  constructor() {
    super()
    this.state = {
      inputVal: '',
      data: [
        {
          title: 'Ant Design Title 1',
          isShow: true,
          checked: false
        },
        {
          title: 'Ant Design Title 2',
          isShow: true,
          checked: false
        },
        {
          title: 'Ant Design Title 3',
          isShow: true,
          checked: false
        },
        {
          title: 'Ant Design Title 4',
          isShow: true,
          checked: false
        },
        {
          title: 'Ant Design Title 4',
          isShow: true,
          checked: false
        },
        {
          title: 'Ant Design Title 4',
          isShow: true,
          checked: false
        },
        {
          title: 'Ant Design Title 4',
          isShow: true,
          checked: false
        },
      ],
      listTypes: [
        {
          id: 1,
          name: '全部'
        },
        {
          id: 2,
          name: '已完成'
        },
        {
          id: 3,
          name: '未完成'
        },
      ],
      activeListType: 1
    }
  }
  radioChange = (index) => {
    console.log('点击了', index)
    this.setState({
      data: this.state.data.map((item, i) => {
        if (i === index) {
          item.checked = !item.checked
        }
        return item
      })
    })
  }
  inputChange = (e) => {
    this.setState({
      inputVal: e.target.value
    })
  }
  inputEnter = (e) => {
    this.setState(() => {
      return {
        data: [
          {
            title: this.state.inputVal,
            checked: false,
            isShow: this.state.activeListType !== 2
          },
          ...this.state.data
        ]
      }
    })
    this.setState({
      inputVal: ''
    })
  }
  typeChange(id) {
    console.log(id)
    let list = [];
    switch (id) {
      case 1:
        list = this.state.data.map(item => {
          item.isShow = true;
          return item
        })
        break;
      case 2:
        list = this.state.data.map(item => {
          item.isShow = item.checked
          return item
        })
        break;
      case 3:
        list = this.state.data.map(item => {
          item.isShow = !item.checked
          return item
        })
        break
      default: break;
    }
    this.setState({
      activeListType: id,
      data: list
    })
  }
  render() {
    return (
      <div className="shadow b-radius-5 o-hidden">
        <List
          className="bg-white p-h-10"
          itemLayout="horizontal"
          size="large"
          header={
            <Input className="b-none" size="default" placeholder="TODOLIST" value={this.state.inputVal} onChange={this.inputChange} onPressEnter={this.inputEnter} />
          }
          footer={
            <div className="">
              <span className="p-h-10" onClick={this.typeChange}>共有3项未完成</span>
              {
                this.state.listTypes.map(item => {
                  return (
                    <span className={`p-h-10 cursor-pointer ${this.state.activeListType === item.id ? 'text-blue' : ''}`} key={item.id} onClick={this.typeChange.bind(this, item.id)}>{item.name}</span>
                  )
                })
              }
            </div>
          }
        >
          <div className='h-400 o-y-auto'>
            {
              this.state.data.map((item, index) => {
                if (item.isShow) {
                  return (<List.Item className="b-b" key={index}>
                    <Radio checked={item.checked} onClick={this.radioChange.bind(this, index)}>
                      <span style={{ textDecoration: item.checked ? 'line-through' : 'none', color: item.checked ? '#eee' : '' }}>
                        {item.title}
                      </span>
                    </Radio>
                  </List.Item>)
                } else {
                  return null
                }
              })
            }
          </div>
        </List>
      </div>
    )
  }
}

export default TodoList
