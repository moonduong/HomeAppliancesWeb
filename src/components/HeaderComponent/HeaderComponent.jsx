import React, { useState } from "react";
import {  Badge, Button, Col, Popover } from 'antd';
import { WrapperHeader, WapperTextHeaderSmall, WrapperContentPopup } from "./style";
import {WapperTextHeader,WapperHeaderAccount} from "./style";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined,
  } from '@ant-design/icons';
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import * as UserService from '../../services/UserService';
import { resetUser } from "../../redux/slice/userSlide"
import Loading from "../LoadingComponent/Loading";
import { isPending } from "@reduxjs/toolkit";

const HeaderComponent =()=>{
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const dispatch= useDispatch();
    const [loading, setLoading]= useState(false)
    const handleNavigateLogin =()=>{
        navigate('/sign-in')
    }


    const handleLogout = async () => {
        setLoading(true)
        await UserService.logoutUser()
        dispatch(resetUser())
        setLoading(false)
      }

    const content = (
        <div>
          <WrapperContentPopup onClick={handleLogout}>Đăng xuất</WrapperContentPopup>
          <WrapperContentPopup>Thông tin người dùng</WrapperContentPopup>
        </div>
      );

    

    return(
        <div style={{width:'100%', background:'rgb(26, 148, 255)', display:'flex', justifyContent:'center'}}>
            <WrapperHeader gutter={16}> 
                <Col span={6}>
                    <WapperTextHeader>
                        HOME APPLIANCES WEBSITE
                    </WapperTextHeader>
                </Col>
                <Col span={12}>
                    
                    <ButtonInputSearch 
                    size="large"
                    // bordered={false}
                    textButton="Tìm kiếm"
                    placeholder="input"  />
                </Col>
                <Col span={6} style={{display:'flex', gap:'20px', alignItems:'center'}} >
                <Loading isPending={loading}>
                    <WapperHeaderAccount>
                        
                            <UserOutlined style={{fontSize: '30px'}}/>
                            {user?.name ?(
                                <>
                                
                                <Popover content={content} trigger="click">
                                    <div style={{cursor:'pointer'}}>{user.name}</div>
                                </Popover>

                                </>
                            ):(
                                <div onClick={handleNavigateLogin} style={{cursor:'pointer'}}>
                                <WapperTextHeaderSmall>Đăng nhập/Đăng ký</WapperTextHeaderSmall>
                                <div>
                                    <WapperTextHeaderSmall>Tài khoản</WapperTextHeaderSmall>
                                    <CaretDownOutlined />
                                </div>
                            </div>
                            )}
                       
                    </WapperHeaderAccount>
                    </Loading>
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