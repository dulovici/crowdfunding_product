import React from 'react';
import './productCard.scss';

function ProductCard() {
    return (
        <div className="Product-Card">
            <div className="card-head">
                <h3>Bamboo Stand</h3>
                <p>Pledge $25 or more</p>
            </div>
            <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</p>
            <div className="card-bot">
                <div className="left">
                    <h3>101</h3>
                    <p>left</p>
                </div>
                <div className='select-r'>Select reward</div>
            </div>
        </div>
    )
}

export default ProductCard
