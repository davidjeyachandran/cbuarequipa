import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { makeStyles } from '@material-ui/core/styles'

import componentsStyle from 'assets/jss/material-kit-pro-react/views/componentsStyle'

const useStyles = makeStyles(componentsStyle)

const BodyContainer = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div className={classes.container}>{children}</div>
    </div>
  )
}

export default BodyContainer

BodyContainer.propTypes = {
  children: PropTypes.node.isRequired,
}
