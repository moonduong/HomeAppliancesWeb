import React from "react";
import {  Badge, Col } from 'antd';
import { WrapperHeader, WapperTextHeaderSmall } from "./style";
import {WapperTextHeader,WapperHeaderAccount} from "./style";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined,
  } from '@ant-design/icons';

const HeaderComponent =()=>{
    return(
        <div>
            <WrapperHeader gutter={16}> 
                <Col span={6}>
                    <WapperTextHeader>
                        HOME APPLIANCES WEBSITE
                    </WapperTextHeader>
                </Col>
                <Col span={12}>
                    
                    <ButtonInputSearch 
                    size="large"
                    bordered={false}
                    textButton="Tìm kiếm"
                    placeholder="input"  />
                </Col>
                <Col span={6} style={{display:'flex', gap:'20px', alignItems:'center'}} >
                    <WapperHeaderAccount>
                        
                            <UserOutlined style={{fontSize: '30px'}}/>
                        <div>
                            <WapperTextHeaderSmall>Đăng nhập/Đăng ký</WapperTextHeaderSmall>
                            <div>
                                <WapperTextHeaderSmall>Tài khoản</WapperTextHeaderSmall>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </WapperHeaderAccount>
                    <div>
                        <Badge count={4} size='small'>
                        <ShoppingCartOutlined style={{fontSize: '30px', color:'#fff' }} />
                        </Badge>
                        <WapperTextHeaderSmall >Giỏ hàng</WapperTextHeaderSmall>
                    </div>              
                </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent;