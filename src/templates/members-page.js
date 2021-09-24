import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'

import metadata from '../content/site-metadata.json'

export const MembersPageTemplate = ({ seo, title, subTitle, members, cta }) => {

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
              <section className="section section-padding-top-0">
                {members.map((member, index) => {
                  return (
                    <div key={`category-${index}`}>
                      <div className="container1"><h2 className="features">{member.category}</h2>
                      </div>
                      <div className="container container-center member-grid">
                        {
                          member.membersList.map((d, listIndex) => {
                            return (
                              <div className="" key={listIndex}>
                                {d.logo ? d.logo.extension === 'svg' && !d.logo.childImageSharp ?
                                  <img src={!!d.logo.publicURL ? d.logo.publicURL : d.logo} alt={d.name} style={{ width: 164 }} />
                                  :
                                  <img src={!!d.logo.childImageSharp ? d.logo.childImageSharp.fluid.src : d.logo} alt={d.name} style={{ width: 164 }} />
                                  :
                                  ''
                                }
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                  )
                })}
                <p>&nbsp;</p>
              </section>
            </article>
          </div>
        </div>
      </section>
      <section class="section search-content no-border">
        <div class="search-content members-cta">
          <h2 className="members-title">{cta.title}</h2>
          <p className="members-description">{cta.description}</p>
          <Link className="button is-primary members-button" to={cta.button.url} title={cta.button.text}>
            {cta.button.text}
          </Link>
        </div>
      </section>
    </main>
  )
}

MembersPageTemplate.propTypes = {
  seo: PropTypes.object,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  members: PropTypes.object,
  cta: PropTypes.object,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const MembersPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <MembersPageTemplate
        seo={post.frontmatter.seo}
        title={post.frontmatter.title}
        subTitle={post.frontmatter.subTitle}
        members={post.frontmatter.members}
        cta={post.frontmatter.cta}
      />
    </Layout>
  )
}

MembersPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default MembersPage

export const membersPageQuery = graphql`
  query MembersPage($id: String!) {
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
        members {
          category
          membersList {
            name 
            logo {
              childImageSharp {
                fluid(maxWidth: 164, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
              extension
              publicURL
            }
            url
          }
        }
        cta {
          title
          description
          button {
            text
            url
          }
        }
      }
    }
  }
`
