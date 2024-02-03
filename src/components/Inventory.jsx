import React from "react";
import "./styles/inventory.style.less";
import { Button, Col, Divider, Row, Table } from "antd";
import { FilterOutlined } from "@ant-design/icons";

const CategoryItem = ({ title, items, headerColor }) => {
  return (
    <div className="category-item-wrapper">
      <h3 className="category-header" style={{ color: headerColor }}>
        {title}
      </h3>
      <Row
        style={items?.length > 1 && { width: "90%" }}
        justify="space-between"
      >
        {items.map((i, index) => (
          <Col key={index}>
            <h3
              style={
                index === 1
                  ? {
                      textAlign: "right",
                    }
                  : null
              }
            >
              {i.value}
            </h3>
            <p
              style={
                index === 1
                  ? {
                      textAlign: "right",
                    }
                  : null
              }
            >
              {i.title}
            </p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

const Inventory = () => {
  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Buying Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Threshold Value",
      dataIndex: "value",
      key: "value",
    },
    {
      title: "Expiry Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Availability",
      dataIndex: "availability",
      key: "availability",
    },
  ];

  const data = [
    {
      key: 0,
      product: "Maggi",
      price: "430",
      quantity: "43 Packets",
      value: "12 Packets",
      date: "11/12/22",
      availability: "In- stock",
    },
    {
      key: 1,
      product: "Bru",
      price: "7257",
      quantity: "22 Packets",
      value: "12 Packets",
      date: "21/12/22",
      availability: "Out of stock",
    },
    {
      key: 2,
      product: "Red Bull",
      price: "405",
      quantity: "36 Packets",
      value: "9 Packets",
      date: "5/12/22",
      availability: "In- stock",
    },
    {
      key: 3,
      product: "Bourn Vita",
      price: "502",
      quantity: "14 Packets",
      value: "6 Packets",
      date: "8/12/22",
      availability: "Out of stock",
    },
    {
      key: 4,
      product: "Horlicks",
      price: "530",
      quantity: "5 Packets",
      value: "5 Packets",
      date: "9/1/23",
      availability: "In- stock",
    },
    {
      key: 5,
      product: "Harpic",
      price: "605",
      quantity: "10 Packets",
      value: "5 Packets",
      date: "9/1/23",
      availability: "In- stock",
    },
    {
      key: 6,
      product: "Ariel",
      price: "408",
      quantity: "23 Packets",
      value: "7 Packets",
      date: "15/12/23",
      availability: "Out of stock",
    },
    {
      key: 7,
      product: "Scotch Brite",
      price: "359",
      quantity: "43 Packets",
      value: "8 Packets",
      date: "6/6/23",
      availability: "In- stock",
    },
    {
      key: 8,
      product: "Coca cola",
      price: "205",
      quantity: "41 Packets",
      value: "10 Packets",
      date: "11/11/22",
      availability: "Low stock",
    },
  ];

  const itemRender = (current, type, originalElement) => {
    console.log(type);
    if (type === "prev") {
      return <Button className="prev-btn">Previous</Button>;
    }
    if (type === "next") {
      return <Button className="next-btn">Next</Button>;
    }
    return null;
  };

  return (
    <div className="inventory-wrapper">
      <div className="inventory-top-section-wrapper">
        <h2>Overall Inventory</h2>
        <Row className="categories-container" gutter={[16, 16]}>
          <Col span={4}>
            <CategoryItem
              title="Categories"
              items={[
                {
                  title: "Last 7 days",
                  value: 14,
                },
              ]}
              headerColor="#3885f1"
            />
          </Col>
          <Col span={1}>
            <Divider type="vertical" />
          </Col>
          <Col span={6}>
            <CategoryItem
              title="Total Products"
              items={[
                {
                  title: "Last 7 days",
                  value: 868,
                },
                {
                  title: "Revenue",
                  value: "₹25000",
                },
              ]}
              headerColor="#e19237"
            />
          </Col>
          <Col span={1}>
            <Divider type="vertical" />
          </Col>
          <Col span={6}>
            <CategoryItem
              title="Top Selling"
              items={[
                {
                  title: "Last 7 days",
                  value: 5,
                },
                {
                  title: "Cost",
                  value: "₹2500",
                },
              ]}
              headerColor="#8864be"
            />
          </Col>
          <Col span={1}>
            <Divider type="vertical" />
          </Col>
          <Col span={5}>
            <CategoryItem
              title="Low Stocks"
              items={[
                {
                  title: "Ordered",
                  value: 12,
                },
                {
                  title: "Not in stock",
                  value: 2,
                },
              ]}
              headerColor="#f75f54"
            />
          </Col>
        </Row>
      </div>
      <div className="inventory-bottom-section-wrapper">
        <div className="products-wrapper">
          <Row
            className="products-header-wrapper"
            justify="space-between"
            align="middle"
          >
            <Col>
              <h2>Products</h2>
            </Col>
            <Col className="buttons-col-wrapper">
              <Button className="add-product-btn" type="primary">
                Add Product
              </Button>
              <Button className="filter-btn" icon={<FilterOutlined />}>
                Filters
              </Button>
              <Button>Download All</Button>
            </Col>
          </Row>
          <Table
            className="products-table"
            columns={columns}
            dataSource={data}
            scroll={{
              y: 220,
            }}
            pagination={{
              onChange: (page) => {},
              pageSize: 6,
              itemRender: itemRender,
              showTotal: (total, range) => (
                <p style={{ color: "#8f8f8f" }}>
                  Showing{" "}
                  <strong>
                    {range[0]}-{range[1]}
                  </strong>{" "}
                  of {total} items
                </p>
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Inventory;
