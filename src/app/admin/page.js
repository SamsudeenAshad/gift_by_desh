"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import styles from './page.module.css';

const INITIAL_PRODUCTS = [
    { id: 1, name: "Birthday Bliss Box", price: 45.00, stock: 12 },
    { id: 2, name: "Self Care Sunday", price: 55.00, stock: 8 },
    { id: 3, name: "Coffee Lover's Set", price: 38.00, stock: 15 },
];

export default function AdminDashboard() {
    const [products, setProducts] = useState(INITIAL_PRODUCTS);
    const [isEditing, setIsEditing] = useState(null);

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this product?')) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    const handleEdit = (id) => {
        setIsEditing(id);
        // In a real app, this would open a modal or redirect to an edit page
        alert(`Edit functionality for product ${id} would open here.`);
    };

    const handleAddNew = () => {
        alert('Add New Product modal would open here.');
    };

    return (
        <main>
            <Navbar />
            <div className="container section">
                <div className={styles.header}>
                    <h1 className="title">Admin Dashboard</h1>
                    <button className="btn btn-primary" onClick={handleAddNew}>+ Add New Product</button>
                </div>

                <div className={styles.dashboardGrid}>
                    <div className={styles.card}>
                        <h3>Total Orders</h3>
                        <p className={styles.stat}>124</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Total Revenue</h3>
                        <p className={styles.stat}>$5,240</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Low Stock Items</h3>
                        <p className={styles.stat}>2</p>
                    </div>
                </div>

                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product.id}>
                                    <td>{product.name}</td>
                                    <td>${product.price.toFixed(2)}</td>
                                    <td>{product.stock}</td>
                                    <td>
                                        <button className={styles.actionBtn} onClick={() => handleEdit(product.id)}>Edit</button>
                                        <button className={`${styles.actionBtn} ${styles.deleteBtn}`} onClick={() => handleDelete(product.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}
