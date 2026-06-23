import { useState } from 'react'

function Dashboard({ addProduct }) {
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        category: '',
        description: '',
        thumbnail: '',
        rating: 4.5
    })

    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: name === 'price' || name === 'rating' ? parseFloat(value) : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formData.title || !formData.price || !formData.category || !formData.thumbnail) {
            alert('Please fill all required fields')
            return
        }

        addProduct(formData)

        // Show success message
        setSubmitted(true)

        // Reset form
        setFormData({
            title: '',
            price: '',
            category: '',
            description: '',
            thumbnail: '',
            rating: 4.5
        })

        // Hide success message after 3 seconds
        setTimeout(() => {
            setSubmitted(false)
        }, 3000)
    }

    return (
        <div className="dashboard">
            <h1>Admin Dashboard</h1>

            {submitted && (
                <div className="success-alert">
                    Product added successfully! It will appear on the store.
                </div>
            )}

            <div className="dashboard-container">
                <div className="add-product-form">
                    <h2>Add New Product</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Product Name *</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Enter product name"
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="category">Category *</label>
                            <input
                                type="text"
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                placeholder="e.g., Electronics, Fashion, etc."
                                className="form-input"
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="price">Price *</label>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    placeholder="0.00"
                                    step="0.01"
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="rating">Rating</label>
                                <input
                                    type="number"
                                    id="rating"
                                    name="rating"
                                    value={formData.rating}
                                    onChange={handleChange}
                                    min="0"
                                    max="5"
                                    step="0.1"
                                    className="form-input"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Product description"
                                rows="4"
                                className="form-input"
                            ></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="thumbnail">Image URL *</label>
                            <input
                                type="url"
                                id="thumbnail"
                                name="thumbnail"
                                value={formData.thumbnail}
                                onChange={handleChange}
                                placeholder="https://example.com/image.jpg"
                                className="form-input"
                            />
                        </div>

                        {formData.thumbnail && (
                            <div className="image-preview">
                                <p>Image Preview:</p>
                                <img src={formData.thumbnail} alt="Preview" onError={(e) => {
                                    e.target.style.display = 'none'
                                }} />
                            </div>
                        )}

                        <button type="submit" className="submit-btn">
                            Add Product
                        </button>
                    </form>
                </div>

                <div className="instructions">
                    <h2>Instructions</h2>
                    <ul>
                        <li>Fill all required fields marked with *</li>
                        <li>Price should be a number (e.g., 29.99)</li>
                        <li>Rating should be between 0 and 5</li>
                        <li>Image URL must be a valid URL</li>
                        <li>Products will appear on the home page immediately</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
