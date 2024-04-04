import { Input } from "antd";
import React from "react";

const IntputComponent = ({ size, placeholder, bordered, style, ...rests }) => {
    return (
        <Input 
            size={size} 
            placeholder={placeholder} 
            bordered={bordered} 
            style={style} // Sử dụng prop style được truyền vào
            {...rests} 
        />
    );
}

export default IntputComponent;
