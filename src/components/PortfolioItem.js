import React from "react";

const PortfolioItem = ({ item }) => {
  const { name, description, imgurl, link, git } = item;
  return (
    <div className="col-md-6 portfolio-items ">
      <div className="d-block d-flex">
        <div className="icon d-flex justify-content-center align-items-center">
          <div
            className="card twelve columns"
            style={{
              marginBottom: "15px",
              paddingTop: "10px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <img
              style={{ width: "90%", height: "250px" }}
              className="card-img-top rounded shadow pb-2 m-auto pt-2"
              src={imgurl}
              alt="Card cap"
            />
            <div className="card-body" style={{ paddingTop: "20px" }}>
              <h4 className="card-title">{name}</h4>
              <p className="info" style={{ fontSize: "15px", color: "gray" }}>
                {description}
              </p>
              <div className="linkArea text-center d-flex align-items-center justify-content-between">
                <a
                  className="px-5 py-2 rounded btn btn-dark"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b>Live</b>
                </a>

                <a
                  className="px-5 py-2 rounded btn btn-dark"
                  href={git}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b>Github</b>
                </a>
              </div>
            </div>
          </div>

          <hr />
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
