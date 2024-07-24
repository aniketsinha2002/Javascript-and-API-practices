import React, { useRef, useState } from "react";

function FocusInput() {
  const inputRef = useRef(null);
  const [name, setName] = useState("Aniket");

  const handleClick = () => {
    setName("");
    console.log(inputRef);
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={name}
        type="text"
        placeholder="Click button to focus"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={handleClick}>Reset</button>
    </div>
  );
}

export default FocusInput;
