import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'

import LinkComponent from '../components/LinkComponent'
import metadata from '../content/site-metadata.json'

export const CommitteePageTemplate = ({
    title,
    subTitle,
    members,
    seo,
}) => {
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
            <section className="hero has-text-centered">
                <div className="hero-body">
                    <div className="container">
                        <div className="hero-project-content">
                            <h3 className="hero-project-title">{title}</h3>
                            <div className="hero-project-entry">
                                {subTitle}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="content">
                <div className="container">
                    <section className="committee-s2-main container">
                        <div className="committee-s2-container">
                            {members.map((member, index) => {
                                return (
                                    <div className="committee-s2-container-border" key={index}>
                                        <div className="card-social-container-icons">
                                            {member.github &&
                                                <LinkComponent href={member.github}>
                                                    <img src="/img/symbols/icon-6.svg" alt="icon" className="card-social-icons"/>
                                                </LinkComponent>
                                            }
                                            {member.linkedin &&
                                                <LinkComponent href={member.linkedin}>
                                                    <img src="/img/symbols/icon-4.svg" alt="icon" className="card-social-icons"/>
                                                </LinkComponent>
                                            }                                            
                                            {member.twitter &&
                                                <LinkComponent href={member.twitter}>
                                                    <img src="/img/symbols/icon-3.svg" alt="icon" className="card-social-icons"/>
                                                </LinkComponent>
                                            }
                                            {member.facebook &&
                                                <LinkComponent href={member.facebook}>
                                                    <img src="/img/symbols/icon-2.svg" alt="icon" className="card-social-icons"/>
                                                </LinkComponent>
                                            }                                            
                                        </div>
                                        <div className="card">
                                            <div className="card-content">
                                                <div className="media">
                                                    <div className="media-left">
                                                        <figure className="image is-128x128">
                                                            {console.log('member picture', member)}
                                                            {member.picture ?
                                                                <img src={!!member.picture.childImageSharp ? member.picture.childImageSharp.fluid.src : member.picture} alt="" />
                                                                :
                                                                null
                                                            }
                                                        </figure>
                                                    </div>
                                                    <div className="media-content">
                                                        <p className="title is-4 card-text-color">{member.name}</p>
                                                        <p className="is-6">{member.title}<br />{member.company}</p>
                                                        <p className="is-6" dangerouslySetInnerHTML={{ __html: member.description }}>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

CommitteePageTemplate.propTypes = {
    members: PropTypes.array,
}

const CommitteePage = ({ CommitteePage, data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <CommitteePageTemplate
                CommitteePage={CommitteePage}
                title={post.frontmatter.title}
                subTitle={post.frontmatter.subTitle}
                members={post.frontmatter.members}
                seo={post.frontmatter.seo}
            />
        </Layout>
    )
}

CommitteePage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default CommitteePage

export const committeePageQuery = graphql`
  query CommitteePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
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
        title
        subTitle 
        members {
          name          
          title
          picture {
            childImageSharp {
              fluid(maxWidth: 640, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          company
          description
          github
          facebook
          twitter
          linkedin
        }
      }
    }
  }
`
