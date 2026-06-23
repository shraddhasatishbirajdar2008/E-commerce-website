import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'

function ProductList({ onAddToCart, customProducts = [] }) {
    const [apiProducts, setApiProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        try {
            setLoading(true)
            const response = await fetch('https://dummyjson.com/products')
            const data = await response.json()
            setApiProducts(data.products)
        } catch (error) {
            console.error('Error fetching products:', error)
        } finally {
            setLoading(false)
        }
    }

    // Combine API products with custom products
    const allProducts = [...apiProducts, ...customProducts]

    // Filter products based on search term
    const filteredProducts = allProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category?.toLowerCase().includes(searchTerm.toLowerCase())
    )

    if (loading && apiProducts.length === 0) {
        return <div className="loading">Loading products...</div>
    }

    return (
        <div className="product-list-container">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>

            {filteredProducts.length === 0 ? (
                <div className="no-products">No products found</div>
            ) : (
                <div className="product-grid">
                    {filteredProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={onAddToCart}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default ProductList
