import React from "react";
import { WrapperHeader, WrapperUploadFile } from './style'
import { Button } from "antd";
import {PlusOutlined, DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons'
import TableComponent from "../Tablecomponent/TableComponent";
const AdminProduct =()=>{
    return(
        <div>
              <WrapperHeader>Quản lý sản phẩm</WrapperHeader>
              <div style={{ marginTop: '20px' }}>
                    <Button style={{height:'150px', width:'150px', borderRadius:'6px', borderStyle:'dashed'}}><PlusOutlined style={{fontSize:'60px'}}/></Button>
              </div>
              <div style={{ marginTop: '20px' }}>
              <TableComponent />
              </div>
              
        </div>
    )
}

export default AdminProduct
