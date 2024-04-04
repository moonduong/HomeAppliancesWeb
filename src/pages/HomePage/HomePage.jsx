import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WapperTypeProduct, WrapperButtonMore, WrapperProducts } from "./style";
import SlideComponent from "../../components/SliderComponent/SliderComponent";
import slide1 from "../../assets/images/slide1.png";
import slide2 from "../../assets/images/slide2.png";
import slide3 from "../../assets/images/slide3.png";
import CardComponent from "../../components/CardComponent/CardComponent";


const HomePage = () => {
    const arr = ['Điều hòa', 'TV', 'Tủ lạnh'];

    return (
        <>
            <div style={{ padding: '0 120px' }}>
                <WapperTypeProduct>
                    {arr.map((item) => (
                        <TypeProduct name={item} key={item} />
                    ))}
                </WapperTypeProduct>
            </div>
            <div id="container" style={{ backgroundColor: "#efefef", padding:'0 120px', height:'1000px', width:'100%' }}>
                <SlideComponent arrImages={[slide1, slide2, slide3]} />
                <WrapperProducts>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>      
                    <CardComponent/>             
                </WrapperProducts>
                <div style={{width:'100%', display:'flex', justifyContent:'center', marginTop:'10px'}}>
                <WrapperButtonMore textButton="Xem thêm" type="outline" styleButton={{
                    border: '1px solid rgb(11, 116 ,229)', color:'rgb(11, 116,229)',
                    width: '240px', height:'38px', borderRadius:'4px'
                }}/>
                <styleTextButton style={{fontWeight:'500'}}/>
                </div>
            </div>
        </>
    );
};

export default HomePage;
