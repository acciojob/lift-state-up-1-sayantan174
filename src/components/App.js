import React, { useState } from "react";
import "./../styles/App.css";
import Modal from "./Modal";
const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      {/* Do not remove the main div */}
      <Modal
        showModal={showModal}
        callback={() => {
          setShowModal(!showModal);
        }}
      />
    </div>
  );
};

export default App;
