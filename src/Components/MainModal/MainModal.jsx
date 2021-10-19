import React, { useState } from "react";
import "./mainModal.scss";
import NoRewardCard from "../NoRewardCard/NoRewardCard";
import RadioCard from "../RadioCard/RadioCard";

function MainModal(props) {
  const {
    activeCard,
    setMainModalIsUp,
    productData,
    backedAmount,
    setBackedAmount,
    totalBackers,
    setTotalBackers,
    setTnxModalIsUp
  } = props;

  const [active, setActive] = useState(activeCard.id);

  return (
    <div className="Main-Modal">
      <div className="modal-head">
        <div className="title">
          <h3>Back this project</h3>
          <span onClick={() => setMainModalIsUp(false)}>&times;</span>
        </div>
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
      </div>

      <NoRewardCard
        active={active}
        setActive={setActive}
        backedAmount={backedAmount}
        setBackedAmount={setBackedAmount}
        setMainModalIsUp={setMainModalIsUp}
        totalBackers={totalBackers}
        setTotalBackers={setTotalBackers}
        setTnxModalIsUp={setTnxModalIsUp}
      />

      {productData.map((el) => {
        return (
          <RadioCard
            key={el.id}
            data={el}
            active={active}
            setActive={setActive}
            backedAmount={backedAmount}
            setBackedAmount={setBackedAmount}
            setMainModalIsUp={setMainModalIsUp}
            totalBackers={totalBackers}
            setTotalBackers={setTotalBackers}
            setTnxModalIsUp={setTnxModalIsUp}
          />
        );
      })}
    </div>
  );
}

export default MainModal;
