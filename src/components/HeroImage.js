import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Button from 'components/CustomButtons/Button.js'
import Parallax from 'components/Parallax/Parallax.js'

import dg1 from 'assets/img/dg1.jpg'

import headersStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle'

const useStyles = makeStyles(headersStyle)

const HeroImage = ({
  textContent,
  buttonText,
  textTitle,
  textSubtitle,
  urlImage,
}) => {
  const classes = useStyles()

  return (
    <Parallax image={require('assets/img/bg4.jpg')}>
      <div className={classes.container}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h1 className={classes.title}>{textTitle}</h1>
              <h2>{textSubtitle}</h2>
              <h4>{textContent}</h4>
              <br />
              {buttonText && (
                <Button color="danger" size="lg">
                  {buttonText}
                </Button>
              )}
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </Parallax>
  )
}

export default HeroImage

HeroImage.propTypes = {
  textContent: PropTypes.string,
  buttonText: PropTypes.string,
  textTitle: PropTypes.string,
  textSubtitle: PropTypes.string,
  urlImage: PropTypes.string.isRequired,
}

HeroImage.defaultProps = {
  textContent: '',
  buttonText: '',
  textTitle: '',
  textSubtitle: '',
}
