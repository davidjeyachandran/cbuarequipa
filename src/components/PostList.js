/* eslint-disable no-underscore-dangle */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

import GridContainer from 'components/Grid/GridContainer'
import GridItem from 'components/Grid/GridItem'
import Card from 'components/Card/Card'
import CardHeader from 'components/Card/CardHeader'
import Info from 'components/Typography/Info'

import blogsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle'
import cardBlog4 from 'assets/img/examples/card-blog4.jpg'

const useStyles = makeStyles(blogsStyle)

const PostList = ({ postsData, title }) => {
  const classes = useStyles()

  const postItems = postsData.map(post => {
    return (
      <Card key={post.node._meta.uid} plain blog className={classes.card}>
        <GridContainer>
          <GridItem xs={12} sm={5} md={5}>
            <CardHeader image plain>
              <a href="#pablito" onClick={e => e.preventDefault()}>
                <img
                  src={post.node.image ? post.node.image.url : cardBlog4}
                  alt={post.node.image ? post.node.image.alt : '...'}
                />
              </a>
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: `url(${cardBlog4})`,
                  opacity: '1',
                }}
              />
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: `url(${cardBlog4})`,
                  opacity: '1',
                }}
              />
            </CardHeader>
          </GridItem>
          <GridItem xs={12} sm={7} md={7}>
            <Info>
              <h6 className={classes.cardCategory}>
                {post.node.categories || 'Category'}
              </h6>
            </Info>
            <h3 className={classes.cardTitle}>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                {post.node.title[0].text || 'Title'}
              </a>
            </h3>
            <p className={classes.description}>
              {post.node.excerpt}
              <a href="#pablo" onClick={e => e.preventDefault()}>
                {' '}
                Read More{' '}
              </a>
            </p>
            <p className={classes.author}>
              <Moment format="MMMM Do, YYYY">
                {post.node._meta.firstPublicationDate}
              </Moment>
            </p>
          </GridItem>
        </GridContainer>
      </Card>
    )
  })

  return (
    <div className={classes.container}>
      <GridContainer>
        <GridItem
          xs={12}
          sm={10}
          md={10}
          className={`${classes.mlAuto} ${classes.mrAuto}`}
        >
          <h2 className={classes.title}>{title}</h2>
          {postItems}
        </GridItem>
      </GridContainer>
    </div>
  )
}

export default PostList

PostList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  postsData: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}
