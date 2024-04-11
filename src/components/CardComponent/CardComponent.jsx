import React from "react";
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from "./style";
import {
    StarFilled
  } from '@ant-design/icons';
import logo from '../../assets/images/logo.jpg';


const CardComponent =()=>{
    return(
        <WrapperCardStyle
            hoverable
            headStyle={{width:'200px', height:'200px'}}
            style={{ width: 200 }}
            bodyStyle={{padding:'10px'}}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <img src={logo} 
                style={{width:'68px',height:"14px", 
                position:'absolute', top:-1 , left:-1,
                borderTopLeftRadius:'3px'}}
            />
            <StyleNameProduct>Máy giặt AQUA</StyleNameProduct>
            <WrapperReportText>
                <span style={{marginRight:'4px' }}>
                    <span>4.9</span> <StarFilled style={{fontSize:'12px', color:'yellow'}}/>
                </span>
                <WrapperStyleTextSell> | Đã bán 99+</WrapperStyleTextSell>
            </WrapperReportText>
            <WrapperPriceText> 
               <span style={{marginRight:'8px'}}>10.000.000đ</span> 
                <WrapperDiscountText>
                    -10%
                </WrapperDiscountText>
            </WrapperPriceText>
        </WrapperCardStyle>
    )
}

export default CardComponent;