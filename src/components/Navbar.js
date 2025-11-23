"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    Gift by Deesh
                </Link>

                <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
                    <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
                    <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
                    <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
                </button>

                <div className={`${styles.links} ${isOpen ? styles.active : ''}`}>
                    <Link href="/" className={styles.link} onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/shop" className={styles.link} onClick={() => setIsOpen(false)}>Shop</Link>
                    <Link href="/build-a-box" className={styles.link} onClick={() => setIsOpen(false)}>Build a Box</Link>
                    <button className={styles.cartBtnMobile}>
                        Cart (0)
                    </button>
                </div>

                <div className={styles.actions}>
                    <button className={styles.cartBtn}>
                        Cart (0)
                    </button>
                </div>
            </div>
        </nav>
    );
}
