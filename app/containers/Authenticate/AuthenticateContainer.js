import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Authenticate } from '../../components'
import * as userActionCreators from '../../redux/modules/users'

const propTypes = {
  'isFetching': PropTypes.bool.isRequired,
  'error': PropTypes.string.isRequired,
  'fetchAndHandleAuthedUser': PropTypes.func.isRequired,
}

class AuthenticateContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  handleAuth () {
    this.props.fetchAndHandleAuthedUser()
  }

  render () {
    return (
      <Authenticate
        isFetching={this.props.isFetching}
        error={this.props.error}
        onAuth={this.handleAuth.bind(this)} />
    )
  }
}

AuthenticateContainer.propTypes = propTypes

const mapStateToProps = (state) => {
  return {
    'isFetching': state.isFetching,
    'error': state.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(userActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateContainer)
