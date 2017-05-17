import React, { Component, PropTypes } from 'react'
import auth from '../../helpers/auth'
import { Authenticate } from '../../components'

const propTypes = {}

const defaultProps = {}

class AuthenticateContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  handleAuth () {
    auth().then((user) => {
      console.log('Authed User', user)
    })
  }

  render () {
    return (
      <Authenticate
        isFetching={false}
        error=""
        onAuth={this.handleAuth} />
    )
  }
}

AuthenticateContainer.propTypes = propTypes

AuthenticateContainer.defaultProps = defaultProps

export default AuthenticateContainer
