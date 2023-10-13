import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    if ((name === "name")) {
      setName(value);
    } else if ((name === "email")) {
      setEmail(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}`);
  };

  return (
    <div className="App">
      <h1>React Input Events and Forms</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name :
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email :
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>Name : {name}</p>
      <p>Email : {email}</p>
    </div>
  );
}

export default App;
