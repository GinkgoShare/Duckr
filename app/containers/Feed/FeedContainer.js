import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Feed } from '../../components'

const propTypes = {}

const defaultProps = {}

class FeedContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <Feed />
    )
  }
}

FeedContainer.propTypes = propTypes

FeedContainer.defaultProps = defaultProps

export default FeedContainer
