import React from 'react'
import PropTypes from "prop-types"
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const LinkComponent = class extends React.Component {
  render() {

    let { href, children, className, id, ...rest } = this.props;

    if(href.match(/^(http:\/\/|https:\/\/|www\.)/)){
      return (
        <OutboundLink href={href} id={id} className={className} target="_blank" rel="noopener noreferrer" {...rest}>
          {children}
        </OutboundLink>
      )
    } else if (href.match(/mailto:/)){
      return (
        <a href={href} id={id} className={className} {...rest}>
          {children}
        </a>
      )
    } else {
      return (
        <Link to={href} id={id} className={className} {...rest}>
          {children}
        </Link>
      )
    }    
  }
}

LinkComponent.propTypes = {
  href: PropTypes.string.isRequired  
}

export default LinkComponent
