import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import urljoin from 'url-join'

import siteData from '../../data/SiteConfig'

function SEO({ description, lang, title }) {
  const { config } = siteData
  const metaDescription = description || config.siteDescription
  const metaTitle = title || config.siteTitle
  let image = config.siteLogo
  image =
    !image.match(
      `(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]`
    ) && (image = urljoin(config.siteUrl, config.pathPrefix, image))

  if (
    !image.match(
      `(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]`
    )
  )
    image = urljoin(config.siteUrl, config.pathPrefix, image)

  const URL = urljoin(config.siteUrl, config.pathPrefix)
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: URL,
      name: metaTitle,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    },
  ]

  return (
    <Helmet>
      {/* General tags */}
      <meta name="description" content={metaDescription} />
      <meta name="image" content={image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:lang" content={lang} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image} />
      <meta
        property="fb:app_id"
        content={config.siteFBAppID ? config.siteFBAppID : ''}
      />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:creator"
        content={config.userTwitter ? config.userTwitter : ''}
      />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string,
}

SEO.defaultProps = {
  lang: `en`,
  description: undefined,
  title: undefined,
}
export default SEO
