import React, { Component } from 'react'
import { bindActionCreators } from "redux"
import {decreaseCounter} from "../redux/actions/counterActions"
import { connect } from 'react-redux'

class DecreaseCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={e => {
                this.props.dispatch(decreaseCounter())
            }} >
                1 Azalt
            </button>
      </div>
    )
  }
}

function mapDispatchToProps(props) {
    return {actions:bindActionCreators(decreaseCounter)}
}

export default connect(mapDispatchToProps)(DecreaseCounter)