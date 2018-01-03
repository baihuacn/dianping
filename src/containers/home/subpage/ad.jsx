import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Ad extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
  }

  render() {
    return (
      <h1>ad</h1>
    )
  }
}

export default Ad