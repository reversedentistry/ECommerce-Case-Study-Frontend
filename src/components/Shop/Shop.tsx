import { useState, useEffect } from "react";
import axios from "axios";

interface Product {
    productId: number,
    productName: string,
    price: number
};

function ShopPage() {
    const [allProducts, setAllProducts] = useState<Product[] | null>(null); 
        
    const getProducts = async () => { 
        axios.get("http://localhost:3030/products").then(
            response => {
                const products:Product[] = response.data;
                setAllProducts(products); 
            })
            .catch(err => {
                console.log(err);
                }
            );
    }
    

 


    return (
        <div>
            <nav className="navbar-end">
                <div className="navbar-item">
                    <a className="button">LOG OUT</a>
                </div>
            </nav>
            
        </div>

    )
}

export default ShopPage;