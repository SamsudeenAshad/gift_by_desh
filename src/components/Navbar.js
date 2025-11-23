import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    Gift by Deesh
                </Link>
                <div className={styles.links}>
                    <Link href="/" className={styles.link}>Home</Link>
                    <Link href="/shop" className={styles.link}>Shop</Link>
                    <Link href="/build-a-box" className={styles.link}>Build a Box</Link>
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
