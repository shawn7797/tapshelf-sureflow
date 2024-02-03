import React from "react";
import "./styles/topbar.style.less";
import { Avatar, Col, Input, Row } from "antd";
import { BellOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";

const TopBar = () => {
  return (
    <div className="topbar-wrapper">
      <Row>
        <Col span={6}>
          <Input
            placeholder="Search product, supplier, order"
            prefix={<SearchOutlined style={{ color: "#8f8f8f" }} />}
          />
        </Col>
        <Col flex="auto" />
        <Col span={1}>
          <BellOutlined />
        </Col>
        <Col span={1}>
          <Avatar icon={<UserOutlined />} />
        </Col>
      </Row>
    </div>
  );
};

export default TopBar;
