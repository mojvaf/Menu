import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import carousel1 from "./image/carousel1.jpg";
import carousel2 from "./image/carousel2.jpg";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel1} alt="First slide" />
          <Carousel.Caption>
            <h3>Made to order</h3>
            <p>Using only the finest ingredients.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel2} alt="Third slide" />

          <Carousel.Caption>
            <h3>Over 50 years on your menu</h3>
            <p>Or build your own!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="">
          Gourmet Burgers
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={navOpen ? !navOpen : "collapse navbar-collapse"}>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Locations</a>
            </li>
          </ul>
          <form className="form-inline my-2">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="search"
            />
            <button className="btn btn-outline-success mr-2" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};
export default Header;
