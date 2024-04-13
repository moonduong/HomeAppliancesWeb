import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WapperTypeProduct, WrapperButtonMore, WrapperProducts } from "./style";
import SlideComponent from "../../components/SliderComponent/SliderComponent";
import slide1 from "../../assets/images/slide1.png";
import slide2 from "../../assets/images/slide2.png";
import slide3 from "../../assets/images/slide3.png";
import CardComponent from "../../components/CardComponent/CardComponent";
import *as ProductService from '../../services/ProductService'
import { useQuery } from "@tanstack/react-query";

const HomePage = () => {
    const arr = ['Điều hòa', 'TV', 'Tủ lạnh'];
    const fetchProductAll= async()=>{
      const res = await ProductService.getAllProduct()
      console.log('res', res)
      return res
    }
//const {isPending, data}= useQuery(['products'], fetchProductAll)
const { isPending, data: products } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProductAll,
    retry: 3,
    retryDelay: 1000
});

console.log('products', products);


    return (
        <>
            <div style={{ padding: '0 120px', margin:'0 auto' }}>
                <WapperTypeProduct>
                    {arr.map((item) => (
                        <TypeProduct name={item} key={item} />
                    ))}
                </WapperTypeProduct>
            </div>
            <div className="body" style={{width:'100%', backgroundColor:'#efefef'}}>
            <div id="container" style={{  height:'1000px', width:'1270px', margin:'0 auto' }}>
                <SlideComponent arrImages={[slide1, slide2, slide3]} />
                <WrapperProducts>
                    {products?.data?.map((product)=>{
                        return (
                            <CardComponent 
                            key={product._id} countInStock={product.countInStock} 
                            description={product.description} image={product.image}
                            name={product.name} price={product.price}
                            rating={product.rating} type={product.type} 
                            discount={product.discount}  selled={product.selled}
                            />
                        )
                    })}
                    {/* <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>      
                    <CardComponent/>              */}
                </WrapperProducts>
            
                <div style={{width:'100%', display:'flex', justifyContent:'center', marginTop:'10px'}}>
                <WrapperButtonMore textButton="Xem thêm" type="outline" styleButton={{
                    border: '1px solid rgb(11, 116 ,229)', color:'rgb(11, 116,229)',
                    width: '240px', height:'38px', borderRadius:'4px'
                }}/>
                <styleTextButton style={{fontWeight:'500'}}/>
                </div>
            </div>
            </div>
        </>
    );
};

export default HomePage;
