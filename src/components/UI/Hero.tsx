import { Col, Row } from "antd";
import sunglass from "/sunglass.png";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div style={{ minHeight: "500px" }} className="bgHero">
      <Row align="middle">
        <Col
          xs={24}
          sm={24}
          md={12}
          className="hero"
          style={{ minHeight: "500px" }}
        >
          <p> 20% Discount for 1st time Customers</p>
          <h1>
            {" "}
            Lets see the world
            <br />
            in style with us
          </h1>
          <p className="secondary">
            Elevate your vision with our exquisite collection of eyewear that
            lets you experience life's every detail with unparalleled style!
          </p>
          <NavLink to={"/about"}>
            <div className="btn">How it works</div>
          </NavLink>
          <div className="tail">
            <p>
              18m+{" "}
              <span
                style={{
                  textAlign: "left",
                  float: "right",
                  margin: "0.5em 0.4em",
                }}
              >
                Happy <br />
                Customers
              </span>
            </p>
            <p>
              10+{" "}
              <span
                style={{
                  textAlign: "left",
                  float: "right",
                  margin: "0.5em 0.4em",
                }}
              >
                Years of <br />
                Experience
              </span>
            </p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <div style={{ maxHeight: "500px" }}>
            <img src={sunglass} alt="" className="imghero"></img>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
