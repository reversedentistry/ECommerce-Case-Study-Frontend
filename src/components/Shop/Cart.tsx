import { Product } from "../../models/Product";
import { useEffect, useState } from "react";
import { logoutUser } from "../../features/authSlice";
import { useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";

function Cart() {
    const [cart, setCart] = useState<Product[] | null>(null);

    const navigate = useNavigate();
    const dispatch = useAppDispatch(); 

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
        navigate("/login");
    };

    function logout(){
        dispatch(logoutUser()); 
        navigate("/"); 
    }

    return (
        <div>
            <nav className="navbar-end">
                <div className="navbar-item">
                    <a className="button mr-2" href="/">Shop</a>
                    <button className="button" onClick={logout}>LOG OUT</button>
                </div>
            </nav>
            <section className="hero is-info">
                <div className="hero-body has-text-centered">
                    <p className="title">Your cart</p>
                </div>
            </section>
            <section className="columns is-multiline is-5">
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
            <section className="columns mt-4 is-centered is-8">
                <button className="column is-1 button is-info mr-2" onClick={clearCart}>Clear cart</button>
                <button className="column is-1 button is-info ml-2" onClick={submitOrder}>Checkout</button>
            </section>
        </div>
    )

}

export default Cart;