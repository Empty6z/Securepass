import { useEffect, useState } from "react";

export default function BreachesFeed() {
  const [brechas, setBrechas] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then(res => res.json())
      .then(data => setBrechas(data));
  }, []);

  return (
    <div className="brechas">
      <h2>Brechas recientes (simuladas)</h2>
      <ul>
        {brechas.map(b => (
          <li key={b.id}>
            <strong>{b.title}</strong>
            <p>{b.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
