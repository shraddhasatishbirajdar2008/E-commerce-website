import ProductList from '../components/ProductList'

function Home({ addToCart , products }) {
    return (
        <div className="home">
            <div className="hero-section">
                <h1>Welcome shraddha's Store</h1>
                <p>Discover amazing products at great prices</p>
            </div>

            <section className="products-section">
                <ProductList onAddToCart={addToCart} customProducts={products} />
            </section>
        </div>
    )
}

export default Home
