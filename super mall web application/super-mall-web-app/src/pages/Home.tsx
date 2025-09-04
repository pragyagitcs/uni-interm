import React, { useEffect, useState } from 'react';
import { fetchProducts, fetchCategories } from '../services/api';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const fetchedProducts = await fetchProducts();
                const fetchedCategories = await fetchCategories();
                setProducts(fetchedProducts);
                setCategories(fetchedCategories);
            } catch (err) {
                setError('Failed to load data');
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Welcome to the Super Mall</h1>
            <h2>Featured Categories</h2>
            <ul>
                {categories.map((category) => (
                    <li key={category}>{category}</li>
                ))}
            </ul>
            <h2>Featured Products</h2>
            <div className="product-list">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Home;