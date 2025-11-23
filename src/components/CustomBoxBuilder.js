"use client";

import { useState } from 'react';
import styles from './CustomBoxBuilder.module.css';

const AVAILABLE_ITEMS = [
    { id: 1, name: "Scented Candle", price: 15, category: "Home" },
    { id: 2, name: "Artisan Chocolate", price: 8, category: "Food" },
    { id: 3, name: "Face Mask", price: 5, category: "Beauty" },
    { id: 4, name: "Coffee Mug", price: 12, category: "Home" },
    { id: 5, name: "Notebook", price: 10, category: "Stationery" },
    { id: 6, name: "Bath Bomb", price: 6, category: "Beauty" },
];

export default function CustomBoxBuilder() {
    const [boxItems, setBoxItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const addItem = (item) => {
        setBoxItems([...boxItems, item]);
        setTotalPrice(prev => prev + item.price);
    };

    const removeItem = (index) => {
        const itemToRemove = boxItems[index];
        const newItems = boxItems.filter((_, i) => i !== index);
        setBoxItems(newItems);
        setTotalPrice(prev => prev - itemToRemove.price);
    };

    return (
        <div className={styles.builder}>
            <div className={styles.selectionArea}>
                <h2 className={styles.subtitle}>1. Choose Your Items</h2>
                <div className={styles.itemsGrid}>
                    {AVAILABLE_ITEMS.map(item => (
                        <div key={item.id} className={styles.itemCard} onClick={() => addItem(item)}>
                            <div className={styles.itemImage}></div>
                            <div className={styles.itemInfo}>
                                <h4>{item.name}</h4>
                                <p>${item.price}</p>
                                <button className={styles.addBtn}>+</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.boxPreview}>
                <div className={styles.stickySummary}>
                    <h2 className={styles.subtitle}>2. Your Box</h2>
                    <div className={styles.boxContents}>
                        {boxItems.length === 0 ? (
                            <p className={styles.emptyMsg}>Your box is empty. Add items to get started!</p>
                        ) : (
                            <ul className={styles.itemList}>
                                {boxItems.map((item, index) => (
                                    <li key={index} className={styles.selectedItem}>
                                        <span>{item.name}</span>
                                        <button onClick={() => removeItem(index)} className={styles.removeBtn}>×</button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className={styles.summaryFooter}>
                        <div className={styles.total}>
                            <span>Total:</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                        <button className="btn btn-primary" disabled={boxItems.length === 0}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
