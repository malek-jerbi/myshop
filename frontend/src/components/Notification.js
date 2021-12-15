import { Alert } from 'react-bootstrap'
import React from 'react'

const Notification = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>
}

MessageChannel.defaultProps = {
  variant: 'info',
}

export default Notification
