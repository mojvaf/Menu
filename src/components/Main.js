import React from "react";
import open from "./image/open.jpg";
import challenge from "./image/challenge.jpg";
import sign from "./image/sign.jpg";
const Main = () => {
  return (
    <div>
      <div className="container text-center py-5">
        <div className="row">
          <div className="col-md-4 ">
            <img
              className="rounded-circle"
              src={open}
              alt="restaurants images"
            />
            <h2>Over 50 restaurants</h2>
            <p>Treat your self next time you come here</p>
            <p>
              <a className="btn btn-secondary" href="" role="button">
                View details &raquo;
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <img
              className="rounded-circle"
              src={challenge}
              alt="eating challenge images"
            />
            <h2>Fancy a challenge?</h2>
            <p>Why not try our famous burger eating challenges!</p>
            <a className="btn btn-secondary" href="" role="button">
              View details &raquo;
            </a>
          </div>
          <div className="col-md-4">
            <img className="rounded-circle" src={sign} alt="reputation image" />
            <h2>Established 2003</h2>
            <p>Our reputation does not lie! come and try</p>
            <a className="btn btn-secondary" href="" role="button">
              View details &raquo;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
