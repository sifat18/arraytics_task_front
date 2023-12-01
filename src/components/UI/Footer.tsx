import glasses from "/glasses.png";

import {
  FacebookFilled,
  TwitterCircleFilled,
  InstagramFilled,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-image">
        {/* <div className="logo"> */}
        <img src={glasses} alt="" />
        SpectraStyle{" "}
      </div>
      {/* </div> */}
      <div className="footer-info">
        <div className="footer-info-column">
          <h4>About us</h4>
          <p>Creators</p>
          <p>Philosophy</p>
        </div>

        <div className="footer-info-column">
          <h4>Company</h4>
          <p>Our team</p>
          <p>Terms</p>
        </div>
        <div className="footer-info-column">
          <h4>Services</h4>
          <p>Pickup</p>
          <p>How it works</p>
        </div>
      </div>
      <div className="footer-social">
        <div
          style={{
            textAlign: "center",
            paddingBottom: "1em",
            color: "#263238",
            fontSize: "1rem",
            fontFamily: "Inter,sans-serif",
            fontWeight: 500,
          }}
        >
          Check Us Out
        </div>
        <a href="#">
          <FacebookFilled />
        </a>
        <a href="#">
          <TwitterCircleFilled />
        </a>
        <a href="#">
          <InstagramFilled />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
