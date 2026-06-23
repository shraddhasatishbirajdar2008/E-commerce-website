function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>About ShopHub</h3>
                    <p>Your one-stop e-commerce platform for quality products.</p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/cart">Cart</a></li>
                        <li><a href="/dashboard">Dashboard</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>Email: support@shophub.com</p>
                    <p>Phone: +1-800-SHOP-HUB</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 ShopHub. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
