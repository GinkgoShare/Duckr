import React, { Component, PropTypes } from 'react'
import { Home } from '../../components'

const propTypes = {}

const defaultProps = {}

class HomeContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <Home />
    )
  }
}

HomeContainer.propTypes = propTypes

HomeContainer.defaultProps = defaultProps

export default HomeContainer
