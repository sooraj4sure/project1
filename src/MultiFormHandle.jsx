import React, { useState } from "react";

function MultiFormHandle() {
  let [formData, setformData] = useState({
    fullName: "",
    userName: "",
  });

  let handleInputChange = (event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;
    setformData((currData) => {
      currData[fieldName] = newValue;
      return { ...currData };
    });
  };
  let submitHandle = (event) => {
    event.preventDefault();
    setformData({ fullName: "", userName: "" });
  };

  return (
    <div>
      <form action="" onSubmit={submitHandle}>
        <label htmlFor="fullName"> Full Name :- </label>
        <input
          type="text"
          placeholder="input here"
          value={formData.fullName}
          onChange={handleInputChange}
          id="fullName"
          name="fullName"
        />

        <label htmlFor="userName"> User Name :- </label>
        <input
          type="text"
          placeholder="input here"
          value={formData.userName}
          onChange={handleInputChange}
          id="userName"
          name="userName"
        />
        <button>Submit </button>
      </form>
    </div>
  );
}

export default MultiFormHandle;
