import React, { Component } from 'react'
import { Layout, Progress, Row, Col, Avatar, Slider, List, Tooltip } from 'antd';
// import _ from 'lodash'
import {
  StepBackwardOutlined,
  StepForwardOutlined,
  PlayCircleOutlined,
  PauseCircleOutlined,
  UnorderedListOutlined,
  SwapOutlined,
  RetweetOutlined,
  SoundOutlined
} from '@ant-design/icons';
import { getNotItemRandom } from 'utils/until'
const { Footer, Sider, Content } = Layout;

export class Player extends Component {
  constructor() {
    super()
    this.state = {
      isPlay: false,
      deg: 0,
      playTypes: [
        {
          id: 1,
          node: <i className="iconfont iconsuiji m-l-15"></i>
        },
        {
          id: 2,
          node: <SwapOutlined className="m-l-15" />
        },
        {
          id: 3,
          node: <RetweetOutlined className="m-l-15" />
        }
      ],
      playType: 1,
      volume: 30,
      audioList: [
        {
          name: '大鱼',
          singer: '周深',
          totalDuration: 0,
          currentTime: 0,
          percentage: 0,
          src: require('assets/audio/1.mp3'),
          time: '03:50',
          picture: 'http://p2.music.126.net/aiPQXP8mdLovQSrKsM3hMQ==/1416170985079958.jpg?param=130y130'
        },
        {
          name: '生活不止眼前的苟且',
          singer: '许巍',
          totalDuration: 0,
          currentTime: 0,
          percentage: 0,
          src: require('assets/audio/2.mp3'),
          time: '03:50',
          picture: 'http://p2.music.126.net/Ga4N1OpNuRDwy0g4ByxTVw==/109951163498751996.jpg?param=640y300'
        },
        {
          name: '曾经的你',
          singer: '许巍',
          totalDuration: 0,
          currentTime: 0,
          percentage: 0,
          src: require('assets/audio/3.mp3'),
          time: '03:50',
          picture: 'http://p2.music.126.net/Ga4N1OpNuRDwy0g4ByxTVw==/109951163498751996.jpg?param=640y300'
        }
      ],
      nowAudio: {},
      openList: false,
      lrc: [],
      lrcIndex: 0
    }
    this.audioRef = React.createRef()
    this.nowAudioIndex = 0
  }
  // 播放,暂停
  onPlay = () => {
    clearInterval(this.timer)
    this.setState({
      isPlay: true
    }, () => {
      this.timer = setInterval(() => {
        this.setState({
          deg: this.state.deg + 1
        })
      }, 30)
      this.audioRef.current.play()
      this.audioRef.current.addEventListener("timeupdate", () => {
        let nowTime = parseInt(this.audioRef.current.currentTime + 0.2)
        let lrcIndex = this.state.lrc.findIndex(item => item.time === nowTime)
        this.setState({
          nowAudio: {
            ...this.state.nowAudio,
            currentTime: this.audioRef.current.currentTime,
            percentage: this.audioRef.current.currentTime / this.state.nowAudio.totalDuration * 100
          },
          lrcIndex: lrcIndex > -1 ? lrcIndex : this.state.lrcIndex
        })
      })
      this.audioRef.current.addEventListener("ended", () => {
        this.next();
      })
    })
  }
  // 暂停
  onPause = () => {
    this.setState({
      isPlay: false
    })
    clearInterval(this.timer)
    this.audioRef.current.pause()
  }
  // 切换播放顺序
  switchPlayType = (id) => {
    let playType = id + 1;
    if (playType === 4) {
      playType = 1
    }
    this.setState({
      playType: playType
    })
  }
  // 改变音量
  volumeChange = (val) => {
    let volume = val / 100
    this.audioRef.current.volume = volume
  }
  // 下一首
  next = () => {
    let index = this.nowAudioIndex
    switch (this.state.playType) {
      case 2:
        index++
        if (index >= this.state.audioList.length) {
          index = 0
        }
        break;
      case 3:
        break;
      case 1:
        index = getNotItemRandom(0, this.state.audioList.length - 1, index)
        break;
      default:
        break
    }
    this.switchAudio(index)
  }
  // 上一首
  prev = () => {
    let index = this.nowAudioIndex
    switch (this.state.playType) {
      case 2:
        index--
        if (index < 0) {
          index = this.state.audioList.length - 1
        }
        break;
      case 3:
        break;
      case 1:
        index = getNotItemRandom(0, this.state.audioList.length - 1, index)
        break;
      default:
        break;
    }
    this.switchAudio(index)
  }
  // 切歌
  switchAudio = (index) => {
    this.audioRef.current.pause()
    this.nowAudioIndex = index;
    this.setState((prevState, props) => {
      return {
        nowAudio: prevState.audioList[this.nowAudioIndex]
      }
    })
    setTimeout(() => {
      this.setState({
        nowAudio: {
          ...this.state.nowAudio,
          totalDuration: this.audioRef.current.duration
        }
      })
      this.onPlay()
    }, 200)
  }
  // 打开列表
  switchList = () => {
    this.setState({
      openList: !this.state.openList
    })
  }
  // 获取歌词
  getLrc = () => {
    let lrc = "[00:00.000] 作曲 : 钱雷<br />[00:01.000] 作词 : 尹约<br />[00:43.20]海浪无声将夜幕深深淹没<br />[00:49.87]漫过天空尽头的角落<br />[00:56.69]大鱼在梦境的缝隙里游过<br />[01:03.69]凝望你沉睡的轮廓<br />[01:08.64]<br />[01:09.85]看海天一色 听风起雨落<br />[01:16.44]执子手吹散苍茫茫烟波<br />[01:23.33]大鱼的翅膀 已经太辽阔<br />[01:31.13]我松开时间的绳索<br />[01:36.04]<br />[01:37.12]怕你飞远去  怕你离我而去<br />[01:43.92]更怕你永远停留在这里<br />[01:50.81]每一滴泪水 都向你流淌去<br />[01:58.35]倒流进天空的海底<br />[02:03.40]<br />[02:19.34]海浪无声将夜幕深深淹没<br />[02:25.85]漫过天空尽头的角落<br />[02:32.79]大鱼在梦境的缝隙里游过<br />[02:39.61]凝望你沉睡的轮廓<br />[02:44.39]<br />[02:45.59]看海天一色 听风起雨落<br />[02:52.53]执子手吹散苍茫茫烟波<br />[02:59.37]大鱼的翅膀 已经太辽阔<br />[03:07.10]我松开时间的绳索<br />[03:12.05]<br />[03:13.11]看你飞远去  看你离我而去<br />[03:19.95]原来你生来就属于天际<br />[03:26.87]每一滴泪水 都向你流淌去<br />[03:34.58]倒流回最初的相遇<br />[03:59.31]<br />[04:08.02]<br />"
    let lrcArr = lrc.split('<br />')
    let arr = []
    let exp = /\[(.+?)\]/
    lrcArr.forEach((item, i) => {
      let time = item.match(exp)
      if (time) {
        let timeArr = time[1].split(':')
        arr.push({
          time: parseInt(timeArr[0] * 60 + (+timeArr[1])),
          text: item.replace(exp, '')
        })
      }
    })
    this.setState({
      lrc: arr
    })

  }
  componentDidMount() {
    this.setState({
      nowAudio: this.state.audioList[this.nowAudioIndex]
    });
    this.getLrc()
  }
  render() {
    return (
      <Layout className="player bg-light-grey h-500 shadow b-radius-5 o-hidden relative">
        <Layout onClick={() => { this.setState({ openList: false }) }}>
          <Sider className="bg-light-grey" theme="light" width={320}>
            <div className="relative w-200 m-auto m-t-80">
              <img src={require("assets/images/player2.png")} alt="" className={`w-100 absolute left-100 z-index-2 ${this.state.isPlay ? 'axle-rotate-start' : 'axle-rotate-end'}`} />
              <div className="absolute left-0 top-40">
                <img src={require("assets/images/player1.png")} alt="" className="w-200 absolute top-0 left-0 z-index-1" />
                <img src={this.state.nowAudio.picture}
                     alt=""
                     className="w-150 h-150 absolute top-25 left-25 b-round"
                     style={{ transform: `rotate(${this.state.deg}deg)` }} />
              </div>
            </div>
          </Sider>
          <Content className="bg-light-grey p-l-50 p-t-40">
            <h1 className="p-h-10">{this.state.nowAudio.name}</h1>
            <p>
              <span className="p-h-10">专辑: <i className="text-blue">我们的乐队</i></span>
              <span className="p-h-10">歌手: <i className="text-blue">{this.state.nowAudio.singer}</i></span>
              <span className="p-h-10">来源: <i className="text-blue">网易云热歌榜</i></span>
            </p>
            <div className="m-h-10 o-y-hidden m-t-20 relative" style={{height: 245}}>
              <div className="absolute transition" style={{top: this.state.lrcIndex < 4 ? 0 : (this.state.lrcIndex + 4 > this.state.lrc.length ? (this.state.length - 8) * 30 + 'px' : '-' + (this.state.lrcIndex - 3) * 30 + 'px')}}>
                {
                  this.state.lrc.map((item, i) => {
                    return (
                      <p className={`lh-30 ${i === this.state.lrcIndex ? 'bold' : ''}`} key={i}>
                        {item.text}
                      </p>
                    )
                  })
                }
              </div>
            </div>
          </Content>
        </Layout>
        <Footer className="bg-light-grey p-v-10 p-h-0 footer-shadow z-index-3 relative">
          <Progress percent={this.state.nowAudio.percentage} showInfo={false} strokeWidth={2} className="p-0 m-0 absolute top-0 l-h-0" />
          <Row className="p-h-20">
            <Col span={8} className="flex a-center">
              <Avatar shape="square" size={50} src={this.state.nowAudio.picture} />
              <div className="p-l-10">
                <p className="p-v-2">
                  <span>{this.state.nowAudio.name}</span><span className="text-content"> - {this.state.nowAudio.singer}</span>
                </p>
                <p className="p-v-2">
                  {(this.state.nowAudio.currentTime / 60).toFixed(0)} : {(this.state.nowAudio.currentTime % 60).toFixed(0)}
                  /
                  {(this.state.nowAudio.totalDuration / 60).toFixed(0)} : {(this.state.nowAudio.totalDuration % 60).toFixed(0)}
                </p>
              </div>
            </Col>
            <Col span={8} className="fs-40 flex a-center j-center text-blue">
              <StepBackwardOutlined className="cursor-pointer" onClick={this.prev} />
              {
                this.state.isPlay ? <PauseCircleOutlined className="cursor-pointer" onClick={this.onPause} /> : <PlayCircleOutlined className="cursor-pointer" onClick={this.onPlay} />
              }
              <StepForwardOutlined className="cursor-pointer" onClick={this.next} />
            </Col>
            <Col span={8} className="fs-20 flex a-center j-end">
              {
                this.state.playTypes.map(item => {
                  if (item.id === this.state.playType) {
                    return <span className="cursor-pointer" key={item.id} onClick={this.switchPlayType.bind(this, item.id)}>{item.node}</span>
                  }
                  return null
                })
              }
              <UnorderedListOutlined className={`cursor-pointer m-l-15 ${this.state.openList ? 'text-blue' : ''}`} onClick={this.switchList} />
              <div className="relative flex a-center volumeHover m-l-15">
                <div className="volumeSlider d-none absolute bg-white h-100 bottom-25 left--8 shadow p-b-15 p-t-10 b-radius-5">
                  <Slider vertical defaultValue={30} onChange={this.volumeChange} />
                </div>
                <i className="iconfont iconyinliang1 cursor-pointer"></i>
              </div>
            </Col>
          </Row>
        </Footer>
        <audio className="d-none" ref={this.audioRef} src={this.state.nowAudio.src} controls="controls"></audio>
        <div className="w-300 absolute h-full o-y-scroll bg-white transition" style={{ right: this.state.openList ? 0 : -500 }}>
          <List
            size="small"
            header={<div className="p-l-20">播放列表</div>}
          >
            {
              this.state.audioList.map((item, i) => {
                return (
                  <List.Item key={i}>
                    <Row className="w-full cursor-pointer" onClick={this.switchAudio.bind(this, i)}>
                      <Col span={2}>
                        {
                          this.nowAudioIndex === i ? <SoundOutlined className="p-r-10 text-blue" /> : null
                        }

                      </Col>
                      <Col span={10}>
                        <Tooltip placement="bottom" title={item.name}>
                          <p className="overflow-omit">
                            {item.name}
                          </p>
                        </Tooltip>
                      </Col>
                      <Col span={8}>{item.singer}</Col>
                      <Col span={4} className="text-right">{item.time}</Col>
                    </Row>
                  </List.Item>
                )
              })
            }
          </List>
        </div>
      </Layout>
    )
  }
}

export default Player
