function CartItem({ item, onRemove, onUpdateQuantity }) {
    return (
        <div className="cart-item">
            <div className="cart-item-image">
                <img src={item.thumbnail} alt={item.title} />
            </div>

            <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p className="item-price">Price: ${item.price}</p>
            </div>

            <div className="cart-item-quantity">
                <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value) || 1)}
                    min="1"
                />
                <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>

            <div className="cart-item-total">
                <span className="total">${(item.price * item.quantity).toFixed(2)}</span>
            </div>

            <button className="remove-btn" onClick={() => onRemove(item.id)}>
                Remove
            </button>
        </div>
    )
}

export default CartItem
