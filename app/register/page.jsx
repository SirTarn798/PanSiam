'use client'

import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabledBtn, setDisabledBtn] = useState(true);

  const register = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      })
    });
  };

  return (
    <div>
      <form onSubmit={register} className="flex flex-col gap-20 text-black">
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          placeholder="password at least 8 charactors"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit" className="text-white" disabled={password.length < 8 ? true : false}>Register</button>
      </form>
    </div>
  );
}
