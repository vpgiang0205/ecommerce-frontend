import { Row } from "react-bootstrap";
import ProductComponent from "../../../components/ProductComponent/ProductComponent";
import { WrapperListProduct } from "./style";
import * as ProductService from '../../../services/ProductService'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProduct } from "../../../redux/slides/productSlide";

export default function ListProduct() {
    const dispatch = useDispatch();

    const getAllProduct = async () => {
        const res = await ProductService.GetAllProduct();
        dispatch(getProduct({ ...res?.data }));
    }

    useEffect(() => {
    }, [])

    const renderProduct = () => {
        // return listProduct.map((product, index) => {
        //     return <>
        //         <ProductComponent item={product} key={index} />
        //     </>
        // })
    }
    return (
        <WrapperListProduct className="row justify-content-center">
            {renderProduct()}
        </WrapperListProduct>
    )
}
