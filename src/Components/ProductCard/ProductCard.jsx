import React from "react";
import "./productCard.scss";

function ProductCard(props) {
  const { data, setActiveCard, setMainModalIsUp } = props;

  return (
    <div className="Product-Card">
      <div className="card-head">
        <h3>{data.name}</h3>
        <p>{`Pledge $${data.minPlage} or more`}</p>
      </div>
      <p>{data.text}.</p>
      <div className="card-bot">
        <div className="left">
          <h3>{data.peopleLeft}</h3>
          <p>left</p>
        </div>
        <div
          className="select-r"
          onClick={() => {
            setActiveCard(data);
            setMainModalIsUp(true);
          }}
        >
          Select reward
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
