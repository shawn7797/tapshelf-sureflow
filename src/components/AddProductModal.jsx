import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Upload,
  message,
} from "antd";
import React, { useState } from "react";
import "./styles/add-product-modal.style.less";

const { Dragger } = Upload;

const AddProductModal = ({ visible, setVisible, onAddProduct }) => {
  const [image, setImage] = useState();
  const [productName, setProductName] = useState("");
  const [productId, setProductId] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [date, setDate] = useState("");
  const [thresholdValue, setThresholdValue] = useState("");

  const [form] = Form.useForm();

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const resetFields = () => {
    form.resetFields();
  };

  const handleCancel = () => {
    setVisible(false);
    resetFields();
  };

  const handleFinishFailed = () => {
    return message.error("Please fill out required fields and try again!");
  };

  const handleFinish = (values) => {
    onAddProduct({ ...values, date: date });
    handleCancel();
    message.success("Product added successfully!");
  };

  const docProps = {
    beforeUpload: (file, FileList) => {
      setImage(file);
      return false;
    },
    image,
  };

  return (
    <Modal
      className="add-product-modal"
      open={visible}
      onCancel={handleCancel}
      centered
      footer={null}
      width={450}
      destroyOnClose
    >
      <h2>New Product</h2>
      <Form
        form={form}
        onFinishFailed={handleFinishFailed}
        onFinish={handleFinish}
        {...layout}
        labelAlign="left"
        requiredMark={false}
        colon={false}
      >
        <Form.Item
          className="image-form-item"
          rules={[
            {
              required: true,
              message: "Please upload an image!",
            },
          ]}
        >
          <div className="image-upload-wrapper">
            <Dragger
              {...docProps}
              multiple={true}
              accept=".doc,.docx,.pdf,.xls,.xlsx,.txt,.png,.jpeg,.webp,.svg"
              showUploadList={false}
              className="dashed-dragger-container"
            >
              {image && (
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "6px",
                  }}
                  src={URL.createObjectURL(image)}
                  alt={image?.name}
                />
              )}
            </Dragger>
            <div className="dragger-text-wrapper">
              <p>Drag image here</p>
              <p>or</p>
              <p style={{ color: "#1365d9" }}>Browse image</p>
            </div>
          </div>
        </Form.Item>
        <Form.Item
          name="name"
          label="Product Name"
          rules={[
            {
              required: true,
              message: "Please enter product name!",
            },
          ]}
        >
          <Input
            placeholder="Enter product name"
            name="name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="productId"
          label="Product ID"
          rules={[
            {
              required: true,
              message: "Please enter product ID!",
            },
          ]}
        >
          <Input
            placeholder="Enter product ID"
            name="productId"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="category"
          label="Category"
          rules={[
            {
              required: true,
              message: "Please select product category!",
            },
          ]}
        >
          <Input
            placeholder="Select product category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="price"
          label="Buying Price"
          rules={[
            {
              required: true,
              message: "Please enter buying price!",
            },
          ]}
        >
          <InputNumber
            placeholder="Enter buying price"
            name="price"
            value={price}
            onChange={(value) => setPrice(value)}
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item
          name="quantity"
          label="Quantity"
          rules={[
            {
              required: true,
              message: "Please enter quantity!",
            },
          ]}
        >
          <InputNumber
            placeholder="Enter product quantity"
            name="quantity"
            value={quantity}
            onChange={(value) => setQuantity(value)}
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item
          name="unit"
          label="Unit"
          rules={[
            {
              required: true,
              message: "Please enter product unit!",
            },
          ]}
        >
          <Input
            placeholder="Enter product unit"
            name="unit"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="date"
          label="Expiry Date"
          rules={[
            {
              required: true,
              message: "Please select expiry date!",
            },
          ]}
        >
          <DatePicker
            style={{ width: "100%" }}
            name="date"
            placeholder="Select expiry date"
            format="DD/MM/YYYY"
            onChange={(date, dateString) => setDate(dateString)}
          />
        </Form.Item>
        <Form.Item
          name="thresholdValue"
          label="Threshold Value"
          rules={[
            {
              required: true,
              message: "Please enter threshold value!",
            },
          ]}
        >
          <InputNumber
            placeholder="Enter threshold value"
            name="thresholdValue"
            value={thresholdValue}
            onChange={(value) => setThresholdValue(value)}
            style={{ width: "100%" }}
          />
        </Form.Item>
        <div className="footer-buttons-wrapper">
          <Form.Item>
            <Button className="discard-btn" onClick={handleCancel}>
              Discard
            </Button>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="add-product-btn"
              // disabled={!form.isFieldsTouched()}
            >
              Add Product
            </Button>
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
};

export default AddProductModal;
