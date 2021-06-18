import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import metadata from '../content/site-metadata.json'

export const SupportersPageTemplate = ({ seo, title, subTitle, intro, supporters, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (

    <main className="main">
      {seo &&
        <Helmet title={seo.title ? seo.title : metadata.siteMetadata.title} titleTemplate={metadata.siteMetadata.titleTemplate}>
          {seo.description && <meta name="description" content={seo.description} />}
          {seo.image && seo.url && <meta name="image" content={`${seo.url}${seo.image.publicURL}`} />}
          {seo.url && <meta property="og:url" content={seo.url} />}
          {seo.title && <meta property="og:title" content={seo.title} />}
          {seo.description && (
            <meta property="og:description" content={seo.description} />
          )}
          {seo.image && seo.url && <meta property="og:image" content={`${seo.url}${seo.image.publicURL}`} />}
          <meta name="twitter:card" content="summary_large_image" />
          {seo.twitterUsername && (
            <meta name="twitter:creator" content={seo.twitterUsername} />
          )}
          {seo.title && <meta name="twitter:title" content={seo.title} />}
          {seo.description && (
            <meta name="twitter:description" content={seo.description} />
          )}
          {seo.image && seo.url && <meta name="twitter:image" content={`${seo.url}${seo.image.publicURL}`} />}
        </Helmet>
      }
      <section className="hero-intro is-primary hero">
        <div className="hero-body">
          <div className="container container-thin">
            <div className="hero-content">
              <h3 className="hero-title">{title}</h3>
              <div className="hero-entry"><p>{subTitle}</p></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-article-simple">
        <div className="container container-thin">
          <div className="section-body">
            <article className="article-simple default-page">
              <p>
                {intro}
              </p>
              <section className="section section-padding-top-0">
                <div className="supporters">
                  {supporters.map(tier => {
                    return (
                      <>
                        <div className="container1"><h2 className="features">{tier.tierName}</h2></div>
                        <div className="container container-center">
                          <div className='columns supporter-col' style={{ alignItems: 'center', justifyContent: 'center' }}>
                            {tier.list.map((s, index) => {
                              return (
                                <div className="column logo-supporter" key={index}>
                                  {s.image ? s.image.extension === 'svg' && !s.image.childImageSharp ?
                                    <img src={!!s.image.publicURL ? s.image.publicURL : s.image} alt={s.alt} className={s.class} />
                                    :
                                    <img src={!!s.image.childImageSharp ? s.image.childImageSharp.fluid.src : s.image} className={s.class} alt={s.alt} />
                                    :
                                    ''
                                  }
                                </div>
                              )
                            })
                            }
                          </div>
                          <p>&nbsp;</p>
                        </div>
                      </>
                    )
                  })}
                </div>
                <br />
                <PageContent className="content" content={content} />
                <br />
              </section>
            </article>
          </div>
        </div>
      </section>
    </main >
  )
}

SupportersPageTemplate.propTypes = {
  seo: PropTypes.object,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  intro: PropTypes.string,
  supporters: PropTypes.object,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const SupportersPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SupportersPageTemplate
        seo={post.frontmatter.seo}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subTitle={post.frontmatter.subTitle}
        intro={post.frontmatter.intro}
        supporters={post.frontmatter.supporters}
        content={post.html}
      />
    </Layout>
  )
}

SupportersPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SupportersPage

export const supportersPageQuery = graphql`
  query SupportersPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subTitle
        seo {
          title
          description
          url
          image {
            childImageSharp {
              fluid(maxWidth: 640, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          twitterUsername
        }
        intro
        supporters {
          tierName
          list {
            alt
            class
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
              extension
              publicURL
            }
          }
        }
      }
    }
  }
`
