import Hero from "../components/UI/Hero";
import { Card, Row, Col, Tooltip, Divider } from "antd";
import glass from "/glass-1.jpg";
import dummy from "/dummy.png";
import glassUpcoming from "/glass-2.jpg";
import { IoIosSearch } from "react-icons/io";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { useItemsQuery } from "../redux/api/itemApi";

export const Home = () => {
  const { data: items, isLoading } = useItemsQuery({});
  console.log({ items });
  return (
    <div>
      <Hero />
      <Divider style={{ marginTop: "3em" }} orientation="center">
        BESTSELLER PRODUCTS
      </Divider>

      <Row gutter={[24, 40]} style={{ width: " 100%", marginTop: "-2em" }}>
        {items?.items?.map((item: any, idx: number) => (
          <Col key={idx} xs={20} md={12} lg={8} style={{ margin: "1em auto" }}>
            <Card className="itemCard">
              <img src={glass} alt="" style={{ maxWidth: "100%" }} />
              <p style={{ textAlign: "center", marginTop: "-5em" }}>
                {item?.Name}
              </p>

              <section className="itemCard-section">
                <Tooltip title="Quick View">
                  <div className="circle">
                    <div className="circle-icon">
                      <IoIosSearch />
                    </div>
                  </div>
                </Tooltip>
                <Tooltip title="Add to Cart">
                  <div className="circle">
                    <div className="circle-icon">
                      <LiaShoppingBasketSolid />
                    </div>
                  </div>
                </Tooltip>
              </section>
            </Card>
          </Col>
        ))}
      </Row>
      <Divider style={{ marginTop: "3em" }} orientation="center">
        UPCOMING PRODUCTS
      </Divider>

      <Row gutter={[24, 40]} style={{ width: " 100%", marginTop: "-2em" }}>
        <Col
          //   key={idx}
          xs={20}
          md={12}
          lg={8}
          style={{ margin: "1em auto" }}
        >
          <Card className="itemCard">
            <img src={glassUpcoming} alt="" style={{ maxWidth: "100%" }} />
            <p style={{ textAlign: "center", marginTop: "-5em" }}>Name</p>
          </Card>
        </Col>
        <Col
          //   key={idx}
          xs={20}
          md={12}
          lg={8}
          style={{ margin: "1em auto" }}
        >
          <Card className="itemCard">
            <img src={glassUpcoming} alt="" style={{ maxWidth: "100%" }} />
            <p style={{ textAlign: "center", marginTop: "-5em" }}>Name</p>
          </Card>
        </Col>
        <Col
          //   key={idx}
          xs={20}
          md={12}
          lg={8}
          style={{ margin: "1em auto" }}
        >
          <Card className="itemCard">
            <img src={glassUpcoming} alt="" style={{ maxWidth: "100%" }} />
            <p style={{ textAlign: "center", marginTop: "-5em" }}>Name</p>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ width: " 100%", margin: "2em auto" }}>
        <Col
          //   key={idx}
          xs={24}
          md={12}
          style={{ padding: "10em " }}
        >
          <h1>
            {" "}
            WHY BUY OUR?
            <br />
            COLLECTION OF 2023.
          </h1>
          <p className="secondary" style={{ marginTop: "2em " }}>
            We're an independent eyewear brand committed to creating high
            quality, handmade eyewear inspired by the people, places, and
            stories of California.
          </p>
        </Col>
        <Col
          //   key={idx}
          xs={24}
          md={12}
        >
          <img src={dummy} alt="" style={{ maxWidth: "100%" }} />
        </Col>
      </Row>
    </div>
  );
};
