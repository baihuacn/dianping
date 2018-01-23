import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getListData} from '../../../fetch/home/home'
import ListComponent from '../../../components/list'
import LoadMore from '../../../components/loadMore'

import './style.less'

class List extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
    this.state = {
      hasMore: false,
      isLoadingMore: false,
      page: 1,
      list: []
    }
  }

  render() {
    return (
      <div>
        <h2 className="home-list-title">猜你喜欢</h2>
        {
          this.state.list.length
            ? <ListComponent data={this.state.list}/>
            : <div>加载中...</div>
        }
        {
          this.state.hasMore
            ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
            : <div>wu</div>
        }
      </div>
    )
  }

  componentDidMount() {
    this.loadFirstData()
  }

  loadFirstData() {
    const cityName = this.props.cityName
    const result = getListData(cityName, 0)
    this.resultHandle(result)
  }

  loadMoreData() {
    this.setState({
      isLoadingMore: true
    })

    setTimeout(() => {
      const cityName = this.props.cityName
      const page = this.state.page
      const result = getListData(cityName, page)
      this.resultHandle(result)
      this.setState({
        page: page + 1,
        isLoadingMore: false
      })
    }, 20)
  }

  resultHandle(result) {
    result.then((res) => {
      return res.json()
    }).then((json) => {
      let list = this.state.list.concat(json.data)
      let hasMore = json.hasMore
      this.setState({
        list,
        hasMore
      })
    })
  }
}

export default List