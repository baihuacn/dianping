import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class LoadMore extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
  }

  render() {
    return (
      <div className="load-more" ref="wrapper">
        {
          this.props.isLoadingMore
            ? <span>加载中...</span>
            : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
        }
      </div>
    )
  }

  loadMoreHandle() {
    this.props.loadMoreFn()
  }

  componentDidMount() {
    let timer
    const loadMoreFn=this.props.loadMoreFn
    const wrapper=this.refs.wrapper
    window.addEventListener('scroll', () => {
      if (this.props.isLoadingMore) {
        return
      }
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        const top=wrapper.getBoundingClientRect().top
        const windowHeight=window.screen.height
        if(top&&top<windowHeight){
          // 当wrapper已经被滚动到暴露在页面的可视区域之内的时候
          loadMoreFn()
        }
      }, 20)
    }, false)
  }
}

export default LoadMore