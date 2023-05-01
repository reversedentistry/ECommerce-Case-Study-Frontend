import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

interface Product {
    productId: number,
    productName: string,
    price: number
};

function ShopPage() {
    const [allProducts, setAllProducts] = useState<Product[] | null>(null);

    const getAllProducts = async () => {
        axios.get("http://localhost:3030/products").then(
            response => {
                const products: Product[] = response.data;
                setAllProducts(products);
            })
            .catch(err => {
                console.log(err);
            }
            );
    };

    useEffect(() => {
        getAllProducts();
        allProducts?.map((product: Product) => console.log(product));
    }, []);


    return (
        <div>
            <nav className="navbar-end">
                <div className="navbar-item">
                    <a className="button">LOG OUT</a>
                </div>
            </nav>
            <section className="container mt-5">
                <div className="columns">
                    {allProducts?.map((product: Product) =>
                        <ProductCard key={product.productId} name={product.productName} price={product.price} />
                    )}
                </div>


            </section>
        </div>

    )
}

export default ShopPage;