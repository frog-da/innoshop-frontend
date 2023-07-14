import React, { useState } from 'react';
import './../../assets/css/purchasecard.css';

const PurchaseCard = ({ item, onQuantityChange }) => {
    const [itemQuantity, setItemQuantity] = useState(item.quantity);

    const decreaseQuantity = () => {
        if (itemQuantity > 0) {
            setItemQuantity(value => value - 1);
            onQuantityChange(item._id, itemQuantity - 1); // Notify parent component
        }
        if (itemQuantity == 0) {
            onQuantityChange(item._id, itemQuantity);
            return null;
        }
    };

    const increaseQuantity = () => {
        setItemQuantity(value => value + 1);
        onQuantityChange(item._id, itemQuantity + 1); // Notify parent component
    };

    const total = item.price * itemQuantity;


    const handleConfirmDelete = () => {
        if (itemQuantity === 1) {
            // If the quantity is 1, show the warning and confirm delete
            const result = window.confirm(`Deleting ${item.name}. Are you sure?`);

            if (result) {
                setItemQuantity(0);
                onQuantityChange(item._id, 0);

            } else {
                // If the user cancels the delete action, reset the quantity to 1
                setItemQuantity(1);
                onQuantityChange(item._id, 1);
            }
        } else {
            // If the quantity is not 1, simply decrease the quantity
            decreaseQuantity();
            onQuantityChange(item._id, itemQuantity - 1);
        }
    };

    if (itemQuantity === 0) {
        return null; // Return null to remove the card from the UI
    }

    return (
        <div className="item-card">
            <div className='item-details-section'>

                <div className="image-gallery">

                    <img src={`https://innoshop-backend.onrender.com/${item.varieties[0].images[0]}.jpg`} alt={item.name} />
                </div>
                <div className="price-section">
                    <h3>
                        {item.name}
                    </h3>
                    <p>Price: {item.price}</p>
                    {/* <p>Total: {total}</p> */}
                </div>
            </div>
            <div className="quantity-section">
                <button onClick={handleConfirmDelete} className="quantity-btn">
                    &ndash;
                </button>
                <span>{itemQuantity}</span>
                <button onClick={increaseQuantity} className="quantity-btn">
                    +
                </button>
            </div>
        </div>
    );
};

export default PurchaseCard;
