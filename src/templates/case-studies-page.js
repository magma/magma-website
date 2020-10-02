import React from 'react'
import PropTypes from 'prop-types'
import { withPrefix, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import metadata from '../content/site-metadata.json'

export const CaseStudiesPageTemplate = ({ seo, title, subTitle, caseStudies, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (

    <main className="main">
      {seo &&
        <Helmet title={seo.title ? seo.title : metadata.siteMetadata.title} titleTemplate={metadata.siteMetadata.titleTemplate}>
          {seo.description && <meta name="description" content={seo.description} />}
          {seo.image && <meta name="image" content={`${withPrefix('/')}${seo.image.publicURL}`} />}
          {seo.url && <meta property="og:url" content={seo.url} />}
          {seo.title && <meta property="og:title" content={seo.title} />}
          {seo.description && (
            <meta property="og:description" content={seo.description} />
          )}
          {seo.image && <meta property="og:image" content={`${withPrefix('/')}${seo.image.publicURL}`} />}
          <meta name="twitter:card" content="summary_large_image" />
          {seo.twitterUsername && (
            <meta name="twitter:creator" content={seo.twitterUsername} />
          )}
          {seo.title && <meta name="twitter:title" content={seo.title} />}
          {seo.description && (
            <meta name="twitter:description" content={seo.description} />
          )}
          {seo.image && <meta name="twitter:image" content={`${withPrefix('/')}${seo.image.publicURL}`} />}
        </Helmet>
      }
      <div className="top-green-line"></div>
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
              <PageContent className="content" content={content} />
              <br />
              <div className="case-studies">
                {caseStudies.map((c, index) => {
                  return (
                    <>
                      <a href={c.link.url}>
                        <h2>{c.title}</h2>
                      </a>
                      <br />
                      <p>{c.description}</p>
                      <a href={c.link.url}>
                        <h4>{c.link.text}</h4>
                      </a>
                      <br />
                      {index + 1 < caseStudies.length && <hr />}
                    </>
                  )
                })}
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}

CaseStudiesPageTemplate.propTypes = {
  seo: PropTypes.object,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  caseStudies: PropTypes.object,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const CaseStudiesPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <CaseStudiesPageTemplate
        seo={post.frontmatter.seo}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subTitle={post.frontmatter.subTitle}
        caseStudies={post.frontmatter.caseStudies}
        content={post.html}
      />
    </Layout>
  )
}

CaseStudiesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CaseStudiesPage

export const caseStudiesPageQuery = graphql`
  query CaseStudiesPage($id: String!) {
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
        caseStudies {
          title
          description
          link {
            url
            text
          }
        }
      }
    }
  }
`
