import  { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/").then((res) => {
      setMessage(res.data.message);
    });
  }, []);

  return (
    <div>
      <h1>Flask + React App</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
