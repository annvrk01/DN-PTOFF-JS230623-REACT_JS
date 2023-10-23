import React from "react";

import data from "../data/data.json";

const boxDetails = data.ThumbBox;

class ThumbBox extends React.Component {
  render() {
    return (
      <div className="row">
        {boxDetails.map((boxdetail, i) => {
          return (
            <div key={i} className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 " id="thumb">
              <div className="thumbBox">
                <h4>{boxdetail.title}</h4>
                <p>{boxdetail.description}</p>
                <a href={boxdetail.url}>{boxdetail.link}</a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ThumbBox;
