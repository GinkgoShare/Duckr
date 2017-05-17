import React, { PropTypes } from 'react'
import { button } from './styles.css'

const FacebookAuthButton = ({onAuth, isFetching}) => (
  <button className={button} onClick={onAuth}>
    {isFetching === true
      ? 'Loading'
      : 'Login with facebook' }
  </button>
)

FacebookAuthButton.propTypes = {
  'onAuth': PropTypes.func.isRequired,
  'isFetching': PropTypes.bool.isRequired,
}

export default FacebookAuthButton
