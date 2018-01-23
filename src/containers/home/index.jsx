import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/homeHeader'
import Category from '../../components/category'
import Ad from './subpage/ad'
import List from './subpage/list'
import {connect} from 'react-redux'

class Home extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
  }

  render() {
    return (
      <div>
        <HomeHeader cityName={this.props.userInfo.cityName}/>
        <Category/>
        <div style={{height:'15px'}}></div>
        <Ad/>
        <List cityName={this.props.userInfo.cityName}/>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)