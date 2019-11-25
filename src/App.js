import React, { Component } from "react";
import { Card, Row, Col } from "antd";
import "./App.css";
import "antd/dist/antd.css";
class App extends Component {
  state = {};
  render() {
    return (
      <div
        style={{ background: "#ECECEC", padding: "30px" }}
        className="card-list"
      >
        <Row gutter={16}>
          <Col span={8}>
            <Card className="card-section">Card content</Card>
          </Col>
          <Col span={8}>
            <Card className="cards-section">Card content</Card>
          </Col>
          <Col span={8}>
            <Card className="cards-section">Card content</Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
