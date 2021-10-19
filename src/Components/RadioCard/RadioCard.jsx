import React, { useState } from "react";
import "./radioCard.scss";

function RadioCard(props) {
  const {
    data,
    active,
    setActive,
    backedAmount,
    setBackedAmount,
    setMainModalIsUp,
    totalBackers,
    setTotalBackers,
    setTnxModalIsUp
  } = props;

  const [plagedAmount, setPlagedAmount] = useState("");

  const plage = () => {
    setBackedAmount(backedAmount + plagedAmount);
  };

  return (
    <div
      className={`Radio-Card ${
        data.id === active && data.inStock ? "active" : ""
      }  ${!data.inStock ? "out" : ""}`}
    >
      <div className="title-wr">
        <div className="title">
          <div onClick={() => setActive(data.id)} className="radio">
            <div className="isActive"></div>
          </div>
          <h4>{data.name}</h4>

          <p>{`Pledge $${data.minPlage} or more`}</p>
        </div>

        <div className="left">
          <h3>{`${data.peopleLeft}`}</h3>
          <p>left</p>
        </div>
      </div>

      <p className="card-text">{data.text}</p>

      {data.inStock ? (
        <>
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
                if (plagedAmount >= data.minPlage) {
                  plage();
                  setTotalBackers(totalBackers + 1);
                  setMainModalIsUp(false);
                  setTnxModalIsUp(true);
                }
              }}
            >
              Continiune
            </div>
          </div>
        </div>
        </>
      ) : null}
    </div>
  );
}

export default RadioCard;
