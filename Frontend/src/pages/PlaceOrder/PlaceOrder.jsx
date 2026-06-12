import React, { useState } from 'react';
import { z } from 'zod';

// Form validation schema using Zod
const deliverySchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  address: z.string().min(10, "Please provide a detailed delivery address"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  paymentMethod: z.enum(["COD", "Card", "UPI"]),
});

type DeliveryFormData = z.infer<typeof deliverySchema>;

const PlaceOrder: React.FC = () => {
  const [formData, setFormData] = useState<DeliveryFormData>({
    fullName: '',
    address: '',
    phone: '',
    paymentMethod: 'COD',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = deliverySchema.safeParse(formData);

    if (!result.success) {
      const formattedErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) formattedErrors[err.path[0].toString()] = err.message;
      });
      setErrors(formattedErrors);
    } else {
      setErrors({});
      alert("🎉 Order placed successfully! Your delivery partner will assign shortly.");
    }
  };

  return (
    <div className="place-order-page">
      <h2>Delivery & Payment Details 📦</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} />
          {errors.fullName && <p className="error-text">{errors.fullName}</p>}
        </div>

        <div className="form-group">
          <label>Complete Address</label>
          <textarea name="address" rows={3} value={formData.address} onChange={handleInputChange} />
          {errors.address && <p className="error-text">{errors.address}</p>}
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
          {errors.phone && <p className="error-text">{errors.phone}</p>}
        </div>

        <div className="form-group">
          <label>Select Payment Method</label>
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleInputChange}>
            <option value="COD">Cash on Delivery (COD)</option>
            <option value="UPI">UPI Apps</option>
            <option value="Card">Credit / Debit Card</option>
          </select>
        </div>

        <button type="submit" className="place-order-btn">Confirm Order</button>
      </form>
    </div>
  );
};

export default PlaceOrder;