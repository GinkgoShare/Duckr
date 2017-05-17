import React, { Component, PropTypes } from 'react'
import { Navigation } from '../../components'
import { container, innerContainer } from './styles.css'

const propTypes = {}

const defaultProps = {}

class MainContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div className={container}>
        <Navigation isAuthed={false} />
        <div className={innerContainer}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

MainContainer.propTypes = propTypes

MainContainer.defaultProps = defaultProps

export default MainContainer

