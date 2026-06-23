function ProductCard({ product, onAddToCart }) {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={product.thumbnail} alt={product.title} />
            </div>
            <div className="product-info">
                <h3>{product.title}</h3>
                <div className="product-details">
                    <p className="description">{product.description?.substring(0, 50)}...</p>
                    <div className="product-footer">
                        <div className="price-rating">
                            <span className="price">${product.price}</span>
                            <span className="rating">★ {product.rating}</span>
                        </div>
                        <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
