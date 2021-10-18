
import React from 'react';
import './mainModal.scss';
import RadioCard from '../RadioCard/RadioCard';

function MainModal(props) {
    const {activeCard, setMainModalIsUp} = props;

    return (
        <div className='Main-Modal'>
            <div className="modal-head">
                <div className="title">
                    <h3>Back this project</h3>
                    <span onClick={() => setMainModalIsUp(false)}>&times;</span>
                </div>
                <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
            </div>

            <RadioCard />
            <RadioCard />
            <RadioCard />
            
        </div>
    )
}

export default MainModal
