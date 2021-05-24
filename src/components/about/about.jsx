import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
// Components
import TeamBox from './teamBox';
import TeamInfo from "./teamInfo";
import Title from "../ui-components/title/title";
// Assets
import Pawan from '../../assets/about/Pawan.png';
import jayant from "../../assets/about/jayant.png";
import Rishab from "../../assets/about/rishab.png";
import Saksham from "../../assets/about/saksham.png";
import Abhishek from "../../assets/about/abhishek.png";
import ajaySheokand from '../../assets/about/ajaySheokand.png';

const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="ABOUT US." />
      <p className="font12">
        We are a team with a Visions and dedication toward our work and responsibilities.<br></br>Which always gives best to deliver best.
      </p>
      <Row>
      <Col md={12} lg={4}>
          <TeamBox avatar={Pawan} name="Pawan Dhull" job="iOS/React Native Developer" />
        </Col>
        <Col md={12} lg={4}>
          <TeamBox avatar={Rishab} name="Rishab Sethi" job="Web designer" />
        </Col>
        <Col md={12} lg={4}>
          <TeamBox avatar={ajaySheokand} name="Ajay Sheokand" job="Web Developer" />
        </Col>
        <Col md={12} lg={4}>
          <TeamBox avatar={Abhishek} name="Abhishek Chouhan" job="Android Developer" />
        </Col>
        <Col md={12} lg={4}>
          <TeamBox avatar={jayant} name="Jayant Pahuja" job="React Native Developer" />
        </Col>
        <Col md={12} lg={4}>
          <TeamBox avatar={Saksham} name="Saksham Sharma" job="Full Stack Developer" />
        </Col>
        <Col md={12} lg={4}>
          {/* <TeamInfo /> */}
        </Col>
      </Row>
    </div>
  </div>
);

export default about;
