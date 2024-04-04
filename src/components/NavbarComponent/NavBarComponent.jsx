import React from "react";
import { WrapperContent, WrapperLableText, WrapperTextPrice, WrapperTextValue } from "./style";
import { Checkbox, Rate } from "antd";

const NavBarComponent = () => {
    const onChange = () => {};

    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option, index) => (
                    <WrapperTextValue key={index}>{option}</WrapperTextValue>
                ));

            case 'checkbox':
                return (
                    <Checkbox.Group style={{ width: '100%', display:'flex', flexDirection:'column', gap:'12px' }} onChange={onChange}>
                        {options.map((option, index) => (
                            <Checkbox key={index} style={{marginLeft:0}} value={option.value}>{option.label}</Checkbox>
                        ))}
                    </Checkbox.Group>
                );

            case 'star': 
                return options.map((option, index) => (
                    <div style={{display:'flex', gap:'4px'}}>
                        <Rate disabled defaultValue={parseInt(option)} />
                        <span>{`Từ ${option} sao`}</span>
                    </div>
                ));

            case 'price': 
                return options.map((option) => {
                    return(
                        <WrapperTextPrice>
                            {option}
                        </WrapperTextPrice>
                    )
                });
            default:
                return null;
        }
    };

    return (
        <div style={{backgroundColor:'#fff'}}>
            <WrapperLableText>Lable</WrapperLableText>
            <WrapperContent>
                {renderContent('text', ['May giat', 'TV', 'May xay sinh to'])}
            </WrapperContent>   
            
        </div>
    );
};

export default NavBarComponent;
