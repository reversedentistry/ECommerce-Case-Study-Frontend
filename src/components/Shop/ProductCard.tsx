interface ProductInfo {
    id: number,
    name: string,
    price: number,
}

function ProductCard(product:ProductInfo) {
    function addToCart() {
        let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart") || "") : [];

        if (cart[product.id]) {
            return;
        } else {
            cart[product.id] = product;
        };

        localStorage.setItem("cart", JSON.stringify(cart));

    }
    
    return (
        <div className="column">
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h5>{product.name}</h5>
                    <h6>{product.price}</h6>
                    <button onClick={addToCart}>Add to cart</button>
                </div>
            </div>
        </div>
        </div>
    )
}; 

export default ProductCard;