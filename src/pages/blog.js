import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import HeroImage from '../components/HeroImage'
import BodyContainer from '../components/BodyContainer'
import PostList from '../components/PostList'
import InputSearch from '../components/InputSearch'

export const postsQuery = graphql`
  {
    prismic {
      allBlogs(sortBy: meta_firstPublicationDate_DESC) {
        edges {
          node {
            image
            title
            ... on PRISMIC_Blog {
              _meta {
                uid
                firstPublicationDate
              }
            }
          }
        }
      }
    }
  }
`

const blog = ({ data }) => {
  const [postsData, setPostsData] = useState(data.prismic.allBlogs.edges)

  useEffect(() => {
    setPostsData(data.prismic.allBlogs.edges)
  }, [data])

  const handleChangeSearchBar = e => {
    const dataListCopy = [...postsData]
    let searchList = []

    if (e.target.value !== '') {
      searchList = dataListCopy.filter(item => {
        const itemTitle = item.node.title[0].text.toLowerCase()
        const searchText = e.target.value.toLowerCase().trim()
        return itemTitle.includes(searchText)
      })
    } else {
      searchList = [...data.prismic.allBlogs.edges]
    }
    setPostsData(searchList)
  }

  return (
    <Layout>
      <HeroImage
        textTitle="Bienvenido al blog"
        textSubtitle="We’re glad you are here!"
        textContent=""
      />
      <BodyContainer>
        <InputSearch
          handleChangeSearchBar={handleChangeSearchBar}
          placeholder="Buscar..."
        />
        <PostList postsData={postsData} title="Publicaciones actuales" />
      </BodyContainer>
    </Layout>
  )
}

export default blog

blog.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
}
