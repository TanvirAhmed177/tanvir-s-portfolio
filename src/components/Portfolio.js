import React, { Component } from "react";
import resumeData from "../resumeData";
import PortfolioItem from "./PortfolioItem";
export default class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <h3 style={{ fontSize: "25px" }} className="text-center">
          PROJECTS
        </h3>
        <div className="container pt-2 portfolio-area">
          <div className="row mt-5 pt-2">
            {resumeData.portfolio.map((item) => (
              <PortfolioItem key={item.link} item={item} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
