interface ProductInfo {
    name: string,
    price: number
}

function ProductCard(product:ProductInfo) {
    return (
        <div className="column">
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h5>{product.name}</h5>
                    <h6>{product.price}</h6>
                </div>
            </div>
        </div>
        </div>
    )
}; 

export default ProductCard;