import React, { useState } from "react";
import "./noRewardCard.scss";

function NoRewardCard(props) {
  const {
    active,
    setActive,
    backedAmount,
    setBackedAmount,
    setMainModalIsUp,
    totalBackers,
    setTotalBackers,
    setTnxModalIsUp,
  } = props;

  const [plagedAmount, setPlagedAmount] = useState("");

  const isActive = 0;

  const plage = () => {
    setBackedAmount(backedAmount + plagedAmount);
  };

  return (
    <div className="no-reward ">
      <div className={`Radio-Card ${isActive === active ? "active" : ""}`}>
        <div className="title-wr">
          <div className="title">
            <div onClick={() => setActive(0)} className="radio">
              <div className="isActive"></div>
            </div>
            <h4>Pledge with no reward</h4>
          </div>
        </div>

        <p className="card-text">
          Choose to support us without a reward if you simply believe in our
          project. As a backer, you will be signed up to receive product updates
          via email.
        </p>

        <div className="line"></div>

        <div className="form-wr">
          <p>Enter Your plage</p>
          <div className="form">
            <div className="input">
              <p>$</p>
              <input
                type="number"
                onChange={(e) => setPlagedAmount(+e.target.value)}
              />
            </div>
            <div
              className="cont"
              onClick={() => {
                plage();
                setTotalBackers(totalBackers + 1);
                setMainModalIsUp(false);
                setTnxModalIsUp(true);
              }}
            >
              Continiune
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoRewardCard;
