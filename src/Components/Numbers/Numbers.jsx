import React from "react";
import "./numbers.scss";

function Numbers(props) {
  const { backedAmount, totalBackers } = props;

  const result = new Intl.NumberFormat().format(backedAmount);

  const progres = (backedAmount / 100000) * 100;

  return (
    <div className="Numbers">
      <div className="numbers-wr">
        <div className="dollars num-c">
          <h2>{`$${result}`}</h2>
          <p>of $100,000 backed</p>
        </div>
        <div className="backers num-c">
          <h2>{totalBackers}</h2>
          <p>total backers</p>
        </div>
        <div className="days num-c">
          <h2>56</h2>
          <p>days left</p>
        </div>
      </div>
      <div className="progres-bar">
        <div
          className="progres-line"
          style={{ maxWidth: "100%", width: `${progres}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Numbers;
