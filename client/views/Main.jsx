import React, {useState} from "react";
import ProductForm from "../src/components/ProductManager.form";
import ProductList from "../src/components/ProductList";
import Header from "../src/components/Header";

const Main = (props) => {
    const [products, setProducts] = useState([]);

    return (
        <div>
            <Header/>
            <ProductForm products={products} setProducts={setProducts}/>
            <hr/>
            <ProductList products={products} setProducts={setProducts}/>
        </div>
    )
};

export default Main;