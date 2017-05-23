import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import auth from '../../helpers/auth'
import { Authenticate } from '../../components'
import * as userActionCreators from '../../redux/modules/users'

const propTypes = {
  'authUser': PropTypes.func.isRequired,
  'fetchingUser': PropTypes.func.isRequired,
  'fetchingUserFailure': PropTypes.func.isRequired,
  'fetchingUserSuccess': PropTypes.func.isRequired,
  'isFetching': PropTypes.bool.isRequired,
  'error': PropTypes.string.isRequired,
}

class AuthenticateContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  handleAuth () {
    this.props.fetchingUser()
    auth().then((user) => {
      this.props.fetchingUserSuccess(user.uid, user, Date.now())
      this.props.authUser(user.uid)
    }).catch((error) => this.props.fetchingUserFailure(error))
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
