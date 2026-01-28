import React, { useState } from 'react';
import styles from './GiftBoxBuilder.module.css';

const BOX_SIZES = [
  { label: 'Small', value: 'small', limit: 3 },
  { label: 'Large', value: 'large', limit: 5 },
  { label: 'XL', value: 'xl', limit: 7 },
  { label: 'XXL', value: 'xxl', limit: 10 },
];

// Dummy product list (replace with API data)
const PRODUCTS = [
  { id: 1, name: 'Teddy Bear', image: '/file.svg' },
  { id: 2, name: 'Chocolate Box', image: '/globe.svg' },
  { id: 3, name: 'Perfume', image: '/next.svg' },
  { id: 4, name: 'Mug', image: '/vercel.svg' },
  { id: 5, name: 'Flower Bouquet', image: '/window.svg' },
  { id: 6, name: 'Keychain', image: '/file.svg' },
  { id: 7, name: 'Photo Frame', image: '/globe.svg' },
  { id: 8, name: 'Candle', image: '/next.svg' },
];

export default function GiftBoxBuilder() {
  const [boxSize, setBoxSize] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [showLimitMsg, setShowLimitMsg] = useState(false);
  const [exchangeIndex, setExchangeIndex] = useState(null);

  const boxLimit = boxSize ? BOX_SIZES.find(b => b.value === boxSize).limit : 0;

  const handleAdd = (product) => {
    if (selectedItems.length >= boxLimit) {
      setShowLimitMsg(true);
      return;
    }
    setSelectedItems([...selectedItems, product]);
    setShowLimitMsg(false);
  };

  const handleRemove = (idx) => {
    setSelectedItems(selectedItems.filter((_, i) => i !== idx));
    setShowLimitMsg(false);
  };

  const handleExchange = (idx) => {
    setExchangeIndex(idx);
  };

  const handleExchangeConfirm = (product) => {
    const newItems = [...selectedItems];
    newItems[exchangeIndex] = product;
    setSelectedItems(newItems);
    setExchangeIndex(null);
  };

  const handleCheckout = () => {
    alert('Proceeding to checkout!');
    // Implement checkout logic
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Build Your Custom Gift Box</h1>
      <div className={styles.boxSizes}>
        {BOX_SIZES.map(size => (
          <button
            key={size.value}
            className={boxSize === size.value ? styles.selected : ''}
            onClick={() => { setBoxSize(size.value); setSelectedItems([]); setShowLimitMsg(false); }}
          >
            {size.label}
          </button>
        ))}
      </div>
      {boxSize && (
        <>
          <div className={styles.productsSection}>
            <h2>Choose Products</h2>
            <div className={styles.productsList}>
              {PRODUCTS.map(product => (
                <div key={product.id} className={styles.productCard}>
                  <img src={product.image} alt={product.name} />
                  <span>{product.name}</span>
                  {exchangeIndex === null ? (
                    <button
                      onClick={() => handleAdd(product)}
                      disabled={selectedItems.includes(product) || selectedItems.length >= boxLimit}
                    >
                      Add
                    </button>
                  ) : (
                    <button onClick={() => handleExchangeConfirm(product)}>
                      Exchange
                    </button>
                  )}
                </div>
              ))}
            </div>
            {showLimitMsg && <div className={styles.limitMsg}>Box limit reached!</div>}
          </div>
          <div className={styles.selectedSection}>
            <h2>Selected Items ({selectedItems.length}/{boxLimit})</h2>
            <div className={styles.selectedList}>
              {selectedItems.map((item, idx) => (
                <div key={idx} className={styles.selectedItem}>
                  <img src={item.image} alt={item.name} />
                  <span>{item.name}</span>
                  <button onClick={() => handleRemove(idx)}>Remove</button>
                  <button onClick={() => handleExchange(idx)}>Exchange</button>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.checkoutSection}>
            <button
              className={styles.checkoutBtn}
              disabled={selectedItems.length === 0}
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
