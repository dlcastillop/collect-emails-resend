"use client";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  const suscribe = async () => {
    await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({
        email,
      }),
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        throw Error;
      })
      .then(() => {
        alert("Suscribed");
      })
      .catch(() => {
        alert("Error");
      });
  };

  return (
    <>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={suscribe}>Add</button>
    </>
  );
}
