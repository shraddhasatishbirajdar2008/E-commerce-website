import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Checkout({ cart, clearCart }) {
    const navigate = useNavigate()
    const [paymentMethod, setPaymentMethod] = useState('cash')
    const [loading, setLoading] = useState(false)
    const [orderPlaced, setOrderPlaced] = useState(false)
    const [timer, setTimer] = useState(3)

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    const tax = total * 0.1
    const finalTotal = total + tax

    const handlePlaceOrder = () => {
        setLoading(true)

        // Simulate 3 second timer before showing success
        setTimeout(() => {
            setLoading(false)
            setOrderPlaced(true)
        }, 3000)
    }

    // Auto redirect after order is placed (3 second countdown)
    useEffect(() => {
        if (orderPlaced && timer > 0) {
            const interval = setTimeout(() => {
                setTimer(timer - 1)
            }, 1000)
            return () => clearTimeout(interval)
        } else if (orderPlaced && timer === 0) {
            clearCart()
            navigate('/')
        }
    }, [orderPlaced, timer, clearCart, navigate])

    if (orderPlaced) {
        return (
            <div className="checkout-page">
                <div className="success-message">
                    <div className="success-icon">✓</div>
                    <h1>Order Placed Successfully!</h1>
                    <p>Thank you for your purchase.</p>
                    <p>Order ID: #{Math.floor(Math.random() * 100000)}</p>
                    <p className="redirect-message">Redirecting to home in {timer} seconds...</p>
                </div>
            </div>
        )
    }

    if (cart.length === 0) {
        return (
            <div className="checkout-page">
                <div className="empty-checkout">
                    <h1>Your cart is empty</h1>
                    <button onClick={() => navigate('/')} className="back-btn">Go Back to Shopping</button>
                </div>
            </div>
        )
    }

    return (
        <div className="checkout-page">
            <h1>Checkout</h1>

            <div className="checkout-container">
                <div className="checkout-form">
                    <section className="form-section">
                        <h2>Delivery Address</h2>
                        <input type="text" placeholder="Full Name" className="form-input" />
                        <input type="email" placeholder="Email" className="form-input" />
                        <input type="text" placeholder="Address" className="form-input" />
                        <div className="form-row">
                            <input type="text" placeholder="City" className="form-input" />
                            <input type="text" placeholder="ZIP Code" className="form-input" />
                        </div>
                    </section>

                    <section className="form-section">
                        <h2>Payment Method</h2>
                        <div className="payment-options">
                            <label className="payment-option">
                                <input
                                    type="radio"
                                    value="cash"
                                    checked={paymentMethod === 'cash'}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                />
                                <span>Cash on Delivery</span>
                            </label>
                            <label className="payment-option">
                                <input
                                    type="radio"
                                    value="card"
                                    checked={paymentMethod === 'card'}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                />
                                <span>Credit/Debit Card</span>
                            </label>
                            <label className="payment-option">
                                <input
                                    type="radio"
                                    value="wallet"
                                    checked={paymentMethod === 'wallet'}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                />
                                <span>Digital Wallet</span>
                            </label>
                        </div>

                        {paymentMethod === 'card' && (
                            <div className="card-details">
                                <input type="text" placeholder="Card Number" className="form-input" />
                                <div className="form-row">
                                    <input type="text" placeholder="MM/YY" className="form-input" />
                                    <input type="text" placeholder="CVV" className="form-input" />
                                </div>
                            </div>
                        )}
                    </section>

                    <button
                        className="place-order-btn"
                        onClick={handlePlaceOrder}
                        disabled={loading}
                    >
                        {loading ? 'Processing... (3s)' : 'Place Order'}
                    </button>
                </div>

                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <div className="summary-items">
                        {cart.map(item => (
                            <div key={item.id} className="summary-item">
                                <span>{item.title} x {item.quantity}</span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>

                    <div className="summary-totals">
                        <div className="summary-row">
                            <span>Subtotal:</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Tax (10%):</span>
                            <span>${tax.toFixed(2)}</span>
                        </div>
                        <div className="summary-row total-row">
                            <span>Total:</span>
                            <span>${finalTotal.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
