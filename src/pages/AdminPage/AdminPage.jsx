import { Menu } from "antd";
import React, { useState } from "react";
import { getItem } from "../../utils";
import { UserOutlined, AppstoreOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import AdminProduct from "../../components/AdminProduct/AdminProduct";
import AdminUser from "../../components/AdminUser/AdminUser";
import OrderAdmin from "../../components/OrderAdmin/OrderAdmin";

const AdminPage =()=>{

    const items = [
        getItem('Người dùng', 'users', <UserOutlined />),
        getItem('Sản phẩm', 'product', <AppstoreOutlined />,),
        getItem('Đơn hàng', 'orders', <ShoppingCartOutlined />),
        
      ];

    const [keySelected, setKeySelected] = useState('');
    
    const renderPage = (key) => {
        switch (key) {
          case 'users':
            return (
              <AdminUser />
            )
          case 'product':
            return (
              <AdminProduct />
            )
          case 'orders':
            return (
              <OrderAdmin/>
            )
          default:
            return <></>
        }
      }

    // const onOpenChange=(keys) =>{
    //     console.log('keys', keys)
    //     const latesOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    //     if(rootSubmenuKeys.indexOf(latesOpenKey) === -1){
    //         setOpenKeys(keys);
    //     }else{
    //         setOpenKeys(latesOpenKey ? [latesOpenKey] : []);
    //     }
    // }

    const handleOnCLick = ({ key }) => {
        setKeySelected(key)
      }

      console.log('keySelec', keySelected)

    return (
        <>
        <HeaderComponent  isHiddenSearch isHiddenCart/>
        <div style={{ display: 'flex',overflowX: 'hidden' }}>
        <Menu
          mode="inline"
        //   openKeys={openKeys}
        //   onOpenChange={onOpenChange}
          style={{
            width: 256,
            boxShadow: '1px 1px 2px #ccc',
            height: '100vh'
          }}
          items={items}
          onClick={handleOnCLick}
        />
        <div style={{ flex: 1, padding: '15px 0 15px 15px' }}>
        {renderPage(keySelected)}
        </div>
        </div>
        </>
    )
}
export default AdminPage