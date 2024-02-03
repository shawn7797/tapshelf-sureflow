import React from "react";
import "./styles/dashboard.style.less";
import Sidebar from "./Sidebar";
import { Col, Row } from "antd";
import TopBar from "./TopBar";
import DashboardContent from "./DashboardContent";

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <Row>
        <Col flex="15rem">
          <Sidebar />
        </Col>
        <Col flex="auto">
          <TopBar />
          <DashboardContent />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
