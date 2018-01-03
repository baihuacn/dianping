import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class NotFound extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
  }

  render() {
    return (
      <h1>404 not found page</h1>
    )
  }
}

// 使用require.ensure按需加载，还不支持ES6的export
export default NotFound