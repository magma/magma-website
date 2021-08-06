import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from "react-helmet"
import Layout from '../components/Layout'
import SupportBanner from '../components/SupportBanner'
import Header from '../components/Header'

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import metadata from '../content/site-metadata.json'
import Mainpitch from '../components/Mainpitch'
import DevelopWithMagma from "../components/DevelopWithMagma"
import UserStories from '../components/UserStories'
import Features from '../components/Features'
import NewsletterSubscribe from '../components/NewsletterSubscribe'
import Contact from '../components/Contact'
import GetStarted from '../components/GetStarted'
import OverviewVideo from '../components/OverviewVideo'

export const IndexPageTemplate = ({
  seo,
  header,
  mainpitch,
  develop,
  overview,
  userStories,
  supportBanner,  
  contact,
}) => (
  <div>
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
    <Header title={header.title} subTitle={header.subTitle} buttons={header.buttons} display={header.display} />
    <Mainpitch mainpitch={mainpitch} />
    <DevelopWithMagma develop={develop} />
    <OverviewVideo overview={overview} />
    <UserStories userStories={userStories} />
    <SupportBanner supportBanner={supportBanner} />
    <NewsletterSubscribe />
    <Contact contact={contact} />
  </div>
)

IndexPageTemplate.propTypes = {
  seo: PropTypes.object,
  header: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        seo={frontmatter.seo}
        header={frontmatter.header}
        mainpitch={frontmatter.mainpitch}
        develop={frontmatter.develop}
        overview={frontmatter.overview}
        userStories={frontmatter.userStories}
        supportBanner={frontmatter.supportBanner}        
        contact={frontmatter.contact}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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
        header {
          display
          title
          subTitle {
            text
          }          
          buttons {
            text
            link
          }
        }
        mainpitch {
          display
          imageRight {
            tag
            title
            description      
            image {
              childImageSharp {
                fluid(maxWidth: 640, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
          }
          imageLeft {
            tag
            title
            description      
            image {
              childImageSharp {
                fluid(maxWidth: 640, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
          }       
        } 
        develop {
          display
          title
          button {
            text
            link
          }          
        }
        overview {
          display
          tag
          title
          videoUrl
        }
        userStories {
          display
          tag
          stories {
            title
            description
            link
            image {
              childImageSharp {
                fluid(maxWidth: 640, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
          }          
        }
        supportBanner {
          display
          columns {
            link
            alt
            className            
            image {
              childImageSharp {
                fluid(maxWidth: 640, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
          }
        }        
        contact {
          email
          linkedin
          twitter
          display
          formUrl 
        }
      }
    }      
  }
`
