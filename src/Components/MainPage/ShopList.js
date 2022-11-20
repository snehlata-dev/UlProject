import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
const ShopList = ({ shopdata }) => {
  return (
    <Row>
      {shopdata.map((val, index) => {
        return (
          <Col lg={4} xs={12} sm={6}>
            <Card className="card">
              <div className="shopImage">
                <img src={val.imagesArray[0]} />
              </div>
              <div className="shopDetail">
                <h4 className="heading">{val.name}</h4>
                <div className="ellipes">
                  <span className="location">
                    <LocationOnOutlinedIcon />
                  </span>
                  <span>{val.address}</span>
                </div>

                <div className="barber-rating">
                  <div className="rating-starr">
                    {/* <FontAwesomeIcon icon="fa-duotone fa-star" /> */}
                    {/* <FontAwesomeIcon icon="check-square" /> */}
                    {/* <br />
                    <br /> */}
                    {/* <FontAwesomeIcon icon="coffee" />{" "} */}
                  </div>
                  <span className="review">({val.reviewCount}) Reviews</span>
                </div>

                <div>
                  <h6 className="advanCe">
                    <span>
                      {val.isAdvancePayment ? "Advance Payment required" : ""}
                    </span>
                  </h6>
                </div>

                <div></div>
              </div>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default ShopList;
