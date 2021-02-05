import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");


  // useEffect(() => {
  //   // // first argument: side effect(callback function)
  //   // () => console.log("useEffect called"),
  //   // // second argument: dependencies array
  //   // [count]
  //   console.log("useEffect called");
  // }, []); // second argument is an emptry array
  useEffect(() => {
    document.title = text;
  }, [text]);

  useEffect(() => {
    setTimeout(() => setCount(0), 5000);
  }, []);

  console.log("Component rendering");

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        I've been click {count} times
      </button>
      <input 
        type="text"
        placeholder="Type away..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
    </div>
  )
}

export default App;
