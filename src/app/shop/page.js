"use client";

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import styles from './page.module.css';

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch('/api/products');
                const data = await res.json();
                if (data.success) {
                    setProducts(data.data);
                }
            } catch (error) {
                console.error('Failed to fetch products:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    return (
        <main>
            <Navbar />
            <div className="container section">
                <h1 className="title">Shop All Gifts</h1>
                {loading ? (
                    <p style={{ textAlign: 'center', marginTop: '2rem' }}>Loading products...</p>
                ) : (
                    <div className={styles.grid}>
                        {products.map(product => (
                            <ProductCard key={product._id} product={{ ...product, id: product._id }} />
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
