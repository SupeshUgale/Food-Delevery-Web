import React from 'react';
import { useNavigate } from 'react-router-dom';

interface FoodItem {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
  category: string;
}

const dummyFoods: FoodItem[] = [
  { id: '1', name: 'Double Cheese Crunch Pizza', price: 12.99, rating: 4.8, image: '🍕', category: 'Pizza' },
  { id: '2', name: 'Spicy Zinger Crispy Burger', price: 6.49, rating: 4.5, image: '🍔', category: 'Burger' },
  { id: '3', name: 'Classic Hakka Noodles', price: 9.99, rating: 4.3, image: '🍜', category: 'Noodles' },
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <section className="hero-banner">
        <h2>Hungry? Order from your favorite local spots.</h2>
        <p>Fresh delivery right to your doorstep.</p>
      </section>

      <section className="categories-section">
        <h3>Browse Categories</h3>
        <div className="category-list">
          {['All', '🍕 Pizza', '🍔 Burgers', '🍜 Noodles', '🍰 Desserts'].map((cat) => (
            <button key={cat} className="category-chip">{cat}</button>
          ))}
        </div>
      </section>

      <section className="food-grid-section">
        <h3>Popular Dishes Nearby</h3>
        <div className="food-grid">
          {dummyFoods.map((food) => (
            <div key={food.id} className="food-card">
              <div className="food-thumb">{food.image}</div>
              <div className="food-details">
                <h4>{food.name}</h4>
                <div className="food-meta">
                  <span className="price">${food.price.toFixed(2)}</span>
                  <span className="rating">⭐ {food.rating}</span>
                </div>
                <button className="add-to-cart-btn" onClick={() => navigate('/cart')}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;