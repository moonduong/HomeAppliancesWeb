import React, { useEffect, useState } from "react";
import { WrapperHeader, WrapperUploadFile } from './style'
import { Button, Checkbox, Form, Input, Modal, Upload } from "antd";
import { PlusOutlined } from '@ant-design/icons'
import TableComponent from "../Tablecomponent/TableComponent";
import IntputComponent from "../InputComponent/InputComponent";
import { getBase64 } from "../../utils";
import { useMutationHooks } from '../../hooks/useMutationHooks'
import * as ProductService from '../../services/ProductService'
import Loading from "../LoadingComponent/Loading";
import * as message from '../../components/Message/Message'

const AdminProduct = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [stateProduct, setStateProduct] = useState({
        name: '',
        price: '',
        rating: '',
        image: '',
        type: '',
        countInStock: '',
        description: '',
    });

    const mutation = useMutationHooks(
        ( data) => {
            const {  name,
                    price,
                    rating,
                    image,
                    type,
                    countInStock: countInStock,
                    description,}= data
        const res=    ProductService.createProduct(name,
                price,
                rating,
                image,
                type,
                countInStock,
                description,)
                return res
        }
    )

    const {data , isPending, isSuccess, isError} = mutation
    console.log('data', data)
    useEffect(() => {
        if (isSuccess && data?.status === "OK") {
            message.success()
            handleCancel()
        } else if (isError){
            message.error()
        }
    }, [isSuccess])

    const handleCancel = () => {
        setIsModalOpen(false);
        setStateProduct({ name: '',
                            price: '',
                            rating: '',
                            image: '',
                            type: '',
                            countInStock: '',
                            description: '',})
    }
console.log('state', stateProduct)

    const onFinish = () => {
        mutation.mutate(stateProduct)
        console.log('finish', stateProduct)
    }

    const handleOnChange = (e) => {
        setStateProduct({
            ...stateProduct,
            [e.target.name]: e.target.value
        });
    }

    const handleOnchangeAvatar = async ({ fileList }) => {
        const file = fileList[0];
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setStateProduct({
            ...stateProduct,
            image: file.preview
        });
    }

    return (
        <div>
            <WrapperHeader>Quản lý sản phẩm</WrapperHeader>
            <div style={{ marginTop: '20px' }}>
                <Button style={{ height: '150px', width: '150px', borderRadius: '6px', borderStyle: 'dashed' }} onClick={() => setIsModalOpen(true)}><PlusOutlined style={{ fontSize: '60px' }} /></Button>
            </div>
            <div style={{ marginTop: '20px' }}>
                <TableComponent />
            </div>
            <Modal title="Tạo sản phẩm" open={isModalOpen} onCancel={handleCancel} okText="OK">
            <Loading isPending={isPending}>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: "Please input your username" }]}>
                        <IntputComponent value='' onChange={handleOnChange} name='name' />
                    </Form.Item>

                    <Form.Item
                        label="Type"
                        name="type"
                        rules={[{ required: true, message: "Please input your type" }]}>
                        <IntputComponent value={stateProduct.type} onChange={handleOnChange} name='type' />
                    </Form.Item>

                    <Form.Item
                        label="CountInStock"
                        name="countInStock"
                        rules={[{ required: true, message: "Please input your countInStock" }]}>
                        <IntputComponent value={stateProduct.countInStock} onChange={handleOnChange} name='countInStock' />
                    </Form.Item>

                    <Form.Item
                        label="Price"
                        name="price"
                        rules={[{ required: true, message: "Please input your price" }]}>
                        <IntputComponent value={stateProduct.price} onChange={handleOnChange} name='price' />
                    </Form.Item>

                    <Form.Item
                        label="Rating"
                        name="rating"
                        rules={[{ required: true, message: "Please input your rating" }]}>
                        <IntputComponent value={stateProduct.rating} onChange={handleOnChange} name='rating' />
                    </Form.Item>

                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[{ required: true, message: "Please input your description" }]}>
                        <IntputComponent value={stateProduct.description} onChange={handleOnChange} name='description' />
                    </Form.Item>

                    <Form.Item
                        label="Image"
                        name="image"
                        rules={[{ required: true, message: "Please input your image" }]}>
                        <WrapperUploadFile>
                            <Upload onChange={handleOnchangeAvatar} maxCount={1}>
                                <Button >Select File</Button>
                                {stateProduct?.image && (
                                    <img src={stateProduct?.image} style={{
                                        height:'60px',
                                        width: '60px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        marginLeft:'10px'
                                    }} alt="avatar"/>
                                )}
                            </Upload>
                        </WrapperUploadFile>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 6 }}>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
                </Loading>
            </Modal>

        </div>
    );
}

export default AdminProduct;
