import React from "react";
import Layout from "../components/Layout/Layout";
import { AiFillCloud, AiFillMail, AiFillPhone } from "react-icons/ai";
import "../common.css";

const Contact = () => {
  return (
    <Layout>
      <div className="container m-4">
        <div className="row">
          <h1>Contact My Restaurant</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sequi
            voluptas nisi dolore dolorem nulla facere vero! Porro velit debitis
            ipsum omnis labore explicabo officia optio voluptatum quaerat,
            libero accusantium ducimus maxime aperiam eius non repellat
            doloremque.
          </p>
        </div>
        <div className="row">
          <div class="card" style={{ width: "50rem" }}>
            <div class="card-header bg-dark text-white text-center">
              Contact Details
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <AiFillCloud className="golden-red mt-1 me-1 h4" />
                1800 00 0000 (Tollfree)
              </li>
              <li class="list-group-item">
                <AiFillMail className="golden-red mt-1 me-1 h4" />
                foodies@gmail.com
              </li>
              <li class="list-group-item">
                <AiFillPhone className="golden-red mt-1 me-1 h4" />
                1234567890
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
