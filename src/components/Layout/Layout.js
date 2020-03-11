import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import Header from 'components/Header/Header'
import Button from 'components/CustomButtons/Button'

import headersStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle'
import SectionSocial from './components/SectionSocial'
import LayoutFooter from './components/LayoutFooter'

const useStyles = makeStyles(headersStyle)

const Layout = ({ children }) => {
  const classes = useStyles()

  return (
    <>
      {/* <Header
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        color="dark"
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
      /> */}
      <Header
        fixed
        brand="NT Schools"
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
        links={
          <List className={`${classes.list} ${classes.mlAuto}`}>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                Home
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                About us
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                Products
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                Contact us
              </Button>
            </ListItem>
          </List>
        }
      />
      {children}
      <LayoutFooter />
    </>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
