import React from 'react'
import NavLogo from  '../../static/img/magma-logo.svg'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Menu from "../content/navbar.json"


const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    return(
      <nav className="nav static-nav" role="navigation" aria-label="main-navigation">
        <div className="navbar-primary">
        
        <div className="nav-logo">
          <Link to="/" title="Magma Website Home">
            <img src={NavLogo} alt="Magma Logo" />
          </Link>
        </div>

        <div className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="button"
              tabIndex="0"
              onClick={() => this.toggleHamburger()}
              onKeyDown={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>

            <div
              id="navMenu"
              className={`nav-content ${this.state.navBarActiveClass}`}
            >
      {/*
        <div className="subnav">
          <Link to="/#about"><button className="subnavbtn">About</button></Link>
        </div> 

        <div className="subnav">
        <Link to="/#user-stories"><button className="subnavbtn">User Stories</button></Link>
        </div> */}

        <div className="subnav">
        <a href="/community"><button className="subnavbtn">Community<i className="fa fa-caret-down"></i></button></a>
          <div className="subnav-content">
            <div className="arrow-up"></div>
             <div className="subnav-item"><a href="/community#governance">Governance</a></div>
              <div className="subnav-item"><a href="/community/magma-dev-conference-recap-2021/">Magma Dev Conf 2021</a></div>
            </div>
        </div> 

        <div className="subnav">
        <OutboundLink href="https://docs.magmacore.org/docs/basics/introduction.html" rel="noopener noreferrer"><button className="subnavbtn">Docs</button></OutboundLink>
        </div> 

        {/*    
        <div className="subnav">
        <Link to="/#supporters"><button className="subnavbtn">Supporters</button></Link>
        </div> 
        */}

        <div class="subnav">
        <Link to="/blog"><button class="subnavbtn">Blog<i class="fa fa-caret-down"></i></button></Link>
          {/*<div class="subnav-content-news">
            <div className="arrow-up-news"></div>
            <div className="subnav-item"><a href="/blog">Blog</a></div>
          </div>*/}
        </div> 

        <div class="subnav">
        <Link to="https://connectivity.fb.com/magma/"><button class="subnavbtn">Magma Partner Network<i class="fa fa-caret-down"></i></button></Link>
        </div> 

      </div></div>
    </nav>
    )
  }    
}

export default Navbar
