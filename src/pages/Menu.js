import React from "react";
import Layout from "../components/Layout/Layout";
import { MenuList } from "../data/Data";

const Menu = () => {
  return (
    <Layout>
      <div className="row m-4 p-4" style={{ border: "2px solid black" }}>
        {MenuList.map((menu) => {
          console.log(menu);
          return (
            <div className="card m-3" style={{ width: "16rem" }}>
              <img
                src={menu.image}
                classNameName="card-img-top"
                alt="food item"
                height="200em"
              />
              <div className="card-body">
                <h5 className="card-title">{menu.name}</h5>
                <p className="card-text">{menu.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Menu;
