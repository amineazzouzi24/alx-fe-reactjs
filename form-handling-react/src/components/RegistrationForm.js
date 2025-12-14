import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      alert("All fields are required");
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={username} onChange={e => setUsername(e.target.value)} />
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <input value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
