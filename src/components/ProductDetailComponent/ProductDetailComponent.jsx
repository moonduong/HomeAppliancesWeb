import { Col, Image, Row } from "antd";
import React from "react";
import imageP from "../../assets/images/MG AQUA.jpg";
import imagePS from "../../assets/images/ips.jpg";
import { WrapperAddressProduct, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from "./style";
import {
    StarFilled,
    PlusOutlined
  } from '@ant-design/icons';
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ProductDetailComponent = () => {
    return (
        <Row style={{ padding: '16px', background:'#fff' }}>
            <Col span={10}>
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
            <Col span={14}>
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
                    <span className="change-address">Đổi địa chỉ</span>
                </WrapperAddressProduct>
                <WrapperQualityProduct>
                    <div>Số lượng</div>
                    <div>
                        <ButtonComponent icon={<PlusOutlined style={{color: '#fff'}} />}/>
                    </div>
                </WrapperQualityProduct>
            </Col>
        </Row>
    );
};

export default ProductDetailComponent;
