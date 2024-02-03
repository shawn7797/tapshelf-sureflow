import React, { useState } from "react";
import "./styles/inventory.style.less";
import { Button, Col, Divider, Popconfirm, Row, Table } from "antd";
import { DeleteOutlined, FilterOutlined } from "@ant-design/icons";
import AddProductModal from "./AddProductModal";
import data from "./data";

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
  const [addProduct, setAddProduct] = useState(false);
  const [tableData, setTableData] = useState(data);

  const getAvailabilityTextStyle = (status) => {
    switch (status) {
      case "In- stock":
        return "green";

      case "Out of stock":
        return "red";

      case "Low stock":
        return "orange";

      default:
        return {};
    }
  };

  const handleDeleteProduct = (rowKey) => {
    const index = tableData?.findIndex((i) => i.key === rowKey);
    if (index >= 0) {
      const tempData = [...tableData];
      tempData.splice(index, 1);
      setTableData([...tempData]);
    }
  };

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
      dataIndex: "thresholdValue",
      key: "thresholdValue",
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
      render: (text, record, index) => (
        <p style={{ color: getAvailabilityTextStyle(text) }}>{text}</p>
      ),
    },
    {
      key: "delete",
      width: 50,
      render: (text, record, index) => (
        <Popconfirm
          title="Are you sure to delete?"
          onConfirm={() => handleDeleteProduct(record.key)}
          onCancel={() => {}}
        >
          <DeleteOutlined
            style={{ color: "#ff4d4f" }}
            key="Delete"
            name="Delete"
          />
        </Popconfirm>
      ),
    },
  ];

  const itemRender = (current, type, originalElement) => {
    if (type === "prev") {
      return <Button className="prev-btn">Previous</Button>;
    }
    if (type === "next") {
      return <Button className="next-btn">Next</Button>;
    }
    return null;
  };

  const handleAddProduct = (product) => {
    let productData = {
      key: product.productId,
      product: product.name,
      availability: "In- stock",
      ...product,
    };
    setTableData([productData, ...tableData]);
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
              <Button
                className="add-product-btn"
                type="primary"
                onClick={() => setAddProduct(true)}
              >
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
            dataSource={tableData}
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
      <AddProductModal
        visible={addProduct}
        setVisible={setAddProduct}
        onAddProduct={handleAddProduct}
      />
    </div>
  );
};

export default Inventory;
