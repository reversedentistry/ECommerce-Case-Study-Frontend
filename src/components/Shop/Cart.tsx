import { Product } from "../../models/Product";
import { useEffect, useState } from "react";

function Cart() {
    const [cart, setCart] = useState<Product[] | null>(null);

    useEffect(() => {
        let cartArray = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart") || "") : [];
        setCart(cartArray);
    }, []);

    function clearCart() {
        localStorage.clear(); 
        setCart(null); 
    };

    function submitOrder() {
        localStorage.clear();
        setCart(null); 
        alert("Order submitted!");
    };

    return (
        <div>
            <nav className="navbar-end">
                <div className="navbar-item">
                    <a href="/">Shop</a>
                    <a className="button">LOG OUT</a>
                </div>
            </nav>
            <section className="columns is-multiline">
                {cart?.map(cartItem => {
                    if (cartItem != null) {
                        return (
                            <div key={cartItem.productId} className="column card">
                                <div className="card-content">
                                    <div className="content">
                                        <h5>{cartItem.productName}</h5>
                                        <h6>{cartItem.price}</h6>
                                    </div>
                                </div>
                            </div>)
                    }
                })}

            </section>
            <section>
                <button onClick={clearCart}>Clear cart</button>
                <button onClick={submitOrder}>Checkout</button>
            </section>
        </div>
    )

}

export default Cart;