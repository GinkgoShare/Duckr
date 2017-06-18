import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logoutAndUnauth } from '../../redux/modules/users'
import { Logout } from '../../components'

const propTypes = {
  'dispatch': PropTypes.func.isRequired,
}

class LogoutContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
    this.props.dispatch(logoutAndUnauth())
  }

  render () {
    return <Logout />
  }
}

LogoutContainer.propTypes = propTypes

export default connect()(LogoutContainer)
