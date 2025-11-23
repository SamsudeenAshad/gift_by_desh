const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define schema inline for the script to avoid import issues with ES modules in simple node script
const ProductSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    items: [String],
    stock: Number,
    imageUrl: String,
    isNew: Boolean,
}, { timestamps: true });

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error('Please define the MONGODB_URI environment variable');
    process.exit(1);
}

const products = [
    {
        name: "Birthday Bliss Box",
        price: 45.00,
        description: "Celebrate in style with this curated birthday box containing a scented candle, gourmet chocolates, and a party popper.",
        items: ["Scented Candle", "Gourmet Chocolates", "Party Popper", "Birthday Card"],
        stock: 12,
        isNew: true
    },
    {
        name: "Self Care Sunday",
        price: 55.00,
        description: "Everything you need for a relaxing Sunday at home.",
        items: ["Face Mask", "Bath Bomb", "Herbal Tea", "Soft Socks"],
        stock: 8,
        isNew: false
    },
    {
        name: "Coffee Lover's Set",
        price: 38.00,
        description: "For the caffeine addict in your life.",
        items: ["Artisan Coffee Beans", "Ceramic Mug", "Coffee Scoop", "Biscotti"],
        stock: 15,
        isNew: false
    },
    {
        name: "Sweet Treats Pack",
        price: 32.00,
        description: "A delicious assortment of handmade sweets.",
        items: ["Cookies", "Brownies", "Caramels"],
        stock: 20,
        isNew: false
    },
    {
        name: "Luxury Spa Kit",
        price: 85.00,
        description: "The ultimate pampering experience.",
        items: ["Premium Robe", "Essential Oils", "Body Scrub", "Scented Candle"],
        stock: 5,
        isNew: true
    },
    {
        name: "Gentleman's Choice",
        price: 60.00,
        description: "Sophisticated gifts for him.",
        items: ["Leather Wallet", "Whiskey Stones", "Grooming Kit"],
        stock: 10,
        isNew: false
    },
];

async function seed() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');

        await Product.deleteMany({});
        console.log('Cleared existing products');

        await Product.insertMany(products);
        console.log('Seeded products successfully');

        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}

seed();
