import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://i.gadgets360cdn.com/large/amazon_best_tv_march_2020_1585384758649.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="The lean startup"
            price={29.99}
            image="https://artofthekickstart.com/wp-content/uploads/2016/06/lean-startup.jpg"
            rating={5}
          />
          <Product
            title="The lean startup"
            price={29.99}
            image="https://artofthekickstart.com/wp-content/uploads/2016/06/lean-startup.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="The lean startup"
            price={29.99}
            image="https://artofthekickstart.com/wp-content/uploads/2016/06/lean-startup.jpg"
            rating={5}
          />{" "}
          <Product
            title="The lean startup"
            price={29.99}
            image="https://artofthekickstart.com/wp-content/uploads/2016/06/lean-startup.jpg"
            rating={5}
          />{" "}
          <Product
            title="The lean startup"
            price={29.99}
            image="https://artofthekickstart.com/wp-content/uploads/2016/06/lean-startup.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="The lean startup"
            price={29.99}
            image="https://artofthekickstart.com/wp-content/uploads/2016/06/lean-startup.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
