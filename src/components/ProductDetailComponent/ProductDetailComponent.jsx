import { Col, Image, Row, InputNumber } from "antd"; // Removed duplicate InputNumber import
import React from "react";
import imageP from "../../assets/images/MG AQUA.jpg";
import imagePS from "../../assets/images/ips.jpg";
import { WrapperAddressProduct, WrapperBtnQualityProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from "./style";
import {
    StarFilled,
    PlusOutlined,
    MinusOutlined
  } from '@ant-design/icons';
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ProductDetailComponent = () => {
    const onChange=()=>{}
    return (
        <Row style={{ padding: '16px', background:'#fff' , borderRadius:'4px'}}>
            <Col span={10} style={{borderRight:'1px solid #e5e5e5', paddingRight:'8px'}}>
                <Image src={imageP} alt="image product" preview={false} />
                <Row style={{ paddingTop: '10px', justifyContent:'space-between' }}>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imagePS} alt="image product" preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imagePS} alt="image product" preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imagePS} alt="image product" preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imagePS} alt="image product" preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imagePS} alt="image product" preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imagePS} alt="image product" preview={false} />
                    </WrapperStyleColImage>
                </Row>
            </Col>
            <Col span={14} style={{paddingLeft:'10px'}}>
                <WrapperStyleNameProduct>Máy giặt Aqua Inverter 10 kg AQD-DW1000J.BK</WrapperStyleNameProduct>
                <div>
                    <StarFilled style={{fontSize:'12px', color:'yellow'}} />
                    <StarFilled style={{fontSize:'12px', color:'yellow'}} />
                    <StarFilled style={{fontSize:'12px', color:'yellow'}} />
                    <WrapperStyleTextSell> | Đã bán 100+</WrapperStyleTextSell>
                </div>
                <WrapperPriceProduct>
                    <WrapperPriceTextProduct>9.000.000đ</WrapperPriceTextProduct>
                </WrapperPriceProduct>
                <WrapperAddressProduct>
                    <span>Giao đến</span>
                    <span className="address">Q.Gò Vấp, Phường 3, Hồ Chí Minh</span>
                    <span className="change-address"> - Đổi địa chỉ</span>
                </WrapperAddressProduct>
                <div style={{ margin:' 10px 0 20px', padding:'10px',  borderTop:'1px solid #e5e5e5', borderBottom:'1px solid #e5e5e5'}}>
                    <div style={{marginBottom:'10px'}}>Số lượng</div>
                    <WrapperQualityProduct>
                        <button style={{border:'none', background:'transparent'}}>
                        <MinusOutlined style={{color: '#000'}} size='20px' />
                        </button>
                        <WrapperInputNumber defaultValue={3} onChange={onChange} size="small"/>
                        <button style={{border:'none', background:'transparent'}}>
                        <PlusOutlined style={{color: '#000'}} size='20px'/>
                        </button>
                </WrapperQualityProduct>
                </div>
                <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
                    <ButtonComponent
                    bordered={false}
                    size={40}  
                    styleButton={{ backgroundColor: 'rgb(255,57,69)', height:'48px', width:'220px', border:'none', borderRadius: '4px'}} 
                    textButton={'Chọn Mua'}
                    styleTextButton={{ color: "#fff", fontSize:'15px', fontWeight:'700'}}
                
                    ></ButtonComponent>

                    <ButtonComponent
                    size={40}  
                    styleButton={{ backgroundColor: '#fff', height:'48px', width:'220px', 
                    border:'1 px solid rgb(13, 92 ,182)', 
                    borderRadius: '4px'
                }}     
                    textButton={'Mua trả sau'}
                    styleTextButton={{ color: "rgb (13,92,182)", 
                    fontSize:'15px'}}
                
                    ></ButtonComponent>
                </div>
            </Col>
        </Row>
    );
};

export default ProductDetailComponent;
