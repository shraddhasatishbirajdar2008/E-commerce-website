import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'

function Cart({ cart, removeFromCart, updateQuantity }) {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

    return (
        <div className="cart-page">
            <h1>Shopping Cart</h1>

            {cart.length === 0 ? (
                <div className="empty-cart">
                    <p>Your cart is empty</p>
                    <Link to="/" className="continue-shopping-btn">Continue Shopping</Link>
                </div>
            ) : (
                <div className="cart-container">
                    <div className="cart-items">
                        {cart.map(item => (
                            <CartItem
                                key={item.id}
                                item={item}
                                onRemove={removeFromCart}
                                onUpdateQuantity={updateQuantity}
                            />
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h2>Order Summary</h2>
                        <div className="summary-row">
                            <span>Subtotal:</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Shipping:</span>
                            <span>Free</span>
                        </div>
                        <div className="summary-row">
                            <span>Tax (10%):</span>
                            <span>${(total * 0.1).toFixed(2)}</span>
                        </div>
                        <div className="summary-row total-row">
                            <span>Total:</span>
                            <span>${(total + total * 0.1).toFixed(2)}</span>
                        </div>

                        <Link to="/checkout" className="checkout-btn">
                            Proceed to Checkout
                        </Link>
                        <Link to="/" className="continue-shopping-btn">
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cart
