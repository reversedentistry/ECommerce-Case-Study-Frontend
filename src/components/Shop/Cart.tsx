import { useEffect, useState } from "react";

function Cart() {
    const [cart, setCart] = useState<Object[] | null>(null);

    useEffect(() => {
        let cartArray = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart") || "") : [];
        setCart(cartArray);
    }, []); 

    return (
        <div>
            <nav className="navbar-end">
                <div className="navbar-item">
                    <a href="/">Shop</a>
                    <a className="button">LOG OUT</a>
                </div>
            </nav>
            <section>
                
            </section>
        </div>
    )

}

export default Cart;