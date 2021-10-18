import React from 'react';
import './numbers.scss';

function Numbers() {
    return (
        <div className='Numbers'>
            <div className="numbers-wr">
                <div className="dollars num-c">
                    <h2>$89,914</h2>
                    <p>of $100,000 backed</p>
                </div>
                <div className="backers num-c">
                    <h2>258</h2>
                    <p>total backers</p>
                </div>
                <div className="days num-c">
                    <h2>56</h2>
                    <p>days left</p>
                </div>
            </div>
            <div className="progres-bar">
                <div className="progres-line" style={{width: `${20}%`}}></div>
            </div>
        </div>
    )
}

export default Numbers
