
import React from 'react';
import './tnxModal.scss';
import tnxImg from '../../images/icon-check.svg'

function TnxModal(props) {
    const {setTnxModalIsUp} = props;
    return (
        <div className='tnx-modal'>
            <div className="photo-wr">
                <img src={tnxImg} alt={'tnx'} />
            </div>
            <h1>Thanks for your support!</h1>
            <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>

            <div onClick={()=> setTnxModalIsUp(false)} className="got-it">Got it</div>
           
        </div>
    )
}

export default TnxModal
