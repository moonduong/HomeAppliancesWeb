import React, { useState } from "react";
import InputForm from "../../components/InputForm/InputForm";
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from "./style";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import ImgLogo from "../../assets/images/logo-login.png";
import { Image } from "antd";
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';

const SignUpPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0.531)', height: '100vh' }}>
            <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
                <WrapperContainerLeft>
                    <h1>Xin chào</h1>
                    <p>Đăng nhập hoặc Tạo tài khoản</p>
                    <InputForm style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" />
                    <div style={{ position: 'relative' }}>
                        <span style={{ zIndex: 10, position: 'absolute', top: '4px', right: '8px' }}>
                            {isShowPassword ? (
                                <EyeFilled onClick={toggleShowPassword} />
                            ) : (
                                <EyeInvisibleFilled onClick={toggleShowPassword} />
                            )}
                        </span>
                        <InputForm placeholder="password" type={isShowPassword ? "text" : "password"} />
                    </div>

                    <div style={{ position: 'relative' }}>
                        <span style={{ zIndex: 10, position: 'absolute', top: '4px', right: '8px' }}>
                            {isShowPassword ? (
                                <EyeFilled onClick={toggleShowPassword} />
                            ) : (
                                <EyeInvisibleFilled onClick={toggleShowPassword} />
                            )}
                        </span>
                        <InputForm placeholder=" comfirm password" type={isShowPassword ? "text" : "password"} />
                    </div>

                    <ButtonComponent
                        bordered={false}
                        size={40}
                        styleButton={{
                            backgroundColor: 'rgb(255,57,69)', height: '48px', width: '100%',
                            border: 'none', borderRadius: '4px',
                            margin: '26px 0 10px'
                        }}
                        textButton={'ĐĂNG KÝ'}
                        styleTextButton={{ color: "#fff", fontSize: '15px', fontWeight: '700' }}
                    ></ButtonComponent>
                    <p><WrapperTextLight>Quên mật khẩu</WrapperTextLight> </p>
                    <p>Bạn đã có tài khoản ? <WrapperTextLight>Đăng nhập</WrapperTextLight></p>
                </WrapperContainerLeft>
                <WrapperContainerRight>
                    <Image src={ImgLogo} preview={false} alt='image-logo' height='203px' width='203px' />
                    <h4>DỊCH VỤ MUA SẮM TOÀN QUỐC</h4>
                </WrapperContainerRight>
            </div>
        </div>
    )
}

export default SignUpPage;
