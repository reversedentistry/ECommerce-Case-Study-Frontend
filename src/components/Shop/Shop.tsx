import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { Product } from "../../models/Product";
import { logoutUser } from "../../features/authSlice";
import { useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";


function ShopPage() {
    const [allProducts, setAllProducts] = useState<Product[] | null>(null);

    const dispatch = useAppDispatch();
    const navigate = useNavigate(); 

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

    function logout(){
        dispatch(logoutUser()); 
        navigate("/login"); 
    }


    return (
        <div>
            <nav className="navbar-end">
                <div className="navbar-item">
                    <a className="button mr-2" href="/cart">Cart</a>
                    <button className="button" onClick={logout}>LOG OUT</button>
                </div>
            </nav>
            <section className="hero is-info">
                <div className="hero-body has-text-centered">
                    <p className="title">Our products</p>
                </div>
            </section>
            <section className="container mt-5">
                <div className="columns">
                    {allProducts?.map((product: Product) =>
                        <ProductCard key={product.productId} productId={product.productId} productName={product.productName} price={product.price} />
                    )}
                </div>


            </section>
        </div>

    )
}

export default ShopPage;