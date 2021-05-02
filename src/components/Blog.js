import React, { Component } from "react";

class Blog extends Component {
  render() {
    return (
      <section id="blog">
        <h3 style={{ fontSize: "25px" }} className="text-center pt-5">
          Blogs
        </h3>
        <div className="container pt-2 blog-area">
          <div className="row mt-5 pt-2">
            <h4 className="text-center pb-5">Blogs coming soon</h4>
          </div>
        </div>
      </section>
    );
  }
}

export default Blog;
