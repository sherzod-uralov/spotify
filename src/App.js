import "./App.css";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
function App() {
  const [user, setUser] = useState(null);

  const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
  useEffect(() => {
    axios.get(baseURL).then((res) => setUser(res.data));
  },[]);

  return <div className="App">
    <h1>salom</h1>
    <h1>{user.title}</h1>
  </div>;
}

export default App;
