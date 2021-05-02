import React, { Component } from "react";
import Particles from "./Particles";

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    const styles = {
      root: {
        fontFamily: "sans-serif",
        textAlign: "center",
        height: "100%",
        background: "#222",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    };

    return (
      <React.Fragment>
        <header id="home" style={styles.root}>
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  Resume
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Projects
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#blog">
                  Blogs
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#testimonials">
                  Testimonials
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contactus">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="rows banner" style={{ position: "absolute" }}>
            <div className="banner-text">
              <h1 className="responsive-headline">I am {resumeData.name}.</h1>
              <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
                I am a {resumeData.role}.{resumeData.roleDescription}
              </h3>

              <hr />
              <ul className="social">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map((item) => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="blank">
                          <i className={item.className} />
                        </a>
                      </li>
                    );
                  })}
              </ul>
              <a
                type="button"
                className="btn btn-secondary px-4 py-2"
                href="https://drive.google.com/uc?export=download&id=1wd6m5aTs0GLfVijUURXRXXCwsJqSeovg"
              >
                <b>Download Resume</b>
              </a>
            </div>
          </div>
          <Particles />

          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle" />
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
