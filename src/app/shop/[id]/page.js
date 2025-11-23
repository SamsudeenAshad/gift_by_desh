import Navbar from '@/components/Navbar';
import styles from './page.module.css';

// Mock data - needs to match shop page mock data
const products = [
    { id: 1, name: "Birthday Bliss Box", price: 45.00, description: "Celebrate in style with this curated birthday box containing a scented candle, gourmet chocolates, and a party popper.", items: ["Scented Candle", "Gourmet Chocolates", "Party Popper", "Birthday Card"] },
    { id: 2, name: "Self Care Sunday", price: 55.00, description: "Everything you need for a relaxing Sunday at home.", items: ["Face Mask", "Bath Bomb", "Herbal Tea", "Soft Socks"] },
    { id: 3, name: "Coffee Lover's Set", price: 38.00, description: "For the caffeine addict in your life.", items: ["Artisan Coffee Beans", "Ceramic Mug", "Coffee Scoop", "Biscotti"] },
];

export default function ProductDetails({ params }) {
    // In a real app, we'd fetch the product based on params.id
    // For this demo, we'll just show the first product if not found or a specific one
    const product = products.find(p => p.id === parseInt(params.id)) || products[0];

    return (
        <main>
            <Navbar />
            <div className={`container section ${styles.productContainer}`}>
                <div className={styles.imageWrapper}>
                    <div className={styles.placeholderImage}></div>
                </div>
                <div className={styles.details}>
                    <h1 className={styles.title}>{product.name}</h1>
                    <p className={styles.price}>${product.price.toFixed(2)}</p>
                    <p className={styles.description}>{product.description}</p>

                    <div className={styles.includes}>
                        <h3>What's Inside:</h3>
                        <ul>
                            {product.items && product.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </main>
    );
}
