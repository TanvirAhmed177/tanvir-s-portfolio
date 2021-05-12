import React, { Component } from "react";

class Blog extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="blog" className="container-fluid">
        <hr />
        <h1
          style={{ margin: "80px", fontSize: "30px" }}
          className="text-center"
        >
          Blogs
        </h1>
        <div class="card-group">
          {resumeData.blogs &&
            resumeData.blogs.map((item) => {
              return (
                <div
                  className="card twelve columns"
                  style={{ margin: "20px", border: "1px solid lightgray" }}
                >
                  <a
                    style={{ textDecoration: "none", color: "gray" }}
                    href={item.link}
                  >
                    <img
                      style={{ height: "200px", padding: "10px" }}
                      className="card-img-top"
                      src={item.imgUrl}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 style={{ fontSize: "20px" }} class="card-title">
                        {item.title}
                      </h5>
                      <p style={{ fontSize: "15px" }} class="card-text">
                        {item.desc}
                      </p>
                    </div>
                  </a>
                </div>
              );
            })}
        </div>
      </section>
    );
  }
}

export default Blog;
