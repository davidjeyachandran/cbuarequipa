import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import GridContainer from 'components/Grid/GridContainer'
import GridItem from 'components/Grid/GridItem'
import teamsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle'
import Card from 'components/Card/Card'
import CardHeader from 'components/Card/CardHeader'
import CardBody from 'components/Card/CardBody'

import cardProfile1 from 'assets/img/examples/card-profile1.jpg'
import cardProfile2 from 'assets/img/examples/card-profile2.jpg'
import cardProfile4 from 'assets/img/examples/card-profile4.jpg'

const useStyles = makeStyles(teamsStyle)

const SectionFeatures = () => {
  const classes = useStyles()

  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <Card plain profile>
              <CardHeader image plain>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={cardProfile1} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{
                    backgroundImage: `url(${cardProfile1})`,
                    opacity: '1',
                  }}
                />
              </CardHeader>
              <CardBody plain>
                <h4 className={classes.cardTitle}>Our Story</h4>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <Card plain profile>
              <CardHeader image plain>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={cardProfile2} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{
                    backgroundImage: `url(${cardProfile2})`,
                    opacity: '1',
                  }}
                />
              </CardHeader>
              <CardBody plain>
                <h4 className={classes.cardTitle}>Our Schools</h4>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <Card plain profile>
              <CardHeader image plain>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={cardProfile4} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{
                    backgroundImage: `url(${cardProfile4})`,
                    opacity: '1',
                  }}
                />
              </CardHeader>
              <CardBody plain>
                <h4 className={classes.cardTitle}>Our Jobs</h4>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}

export default SectionFeatures
