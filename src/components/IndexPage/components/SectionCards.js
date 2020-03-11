/* eslint-disable no-underscore-dangle */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { makeStyles } from '@material-ui/core/styles'
import GridContainer from 'components/Grid/GridContainer'
import GridItem from 'components/Grid/GridItem'
import Card from 'components/Card/Card'
import CardHeader from 'components/Card/CardHeader'
import CardBody from 'components/Card/CardBody'
import Info from 'components/Typography/Info'
import cardBlog1 from 'assets/img/examples/card-blog1.jpg'

import componentsStyle from 'assets/jss/material-kit-pro-react/views/componentsSections/sectionCards'

const useStyles = makeStyles(componentsStyle)

const SectionCards = ({ title, cardsData }) => {
  const classes = useStyles()

  const cardItems = cardsData.map(card => {
    return (
      <GridItem key={card.node._meta.uid} xs={12} sm={4} md={4}>
        <Card blog>
          <CardHeader image>
            <a href="#pablo" onClick={e => e.preventDefault()}>
              <img
                src={card.node.image ? card.node.image.url : cardBlog1}
                alt={card.node.image ? card.node.image.alt : '...'}
              />
              <div className={classes.cardTitleAbsolute}>
                {card.node.title[0].text}
              </div>
            </a>
            <div
              className={classes.coloredShadow}
              style={{
                backgroundImage: `url(${cardBlog1})`,
                opacity: '1',
              }}
            />
          </CardHeader>
          <CardBody>
            <Info>
              <h6 className={classes.cardCategory}>
                {card.node.categories || 'Category'}
              </h6>
            </Info>
            <div className={classes.cardDescription}>
              {card.node.excerpt}
              <br />
              <Link to={`/blog/${card.node._meta.uid}`}> Read More </Link>
            </div>
          </CardBody>
        </Card>
      </GridItem>
    )
  })

  return (
    <div className="cd-section">
      <div className={classes.sections}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h2>{title}</h2>
          </div>

          <GridContainer>{cardItems}</GridContainer>
        </div>
      </div>
    </div>
  )
}

export default SectionCards

SectionCards.propTypes = {
  title: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  cardsData: PropTypes.array,
}

SectionCards.defaultProps = {
  title: '',
  cardsData: [],
}
