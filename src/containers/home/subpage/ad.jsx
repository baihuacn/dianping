import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeAd from '../../../components/homeAd'
import {getAdData} from '../../../fetch/home/home'

class Ad extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      data: []
    }
  }

  render() {
    return (
      this.state.data.length
        ? <HomeAd data={this.state.data}/>
        : <div>加载中...</div>
    )
  }

  componentDidMount() {
    const result = getAdData()
    result.then((res) => {
      return res.json() //???
    }).then((data) => {
      if (data.length) {
        this.setState({
          data
        })
      }
    })
  }
}

export default Ad