import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart: React.FC = () => {
  const navigate = useNavigate();

  // Mock cart items
  const cartItems = [
    { id: '1', name: 'Double Cheese Crunch Pizza', price: 12.99, qty: 1, icon: '🍕' },
    { id: '2', name: 'Spicy Zinger Crispy Burger', price: 6.49, qty: 2, icon: '🍔' },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const deliveryFee = 2.50;
  const total = subtotal + deliveryFee;

  return (
    <div className="cart-page">
      <h2>Your Basket 🛒</h2>
      {cartItems.length === 0 ? (
        <p>Your basket is currently empty.</p>
      ) : (
        <div className="cart-layout">
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item-row">
                <span className="item-icon">{item.icon}</span>
                <div className="item-info">
                  <h4>{item.name}</h4>
                  <p>${item.price} each</p>
                </div>
                <div className="item-qty-controls">
                  <button>-</button>
                  <span className="qty-count">{item.qty}</span>
                  <button>+</button>
                </div>
                <span className="item-total-price">${(item.price * item.qty).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="cart-summary-card">
            <h3>Order Summary</h3>
            <div className="summary-row"><span>Subtotal:</span> <span>${subtotal.toFixed(2)}</span></div>
            <div className="summary-row"><span>Delivery Fee:</span> <span>${deliveryFee.toFixed(2)}</span></div>
            <hr />
            <div className="summary-row total"><strong>Total:</strong> <strong>${total.toFixed(2)}</strong></div>
            <button className="checkout-btn" onClick={() => navigate('/order')}>
              Proceed to Delivery Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;