
import React from 'react';
import './radioCard.scss';


function RadioCard() {
    return (
        <div className='Radio-Card active'>
            <div className="title-wr">
                <div className="title">
                    <div className="radio">
                        <div className="isActive"></div>
                    </div>
                    <h4>Pledge with no reward</h4>

                    <p>Pledge $25 or more</p>
                </div>

                <div className="left">
                    <h3>{`101`}</h3>
                    <p>left</p>
                </div>
            </div>

            <p className='card-text'>Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>

            <div className="line"></div>

            <div className="form-wr">
                <p>Enter Your plage</p>
                <div className="form">
                    <div className="input">
                        <p>$</p>
                        <input type="text" />
                    </div>
                    <div className="cont">Continiune</div>
                </div>
            </div>
            
        </div>
    )
}

export default RadioCard
