import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import styles from './page.module.css';

// Mock data - in real app would come from API/DB
const products = [
    { id: 1, name: "Birthday Bliss Box", price: 45.00, isNew: true },
    { id: 2, name: "Self Care Sunday", price: 55.00, isNew: false },
    { id: 3, name: "Coffee Lover's Set", price: 38.00, isNew: false },
    { id: 4, name: "Sweet Treats Pack", price: 32.00, isNew: false },
    { id: 5, name: "Luxury Spa Kit", price: 85.00, isNew: true },
    { id: 6, name: "Gentleman's Choice", price: 60.00, isNew: false },
];

export default function Shop() {
    return (
        <main>
            <Navbar />
            <div className="container section">
                <h1 className="title">Shop All Gifts</h1>
                <div className={styles.grid}>
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </main>
    );
}
