import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = () => {
    if (inputText.length != 0) {
      setTodos([...todos, inputText]);
      setInputText("");
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter your Todo"
          value={inputText}
          onChange={handleInputText}
        />
        <button type="button" onClick={handleClick}>
          Click Me
        </button>
        <ul>
          {todos.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
