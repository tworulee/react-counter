import React, { Component } from 'react'
import { bindActionCreators } from "redux"
import {increaseCounter} from "../redux/actions/counterActions"
import { connect } from 'react-redux'

class IncreaseCounter extends Component {
  render() {
    return (
        <div>
            <button onClick={e => {
                this.props.dispatch(increaseCounter())
            }} >
                1 Arttır
            </button>
      </div>
    )
  }
}

function mapDispatchToProps(props) {
    return {actions:bindActionCreators(increaseCounter)}
}

export default connect(mapDispatchToProps)(IncreaseCounter)