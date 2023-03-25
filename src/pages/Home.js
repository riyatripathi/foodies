import React from "react";
import Layout from "../components/Layout/Layout";
import Banner from "../images/banner.jpeg";
import { Link } from "react-router-dom";
import "../styles/homeStyle.css";

const Home = () => {
  return (
    <Layout>
      <div
        className="container-fluid banner"
        style={{
          backgroundImage: `url(${Banner})`,
        }}
      >
        <div className="row">
          <div className="col ms-md-5 ms-2 text-white">
            <h1 className="fw-bold display-3">Foodies</h1>
            <p className="display-6">Best Food In India</p>
            <Link to={"/menu"}>
              <button className="btn bg-dark text-white p-sm-2 button">
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
