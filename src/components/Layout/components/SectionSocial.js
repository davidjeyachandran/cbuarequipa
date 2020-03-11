import React from 'react'
import classNames from 'classnames'

import GridContainer from 'components/Grid/GridContainer'
import GridItem from 'components/Grid/GridItem'
import Button from 'components/CustomButtons/Button'

import { makeStyles } from '@material-ui/core/styles'
import {
  FaTwitter,
  FaFacebookSquare,
  FaGooglePlusG,
  FaInstagram,
  FaYoutube,
  FaDribbble,
} from 'react-icons/fa'

import styles from 'assets/jss/material-kit-pro-react/views/componentsSections/preFooter'

const useStyles = makeStyles(styles)

const SectionSocial = () => {
  const classes = useStyles()

  return (
    <div
      className={classNames(
        classes.socialLine,
        classes.textCenter,
        classes.white
      )}
    >
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={2} md={2} className={classes.border}>
            <Button
              color="twitter"
              justIcon
              simple
              href="#pablo"
              onClick={e => e.preventDefault()}
              size="lg"
              fileButton
            >
              <FaTwitter />
            </Button>
          </GridItem>
          <GridItem xs={12} sm={2} md={2} className={classes.border}>
            <Button
              color="facebook"
              justIcon
              simple
              href="#pablo"
              onClick={e => e.preventDefault()}
              size="lg"
            >
              <FaFacebookSquare />
            </Button>
          </GridItem>
          <GridItem xs={12} sm={2} md={2} className={classes.border}>
            <Button
              color="google"
              justIcon
              simple
              href="#pablo"
              onClick={e => e.preventDefault()}
              size="lg"
            >
              <FaGooglePlusG />
            </Button>
          </GridItem>
          <GridItem xs={12} sm={2} md={2} className={classes.border}>
            <Button
              color="dribbble"
              justIcon
              simple
              href="#pablo"
              onClick={e => e.preventDefault()}
              size="lg"
            >
              <FaDribbble />
            </Button>
          </GridItem>
          <GridItem xs={12} sm={2} md={2} className={classes.border}>
            <Button
              color="youtube"
              justIcon
              simple
              href="#pablo"
              onClick={e => e.preventDefault()}
              size="lg"
            >
              <FaYoutube />
            </Button>
          </GridItem>
          <GridItem xs={12} sm={2} md={2} className={classes.border}>
            <Button
              color="instagram"
              justIcon
              simple
              href="#pablo"
              onClick={e => e.preventDefault()}
              size="lg"
            >
              <FaInstagram />
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}

export default SectionSocial
