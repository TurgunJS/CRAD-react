import React, {useEffect} from "react";
import { Button, Form, Input } from "antd";
import { useDispatch } from 'react-redux';
import { saveProduct, updateProduct } from '../../store/actions';
import '../Products/Products.css'

function ProductForm({ editProduct }) {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const newProduct = {
      name: values.productName,
      price: +values.price,
      id: values.id,
      // image: values.image,
    }

    if (editProduct) {
      dispatch(updateProduct(editProduct.id, newProduct));
    } else {
      dispatch(saveProduct(newProduct));
    }

    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    form.resetFields();
    if (!editProduct) return;
    const values = {
      productName: editProduct.name,
      price: editProduct.price,
      id: editProduct.id,
      // image: editProduct.image,
    } 

    form.setFieldsValue(values)
  }, [form, editProduct])

  console.log('editProduct', editProduct)

  return (
    <div className="constainerForm">
      <div>Product Form</div>
      <Form
        form={form}
        name="basic"
        initialValues={editProduct}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}

        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Product Name"
          name="productName"
          rules={[
            {
              required: true,
              message: "Please input Product name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              message: "Please input Product price!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Id"
          name="id"
          rules={[
            {
              required: true,
              message: "Please input Product Id!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* <Form.Item
          label="Image"
          name="image"
          rules={[
            {
              required: true,
              message: "Please input Product Image!",
            },
          ]}
        >
          <Input />
        </Form.Item> */}

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default ProductForm;
