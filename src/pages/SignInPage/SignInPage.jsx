import React, { useEffect, useState } from "react";
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import ImgLogo from "../../assets/images/logo-login.png";
import { Image } from 'antd';
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';
import {useNavigate} from 'react-router-dom';
import * as UserService from '../../services/UserService';
import { useMutationHooks } from "../../hooks/useMutationHooks";
import Loading from "../../components/LoadingComponent/Loading";
import * as message from '../../components/Message/Message'

const SignInPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const navigate =useNavigate()

    const mutation = useMutationHooks(
        (data) => UserService.loginUser(data)
    )

    const {data , isPending, isSuccess, isError} = mutation

    useEffect(() => {
        if (isSuccess) {
        //   navigate('/')
        //   console.log('data', data)
          localStorage.setItem('access_token', data?.access_token)
        }
      }, [isSuccess])
    

    console.log('mutation', mutation)

    const handleNavigateSignUp=()=>{
        navigate('/sign-up')
    }

    const handleOnChangeEmail=(value)=>{
        setEmail(value)

    }

    const handleOnChangePassword=(value)=>{
        setPassword(value)

    }

    const handleSignIn=()=>{
        mutation.mutate({
            email,
            password
        })

        console.log('sign-in', email, password)
    }


    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0.531)', height: '100vh' }}>
            <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
                <WrapperContainerLeft>
                    <h1>Xin chào</h1>
                    <p>Đăng nhập hoặc Tạo tài khoản</p>
                    <InputForm style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" 
                    value ={email} onChange={handleOnChangeEmail} />
                    <div style={{ position: 'relative' }}>
                        <span onClick={()=> setIsShowPassword (!isShowPassword)}
                        style={{ 
                            zIndex: 10, position: 'absolute', 
                            top: '4px', right: '8px' 
                            }}>
                            {isShowPassword ? (
                                <EyeFilled  />
                            ) : (
                                <EyeInvisibleFilled />
                            )}
                        </span>
                        <InputForm placeholder="password" type={isShowPassword ? "text" : "password"} 
                        value ={password} onChange={handleOnChangePassword} />
                    </div>
                    {data?.status === 'ERR' && <span style={{color:'red'}}>{data?.message}</span>}
                    <Loading isPending={isPending}>
                    <ButtonComponent
                     disabled={!email.length || !password.length }
                     onClick={handleSignIn}
                        // bordered={false}
                        size={40}
                        styleButton={{
                            backgroundColor: 'rgb(255,57,69)', height: '48px', width: '100%',
                            border: 'none', borderRadius: '4px',
                            margin: '26px 0 10px'
                        }}
                        textButton={'ĐĂNG NHẬP'}
                        styleTextButton={{ color: "#fff", fontSize: '15px', fontWeight: '700' }}
                    ></ButtonComponent>
                    </Loading>
                    <p><WrapperTextLight>Quên mật khẩu</WrapperTextLight> </p>
                    <p>Chưa có tài khoản ? <WrapperTextLight onClick={handleNavigateSignUp}>Tạo tài khoản</WrapperTextLight></p>
                </WrapperContainerLeft>
                <WrapperContainerRight>
                    <Image src={ImgLogo} preview={false} alt='image-logo' height='203px' width='203px' />
                    <h4>DỊCH VỤ MUA SẮM TOÀN QUỐC</h4>
                </WrapperContainerRight>
            </div>
        </div>
    );
}

export default SignInPage;
