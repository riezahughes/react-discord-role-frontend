import React from "react";
import { Button, DatePicker, Row, Col } from "antd";

const Dashboard = () => (
  <>
    <Row>
      <Col span={8}>
        <Row>
          <Col span={8}>
            <p>One third of eight</p>
          </Col>
          <Col span={8}>
            <p>One third of eight</p>
          </Col>
          <Col span={8}>
            <p>One third of eight</p>
          </Col>
        </Row>
      </Col>
      <Col span={16}>
        <p>This is 16 long</p>
      </Col>
    </Row>

    <Button type="primary">PRESS ME</Button>
    <DatePicker placeholder="select date" />
  </>
);

export default Dashboard;
