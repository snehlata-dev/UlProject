import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import "./mainpage.css";
import data from "./data";
import ShopList from "./ShopList";
const MainPage = () => {
  return (
    <div className="container my-2">
      <Form className="form-container d-flex align-items-center flex-wrap row">
        <Col lg="3" xs="12" className="my-1">
          <input placeholder="Enter barber's ID or name" />
        </Col>

        <Col lg="1" xs="12">
          <p className="OrHeading">Or</p>
        </Col>
        <Col lg="3" xs="12" className="my-1">
          <input placeholder="Search by location" />
        </Col>
        <Col lg="3" xs="12" className="my-1">
          <button type="submit" class="searchBtn">
            Search
          </button>
        </Col>
      </Form>
      <div className="list">
        {/* {data.map((shopdata) => { */}
        <ShopList shopdata={data} />;{/* })} */}
      </div>
    </div>
  );
};

export default MainPage;
